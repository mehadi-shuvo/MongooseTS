import { Router } from 'express';
import { UserRoutes } from '../../modules/user/user.router';
import { studentRoutes } from '../../modules/student/student.router';
import { academicSemesterRoutes } from '../../modules/academicSemester/academicSemester.route';
import { facultyRoutes } from '../../modules/academicFaculty/academicFaculty.route';
import { DepartmentRoutes } from '../../modules/academicDepartment/academicDepartment.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/academic-semester',
    route: academicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: facultyRoutes,
  },
  {
    path: '/academic-departments',
    route: DepartmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
