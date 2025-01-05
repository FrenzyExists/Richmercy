import { ref, reactive, watch } from 'vue';

export function useGithubAuth() {
  const state = reactive({
    user: null,
    token: null,


    isAuthenticated: false,
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

      // Parse state.expiresIn as a Date
      // console.log(getTimeLeft('2025-01-05T17:05:50.867Z'));

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
      console.log('fadfaa', deviceCodeData);

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
      console.log(parsedlocal.expiresIn, 'daffa');

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

  const login = async () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    try {

    } catch (error) {
      console.error('Error during login:', error);
    }
    // try {
    //   const deviceCodeResponse = await fetch('/login/device/code', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //     body: JSON.stringify({
    //       client_id: clientId,
    //       scope: 'public_repo',
    //     }),
    //   });

    //   if (!deviceCodeResponse.ok) {
    //     console.error('Error requesting device code:', await deviceCodeResponse.text());
    //     return;
    //   }

    //   const deviceCodeData = await deviceCodeResponse.json();
    //   const { device_code, user_code, verification_uri } = deviceCodeData;

    //   // Open verification URL in a new tab
    //   const verificationUrlWithCode = `${verification_uri}?code=${user_code}`;
    //   window.open(verificationUrlWithCode, '_blank');

    //   console.log('Opened verification page:', verificationUrlWithCode);

    //   const tokenInterval = setInterval(async () => {
    //     const tokenResponse = await fetch('/github-api/login/oauth/access_token', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //       },
    //       body: JSON.stringify({
    //         client_id: clientId,
    //         device_code,
    //         grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
    //       }),
    //     });

    //     const tokenData = await tokenResponse.json();

    //     if (tokenData.access_token) {
    //       clearInterval(tokenInterval);
    //       state.token = tokenData.access_token;
    //       localStorage.setItem('github_token', state.token);
    //       await fetchUserData(state.token);
    //     } else if (tokenData.error !== 'authorization_pending') {
    //       clearInterval(tokenInterval);
    //       console.error('Error during token exchange:', tokenData);
    //     }
    //   }, 5000);
    // } catch (error) {
    //   console.error('Error during login:', error);
    // }
  };


  const logout = () => {
    state.isAuthenticated = false;
    state.user = null;
    localStorage.removeItem('github_token');
  };

  const initialize = async () => {
    const storedToken = localStorage.getItem('github_token');
    if (storedToken) {
      state.token = storedToken;
      await fetchUserData(storedToken);
    }
  };

  const fetchUserData = async (authToken) => {
    try {
      const userResponse = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

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
    login,
    getCode,
    logout,
    initialize,
    getTimeLeft
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
