console.log("======== Assignment-B: Traversing array of objects ========");

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

console.log("======== 1. Get the list of all employee salary & log new array on console. ========");
let arraySalary = arrayEmployee.map((element)=>{
    return element.emp_salary;
});
console.log(arraySalary);

console.log("======== 2. Get the list of departments & log on console ========");
let arrayDept = arrayEmployee.map((element)=>{
    return element.emp_dept;
});
console.log(arrayDept);

console.log("======== 3. Get the list of employee id’s and log on console ========");
let arrayId = arrayEmployee.map((element)=>{
    return element.emp_id;
});
console.log(arrayId);
