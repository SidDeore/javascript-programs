console.log("========= Step 1: male Marriage age check ========= ");
function maleMarriageEligibility(gender, age, boyName){
    var check = gender>="Male" && age>=21 ? `Hey ${boyName} you are eligible for Marriage.` : `ohhh, ${boyName} you are not eligible for Marriage.`;
    console.log(check);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log("========= Step 2: Female Marriage age check ========= ");
function femaleMarriageEligibility(gender, age, girlName){
    var check = gender>="Female" && age>=18 ? `Hey ${girlName} you are eligible for Marriage.` : `ohhh, ${girlName} you are not eligible for Marriage.`;
    console.log(check);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");