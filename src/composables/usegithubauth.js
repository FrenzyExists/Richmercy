import { ref, reactive, watch } from 'vue';
import {Octokit} from '@octokit/rest'

export function useGithubAuth() {
  const state = reactive({
    user: null,

    // When sucess sign in
    tokenCredentials: null,

    // let site know its authenticated
    isAuthenticated: false,

    // When sign in first time
    userCode: null,
    deviceCode: null,
    verificationURI: null,
    showModal: false,
    expiresIn: null
  });

  const getTimeLeft = (ISO8601Time) => {
    try {
      const now = new Date(); // Current time
      console.log('Current Time:', now.toISOString());

      const expirationTime = new Date(ISO8601Time);
      if (isNaN(expirationTime)) {
        throw new Error('Invalid expiration time format');
      }
      console.log('Expiration Time:', expirationTime.toISOString());

      // Calculate remaining time
      const timeLeft = expirationTime - now; // Time left in milliseconds
      console.log('Time Left (ms):', timeLeft);

      // Convert to a more human-readable format if needed
      const timeLeftSeconds = Math.floor(timeLeft / 1000);
      const minutes = Math.floor(timeLeftSeconds / 60);
      const seconds = timeLeftSeconds % 60;

      console.log(`Time Left: ${minutes} minutes and ${seconds} seconds`);
      return {
        timeLeftSeconds,
        minutes,
        seconds
      }
    } catch (error) {
      console.error('Error processing expiration time:', error.message);
      return null;
    }
  }

  const retrieveCode = async () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    try {
      const deviceCodeResponse = await fetch('/login/device/code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          scope: 'public_repo',
        }),
      });
      const deviceCodeData = await deviceCodeResponse.json();
      // console.log('fadfaa', deviceCodeData);

      const { device_code, user_code, verification_uri, expires_in } = deviceCodeData;
      state.deviceCode = device_code;
      state.userCode = user_code;
      state.verificationURI = verification_uri;
      state.showModal = true;
      state.expiresIn = new Date(Date.now() + expires_in * 1000).toISOString()
      localStorage.setItem('github_credentials', JSON.stringify(state));
      return true
    } catch (error) {
      console.error("Error during code retrieval:", error);
      return false;
    }
  }

  const getCode = async () => {
    const localStorageGithubCredentials = localStorage.getItem('github_credentials');
    if (localStorageGithubCredentials !== null) {
      const parsedlocal = JSON.parse(localStorageGithubCredentials)
      // console.log(parsedlocal.expiresIn, 'daffa');

      const t = getTimeLeft(parsedlocal.expiresIn);

      if (t.timeLeftSeconds < 0) {
        await retrieveCode();
      } else {
        state.deviceCode = parsedlocal.deviceCode;
        state.userCode = parsedlocal.userCode;
        state.verificationURI = parsedlocal.verificationURI;
        state.showModal = parsedlocal.showModal;
        state.expiresIn = parsedlocal.expiresIn;
      }
      return;
    } else {
      await retrieveCode();
      return;
    }
  }

  const retrieveToken = async () => {
    try {
      // Retrieve the device code from state
      const deviceCode = state.deviceCode;
  
      // Poll GitHub's token endpoint
      while (true) {
        const response = await fetch('/login/oauth/access_token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
            device_code: deviceCode,
            grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
          }),
        });
  
        const data = await response.json();
  
        if (data.error === 'authorization_pending') {
          console.log('Waiting for user authorization...');
          await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds before polling again
          continue;
        }
  
        if (data.error === 'slow_down') {
          console.log('Slowing down polling...');
          await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait 10 seconds
          continue;
        }
  
        if (data.error === 'expired_token') {
          console.error('Device code has expired.');
          throw new Error('Device code expired. Please restart the login process.');
        }
  
        if (data.error) {
          console.error('Error retrieving token:', data.error_description || data.error);
          throw new Error(data.error_description || data.error);
        }
        // console.log(data, 'data');
        
        // Successfully retrieved the token
        const { access_token, token_type, scope } = data;
        console.log('Access Token:', access_token);
  
        // Update state
        state.github_token = access_token;
        state.isAuthenticated = true;
  
        // Store token and additional info in local storage
        const tokenData = {
          access_token,
          token_type,
          scope,
          authenticatedAt: new Date().toISOString(),
        };
        localStorage.setItem('github_credentials', JSON.stringify(tokenData));
        break;
      }
    } catch (error) {
      console.error('Error during token retrieval:', error.message);
    }
  };

  const logout = () => {
    state.isAuthenticated = false;
    state.user = null;
    localStorage.removeItem('github_token');
  };

  const initialize = async () => {
    const storedToken = JSON.parse(localStorage.getItem('github_credentials'));
    // console.log(storedToken, 'fafda');
    
    if (storedToken?.access_token) {
      const userOcto = new Octokit({
        auth: storedToken.access_token
      });
      state.tokenCredentials = storedToken;
      await fetchUserData(state.tokenCredentials.access_token)
      return userOcto;
    }
    return null;
  };

  // TODO: Replace fetch over octocat object
  const fetchUserData = async (authToken) => {
    try {

      const userResponse = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      
      // console.log(userResponse);
      if (userResponse.ok) {
        state.user = await userResponse.json();
        state.isAuthenticated = true;
      } else {
        logout();
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      logout();
    }
  };

  watch(() => state.isAuthenticated, (newVal) => {
    console.log('Authentication state updated:', newVal);
  });

  return {
    state,
    getCode,
    logout,
    initialize,
    getTimeLeft,
    retrieveToken
  };
}

////////////////////////////////
// import { ref, watchEffect } from 'vue';

// export function useGithubAuth() {
//   const isAuthenticated = ref(false);
//   const user = ref(null);
//   const token = ref(localStorage.getItem('github_token') || null);

//   const login = async () => {
//     const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;

//     try {
//       // Request device and user codes
//       const deviceCodeResponse = await fetch('/login/device/code', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: JSON.stringify({
//           client_id: clientId,
//           scope: 'public_repo',
//         }),
//       });

//       const deviceCodeData = await deviceCodeResponse.json();
//       const { device_code } = deviceCodeData;

//       // Poll for the access token
//       const tokenInterval = setInterval(async () => {
//         const tokenResponse = await fetch('/github-api/login/oauth/access_token', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//           body: JSON.stringify({
//             client_id: clientId,
//             device_code,
//             grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
//           }),
//         });

//         const tokenData = await tokenResponse.json();
//         if (tokenData.access_token) {
//           clearInterval(tokenInterval);
//           token.value = tokenData.access_token;
//           localStorage.setItem('github_token', token.value);
//           await fetchUserData(token.value);
//         }
//       }, 5000);
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   const fetchUserData = async (authToken) => {
//     try {
//       const userResponse = await fetch('https://api.github.com/user', {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       if (userResponse.ok) {
//         user.value = await userResponse.json();
//         isAuthenticated.value = true;
//       } else {
//         logout();
//       }
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const logout = () => {
//     isAuthenticated.value = false;
//     user.value = null;
//     token.value = null;
//     localStorage.removeItem('github_token');
//   };

//   const initialize = async () => {
//     if (token.value) {
//       await fetchUserData(token.value);
//     }
//   };

//   // Ensure reactivity flows
//   watchEffect(() => {
//     if (user.value) {
//       isAuthenticated.value = true;
//     } else {
//       isAuthenticated.value = false;
//     }
//   });

//   return {
//     isAuthenticated,
//     user,
//     login,
//     logout,
//     initialize,
//     token,
//   };
// }
