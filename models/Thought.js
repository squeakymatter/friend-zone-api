//bring in mongoose
const mongoose = require('mongoose');
const { truncate } = require('node:fs');
const Schema = mongoose.Schema;

//create ThoughtSchema

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: [1, 'Thought must have at least one character'],
    maxlength: [280, 'Thought cannot be more than 280 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Use a getter method to format the timestamp on query
    // username (The user that created this thought)
  },
  username: {
    type: String,
    required: true,
  },
  // reactions (These are like replies)
  reactions: {
    // Array of nested documents created with the reactionSchema
  },
});

// Schema Settings
UserSchema.virtual('reactionCount').get(function () {
  // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
});
