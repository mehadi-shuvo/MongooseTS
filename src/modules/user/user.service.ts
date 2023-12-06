import mongoose from 'mongoose';
import config from '../../app/config';
import AcademicSemester from '../academicSemester/academicSemester.model';
import { Student } from '../student/student.interface';
import { studentModel } from '../student/student.model';
import { TUser } from './user.interface';

import { User } from './user.model';
import { generateStudentId } from './user.utils';
import AppError from '../../app/Errors/appError';
import httpStatus from 'http-status';

const createStudentToDB = async (password: string, studentData: Student) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.DEFAULT_PASS as string);
  userData.role = 'student';

  const admissionSemester = await AcademicSemester.findById(
    studentData.admissionSemester,
  );

  const session = await mongoose.startSession();

  try {
    await session.startTransaction(); // start transaction

    if (admissionSemester) {
      userData.id = await generateStudentId(admissionSemester);
      //create a user transaction-1;
      const newUser = await User.create([userData], { session }); //static instance

      //create student'
      if (!newUser.length) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user!');
      }
      studentData.id = newUser[0].id;
      studentData.user = newUser[0]._id;
      const newStudent = await studentModel.create([studentData], { session });
      if (!newStudent.length) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Student!');
      }

      await session.commitTransaction();
      await session.endSession();
      return newStudent;
    }
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const userServices = {
  createStudentToDB,
};
