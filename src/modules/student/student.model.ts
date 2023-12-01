import { Schema, model } from 'mongoose';
import { Student, StudentMethods, UserName } from './student.interface';
import validator from 'validator';
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value: string) => {
        const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

        if (capitalizedValue.length > 20) {
          throw new Error('String length must not exceed 20 characters');
        }

        return capitalizedValue;
      },
      message: 'give us valid string                                          ',
    },
  },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const studentSchema = new Schema<Student, StudentMethods>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'id required'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: ['female', 'male'],
      required: true,
    },
    dateOfBirth: { type: String, required: true },
    contactNumber: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'O+', 'O-', 'B+', 'B-', 'AB+', 'AB-'],
      required: true,
    },
    Address: { type: String, required: true },
    guardian: {
      fatherName: { type: String, required: true },
      fatherContactNo: { type: String, required: true },
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} IS NOT RIGHT FORM OF AN E-MAIL',
      },
    },
    avatar: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// creating a custom static methods;

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await studentModel.findOne({ id });

  return existingUser;
};

// custom instanc methods

// studentSchema.methods.isExists = async (id: string) => {
//   const existStudent = await studentModel.findOne({ id });

//   return existStudent;
// };

//virtual

studentSchema.virtual('fullName').get(function () {
  return this.name.firstName + this.name.middleName + this.name.lastName;
});

// query middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// model of student==========

export const studentModel = model<Student, StudentMethods>(
  'student',
  studentSchema,
);
