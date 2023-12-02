import express from 'express';
import { academicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../app/config/middlewares/validateRequest';
import { academicValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicValidations.createAcademicSemesterValidationSchema),
  academicSemesterControllers.createAcademicSemester,
);
router.get('/', academicSemesterControllers.getAllSemester);
router.get('/:id', academicSemesterControllers.getOneSemester);
router.patch('/:id', academicSemesterControllers.updateOneSemester);
// router.get('/:studentId', studentControllers.findOneStudent);
// router.delete('/:studentId', studentControllers.deleteOneStudent);

export const academicSemesterRoutes = router;
