import { TFaculty } from './academicFacaulty.interface';
import { Schema, model } from 'mongoose';

const facultySchema = new Schema<TFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Faculty = model<TFaculty>('faculties', facultySchema);
