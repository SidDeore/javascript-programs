function Bank(bankname, location, ifscCode, branchCode){
    this.bankname = bankname;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
console.log(`====== Log Bank Details =======`);
let yesBank = new Bank("YesBank", "Wakad", "YESB00021", 400021);
console.log(`Bank Details: Name:${yesBank.bankname}, Location:${yesBank.location}, IFSC Code:${yesBank.ifscCode}, Branch Code:${yesBank.branchCode}.`);
let sbiBank = new Bank("SBIBank", "F C Road", "SBIN00049", 400049);
console.log(`Bank Details: Name:${sbiBank.bankname}, Location:${sbiBank.location}, IFSC Code:${sbiBank.ifscCode}, Branch Code:${sbiBank.branchCode}.`);
let mahBank = new Bank("MAHBank", "Kothrud", "MAHB00053", 400053);
console.log(`Bank Details: Name:${mahBank.bankname}, Location:${mahBank.location}, IFSC Code:${mahBank.ifscCode}, Branch Code:${mahBank.branchCode}.`);
let axisBank = new Bank("AxisBank", "Bhosari", "AXIS00077", 400077);
console.log(`Bank Details: Name:${axisBank.bankname}, Location:${axisBank.location}, IFSC Code:${axisBank.ifscCode}, Branch Code:${axisBank.branchCode}.`);
// console.log(`====== Add data members =======`);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log(`====== log open and close time of SBI Bank =======`);
console.log(`SBI Bank Details: Open TIme:${sbiBank.openTime}, and Close Time:${sbiBank.closeTime}`);
console.log(`====== Bank Name and Close Time of Axis Bank =======`);
console.log(`Bank Details: Bank Name:${axisBank.bankname}, Close Time: ${axisBank.closeTime}`);
console.log(`====== Bank Name, Open TIme and Close Time of Yes Bank =======`);
console.log(`Bank Details: Bank Name:${yesBank.bankname}, Open Time:${yesBank.openTime}, and Close Time:${yesBank.closeTime}`);

