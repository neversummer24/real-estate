import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = bcrypt.hashSync(password, 10);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        });

        console.log(user);

        res.status(200).json({
            id: user.id,
            username: user.username,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }


};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                username,
            },
        });

        if (!user) {
            return res.status(401).json({ message: "User not found!" });
        }

       

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Password is not valid!" });
        }

        const token = jwt.sign({ userId: user.id}, process.env.JWT_SECRET_KEY);

        const {password : userPassword,...safeUser} = user;

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 60 * 60 * 1000
        });

        res.status(200).json({
            safeUser
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }



};

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout successful!" });
};

