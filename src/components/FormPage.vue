<template>
  <div class="login-card">
    <header class="login-header">
      <h1 id="page-title">Create Account</h1>
    </header>
    
   <div class="errormsg">
       <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
    <li v-for="e in errors" :key="e">
     {{e}}
     </li>
    </ul>
  </p>
    </div>
    <div class="form-row">
      <div class="form-container">
       <div class="form-group">
          <div class="form-label">
        <label for="firstName" 
        class="control-label">First name</label>
          </div>
          <div class="form-input">
            <input
              type="text"
              class="form-control"
              name="firstName"
              placeholder="First name"
             v-model="firstName"
            />
          </div>
        </div>
      </div>
       <p>{{  }}</p>

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
             v-model="lastName"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="form-label">
        <label for="email"
         class="control-label">Work Email</label>
      </div>
      <div class="form-input">
        <input
           name="email"
         autocomplete="email"
          placeholder="Your work email"
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
             v-model="country"
            >
            <option value="">Select Country</option>
            <option value="Algeria">Algeria</option>
							<option value="Brazil">Brazil</option>
              <option value="China">China</option>
              <option value="Georgia">Georgia</option>
						<option value="Germany">Germany</option>
            <option value="India">India</option>
            
            <option value="Qatar">Qatar</option>
           <option value="South Korea">South Korea</option>
           <option value="United Kingdom">United Kingdom</option>

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
              v-model="Recommendations"
            >
              <option value="Recommendations">Recommendations</option>
              <option value="Facebook">Facebook</option>
						<option value="Twitter">Twitter</option>
						<option value="LinkedIn">LinkedIn</option>
						<option value="Google">Google</option>
						<option value="Investor's Network">Investor's Network</option>
						<option value="Others">Others</option>
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
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   country: "",
   Recommendations:""
   
 };
  },
  methods: {
  next(e)
   {
    
   this.errors=[];
   
    if(!this.firstName) 
      {
       this.errors.push("First Name is required");
      }

     if(!this.lastName) 
     {
     this.errors.push("Last Name is required");
    }

    if(!this.email) 
    {
    this.errors.push("Email is required");
   }
  
    if(!this.password) 
      {
      this.errors.push("Password is required");
      }
        if(!this.country) 
      {
      this.errors.push("Selected country is required");
      }
  if(!this.Recommendations) 
      {
      this.errors.push("Recommendation is required");
      }
 if (this.errors.length < 1 ) {
        this.$emit("next");
        e.preventDefault();
      }

 
     
   },
  } 
  
}
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
.errormsg {
  color: red;
  padding: 0.45rem 0.6rem;
  font-size: 0.5rem;
   text-decoration: none;

}
ul {
  text-decoration: none;

}
li{
   text-decoration: none;

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
  margin-right: 10px;
  margin-left: 10px;
} 
   input .form-control {
width: 100%;
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
  width: 75%;
  height: 2.4rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  border: 1px solid #cacaca;
  border-radius: 2px;
  background-color: #fff;
  font-size: 1rem;
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
