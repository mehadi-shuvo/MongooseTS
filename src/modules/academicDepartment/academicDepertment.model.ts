import AppError from '../../app/Errors/appError';
import { TDepartments } from './academicDepartment.interface';
import { Schema, model } from 'mongoose';

const departmentSchema = new Schema<TDepartments>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'faculties',
    },
  },
  {
    timestamps: true,
  },
);

departmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await Department.findOne({ name: this.name });
  if (isDepartmentExist) {
    throw new Error('Department already exist!');
  }
  next();
});
departmentSchema.pre('updateOne', async function (next) {
  const isDepartmentExist = await Department.findOne(this.getQuery());
  if (!isDepartmentExist) {
    throw new AppError(404, 'Department does not exist!');
  }
  next();
});

export const Department = model<TDepartments>('departments', departmentSchema);
