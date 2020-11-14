import express from 'express'
import User from "../models/User.js";
const router = express.Router()

router.post('/register', (req, res) => {
    const { name, username, email, password } = req.body
    const newUser = new User({ name, username, email, password })
    newUser.save().then(data => {res.json(data)}).catch(err => console.log(err))
})

router.get('/users', (req, res) => {
    User.find().then(users => res.json(users)).catch(err => console.log(err))
})

export default router