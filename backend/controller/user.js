const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and Password are required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const hashPwd = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    email,
    password: hashPwd,
  });

  // ✅ Send confirmation
  return res.status(201).json({ message: "User created successfully" });
};

  

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password is required" });
  }
  let user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY);
    return res.status(201).json({ token, user});
  }
  else{
    return res.status(400).json({error:"Invalid Credentials"})
  }
};

const getUser = async (req, res) => {
  const user=await User.findById(req.params.id)
  res.json({email:user.email})
};

module.exports = { userSignUp, userLogin, getUser };
