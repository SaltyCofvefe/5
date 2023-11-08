const Post = require('../models/Post')

exports.getAllPosts = async (req, res, next) => {
    try{
        const [posts, _] = await Post.findAll();

        res.status(200).json({posts});
    } catch (error) {
        console.log(error);
        next(error);


    }
  }
  
  exports.createNewPosts = async (req, res, next) => {
try {
    let {title, body} = req.body;
    let post = new Post(title, body);

    post = await post.save();

    res.status(201).json({ message: "Post created"})
    
} catch (error) {
    console.log(error);
        next(error);
}
  }
  
  exports.getPostById = async (req, res, next) => {
    try {
        let postId = req.params.id;

        let [post, _]= await Post.findById(postId) ;

        res.status(200).json({post: post[0]});
    } catch (error) {
        console.log(error);
        next(error); 
    }
    
  }
  exports.updatePost = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const { title, body } = req.body;
        
        const [post, _] = await Post.update(postId, { title, body });

        if (post) {
            res.status(200).json({ message: "Post updated" });
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}


exports.updatePost = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const { title, body } = req.body;
        
        

        const updatedPost = await Post.update(postId, title, body);

        res.status(200).json({ message: "Post updated", updatedPost });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.deletePost = async (req, res, next) => {
    try {
        const postId = req.params.id;

        

        await Post.delete(postId);

        res.status(200).json({ message: "Post deleted" });
    } catch (error) {
        console.log(error);
        next(error);
    }
}