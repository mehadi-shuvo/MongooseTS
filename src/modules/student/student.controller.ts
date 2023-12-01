import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
// import { studentSchema } from './student.validation';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'successfully done!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const findOneStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId: string = req.params.studentId;
    const result = await studentServices.findOneStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'successfully done!',
      data: result,
    });
  } catch (error) {
    // res.status(5000).json({
    //   success: false,
    //   error: error,
    // });

    next(error);
  }
};
const deleteOneStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId: string = req.params.studentId;
    const result = await studentServices.deleteOneStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'successfully done!',
      data: result,
    });
  } catch (error) {
    // res.status(5000).json({
    //   success: false,
    //   error: error,
    // });
    next(error);
  }
};

export const studentControllers = {
  // createStudent,
  getAllStudents,
  deleteOneStudent,
  findOneStudent,
};
