<template>
  	<section class="forum-page">
			<div class="container">
				<div class="forum-questions-sec">
					<div class="row">
						<div class="col-lg-8">
							<div class="forum-post-view">
								<div class="usr-question">
									<div class="usr_img">
										<img src="http://via.placeholder.com/60x60" alt="">
										By {{post.userName}}
									</div>
									<div class="usr_quest">
										<h3>{{post.title}}</h3>
										<span><i class="fa fa-clock-o"></i>3 min ago</span>
										
										<p>{{post.message}}</p>
											
										
									</div><!--usr_quest end-->
								</div><!--usr-question end-->
							</div><!--forum-post-view end-->
							
									
							<div class="next-prev">
								<a href="#" title="" class="fl-left">Preview</a>
								<a href="#" title="" class="fl-right">Next</a>
							</div><!--next-prev end-->
						</div>
						<div class="col-lg-4">
							<div class="widget widget-feat">
								<ul>
									<li>
										<i class="fa fa-heart"></i>
										<span>{{post.likes}}</span>
									</li>
									
									
									<li>
										<i class="fa fa-eye"></i>
										<span>{{JSON.parse(post.usersRead).length }}</span>
									</li>
								</ul>
							</div><!--widget-feat end-->
							
							<div class="widget widget-adver">
								<img :src="post.media" alt="">
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
			user:{},
            post:{}
	  
	  }
    },
	beforeMount: function(){
		 this.user = JSON.parse(localStorage.getItem('user') || '{}');
		 this.loadPost()
		    
     },
     methods:{
      
    
   loadPost(){

    //Api call -get
	axios.get("http://localhost:3000/api/post/"+this.$route.params.id,
	//Authorization
	{headers: {authorization: 'Bearer ' + localStorage.getItem('token')}})
	.then((response) =>{
		//retrieving the posts
		this.post = response.data
		console.log(this.post)
		
	 })
	},
  	

  
  }
}


</script>
