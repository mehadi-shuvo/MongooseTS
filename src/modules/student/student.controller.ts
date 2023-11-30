import { Request, Response } from 'express';
import { studentServices } from './student.service';
import { studentSchema } from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = await req.body;
    const { error, value } = studentSchema.validate(student);
    if (error) {
      return res.status(500).json({
        success: false,
        message: 'ERROR FOUND',
        data: error,
      });
    }
    const result = await studentServices.createStudentToDB(value);
    res.status(200).json({
      success: true,
      message: 'Student created successfully.',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || 'ERROR FOUND',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'successfully done!',
      data: result,
    });
  } catch (error) {
    res.status(5000).json({
      success: false,
      error: error,
    });
  }
};
const findOneStudent = async (req: Request, res: Response) => {
  try {
    const studentId: string = req.params.studentId;
    const result = await studentServices.findOneStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'successfully done!',
      data: result,
    });
  } catch (error) {
    res.status(5000).json({
      success: false,
      error: error,
    });
  }
};
const deleteOneStudent = async (req: Request, res: Response) => {
  try {
    const studentId: string = req.params.studentId;
    const result = await studentServices.deleteOneStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'successfully done!',
      data: result,
    });
  } catch (error) {
    res.status(5000).json({
      success: false,
      error: error,
    });
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  deleteOneStudent,
  findOneStudent,
};
