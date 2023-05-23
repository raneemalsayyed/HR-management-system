
'use strict';


const allEmployees =[];
function Employees( name, department, level, image) {
    this.employeeID = '';
    this.fullName = name;
    this.department =department;
    this.level =level;
    this.image =image;
    this.Salary ='';
    this.netSalary ='';
    allEmployees.push(this);
}

Employees.prototype.renderEmployeeInformation =function (){
     document.write(`<p> Employee name: ${this.fullName}<br/>
     Department: ${this.department}<br/>
     Employee salary: ${this.Salary}
     </p><br/>`
     )
}

Employees.prototype.generateEmployeeID =function () {
    const min = 1000;
    const max = 9999;
    this.employeeID = Math.floor(Math.random() * (max - min) + min);
}


Employees.prototype.generateSalary = function randomSalary() {
        function getRandomSalaryValue(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            const randomSalaryValue = Math.floor(Math.random() * (max - min) + min);
            return randomSalaryValue
        }
    if (this.level === 'Junior') {
        this.Salary = getRandomSalaryValue(500, 1000)
        this.netSalary = (this.Salary - (this.Salary * (7.5 / 100)))
    } else if (this.level === 'Mid-Senior') {
        this.Salary = getRandomSalaryValue(1000, 1500)
        this.netSalary = (this.Salary - (this.Salary * (7.5 / 100)))
    } else {
        this.Salary = getRandomSalaryValue(1500, 2000)
        this.netSalary = (this.Salary - (this.Salary * (7.5 / 100)))
    }
}


const ghazi = new Employees ("Ghazi Samer" ,"Administration", "Senior", "https://cdn.onlinewebfonts.com/svg/img_88072.png");
const lana = new Employees ("Lana Ali" ,"Finance", "Senior", "https://cdn.onlinewebfonts.com/svg/img_318568.png");
const tamara = new Employees ("Tamara Ayoub" ,"Marketing", "Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-rQ-Q2mHYBx7EkvboCDQBmPEkvtWao_G9CJR5XMz5YqXvL2kql9le36ecm58kw58b5k&usqp=CAU");
const safi = new Employees ("Safi Walid" ,"Administration", "Mid-Senior", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWs3eB1DfKh-x4-K2gCp-tcE-9V9vvlJOa_CmuYliV0hhA3GPjtXiBzA-xh8jc3MxndsI&usqp=CAU");
const omar = new Employees ("Omar Zaid" ,"Development", "Senior", "https://icon-library.com/images/personal-icon/personal-icon-4.jpg");
const rana = new Employees ("Rana Saleh" ,"Development", "Junior", "https://cdn.onlinewebfonts.com/svg/img_389211.png");
const hadi = new Employees ("Hadi Ahmad" ,"Finance", "Mid-Senior", "https://cdn-icons-png.flaticon.com/512/310/310869.png");


for(let i=0; i< allEmployees.length; i++){
    allEmployees[i].generateEmployeeID();
    allEmployees[i].generateSalary();
    allEmployees[i].renderEmployeeInformation();
}

console.log(allEmployees);

