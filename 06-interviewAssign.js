console.log(`=========== Interview Eligibility If-else ============`);
var interviewEligibility = function(gradScore,hscScore,sscScore,candidateName) {
    console.log(`Givan Criteria: ${gradScore},${hscScore},${sscScore}`);
    if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview.`);
    } else {
        console.log(`Unfortunately, ${candidateName} you are not eligible for interview. `);
    }
}
// console.log(`========a);
interviewEligibility(80, 86, 90, "Sid");
interviewEligibility(70, 65, 55, "Vishal");
interviewEligibility(60, 79, 88, "Dipak");