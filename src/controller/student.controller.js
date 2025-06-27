const Student = require('../models/student.schema')


const createStudent = async(req, res) => {
    const {firstName, lastName, email, age} = req.body;

    if (firstName === "" || lastName === "" || email === "" || !age) {
        return res
        .status(400)
        .json({
            message: 'All fields are required'
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


const listStudent = async() => {

};


const getStudentById = async() => {

};

const updateStudentRecord = async() => {

};


const deleteStudent = async() => {


};

const countStudent = async() => {

};
