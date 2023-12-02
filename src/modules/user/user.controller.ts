import { RequestHandler } from 'express';
import { userServices } from './user.service';
import { sendResponse } from '../../app/util/sendRespons';
import catchAsync from '../../app/util/catchAsync';

const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { password, student: studentData } = await req.body;

  const result = await userServices.createStudentToDB(password, studentData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done student created',
    data: result,
  });
});

export const userControllers = {
  createStudent,
};
