
import express from 'express';
const router = express.Router();
import {User} from '../config/connect.js'


// Create a new user
router.use(express.json())
router.post('/users', async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Read all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a user
router.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router