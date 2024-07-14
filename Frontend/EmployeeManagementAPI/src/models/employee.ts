import { v4 as uuidv4 } from 'uuid';

export class Employee {
  id: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;

  constructor() {
    this.id = uuidv4(); // Generate a new GUID
    this.phoneNumber = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.department = '';
    this.position = '';
  }
}
