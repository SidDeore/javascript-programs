console.log("======== Assignment-B: Sorting of Object ========");

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("======== 1. Sort the ‘arrayEmployees’ in descending order of Employee Id’s and log employee details- Id, Name, Department ========");
let empId = arrayEmployee.sort((e1, e2)=>{
    return e1.emp_id<e2.emp_id ? 1 : -1;
});
for (const element of empId) {
    console.log(`Employee Id: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Dept; ${element.emp_dept}`);   
}

console.log("======== 2. Sort the ‘arrayEmployees’ in ascending order of employee department & log Id, dept, & Company ========");
let empDept = arrayEmployee.sort((e1, e2)=>{
    return e1.emp_dept>e2.emp_dept ? 1 : -1;
});
for (const element of empId) {
    console.log(`Employee Id: ${element.emp_id}, Employee Dept; ${element.emp_dept}, Employee Company: ${element.emp_company}`);   
}

console.log("======== 3. Sort the employee array in descending order of employee salary and log Name, Salary & Company ========");
let empSalary = arrayEmployee.sort((e1, e2)=>{
    return e1.emp_salary<e2.emp_salary ? 1 : -1;
});
for (const element of empId) {
    console.log(`Employee name: ${element.emp_name}, Employee Salary: ${element.emp_salary} Employee Company: ${element.emp_company}`);   
}


