const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/user-controller');

// API Routes

/* /api/users */

router
  .route('/')
  .get(getAllUsers) // GET all users
  .post(createUser); // POST a new user
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }

// GET a single user by its _id and populated thought and friend data
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser) // PUT to update a user by its _id
  .delete(deleteUser); // DELETE to remove user by its _id

/* /api/users/:userId/friends/:friendId */
router
  .route('/:userId/friends/:friendId')
  // POST to add a new friend to a user's friend list
  .post(addFriend)
  // DELETE to remove a friend from a user's friend list
  .delete(deleteFriend);

module.exports = router;
