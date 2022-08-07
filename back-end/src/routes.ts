import express from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const routes = express.Router();

routes.get("/users", async (req,res) => {
    const users = await prisma.user.findMany();
    res.json(users);
})

routes.post('/user', async (req,res) => {
    const user = await prisma.user.create({
        data: {
            ...req.body
        }
    })
    res.json(user);
})