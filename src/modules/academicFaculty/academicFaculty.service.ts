import { TFaculty } from './academicFacaulty.interface';
import { Faculty } from './academicFacaulty.mode';

const createFacultyInDB = async (payload: TFaculty) => {
  const result = await Faculty.create(payload);
  return result;
};

const getAllFacultyFromDB = async () => {
  const result = await Faculty.find();
  return result;
};
const getOneFacultyFromDB = async (id: string) => {
  const result = await Faculty.findOne({ _id: id });
  return result;
};
const updateOneFacultyFromDB = async (id: string, payload: TFaculty) => {
  const result = await Faculty.updateOne({ _id: id }, { $set: payload });
  return result;
};

export const FacultyServices = {
  createFacultyInDB,
  getAllFacultyFromDB,
  getOneFacultyFromDB,
  updateOneFacultyFromDB,
};
