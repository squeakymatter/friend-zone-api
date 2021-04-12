const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

/* /api/thoughts */
router
  .route('/')
  .get(getAllThoughts) // GET to get all thoughts
  .post(addThought); // POST to create a new thought

// POST though example
// example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }

router
  .route('/:id')
  .get(getThoughtById) // GET to get a single thought by its _id
  .put(updateThought) // PUT to update a thought by its _id
  .delete(removeThought);

/* /api/thoughts/:thoughtId/reactions */
router
  .route('/:thoughtId/reactions')
  // POST to create a reaction stored in a single thought's reactions array field
  .post(addReaction);
// DELETE to pull and remove a reaction by the reaction's reactionId value

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
