//bring in mongoose
const { Schema, model } = require('mongoose');

//create UserSchema

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
        'Please enter a valid e-mail address',
      ],
    },
    // Array of `_id` values referencing the `Thought` model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    // Array of `_id` values referencing the `User` model (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//SCHEMA SETTINGS:
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

UserSchema.virtual('friendCount').get(function () {
  //length of the user's friend array field on query.
  return this.friends.length;
});

//create the user model using the UserSchema
const User = model('User', UserSchema);
//export the User model
module.exports = User;
