class person{
    constructor(fullName, age, profession){
        this.fullName = fullName;
        this.age = age;
        this.profession = profession;
    }
}

class student extends person{
    constructor(graduation, fullName, age, profession){
        super(fullName, age, profession);
        this.graduation = graduation;
    }
}

const stdGPP = new student("B.tech", "Sid", 23, "Student");
console.log(stdGPP);
