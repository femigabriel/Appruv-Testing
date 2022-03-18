<template>
  <div class="login-card">
    <header class="login-header">
      <h1 id="page-title">Create Account</h1>
    </header>
    <div class="errormsg">
       <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
    <li v-for="e in error" :key="e">
     {{ e }}</li>
    </ul>
  </p>
    </div>
    <div class="form-row">
      <div class="form-container">
       
        <div class="form-group">
          <div class="form-label">
        
            <label for="firstName" class="control-label">First name</label>
          </div>
          <div class="form-input">
            <input
              type="text"
             
              class="form-control"
              name="firstName"
              
              placeholder="First name"
              errormessage=""
            
              v-model="firstName"
            />
          </div>
        </div>
      </div>
    

      <div class="form-container">
        <div class="form-group">
          <div class="form-label">
            <label for="lastName" class="control-label">Last name</label>
          </div>
          <div class="form-input">
            <input
              type="text"
            
              class="form-control"
              name="lastName"
            
              placeholder="Last name"
              errormessage="Please enter last name"
            
              v-model="lastName"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="form-label">
        <label for="email" class="control-label">Work Email</label>
      </div>
      <div class="form-input">
        <input
          type="text"
         
          class="form-control"
          name="email"
       
          autocomplete="email"
          placeholder="Your work email"
          errormessage="Please enter email"
        
          v-model="email"
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-container">
        <div class="form-group">
          <div class="form-label">
            <label for="password" class="control-label">Password</label>
          </div>
          <div class="form-input">
            <input
              type="password"
              id="password"
              class="form-control"
              name="password"
              autocomplete="new-password"
              errormessage="Please enter password"
              required=""
              v-model="password"
            />
          </div>
        </div>
      </div>
      <div class="form-container">
        <div class="form-group">
          <div class="form-label">
            <label for="password-confirm" class="control-label"
              >Confirm password</label
            >
          </div>
          <div class="form-input">
            <input
              type="password"
              id="password-confirm"
              class="form-control"
              name="password-confirm"
              errormessage="Please confirm password"
              required=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="form-row">
      <div class="form-container">
        <div class="form-group">
          <div class="form-label">
            <label for="country-select" class="control-label"
              >What country are you based?</label
            >
          </div>
          <div class="form-input">
            <select
              id="country-select"
              class="form-control"
              name="user.attributes.country"
              errormessage="Please select country"
              required=""
            >
              <option value="">Select Country</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-container">
        <div class="form-group">
          <div class="form-label">
            <label for="info-source" class="control-label"
              >How did you hear about us?</label
            >
          </div>
          <div class="form-input">
            <select
              id="info-source"
              class="form-control"
              name="user.attributes.infoSource"
            >
              <option value="Recommendations">Recommendations</option>
            </select>
          </div>
        </div>
      </div>
   
      <div class="form-group">
        <div id="form-options" class="form-label">
          <div class="">
            <span
              ><a
                href="/auth/realms/appruve/login-actions/authenticate?client_id=appruve-web&amp;tab_id=zyle5Q3csV0"
                >« Back to Login</a
              ></span
            >
            <div class="form-button">
              <div class="btn-group">
                <button
                  @click="previous"
                  class="btn btn-secondary disabled"
                  type="button"
                >
                  Previous</button
                ><button @click="next" class="btn btn-secondary" type="button">
                  Next
                </button>
              </div>
              <div class="btn-group" role="group">
                <button class="btn btn-finish disabled">
                  Start Verifying Identities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormPage",
  data() {
 return {
   errors: [],
   firstName: '',
   lastName: '',
   email: '',
   password: '',
   
 }
  },
  


  methods: {
    previous() {
      this.$emit("previous");
    },
    next(e) {
       this.$emit("next");
       this.errors = {}

if(this.firstName && this.lastName)

this.error=[];
if(!this.firstName)
{
  this.error.push("First Name is required")
}
if(!this.lastName)
{
  this.error.push("Last Name is required")
}
console.warn("errors",this.error)
e.preventDefault()
     

    },
  },
};
</script>

<style scoped>
/* form-card */
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
/* form */
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
.form-horizontal .form-group {
  margin-right: -20px;
  margin-left: -20px;
}
.form-group {
  margin-bottom: 1rem;
  margin-right: 20px;
  margin-left: 20px;
}
label {
  font-weight: 600;
  display: inline-block;
  max-width: 100%;
}
.form-label {
  position: relative;
  min-height: 1px;
  margin: 10px 0px;
}

input,
select {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.48438rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  border: 1px solid #cacaca;
  border-radius: 2px;
  background-color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4b4b4b;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
  appearance: none;

  padding-left: 1rem;
  padding-bottom: 0.04rem;
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
.login-pf-page .btn-primary {
  margin-top: 0;
}
</style>
