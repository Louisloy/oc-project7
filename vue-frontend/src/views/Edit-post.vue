<template>
  	<section class="forum-page">
			<div class="container">
				<div class="forum-questions-sec">
					<div class="row">
						<div class="col-lg-8">
							
                      
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
									<li><a href="#" title="">Cancel</a></li>
								</ul>
							</div>
						</div>
					</form>
				</div><!--post-project-fields end-->
			</div>	

						</div>
						<div class="col-lg-4">
							<div class="widget widget-feat">
								<ul>
									<li>
										<i class="fa fa-heart"></i>
										<span>1185</span>
									</li>
									<li>
										<i class="fa fa-comment"></i>
										<span>1165</span>
									</li>
									<li>
										<i class="fa fa-share-alt"></i>
										<span>1120</span>
									</li>
									<li>
										<i class="fa fa-eye"></i>
										<span>1009</span>
									</li>
								</ul>
							</div><!--widget-feat end-->
							
							<div class="widget widget-adver">
								<img src="http://via.placeholder.com/370x270" alt="">
							</div><!--widget-adver end-->
						</div>
					</div>
				</div><!--forum-questions-sec end-->
			</div>
		</section><!--forum-page end-->
</template>

<script>
import axios from 'axios'


export default  {
    
    data(){
        return{
			
            form:{
	          title:'',
	          department:'',
	          media:'',
	          message:'',
	         
          }
	  }
    },
	beforeMount: function(){
		
		 this.loadPost()   
   },
  
	methods:{
      
	  handleSubmit(){
	   
	   //Using FormData because of file post
	   const _form = new FormData()
	   _form.append('title', this.form.title)
	   _form.append('department', this.form.department)
	   _form.append('media', this.form.media)
	   _form.append('message', this.form.message)
	   
	   //Api call -post
	   axios.put("http://localhost:3000/api/post/"+this.$route.params.id,
	   //The data
	   _form,
	   //Authorization code
	   {headers: { authorization: 'Bearer ' + localStorage.getItem('token')}}
	   )
	   //Api response
            .then((response)=>{
                if(response.status==201){
               
                window.location.href="http://localhost:8080/#/"
				}
            }).catch((err)=>{
                alert("Something went wrong, please try again")
				console.log(err.message)
            })
	  
   },
    
   loadPost(){

    //Api call -get
	axios.get("http://localhost:3000/api/post/"+this.$route.params.id,
	//Authorization
	{headers: {authorization: 'Bearer ' + localStorage.getItem('token')}})
	.then((response) =>{
		//retrieving the posts
		this.form = response.data
		
	 })
	},

   mediaSelected(event){
	   this.form.media = event.target.files[0]
   },
  
  }
}


</script>
