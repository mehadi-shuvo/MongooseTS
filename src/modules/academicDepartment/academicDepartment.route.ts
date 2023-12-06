import express from 'express';
import validateRequest from '../../app/config/middlewares/validateRequest';
import { DepartmentValidation } from './academicDepartment.validation';
import { DepartmentControllers } from './academicDepartment.controller';
const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(DepartmentValidation.departmentValidationSchema),
  DepartmentControllers.createDepartment,
);
router.get('/', DepartmentControllers.getAllDepartments);
router.get('/:id', DepartmentControllers.getOneDepartment);
router.patch('/:id', DepartmentControllers.updateOneDepartment);
export const DepartmentRoutes = router;
