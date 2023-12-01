import { Model, Types } from 'mongoose';
import {} from 'mongoose';

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  password: string;
  name: UserName;
  user: Types.ObjectId;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'O+' | 'O-' | 'B+' | 'B-' | 'AB+' | 'AB-';
  Address: string;
  guardian: {
    fatherName: string;
    fatherContactNo: string;
  };
  email: string;
  avatar?: string;
  isDeleted: boolean;
};

// static method
export interface StudentMethods extends Model<Student> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<Student | null>;
}

// export type StudentMethods = {
//   // eslint-disable-next-line no-unused-vars
//   isExists(id: string): Promise<Student | null>;
// };

// export type StudentMethodsModel = Model<
//   Student,
//   Record<string, never>,
//   StudentMethods
// >;
