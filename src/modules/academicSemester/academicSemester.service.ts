import {
  TAcademicSemester,
  TSemesterNameNCodeMapper,
} from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';

const createAcademicSemesterInDB = async (payload: TAcademicSemester) => {
  const semesterNameNCodeMapper: TSemesterNameNCodeMapper = {
    autumn: '01',
    summer: '02',
    fall: '03',
  };
  if (semesterNameNCodeMapper[payload.name] !== payload.code) {
    throw new Error('Give Valid name and code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllSemestersFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};
const getOneSemestersFromDB = async (id: string) => {
  const result = await AcademicSemester.findOne({ _id: id });
  return result;
};
const updateOneSemestersFromDB = async (
  id: string,
  payload: TAcademicSemester,
) => {
  const result = await AcademicSemester.updateOne(
    { _id: id },
    { $set: payload },
  );
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterInDB,
  getAllSemestersFromDB,
  getOneSemestersFromDB,
  updateOneSemestersFromDB,
};
