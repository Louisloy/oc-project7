<template>
<div>
  <main>
			<div class="main-section">
				<div class="container">
					<div class="main-section-data">
						<div class="row">
							<div class="col-lg-3 col-md-4 pd-left-none no-pd">
								<div class="main-left-sidebar no-margin">
									<div class="user-data full-width">
										<div class="user-profile">
											<div class="username-dt">
												<div class="usr-pic">
													<img height="110" src="data:data:image/png;base64,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" alt="">
												</div>
											</div><!--username-dt end-->
											<div class="user-specs">
												<h3>{{user.fullname}}</h3>
												<span>Graphic Designer at Self Employed</span>
											</div>
										</div><!--user-profile end-->
										<ul class="user-fw-status">
											<li>
												<h4>Following</h4>
												<span>34</span>
											</li>
											<li>
												<h4>Followers</h4>
												<span>155</span>
											</li>
											<li>
												<a @click="deleteAccount" href="#" title="">Delete Account</a>
											</li>
										</ul>
									</div><!--user-data end-->
									
									<div class="tags-sec full-width">
										<ul>
											<li><a href="#" title="">Help Center</a></li>
											<li><a href="#" title="">About</a></li>
											<li><a href="#" title="">Privacy Policy</a></li>
											<li><a href="#" title="">Community Guidelines</a></li>
											<li><a href="#" title="">Cookies Policy</a></li>
											<li><a href="#" title="">Career</a></li>
											<li><a href="#" title="">Language</a></li>
											<li><a href="#" title="">Copyright Policy</a></li>
										</ul>
										<div class="cp-sec">
											<img src="images/icon-left-font.png" alt="">
											<p><img src="images/cp.png" alt="">Copyright 2018</p>
										</div>
									</div><!--tags-sec end-->
								</div><!--main-left-sidebar end-->
							</div>
							<div class="col-lg-6 col-md-8 no-pd">
								<div class="main-ws-sec">
									<div class="post-topbar">
										<div class="user-picy">
											<img src="http://via.placeholder.com/100x100" alt="">
										</div>
										<div class="post-st">
											<ul>
												
												<li><a class="post-jb active" href="#" title="">Make a post</a></li>
											</ul>
										</div><!--post-st end-->
									</div><!--post-topbar end-->
									<div v-for="post in posts" :key="post.id" class="posts-section">
										<div class="post-bar">
											<div class="post_topbar">
												<div class="usy-dt">
													<img src="http://via.placeholder.com/50x50" alt="">
													<div class="usy-name">
														<h3>{{post.userName}}</h3>
														<span><img src="images/clock.png" alt="">3 min ago</span>
													</div>
												</div>
												<div class="ed-opts">
													<a href="#" title="" class="ed-opts-open"><i class="la la-ellipsis-v"></i></a>
													
												</div>
											</div>
											<div class="epi-sec">
												<ul class="descp">
													<li><img src="images/icon8.png" alt=""><span>{{post.department}}</span></li>
													
												</ul>
												
											</div>
											<div class="job_descp">
												<h3>{{post.title}}</h3>
												<p><img :src="post.media" height="120" alt=""></p>
												<br>
												<br>
												<p>{{post.message}}<a @click="readPost(post)" href='#' title=""><br>view more</a></p>
												
											</div>
											<div class="job-status-bar">
												<ul class="like-com">
													<li>
														<a @click="likePost(post)" href="#"><i class="la la-heart"></i> Like [{{post.likes}}]</a>
														
													</li>
													<ul v-if="post.userId==user.id" >
													
														<li><a :href='"http://localhost:8080/#/edit-post/"+post.id' title="">Edit Post</a></li>
														<li><a @click="deletePost(post.id)" href="#" title="">Delete Post</a></li>
														
													</ul> 
													</ul>
												<a><i class="la la-eye"></i>Views {{JSON.parse(post.usersRead).length }}</a>
											</div>
										</div><!--post-bar end-->
										
										
									</div><!--posts-section end-->
								</div><!--main-ws-sec end-->
							</div>
							<div class="col-lg-3 pd-right-none no-pd">
								<div class="right-sidebar">
									<div class="widget widget-about">
										<img src="images/icon-g.png" alt="">
										<h3>Track Time on Workwise</h3>
										<span>Pay only for the Hours worked</span>
										<div class="sign_link">
											<h3><a href="#" title=""></a></h3>
											<a href="#" title="">Learn More</a>
										</div>
									</div><!--widget-about end-->
									
									
								</div><!--right-sidebar end-->
							</div>
						</div>
					</div><!-- main-section-data end-->
				</div> 
			</div>
			<div class="post-popup job_post" id="post">
			<div class="post-project">
				<h3>Is there anything you want to tell your team ?</h3>
				<div class="post-project-fields">
					<form @submit.prevent="handleSubmit">
						<div class="row">
							<div class="col-lg-12">
								<input type="text" v-model="form.title" placeholder="Title">
							</div>
							<div class="col-lg-12">
								<div class="inp-field">
									<select v-model="form.department">
									    <option>Choose a department</option>
										<option>HR</option>
										<option>Admin</option>
										<option>Support</option>
										<option>Developers</option>
										<option>Safety</option>
									</select>
								</div>
							</div>
							<div class="col-lg-12">
								<input type="hidden" v-model="form.media" />
								<input type="file" @change="mediaSelected" />
							</div>
							
							<div class="col-lg-12">
								<textarea v-model="form.message" placeholder="Message"></textarea>
							</div>
							<div class="col-lg-12">
								<ul>
									<li><button class="active" type="submit" value="post">Post</button></li>
									<li><a @click="cancel" href="#" title="">Cancel</a></li>
								</ul>
							</div>
						</div>
					</form>
				</div><!--post-project-fields end-->
				<a href="#" title=""><i class="la la-times-circle-o"></i></a>
			</div><!--post-project end-->
		</div><!--post-project-popup end-->
		</main>




	
    </div>
