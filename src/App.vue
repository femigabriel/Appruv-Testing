<template>
  <Logo />
  <FormPage
  v-show="current == 0"
    @next="current = current + 1"
   />
  <FormPage2
   v-show="current == 1"
      @next="current = current + 1"
      @previous="current = current - 1"
  /> 
  
</template>

<script>
import Logo from "./components/Logo.vue";
import FormPage from "./components/FormPage.vue";
import FormPage2 from "./components/FormPage2.vue";


export default {
  name: "App",
  components: {
    Logo,
    FormPage,
    FormPage2,
  
  },

    data() {
    return {
      current: 0,
    };
  },

  methods: {
    next() {
      // this.current = this.current + 1;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
user agent stylesheet div {
  display: block;
}
.h1 {
  color: #9c9c9c;

  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
}

body {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  background: url("https://iam.appruve.co/auth/resources/begx7/login/appruve/img/bg-img.png")
    no-repeat center center fixed;
  background-size: cover;

  color: #111;
  background-color: #fff;
  line-height: 1.66666667;
}
.flex {
  display: flex;
  gap: var(--gap, 1rem);
}
.grid {
  display: grid;
  gap: var(--gap, 1rem);
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
.login-card {
  background: #fff;
  margin: 0 auto;
  padding: 0 20px;
  /* height: 650px; */
  border-top: 0;
  border-radius: 1rem;
  box-shadow: 0 16px 24px 0 rgb(0 0 0 / 8%);
  max-width: 750px;
}
.login-header {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}
#page-title {
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 20px;
  color: #111;
  padding: 0.45rem 0.6rem;
  font-size: 1.5rem;
}
.login-header h1 {
  text-align: center;
}
/* button */

.btn-group {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  float: left;
}

.btn-group > .btn:first-child {
  margin-left: 0;
}

.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:first-child {
  margin-left: 0;
}
.btn.disabled {
  opacity: 0.65;
  background-color: #fafafa;
  background-image: none;
  border-color: #d1d1d1;
  color: #8b8d8f;
  box-shadow: none;
}
.btn {
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  box-shadow: 0 2px 3px rgb(3 3 3 / 10%);
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

</style>
