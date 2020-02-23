const { AuthenticationError } = require('apollo-server');
const Post = require("./models/Post");

const authenticated = next => (root, args, ctx, info) => {
  console.log('resolver', ctx);
  if (!ctx.currentUser) {
    throw new AuthenticationError('you must bee logged in');
  }
  return next(root, args, ctx, info);
}

module.exports = {
  Query: {
    me: authenticated((root, args, ctx) => ctx.currentUser),
    getPosts: async (root, args, ctx) => {
      const posts = await Post.find({}).populate('author').populate('comments.author');
      return posts;
    }
  },
  Mutation: {
    createPost: authenticated(async (root, args, context) => {
      const newPost = await new Post({
        ...args.input,
        author: context.currentUser._id,
      }).save()
      const postAdded = await Post.populate(newPost, "author");
      return postAdded;
    }),
    deletePost: authenticated(async (root, args, context) => {
      console.log({ args })
      const postDeleted = await Post.findOneAndDelete({ id: args.postId }).exec();
      return postDeleted;
    })
  }
}