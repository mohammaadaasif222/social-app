import Post from "../models/Post.js";
import User from "../models/User.js";
export const createPost = async (request, response) => {
  try {
    const { userId, description, picturePath } = request.body;

    const user = await User.findById(userId);

    const newPost = new Post({
      userId:userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });

    await newPost.save();
    const post = await Post.find();

    response.status(201).json(post);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getFeedPosts = async (request, response) => {
  try {
    const post = await Post.find();
    response.status(200).json(post);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getUserPosts = async (request, response) => { 
  try {
    const {userId} = request.params;
    const posts = await Post.find({userId});
    response.status(200).json(posts);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const deleteUserPosts = async (request, response) => { 
  try {
    const {userId} = request.params;
    const {postId} = request.params
    const posts = await Post.find({userId});
    response.status(200).json(posts);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const likePosts = async (request, response) => {
    try {
        const {id} = request.params;
        const {userId} = request.body
        const post = await Post.findById(id);
        const isLiked = await post.likes.get(userId)
        if(isLiked){
            post.likes.delete(userId);
        }else{
            post.likes.set(userId , true )
        }
        const updatedPost = await Post.findByIdAndUpdate(id, {likes:post.likes},{new: true})
        response.status(200).json(updatedPost);
      } catch (error) {
        response.status(404).json({ message: error.message });
      }
};
