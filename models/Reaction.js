// Reaction (SCHEMA ONLY)

//bring in mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create UserSchema

const ReactionSchema = new Schema({
  reactionId: {
    // Use Mongoose's ObjectId data type
    // Default value is set to a new ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: [280, 'Reaction cannot be more than 280 characters'],
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Use a getter method to format the timestamp on query
  },
});

// Schema Settings

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
