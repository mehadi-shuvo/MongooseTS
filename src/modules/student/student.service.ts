// import { Student } from './student.interface';
import { studentModel } from './student.model';

const getAllStudentsFromDB = async () => {
  const result = await studentModel.find();
  return result;
};
const findOneStudentsFromDB = async (id: string) => {
  // const result = await studentModel.findOne({ id });
  const result = await studentModel.aggregate([
    {
      $match: { id: id },
    },
  ]);
  return result;
};
const deleteOneStudentsFromDB = async (id: string) => {
  const result = await studentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  // createStudentToDB,
  getAllStudentsFromDB,
  deleteOneStudentsFromDB,
  findOneStudentsFromDB,
};
