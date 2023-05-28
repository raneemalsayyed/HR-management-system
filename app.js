
'use strict';
let main= document.getElementsByTagName ("main")[0];

let administrationDiv =document.createElement("div");
let financeDiv =document.createElement("div");
let marketingDiv =document.createElement("div");
let developmentDiv =document.createElement("div");
main.appendChild(administrationDiv);
main.appendChild(financeDiv);
main.appendChild(marketingDiv);
main.appendChild(developmentDiv);
main.style.display='flex';
main.style.justifyContent='center';
main.style.fontFamily='roboto';
main.style.backgroundColor ='#EEEEEE'
main.style.paddingTop ='15px'




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

Employees.prototype.generateEmployeeID =function () {
    const min = 1000;
    const max = 9999;
    this.employeeID = Math.floor(Math.random() * (max - min) + min);
}


Employees.prototype.renderEmployeeInformation =function (){
    let divE = document.createElement("div");
divE.style.color='white'
divE.style.padding ='30px'
divE.style.width ='380px'
divE.style.height ='450px'
divE.style.textAlign ='center'
divE.style.borderRadius ='20px'
divE.style.margin ='25px'



    
    let employeeImage=document.createElement("img");
    employeeImage.src= this.image;
    employeeImage.alt= this.fullName;
    employeeImage.style.width='325px';
    employeeImage.style.height='325px';
    divE.appendChild(employeeImage);

    
    let name =document.createElement("h3");
    name.textContent= `Name: ${this.fullName} - ID: ${this.employeeID}`;
    divE.appendChild(name);


    let Dep = document.createElement("h3");
    Dep.textContent= `Department: ${this.department} - Level: ${this.level}`;
    divE.appendChild(Dep);


    let salary =document.createElement("h3");
    salary.textContent= this.Salary;
    divE.appendChild(salary);



if(this.department === 'Administration') {
    administrationDiv.appendChild(divE);
divE.style.backgroundColor='#27374D'

}
else if (this.department === 'Finance'){
    financeDiv.appendChild(divE);
divE.style.backgroundColor='#526D82'

}
else if (this.department === 'Marketing'){
    marketingDiv.appendChild(divE);
divE.style.backgroundColor='#8BACAA'

}
else {
    developmentDiv.appendChild(divE);
divE.style.backgroundColor='#0C134F'

}
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


const ghazi = new Employees ("Ghazi Samer" ,"Administration", "Senior", "./assets/Ghazi.jpg");
const lana = new Employees ("Lana Ali" ,"Finance", "Senior", "./assets/Lana.jpg");
const tamara = new Employees ("Tamara Ayoub" ,"Marketing", "Senior", "./assets/Tamara.jpg");
const safi = new Employees ("Safi Walid" ,"Administration", "Mid-Senior", "./assets/Safi.jpg");
const omar = new Employees ("Omar Zaid" ,"Development", "Senior", "./assets/Omar.jpg");
const rana = new Employees ("Rana Saleh" ,"Development", "Junior", "./assets/Rana.jpg");
const hadi = new Employees ("Hadi Ahmad" ,"Finance", "Mid-Senior", "./assets/Hadi.jpg");


for(let i=0; i< allEmployees.length; i++){
    allEmployees[i].generateEmployeeID();
    allEmployees[i].generateSalary();
    allEmployees[i].renderEmployeeInformation();
}

console.log(allEmployees);


let footer= document.getElementsByTagName ("footer")[0];
footer.style.display ='flex'
footer.style.flexDirection ='column'
footer.style.alignItems ='center'
footer.style.backgroundColor= '#DBDFEA'
footer.style.paddingTop ='25px'

let iconsDiv = document.getElementsByClassName('icons')[0];
iconsDiv.style.display ='flex'



let header =document.getElementsByTagName ("header")[0];
header.style.justifyContent ='right'
header.style.fontSize ='40px'
header.style.backgroundColor ='white'
header.style.display ='flex'
header.style.paddingLeft ='25px'
header.style.paddingRight ='25px'
header.style.paddingBottom ='10px'





394867
let ul =document.getElementsByTagName ("ul")[0];
let li =document.getElementsByTagName ("li");

ul.style.display = 'flex' 
ul.style.gap = '25px' 
ul.style.margin = '15px' 
ul.style.padding ='15px'



for (let index = 0; index < li.length; index++) {
    const element = li[index];
    element.style.listStyle= 'none'
    
}