const User = require("../models/user.cjs");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports = {
    create,
    login,
    checkToken
  };

async function create(req, res) {
  try {
    console.log(req.body)
    const user = await User.create(req.body); // add the user to the database
    const token = createJWT(user);    // token will be a string
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req,res){
  try {
    const email = req.body.email
    const user = await User.findOne({email: email})
    if (!user) throw new Error(); 
    const match = await bcrypt.compare(req.body.password, user.password); 
    if (!match) throw new Error(); 
    const token = createJWT(user)
    res.json(token);
  } catch (err) {
    res.status(400).json(err)
  }
}

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}