<template>
   <div class="sign-in-page">
            <div class="signin-popup">
                <div class="signin-pop">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="cmp-info">
                                <div class="cm-logo">
                                    <img src="images/icon-left-font.png" alt="">
                                    <p>Our company, a multinational retail corporation, is expanding day by day. We've grown by 100% over the last three years, we now employ over 600 people.</p>
                                </div>
                                <!--cm-logo end-->
                                <img src="images/cm-main-img.png" alt="">
                            </div>
                            <!--cmp-info end-->
                        </div>
                        <div class="col-lg-6">
                            <div class="login-sec">
                                <ul class="sign-control">
                                    <li data-tab="tab-1" class="current"><a href="#/login" title="">Sign in</a></li>
                                    <li data-tab="tab-2"><a href="#/login" title="">Sign up</a></li>
                                </ul>
                                <div class="sign_in_sec current" id="tab-1">

                                    <h3>Sign in</h3>
                                    <form @submit.prevent="handleLogin">
                                        <div class="row">
                                            <div class="col-lg-12 no-pdd">
                                                <div class="sn-field">
                                                    <input type="text" v-model="form.email" placeholder="Email">
                                                    <i class="la la-user"></i>
                                                </div>
                                                <!--sn-field end-->
                                            </div>
                                            <div class="col-lg-12 no-pdd">
                                                <div class="sn-field">
                                                    <input type="password" v-model="form.password" placeholder="Password">
                                                    <i class="la la-lock"></i>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 no-pdd">
                                                <div class="checky-sec">
                                                    <div class="fgt-sec">
                                                        <input type="checkbox" name="cc" id="c1">
                                                        <label for="c1">
															<span></span>
														</label>
                                                        <small>Remember me</small>
                                                    </div>
                                                    <!--fgt-sec end-->
                                                    <a href="#" title="">Forgot Password?</a>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 no-pdd">
                                                <button type="submit" value="submit">Sign in</button>
                                            </div>
                                        </div>
                                    </form>
                                    
                                </div>
                                <!--sign_in_sec end-->
                                <div class="sign_in_sec" id="tab-2">
                                    
                                    <!--signup-tab end-->
                                    <div class="dff-tab current" id="tab-3">
                                        <form @submit.prevent="handleSignup">
                                            <div class="row">
                                                <div class="col-lg-12 no-pdd">
                                                    <div class="sn-field">
                                                        <input type="text" v-model="form.fullname" placeholder="Full Name">
                                                        <i class="la la-user"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 no-pdd">
                                                    <div class="sn-field">
                                                        <input type="text" v-model="form.email" placeholder="Email">
                                                        <i class="la la-globe"></i>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-12 no-pdd">
                                                    <div class="sn-field">
                                                        <input type="password" v-model="form.password" placeholder="Password">
                                                        <i class="la la-lock"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 no-pdd">
                                                    <div class="sn-field">
                                                        <input type="password" v-model="form.repeatPassword" placeholder="Confirm Password">
                                                        <i class="la la-lock"></i>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 no-pdd">
                                                    <div class="checky-sec st2">
                                                        <div class="fgt-sec">
                                                            <input type="checkbox" name="cc" id="c2">
                                                            <label for="c2">
																<span></span>
															</label>
                                                            <small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                                                        </div>
                                                        <!--fgt-sec end-->
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 no-pdd">
                                                    <button type="submit" value="submit">Get Started</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                            <!--login-sec end-->
                        </div>
                    </div>
                </div>
                <!--signin-pop end-->
            </div>
            <!--signin-popup end-->
            <div class="footy-sec">
                <div class="container">
                    <ul>
                        <li><a href="#" title="">Help Center</a></li>
                        <li><a href="#" title="">Privacy Policy</a></li>
                        <li><a href="#" title="">Community Guidelines</a></li>
                        <li><a href="#" title="">Cookies Policy</a></li>
                        <li><a href="#" title="">Career</a></li>
                        <li><a href="#" title="">Forum</a></li>
                        <li><a href="#" title="">Language</a></li>
                        <li><a href="#" title="">Copyright Policy</a></li>
                    </ul>
                    <p><img src="images/copy-icon.png" alt="">Copyright 2018</p>
                </div>
            </div>
            <!--footy-sec end-->
        </div>
        <!--sign-in-page end-->
</template>
<script>
import axios from 'axios'
export default  {
    
    data(){
        return{
            form:{
                fullname:'',
                email:'',
                password:'',
                repeatPassword:'',
            }
        }
    },
    beforeMount:function(){
       localStorage.clear();
    },
    methods: {
        handleSignup(){
            axios.post("http://localhost:3000/api/auth/signup",this.form)
            .then((response)=>{
                if(response.status==201){
                 alert("Account Created Successfully");
                 this.form={
                     fullname:'',
                     email:'',
                     password:'',
                     repeatPassword:''
                 };
                 window.location.href="http://localhost:8080/#/login"
                }
            }).catch(()=>{
                alert("Something went wrong, please try again, this email has been used already")
            })
            
        },
        handleLogin(){
            
            axios.post("http://localhost:3000/api/auth/login",this.form)
            .then((response)=>{
                if(response.status==200){
                 alert("Login Successful !")
                 localStorage.setItem('userId',response.data.userId)
                 localStorage.setItem('token',response.data.token)
                 localStorage.setItem('user',JSON.stringify(response.data.user))
                 window.location.href="http://localhost:8080/"
                }
            }).catch(()=>{
                alert("Something went wrong, please try again")
            })
          
        }
    }
}
</script>
