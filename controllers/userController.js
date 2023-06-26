const { User, Thought } = require('../models');

const userController = {
    //get all users
    async getAllUsers(req, res) {
        try {
            const dbUserData = await User.find({}).select('-__v').populate('thoughts').populate('friends');

            res.json(dbUserData);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //get single user by id
    async getUserById(req, res) {
        try {
            const dbUserData = await User.findOne({ _id: req.params.userId }).select('-__v').populate('thoughts').populate('friends');

            if (!dbUserData) {
                return res.status(404).json({ message: 'User not found'});
            }

            res.json(dbUserData);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //create new user
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //update user
    async updateUser(req, res) {
        try {
            const dbUserData = await User.findByIdAndUpdate(
                { _id: req.params.userId },
                {
                    $set: req.body,
                },
                {
                    runValidators: true,
                    new: true,
                },
            );

            if (!dbUserData) {
                return res.status(404).json({ message: 'User not found'});
            }

            res.json(dbUserData);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //delete user
    async deleteUser(req, res) {
        try {
            const dbUserData = await User.findByIdAndDelete({ _id: req.params.userId })

            if (!dbUserData) {
                return res.status(404).json({ message: 'User not found'});
            }
    
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //add friend to friend list
    async addFriend(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true });

           if (!dbUserData) {
                return res.status(404).json({ message: 'User not found'});
            }
            
            res.json(dbUserData);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //remove friend from friend list
    async removeFriend(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate({ _id: req.rarams.userId }, { $pull: { friends: req.params.friendId } }, { new: true });

            if (!dbUserData) {
                return res.status(404).json({ message: 'User not found'});
            }

            res.json(dbUserData);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};

module.exports = userController;