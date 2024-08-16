console.log("========= SBI Bank Details =========");
let sbiBank={
    bankName: "SBI Bank",
    location: "SB Road",
    accountNo: 88800096781,
    ifsc: "SBIN00019",
    interestRate: 10.50,
    showDetails : function(){
        console.log(`bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifsc Code: ${this.ifsc}, interestRtae: ${this.interestRate}`);
    }
}
sbiBank.showDetails();

console.log("========= Axis Bank Details =========");
let axisBank={
    bankName: "Axis Bank",
    location: "FC Road",
    accountNo: 454596782139,
    ifsc: "axisfc0042",
    interestRate: 10.96,
    showDetails : function(){
        console.log(`bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifsc Code: ${this.ifsc}, interestRtae: ${this.interestRate}`);
    }
}
axisBank.showDetails();

console.log("========= HDFC Bank Details =========");
let hdfcBank={
    bankName:"HDFC Bank",
    location: "Kothrud",
    accountNo: 6667779912654,
    ifsc: "hdfc00056",
    interestRate: 12.3,
    showDetails : function(){
        console.log(`bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifsc Code: ${this.ifsc}, interestRtae: ${this.interestRate}`);
    }
}
hdfcBank.showDetails();

console.log("========= Yes Bank Details =========");
let yesBank={
    bankName: "Yes Bank",
    location: "Shivajinagar",
    accountNo: 5687985634789,
    ifsc: "yesbank0078",
    interestRate: 9.50,
    showDetails : function(){
        console.log(`bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifsc Code: ${this.ifsc}, interestRtae: ${this.interestRate}`);
    }
}
yesBank.showDetails();