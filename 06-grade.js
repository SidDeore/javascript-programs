console.log("========= If-Else grade system =========");
function gradeCalculation(marks){
    if (marks>=90) {
        console.log(`Funtastic marks: ${marks}, your grade is A++.`);
    } else if(marks>=75 && marks<90) {
        console.log(`Excellent marks: ${marks}, your grade is A.`);
    } else if (marks>=50 && marks<75) {
        console.log(`Good marks: ${marks}, your grade is B.`);
    } else if (marks>=50 && marks<35) {
        console.log(`Marks is ${marks}, your grade C, Need improvement.`);
    } else if(marks<=0 || marks>100 ||marks==""){
        console.log(`${marks}, Please provide valid input.`);
    } else if(marks<35){
        console.log(`Marks is ${marks}, ohhh.., your are fail, you need more focus.`);
    } else{
        console.log(`${marks}, Please provide valid input.`);
    }
}
gradeCalculation(98); 
gradeCalculation(80); 
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150); 
gradeCalculation(-7); 
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);