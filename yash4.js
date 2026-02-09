    const express = require("express");
    const app = express();

    app.use(express.json());

    let students = [
    { id: 1, name: "Aryan", city: "Delhi", marks: 60 },
    { id: 2, name: "Ryan", city: "Delhi", marks: 60 },
    { id: 3, name: "Rahul", city: "Mumbai", marks: 70 }
    ];

    // GET all students
    app.get("/students", (req, res) => {
    res.json(students);
    });

    // DELETE student by id
    app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deleteStudent = students.splice(index, 1);

    res.json({
        message: "Student deleted successfully",
        deletedStudent: deleteStudent[0]
    });
    });

    app.listen(2300, () => {
    console.log("Server started on 2300");
    });