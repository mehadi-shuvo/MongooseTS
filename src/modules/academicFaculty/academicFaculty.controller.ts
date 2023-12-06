import { RequestHandler } from 'express';
import { sendResponse } from '../../app/util/sendRespons';
import catchAsync from '../../app/util/catchAsync';
import { FacultyServices } from './academicFaculty.service';

const createFaculty: RequestHandler = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = await req.body;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = await FacultyServices.createFacultyInDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done semester created',
    data: result,
  });
});

const getAllFaculties: RequestHandler = catchAsync(async (req, res) => {
  const result = await FacultyServices.getAllFacultyFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done semester created',
    data: result,
  });
});
const getOneFaculty: RequestHandler = catchAsync(async (req, res) => {
  const id: string = req.params.id;
  const result = await FacultyServices.getOneFacultyFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done semester created',
    data: result,
  });
});
const updateOneFaculty: RequestHandler = catchAsync(async (req, res) => {
  const id: string = req.params.id;
  const result = await FacultyServices.updateOneFacultyFromDB(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done semester updated',
    data: result,
  });
});

export const facultyControllers = {
  createFaculty,
  getAllFaculties,
  getOneFaculty,
  updateOneFaculty,
};
