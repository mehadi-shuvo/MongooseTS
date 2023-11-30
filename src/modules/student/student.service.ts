import { Student } from './student.interface';
import { studentModel } from './student.model';

const createStudentToDB = async (studentData: Student) => {
  if (await studentModel.isUserExists(studentData.id)) {
    throw new Error('User Already exists!');
  }
  const result = await studentModel.create(studentData); //static instance

  return result;

  // const student = new studentModel(studentData);
  // if (await student.isExists(studentData.id)) {
  //   throw new Error('User already exist! ');
  // }
  // const result = await student.save();

  // return result;
};

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
  createStudentToDB,
  getAllStudentsFromDB,
  deleteOneStudentsFromDB,
  findOneStudentsFromDB,
};
