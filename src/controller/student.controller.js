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
            message: 'A new student record has been created',
            data: newStudent
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


const listStudents = async(req, res) => {
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


const updateStudentRecord = async(req, res) => {

    const { _id } = req.params;
    const { firstName, lastName, email, age } = req.body;

    try {
        const student = await Student.findById({ _id })
        if (!student) {
            return res
            .status(404)
            .json({
                message: 'The student record you want to update does not exist'
            })
        }

        student.firstName = firstName || student.firstName;
        student.lastName = lastName || student.lastName;
        //student.email = email || student.email;
        student.age = age || student.age

        if (email && email !== student.email) {
            const checkStudent = await Student.findOne({ email });
            if (checkStudent) {
                return res
                .status(409)
                .json({
                    message: 'This email address has been used by another student'
                })
            }
        }
        student.email = email;

        await student.save()
        return res
        .status(200)
        .json({
            message: 'Student record updated successfully',
            data: student
        })

    } catch(error) {
        console.error('Error updating student records', error);
        return res
        .status(500)
        .json({
            message: 'Internal Server Error'
        })
    }
};


const deleteStudent = async(req, res) => {

    const { _id } = req.params;
    
    try {
        const student = await Student.findByIdAndDelete({ _id });
        if (!student) {
            return res
            .status(404)
            .json({
                message: 'The student record you want to delete does not exist'
            })    
        }

        return res
        .status(200)
        .json({
            message: 'Student record deleted successfully',
            data: student
        });

    } catch(error) {
        console.error('There was a problem deleting student record', error);
        return res
        .status(500)
        .json({
            message: 'Internal Server Error'
        })
    }

};

const countStudent = async(req, res) => {
    try {
        //const students = await Student.find();
        //const count = students.length;
        const count = await Student.countDocuments();

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
    listStudents,
    updateStudentRecord,
    deleteStudent,
    countStudent
}