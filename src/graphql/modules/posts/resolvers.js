import Post from "../../../models/Post";
import User from "../../../models/User";

export default {
  Post: {
    author: async (post) => await User.findById(post.author),
  },
  Query: {
    post: async (_, { id }) => await Post.findById(id),
    posts: async () => await Post.find(),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { id, data }) =>
      Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  },
};
