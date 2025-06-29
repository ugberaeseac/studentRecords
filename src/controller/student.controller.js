const Student = require('../models/student.schema')


const createStudent = async(req, res) => {
    const {firstName, lastName, email, age} = req.body;

    if (!firstName || !lastName || !email || typeof age !== 'number') {
        return res
        .status(400)
        .json({
            message: 'All fields are required and age must be a number'
        });
    }

    try{
        const studentRecord = await Student.findOne({ email });
        if (studentRecord) {
            return res
            .status(409)
            .json({
                message: 'Student record already exists'
            })
        };
        const newStudent = Student({
            firstName,
            lastName,
            email,
            age
        });
        await newStudent.save()
        return res
        .status(201)
        .json({
            message: 'A new student record has been created'
        })
    } catch(error)   {
        console.error('Error creating student record', error)
        return res
        .status(500)
        .json({
            message: 'Internal Server Error'
        })
    }
};


const listStudent = async(req, res) => {
    try{
        const students = await Student.find();
        return res
        .status(200)
        .json({
            message: 'All student records retrieved successfully',
            data: students
        })

    } catch(error) {
        console.error('Error retrieving student records', error)
        return res
        .status(500)
        .json({
            message: 'Internal Server Error'
        })
    }
};


const getStudentById = async() => {

};

const updateStudentRecord = async(req, res) => {

};


const deleteStudent = async(req, res) => {


};

const countStudent = async(req, res) => {
    try {
        const students = await Student.find();
        const count = students.length;
        // const count = await Student.countDocuments();

        return res
        .status(200)
        .json({
            message: 'All student records retrieved successfully',
            totalRecords: count
        })

    } catch(error){
        console.error('Error retrieving student records', error)
        return res
        .status(500)
        .json({
            message: 'Internal Server Error'
        });
    }
};


module.exports = {
    createStudent,
    listStudent,
    updateStudentRecord,
    deleteStudent,
    countStudent
}