const { User, Thought } = require('../models');

const thoughtController = {
    //get all thoughts
    async getAllThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find({}).sort({ createdAt: -1 });

            res.json(dbThoughtData);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //get single thought by id
    async getThoughtById(req, res) {
        try {
            const dbThoughtData = await Thought.findOne({ _id: req.params.thoughtId });

            if (!dbThoughtData) {
                return res.status(404).json({ message: 'Thought not found'});
            }

            res.json(dbThoughtData);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //create new thought
    async createThought(req, res) {
        try {
            const dbThoughtData = await Thought.create(req.body);

            const dbUserData = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true },
            );

            if (!dbUserData) {
                return res.status(404).json({ message: 'Thought created successfully, but user was not found'});
            }

            res.json({ message: 'New thought added successfully' });

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //update thought
    async updateThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { 
                    runValidators: true,
                    new: true,
                }
            );

            res.json(dbThoughtData);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //delete thought
    async deleteThought(req, res) {
        try {
            const dbThoughtData = await Thought.findByIdAndRemove({ _id: req.params.thoughtId })

            if (!dbThoughtData) {
                return res.status(404).json({ message: 'Thought not found'});
            }

            const dbUserData = User.findByIdAndUpdate(
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true },
            );

            if (!dbUserData) {
                return res.status(404).json({ message: 'Thought deleted successfully, but user was not found'});
            }

            res.json({ message: 'Thought deleted successfully' });

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //add reaction to a thought
    async addReaction(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { 
                    runValidators: true, 
                    new: true, 
                }
            );

            if (!dbThoughtData) {
                return res.status(404).json({ message: 'Thought not found'});
            }

            res.json(dbThoughtData);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //remove reaction to a thought
    async removeReaction(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { 
                    runValidators: true, 
                    new: true, 
                }
            );

            if (!dbThoughtData) {
                return res.status(404).json({ message: 'Thought not found'});
            }

            res.json(dbThoughtData);

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};

module.exports = thoughtController;