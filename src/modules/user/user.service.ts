import config from '../../app/config';
import { Student } from '../student/student.interface';
import { studentModel } from '../student/student.model';
import { TUser } from './user.interface';

import { User } from './user.model';

const createStudentToDB = async (password: string, studentData: Student) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.DEFAULT_PASS as string);
  userData.role = 'student';
  userData.id = '2020202021';
  //create a user;
  const newUser = await User.create(userData); //static instance

  //create student'
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await studentModel.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentToDB,
};