</template>

<script>
import axios from 'axios'


export default  {
    
    data(){
        return{
			user:{},
            form:{
	          title:'',
	          department:'',
	          media:'',
	          message:'',
	          userId:''
      },
	  posts:{},
	  
        }
    },
	beforeMount: function(){
		this.user = JSON.parse(localStorage.getItem('user') || '{}');
		this.form.userId = this.user.id
         console.log(this.user)
		 this.loadAllPosts()
		 console.log(this.posts)   
   },
  
	methods:{
      
	  handleSubmit(){
	   console.log(this.form)
	   //Using FormData because of file post
	   const _form = new FormData()
	   _form.append('title', this.form.title)
	   _form.append('department', this.form.department)
	   _form.append('media', this.form.media)
	   _form.append('message', this.form.message)
	   _form.append('userId', this.form.userId)
	   _form.append('userName', this.user.fullname)
	   //Api call -post
	   axios.post("http://localhost:3000/api/post",
	   //The data
	   _form,
	   //Authorization code
	   {headers: { authorization: 'Bearer ' + localStorage.getItem('token')}}
	   )
	   //Api response
            .then((response)=>{
                if(response.status==201){
               
                 this.form={
                      title:'',
	                  department:'',
	                  media:'',
	                  message:'',
	                  userId: this.user.id
                 };
                this.loadAllPosts()
                }
            }).catch((err)=>{
                alert("Something went wrong, please try again")
				console.log(err.message)
            })
	   this.cancel()
   },
    
   loadAllPosts(){

    //Api call -get
	axios.get("http://localhost:3000/api/post",
	//Authorization
	{headers: {authorization: 'Bearer ' + localStorage.getItem('token')}})
	.then((response) =>{
		//retrieving the posts
		this.posts = response.data
		console.log(this.posts)
	 })
	},

   mediaSelected(event){
	   this.form.media = event.target.files[0]
   },
   cancel(){
	   let postForm = document.getElementById("post")
	   let appDiv = document.getElementById("app")
	   if(postForm != null && appDiv!= null){
	  postForm.classList.remove("active")
	  appDiv.classList.remove("overlay")
	   } 
  },
    deletePost(id){
		if(confirm("Are you sure you want to delete ?")){
        //Api call -get
	axios.delete("http://localhost:3000/api/post/"+id,
	//Authorization
	{headers: {authorization: 'Bearer ' + localStorage.getItem('token')}})
	.then((response) =>{
		alert("Deleted !")
		this.loadAllPosts()
		
		//window.location.href="http://localhost:8080/#/"
	   })
	 }
    
	},
	likePost(post){
		let data ={
			like:1,
			userId:this.user.id
		}
		console.log(post.usersLiked)
		post.usersLiked=JSON.parse(JSON.stringify(post.usersLiked))
		
		if(post.usersLiked.includes(this.user.id)){
			data.like = 0
			
		}
        //Api call -get
	axios.post("http://localhost:3000/api/post/"+post.id+"/like",
	data,
	//Authorization
	{headers: {authorization: 'Bearer ' + localStorage.getItem('token')}})
	.then((response) =>{
		alert("Post Liked")
		this.loadAllPosts()
		//window.location.href="http://localhost:8080/#/"
	   }).catch((err)=>{
                alert("Something went wrong, please try again")
				console.log(err.message)
	
	     })
	},

		  readPost(post){
		    let data ={
			userId:this.user.id
		}
		post.usersRead=JSON.parse(post.usersRead)
		if(!post.usersRead.includes(this.user.id) && post.userId != this.user.id){
		
        //Api call -get
	axios.post("http://localhost:3000/api/post/"+post.id+"/read",
	data,
	//Authorization
	{headers: {authorization: 'Bearer ' + localStorage.getItem('token')}})
	.then((response) =>{
		alert("Post Read")
		this.loadAllPosts()
		
	   }).catch((err)=>{
                alert("Something went wrong, please try again")
				console.log(err.message)
	  })
	 }
	 window.location.href="http://localhost:8080/#/view-post/"+post.id
	},
	deleteAccount(){
		if(confirm("Are you sure you want to delete ?")){
        //Api call -get
	axios.delete("http://localhost:3000/api/auth/"+this.user.id,
	//Authorization
	{headers: {authorization: 'Bearer ' + localStorage.getItem('token')}})
	.then((response) =>{
		alert("Deleted !")
		localStorage.clear()
		window.location.href="http://localhost:8080/#/"
	   })
	 }
    
	}
  }
}


</script>
