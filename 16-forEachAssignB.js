console.log("======== Assignment-B: forEach() object ========");

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

console.log("======== 1. Find out the 'TCS' employee details and log only name & company on console ========");
arrayEmployee.forEach(element => {
    if (element.emp_company == 'TCS') {
        console.log(`Employee Name: ${element.emp_name}, Company: ${element.emp_company}`);
    }
});

console.log("======== 2. Find the employees with salary greater than or equal 50000 ========");
arrayEmployee.forEach(element => {
    if (element.emp_salary >= 50000) {
        console.log(`Employee Details: Employee id: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Dept: ${element.emp_dept}, salary: ${element.emp_salary} Company: ${element.emp_company}`);
    }
});

console.log("======== 3. Find the sum of all employees salary and log on console ========");
let empSalary = 0;
arrayEmployee.forEach(element => {
    empSalary = element.emp_salary + empSalary;
});
console.log(`Sum of all employee Salary: ${empSalary}`);

console.log("======== 4. Find the average salary and log on console ========");
let empSalary1 = 0;
arrayEmployee.forEach(element => {
    empSalary1 = element.emp_salary + empSalary1;
});
let avgSalary = empSalary1/arrayEmployee.length;
console.log(`Sum of all employee Salary: ${avgSalary}`);

console.log("======== 5. Find the 'IT' OR 'HR department employees whose salary is greater than or equal to 75000 ========");
arrayEmployee.forEach(element => {
    if (element.emp_dept == 'IT' || element.emp_dept == 'HR' ) {
        if ( element.emp_salary >= 75000) {
            console.log(`Employee Details: Employee id: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Dept: ${element.emp_dept}, salary: ${element.emp_salary} Company: ${element.emp_company}`); 
        }
    }
});