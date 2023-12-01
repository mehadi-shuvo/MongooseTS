import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.service';
import { sendResponse } from '../../app/util/sendRespons';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = await req.body;
    //   const { error, value } = studentSchema.validate(student);

    const result = await userServices.createStudentToDB(password, studentData);
    // res.status(200).json({
    //   success: true,
    //   message: 'Student created successfully.',
    //   data: result,
    // });

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'well done student created',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  createStudent,
};
