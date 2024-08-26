console.log("======= Create the employee class =========");
class employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new employee(22, 'Anil', 'IT', 50000, 'TCS');
const emp_radha = new employee(33, 'Radha', 'HR', 74000, 'Wipro');
const emp_rishi = new employee(55, 'Rishi', 'Finance', 47000, 'TCS');
const emp_sonali = new employee(66, 'Sonali', 'Finance', 45000, 'Infy');
const emp_monika = new employee(77, 'Monika', 'IT', 40000, 'Wipro');
const emp_viny = new employee(88, 'Vinayak', 'IT', 75000, 'TCS');
const emp_mahi = new employee(99, 'Mahesh', 'HR', 85000, 'Infy');

let arrayEmployee =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("======= 1. Log employee who works in 'TCS Company' =========");
for (const element of arrayEmployee) {
    if (element.emp_company == 'TCS') {
        console.log(`Employee name: ${element.emp_name}, Company: ${element.emp_company}`);    
    }
}

console.log("======= 2. Log employee who works in 'Finance Department' =========");
for (const element of arrayEmployee) {
    if (element.emp_dept == 'Finance') {
        console.log(`Employee name: ${element.emp_name}, Department: ${element.emp_dept}`);   
    }
}

console.log("======= 3. Log employee whos name start with 'R'  =========");
for (const element of arrayEmployee) {
    if (element.emp_name.startsWith('R')) {
        console.log(`Employee Details: Employee Id: ${element.emp_id}, Employee Name: ${element.emp_name}, Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);   
    }
}

console.log("======= 4. Log employee whos salary greater than '75000' =========");
for (const element of arrayEmployee) {
    if (element.emp_salary>75000) {
        console.log(`Employee name: ${element.emp_name}, Salary: ${element.emp_salary}, company: ${element.emp_company}`);   
    }
}

console.log("======= 5. Log employee whos salary greater than '50000' and from 'IT Department' =========");
for (const element of arrayEmployee) {
    if (element.emp_salary>=50000 && element.emp_dept=='IT') {
        console.log(`Employee Details: Employee Id: ${element.emp_id}, Employee Name: ${element.emp_name}, Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);   
    }
}

console.log("======= 6. Log employee whos company name 'Infy' =========");
for (const element of arrayEmployee) {
    if (element.emp_company=='Infy') {
        console.log(`Employee Details: Employee Id: ${element.emp_id}, Employee Name: ${element.emp_name}, Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);   
    }
}