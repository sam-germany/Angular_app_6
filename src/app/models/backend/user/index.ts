import {Employee, Recruiter} from './roles';
import { firestore } from 'firebase/app';


export * from './roles';


export interface User {
  uid: string;
  name: string;
  photoURL: string,
  email: string;
  country: string;
  about?: string;
  roleId: string;
  role: Employee | Recruiter;
  updated?: firestore.FieldValue;
}
