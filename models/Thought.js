//bring in mongoose
const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs');

// Reaction (SCHEMA ONLY)

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
      get: (createdAtVal) => dayjs(createdAtVal).format('MM/DD/YYYY h:mm A'),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//create the Thought model using the ThoughtSchema

const ThoughtSchema = new Schema(
  {
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
      get: (createdAtVal) => dayjs(createdAtVal).format('MM/DD/YYYY h:mm A'),
    },
    // username (The user that created this thought)
    username: {
      type: String,
      required: true,
    },

    // Array of nested documents created with the reactionSchema
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Schema Settings
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

//create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);
//export the Thought model
module.exports = Thought;
