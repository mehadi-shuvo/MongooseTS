import { TDepartments } from './academicDepartment.interface';
import { Department } from './academicDepertment.model';

const createDepartmentInDB = async (payload: TDepartments) => {
  const result = await Department.create(payload);
  return result;
};

const getAllDepartmentFromDB = async () => {
  const result = await Department.find().populate('academicFaculty');
  return result;
};
const getOneDepartmentFromDB = async (id: string) => {
  const result = await Department.findOne({ _id: id }).populate(
    'academicFaculty',
  );
  return result;
};
const updateOneDepartmentFromDB = async (id: string, payload: TDepartments) => {
  const result = await Department.updateOne({ _id: id }, { $set: payload });
  return result;
};

export const DepartmentServices = {
  createDepartmentInDB,
  getAllDepartmentFromDB,
  getOneDepartmentFromDB,
  updateOneDepartmentFromDB,
};
