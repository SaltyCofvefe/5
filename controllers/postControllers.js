exports.getAllPosts = async (req, res, next) => {
    console.log("Inside getAllPosts handler");
    res.send("Get all posts route");
  }
  
  exports.createNewPosts = async (req, res, next) => {
    console.log("Inside createNewPosts handler");
    res.send("Create new post routes");
  }
  
  exports.getPostById = async (req, res, next) => {
    console.log("Inside getPostById handler");
    res.send("Get Post By ID Route");
  }