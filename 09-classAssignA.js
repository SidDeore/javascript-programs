console.log("======== Step-1: Vechicle Details ==========");
class vechicle{
    constructor(brandName, model, year, running, selling_cost){
        this.brandName = brandName;
        this.model = model;
        this.year = year;
        this.running = running;
        this.selling_cost = selling_cost;
    }
    show(){
        console.log(`Vechicle Details --> 1.Brand_name:${this.brandName}, 2.Model:${this.model}, 3.Purchase_year:${this.year}, 4.Vichicle_running:${this.running}, 5.Selling_Cost:${this.selling_cost}.`);
    }
}
const BMW = new vechicle("BMW", "X1", 2015, 112000, 1000000);
BMW.show();

const suzuki = new vechicle("Suzuki", "Ciaz", 2018, 80000, 505000);
suzuki.show();

const RR = new vechicle("RR", "Fantum", 2020, 10000, "2.5cr");
RR.show();

const Hyundai = new vechicle("Hyundai", "Creta", 2022, 45000, 900000);
Hyundai.show();

const Skoda = new vechicle("Skoda", "Kushaq", 2021, 50000, 800000);
Skoda.show();

console.log("======== Step-2: College Class ==========");
class college {
    constructor(collegeName, type, address, pinCode) {
        this.collegeName = collegeName;
        this.type = type;
        this.address = address;
        this.pinCode = pinCode;
    }
    display(){
        console.log(`College Detials--> 1.College_Name:${this.collegeName}, 2.Type:${this.type}, 3.Address:${this.address}, 4.PinCode:${this.pinCode}.`);
    }
}
const engineering = new college("G H Raisoni", "Engineering", "Wagholi", 412207);
engineering.display();

const medical = new college("B J Medical", "Medical", "Pune Station", 411006);
medical.display();

const law = new college("Govt. Law college", "law", "Nal Stop", 411035);
law.display();

const pharmacy = new college("Dr. D Y Patil", "Pharmacy", "Pimpri", 411068);
pharmacy.display();