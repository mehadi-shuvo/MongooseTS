import config from '../../app/config';
import AcademicSemester from '../academicSemester/academicSemester.model';
import { Student } from '../student/student.interface';
import { studentModel } from '../student/student.model';
import { TUser } from './user.interface';

import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentToDB = async (password: string, studentData: Student) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.DEFAULT_PASS as string);
  userData.role = 'student';

  const admissionSemester = await AcademicSemester.findById(
    studentData.admissionSemester,
  );
  if (admissionSemester) {
    userData.id = await generateStudentId(admissionSemester);
    //create a user;
    const newUser = await User.create(userData); //static instance

    //create student'
    if (Object.keys(newUser).length) {
      studentData.id = newUser.id;
      studentData.user = newUser._id;

      const newStudent = await studentModel.create(studentData);
      return newStudent;
    }
  }
};

export const userServices = {
  createStudentToDB,
};
