import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

router.get('/', studentControllers.getAllStudents);
router.get('/:studentId', studentControllers.findOneStudent);
router.delete('/:studentId', studentControllers.deleteOneStudent);

export const studentRoutes = router;
