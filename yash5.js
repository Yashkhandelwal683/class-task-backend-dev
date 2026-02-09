const express = require("express");
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "yash", city: "mathura", marks: 60 },
    { id: 2, name: "shubham", city: "mathura", marks: 50 },
    { id: 3, name: "yash", city: "mathura", marks: 80 }
];

app.get("/students", (req, res) => {
    res.json(students);
});


app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const student = students[index];

    if (student.marks >= 70) {
        return res.status(403).json({   
            success: false,
            message: "Deletion denied. Student has marks >= 70."
        });
    }

   
    students.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Student deleted successfully",
        deletedStudent: student
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
