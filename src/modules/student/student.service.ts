// import { Student } from './student.interface';
import mongoose from 'mongoose';
import { studentModel } from './student.model';
import AppError from '../../app/Errors/appError';
import httpStatus from 'http-status';
import { User } from '../user/user.model';
import { Student } from './student.interface';

const getAllStudentsFromDB = async () => {
  const result = await studentModel
    .find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
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
const updateStudentsInToDB = async (id: string, payload: Partial<Student>) => {
  const { name, guardian, ...remainingData } = payload;
  const modifiedData: Record<string, unknown> = { ...remainingData };

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedData[`guardian.${key}`] = value;
    }
  }
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedData[`name.${key}`] = value;
    }
  }
  const updatedStudent = await studentModel.findOneAndUpdate(
    { id },
    modifiedData,
    {
      new: true,
      runValidators: true,
    },
  );

  return updatedStudent;
};
const deleteOneStudentsFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedStudent = await studentModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete!');
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete!');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete!');
  }
};

export const studentServices = {
  // createStudentToDB,
  updateStudentsInToDB,
  getAllStudentsFromDB,
  deleteOneStudentsFromDB,
  findOneStudentsFromDB,
};
