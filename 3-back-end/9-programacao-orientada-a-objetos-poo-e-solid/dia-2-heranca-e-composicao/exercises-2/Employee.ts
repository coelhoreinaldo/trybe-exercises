export default interface Employee {
  registration: number;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}