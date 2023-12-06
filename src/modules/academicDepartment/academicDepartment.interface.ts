import { Types } from 'mongoose';

export type TDepartments = {
  name: string;
  academicFaculty: Types.ObjectId;
};
