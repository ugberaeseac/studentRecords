const express = require('express');
const { createStudent, listStudents, updateStudentRecord, deleteStudent, countStudent } = require('../controller/student.controller')

const router = express.Router()


router.post('/students', createStudent)
router.get('/students', listStudents)
router.put('/students/:id', updateStudentRecord)
router.delete('/students/:id', deleteStudent)
router.get('/students/count', countStudent)


module.exports = router