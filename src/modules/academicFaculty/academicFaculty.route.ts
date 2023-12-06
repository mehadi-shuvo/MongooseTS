import express from 'express';
import { FacultyValidation } from './academicFaculty.validation';
import { facultyControllers } from './academicFaculty.controller';
import validateRequest from '../../app/config/middlewares/validateRequest';
const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(FacultyValidation.facultyValidationSchema),
  facultyControllers.createFaculty,
);
router.get('/', facultyControllers.getAllFaculties);
router.get('/:id', facultyControllers.getOneFaculty);
router.patch('/:id', facultyControllers.updateOneFaculty);
export const facultyRoutes = router;
