import { RequestHandler } from 'express';
import { sendResponse } from '../../app/util/sendRespons';
import catchAsync from '../../app/util/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = await req.body;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = await AcademicSemesterServices.createAcademicSemesterInDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done semester created',
    data: result,
  });
});

const getAllSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllSemestersFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done semester created',
    data: result,
  });
});
const getOneSemester: RequestHandler = catchAsync(async (req, res) => {
  const id: string = req.params.id;
  const result = await AcademicSemesterServices.getOneSemestersFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done semester created',
    data: result,
  });
});
const updateOneSemester: RequestHandler = catchAsync(async (req, res) => {
  const id: string = req.params.id;
  const result = await AcademicSemesterServices.updateOneSemestersFromDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done semester updated',
    data: result,
  });
});

export const academicSemesterControllers = {
  createAcademicSemester,
  getAllSemester,
  getOneSemester,
  updateOneSemester,
};
