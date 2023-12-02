import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';

const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, enum: ['autumn', 'summer', 'fall'], required: true },
    code: { type: String, enum: ['01', '02', '03'], required: true },
    year: { type: String, required: true },
    startsMonth: {
      type: String,
      enum: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      required: true,
    },
    endsMonth: {
      type: String,
      enum: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

AcademicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemesterExists) {
    throw new Error('This Semester Already Exists!!');
  }
  next();
});

// Create a Mongoose model based on the schema
const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
);

export default AcademicSemester;
