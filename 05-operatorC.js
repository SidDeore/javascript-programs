console.log("========== InterView Eligiblity ==========");
function TCSInterviewEligibility(gradScore,hscScore,sscScore,candidateName){
    var result = gradScore>=70 || hscScore>=80 || sscScore>90 
                 ? `Congrates ${candidateName} you are eligible for TCS interview.`
                 : `Unfortunately ${candidateName} you are not eligible for interview`;
    console.log(`Givan Criteria ${gradScore},${hscScore},${sscScore}.`);
    console.log(result);   
}
TCSInterviewEligibility(80, 86, 90, "Sid");
TCSInterviewEligibility(70, 86, 55, "Vishal");
TCSInterviewEligibility(60, 79, 88, "Dipak");
