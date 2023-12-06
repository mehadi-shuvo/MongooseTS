import { RequestHandler } from 'express';
import { sendResponse } from '../../app/util/sendRespons';
import catchAsync from '../../app/util/catchAsync';
import { DepartmentServices } from './academicDepartment.service';

const createDepartment: RequestHandler = catchAsync(async (req, res) => {
  //   const { password, student: studentData } = await req.body;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = await DepartmentServices.createDepartmentInDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done Department created',
    data: result,
  });
});

const getAllDepartments: RequestHandler = catchAsync(async (req, res) => {
  const result = await DepartmentServices.getAllDepartmentFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'fetched Departments',
    data: result,
  });
});
const getOneDepartment: RequestHandler = catchAsync(async (req, res) => {
  const id: string = req.params.id;
  const result = await DepartmentServices.getOneDepartmentFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'get Department',
    data: result,
  });
});
const updateOneDepartment: RequestHandler = catchAsync(async (req, res) => {
  const id: string = req.params.id;
  const result = await DepartmentServices.updateOneDepartmentFromDB(
    id,
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'well done Department updated',
    data: result,
  });
});

export const DepartmentControllers = {
  createDepartment,
  getAllDepartments,
  getOneDepartment,
  updateOneDepartment,
};
