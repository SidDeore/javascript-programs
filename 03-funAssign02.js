console.log("======== function with arguments and no return value =============");
function bankDetails(bankName,accountNum,location,pinCode){
    var result=bankName+accountNum+location+pinCode;
    console.log("Bank Details:",result);
}
bankDetails("CITI Bank ",3456782345,' Pune ',431202);
bankDetails("Axis Bank ",7856782345,' Mumbai ',441202);
bankDetails("HDFC Bank ", 8956782345,' Pune ',411052);
