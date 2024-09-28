const express = require("express");
const zod = require("zod");
const {User, Account} = require("../db");
const JWT_SECRET = require("../config");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");
const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6)
});
const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});
const updateBody = zod.object({
    password: zod.string().min(6),
    firstName: zod.string(),
    lastName: zod.string()
})
router.post("/signup", async function(req, res){
    const body = req.body;
    const result = signupSchema.safeParse(body);
    if(!result.success){
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    });
    if(existingUser){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        });
    }
    const dbUser = await User.create(body);
    const userId = dbUser._id;
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    const token = jwt.sign({
        userId: dbUser._id,
        firstName: dbUser.firstName
    }, JWT_SECRET);
    res.json({
        message: "User created successfully",
        token: token
    })
});
router.post("/signin", async function(req, res){
    const result = signinBody.safeParse(req.body);
    if(!result.success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if(user){
        const token = jwt.sign({
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username
        }, JWT_SECRET);
        res.status(200).json({
            message: "User signed in successfully",
            token: token
        })
        return;
    }
    res.status(411).json({
        message: "Error while logging in"
    });
})
router.put("/", authMiddleware, async function(req, res){
    const result = updateBody.safeParse(req.body);
    if(!result.success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    console.log(req.userId);
    await User.updateOne({
        _id: req.userId
    }, {
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    res.json({
        message: "Updated successfully"
    });
})
router.get("/bulk", authMiddleware, async(req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
module.exports = router;
