type Admin = {
  name: string;
  privillage: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Lokesh',
  privillage: ['create-server'],
  startDate: new Date(),
}; //Property 'startDate' is missing in type
