<template>
  <div class="flex flex-col sm:flex-row  px-11 overflow-hidden relative dark:bg-dark-bg-harder py-16 pb-24">
    <font-awesome-icon class="dark:text-dark-bg-hard !flex absolute z-0 -rotate-12 w-64 !h-64 -mt-24 ml-24"
      icon="fa-solid fa-envelope" />
    <div class="w-3/5 float-left relative inline-block align-middle">
      <h3 class="mb-3 text-3xl font-bold dark:text-dark-green">Join my wacky Newsletter!</h3>
      <p class="text-lg w-3/4 dark:text-dark-text">Subscribe to stay up to date with the latest tutorials and stories I
        write :D</p>
    </div>
    <div class="inline-block align-middle relative w-2/5">
      <form action="" class="align-middle inline-flex w-full">
        <input type="text" class=" border-none h-12 rounded-lg max-w-full align-middle sm:w-3/5 w-auto dark:bg-dark-bg">
        <button class="bg-dark-acc px-4 py-2 rounded-xl text-xl -ml-4">
          <font-awesome-icon class="" icon="fa-solid fa-paper-plane" />
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.newsletter-wrapper {
  background: #e8e8e8;
  padding: 45px 35px;
  overflow: hidden;
  position: relative;
}



@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

.clearfix:after,
.clearfix:before,
.container-fluid:after,
.container-fluid:before,
.container:after,
.container:before,
.row:after,
.row:before {
  content: " ";
  display: table;
}


.newsletter-wrapper .envelope-bg {
  font-size: 180px;
  position: absolute;
  margin-top: -50px;
  margin-left: 60px;
  color: #dedede;
  z-index: 0;
  transform: rotate(-30deg);
}

svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa.fa-w-16 {
  width: 1em;
}

svg:not(:root) {
  overflow: hidden;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -.125em;
}

.newsletter-wrapper .hgroup {
  width: 60%;
  float: left;
  position: relative;
}

.newsletter-form,
.newsletter-wrapper .hgroup {
  display: inline-block;
  vertical-align: middle;
}

.newsletter-wrapper h3 {
  font-size: 17px;
  font-weight: 600;
  margin: 0 0 4px;
  color: #111;
}

.newsletter-wrapper p {
  font-size: 14px;
  margin: 0;
  color: #7b7b7b;
  font-weight: 500;
}

.newsletter-form {
  text-align: right;
  width: 40%;
  position: relative;
  margin-top: 5px;
}

.newsletter-form,
.newsletter-wrapper .hgroup {
  display: inline-block;
  vertical-align: middle;
}

.newsletter-form .form-control {
  border: 0;
  font-size: 13px;
  height: 40px;
  padding: 10px 20px;
  background: #fdfdfd;
  width: calc(100% - 70px);
  box-shadow: -2px 2px 3px #dcdcdc;
  border-radius: 3px;
  max-width: 100%;
  vertical-align: middle;
}

.newsletter-form button {
  background: #ed1543;
  padding: 13px 18px;
  border: 0;
  color: #fff;
  margin-left: -45px;
  font-size: 14px;
  vertical-align: middle;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  transition: all .2s ease-in-out;
}
</style>