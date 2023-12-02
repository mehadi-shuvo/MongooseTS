import { Request, Response } from 'express';
import { studentServices } from './student.service';
import catchAsync from '../../app/util/catchAsync';
// import { studentSchema } from './student.validation';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await studentServices.getAllStudentsFromDB();
  res.status(200).json({
    success: true,
    message: 'successfully done!',
    data: result,
  });
});
const findOneStudent = catchAsync(async (req: Request, res: Response) => {
  const studentId: string = req.params.studentId;
  const result = await studentServices.findOneStudentsFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'successfully done!',
    data: result,
  });
});
const deleteOneStudent = catchAsync(async (req: Request, res: Response) => {
  const studentId: string = req.params.studentId;
  const result = await studentServices.deleteOneStudentsFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'successfully done!',
    data: result,
  });
});

export const studentControllers = {
  // createStudent,
  getAllStudents,
  deleteOneStudent,
  findOneStudent,
};
