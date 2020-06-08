import { CourseTime } from './course-time.module';

export interface Course {

  id: number;
  name: string;
  classId: string[];
  credits: number;
  required: boolean;
  maxStudents: number;
  teacherId: string;
  currentStudents: number;
  time: CourseTime[];
}
