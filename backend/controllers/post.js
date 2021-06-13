const Post = require('../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
  //req.body.post = JSON.parse(req.body.post);
  const url = req.protocol + '://' + req.get('host');
  let file ='';
  if(req.file){
    file=url + '/images/' + req.file.filename
  }

  const post = new Post({
    userId: req.body.userId,
    userName : req.body.userName,
    title: req.body.title,
    department: req.body.department,
    media:file ,
    message: req.body.message,
    likes: 0,
    usersLiked: "[]",
    usersRead: "[]",
    _reads:0
  });
  post.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!' + req.body.userId
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


exports.getOnePost = (req, res, next) => {
  Post.findOne({where: {id:req.params.id}})
  .then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};


exports.updatePost = (req, res, next) => {
  let post = Post.findOne({where: {id:req.params.id}});

  if (req.file) {
    const url = req.protocol + '://' + req.get('host');
    
    post = {

      media: url + '/images/' + req.file.filename,
      title: req.body.title,
      department: req.body.department,
      message: req.body.message,

    };
  } else {
    post = {
      //_id: req.params.id,
      title: req.body.title,
      department: req.body.department,
      message: req.body.message,
    };
   }
  
  
   Post.update(post, {where: {id:req.params.id}}).then(
    () => {
      res.status(201).json({
        message: 'Post updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  )
};

exports.deletePost = (req, res, next) => {
  Post.findOne({where: {id:req.params.id}}).then(
    (post) => {
      if(post.media =="" || post.media ==undefined){
        post.destroy().then(
          () => {
            res.status(200).json({
              message: 'Deleted!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      }else{
      const filename = post.media.split('/images/')[1];
      fs.unlink('images/' + filename, () => {
        post.destroy().then(
          () => {
            res.status(200).json({
              message: 'Deleted!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      });
      }
    }
  );
};


exports.likePost = (req, res, next) => {
  Post.findOne({where: {id:req.params.id}}).then((post) => {
    post.usersLiked=JSON.parse(post.usersLiked)
    if (req.body.like == 1) {
      post.usersLiked.push(req.body.userId)
      post.likes += req.body.like
    } else if (req.body.like == 0 && post.usersLiked.includes(req.body.userId)) {
      //post.usersLiked.remove(req.body.userId)
      let index = post.usersLiked.findIndex(x => x ==req.body.userId.toString());
            post.usersLiked.splice(index, 1);

      post.likes -= 1
    } 
    post.usersLiked=JSON.stringify(post.usersLiked)
    post.save().then(
      () => {
        res.status(200).json({
          message: "post Like Updated!"
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });


};

exports.readPost = (req, res, next) => {
  Post.findOne({where: {id:req.params.id}}).then((post) => {
    post.usersRead=JSON.parse(post.usersRead)
      post.usersRead.push(req.body.userId)
      //post.reads += 1
      post.usersRead=JSON.stringify(post.usersRead)
      post.save().then(
      () => {
        res.status(200).json({
          message: "Post Read Updated!"
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });


};


exports.getAllPosts = (req, res, next) => {
    Post.findAll({order:[["createdAt","DESC"] ]}).then(
    
    (posts) => {
      res.status(200).json(posts);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


