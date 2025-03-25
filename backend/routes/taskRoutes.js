const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET all tasks
router.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// POST a new task
router.post("/tasks", async (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
});

// PUT - Update a task
router.put("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTask);
});

// DELETE - Remove a task
router.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
});

module.exports = router;
