var voteEligiblity=function(age){
    if(age<=0 || age>130 ) {
        console.log(`your Age is: ${age} and It is Invalid Data`);
    }else{
        if (age>17) {
            console.log(`your Age is: ${age} and Your are eligible for vote`); 
        } else {
            console.log(`your Age is: ${age} and Your are not eligible for vote`);  
        }
    }
}
voteEligiblity(45);
voteEligiblity(17);
voteEligiblity(8);
voteEligiblity(20);
voteEligiblity(-10);
voteEligiblity(200);
voteEligiblity(0);
voteEligiblity(null);