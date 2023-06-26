const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// route = /api/users
router.route('/').get(getAllUsers).post(createUser);

// route = /api/users/:userId
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// route = /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;