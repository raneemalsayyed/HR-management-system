
const mainHTML = document.getElementsByTagName('main')

let ghazi = {
    employeeID: '',
    FullName: 'Ghazi Samer',
    Department: 'Administration',
    level: 'Senior',
    Image: 'https://cdn.onlinewebfonts.com/svg/img_88072.png',
    Salary: '',
    netSalary: '',
    getEmployeeDetails: function () {
        return `Employee name: ${this.FullName}
        Employee salary: ${this.Salary}`
    },
    generateEmployeeID: function () {
        const min = 1000;
        const max = 9999;
        this.employeeID = Math.floor(Math.random() * (max - min) + min);
    }
}
ghazi.generateEmployeeID();

ghazi.generateSalary = function randomSalary() {
    function getRandomSalaryValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log('r minGhazi', min);
        console.log('r maxGazi', max);
        const randomSalaryValue = Math.floor(Math.random() * (max - min) + min);
        console.log('randomSalaryGhazi', randomSalaryValue);
        console.log('taxGhazi', (randomSalaryValue * (7.5 / 100)))
        return randomSalaryValue
    }
    console.log('levelGhazi', this.level);
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
ghazi.generateSalary();
console.log('netSalaryGhazi', ghazi.netSalary);




let lana = {
    employeeID: '',
    FullName: 'Lana Ali',
    Department: 'Finance',
    level: 'Senior',
    Image: 'https://cdn.onlinewebfonts.com/svg/img_318568.png',
    Salary: '',
    netSalary: '',
    getEmployeeDetails: function () {
        return `Employee name: ${this.FullName}
        Employee salary: ${this.Salary}`
    },
    generateEmployeeID: function () {
        const min = 1000;
        const max = 9999;
        this.employeeID = Math.floor(Math.random() * (max - min) + min);
    }
}
lana.generateEmployeeID();
lana.generateSalary = function randomSalary() {
    function getRandomSalaryValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log('r minlana', min);
        console.log('r maxlana', max);
        const randomSalaryValue = Math.floor(Math.random() * (max - min) + min);
        console.log('randomSalarylana', randomSalaryValue);
        console.log('taxLana', (randomSalaryValue * (7.5 / 100)))

        return randomSalaryValue

    }
    console.log('levellana', this.level);

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
lana.generateSalary();
console.log('netSalaryLana', lana.netSalary);









let tamara = {
    employeeID: '',
    FullName: 'Tamara Ayoub',
    Department: 'Marketing',
    level: 'Senior',
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-rQ-Q2mHYBx7EkvboCDQBmPEkvtWao_G9CJR5XMz5YqXvL2kql9le36ecm58kw58b5k&usqp=CAU',
    Salary: '',
    netSalary: '',
    getEmployeeDetails: function () {
        return `Employee name: ${this.FullName}
        Employee salary: ${this.Salary}`
    },
    generateEmployeeID: function () {
        const min = 1000;
        const max = 9999;
        this.employeeID = Math.floor(Math.random() * (max - min) + min);
    }
}
tamara.generateEmployeeID();
tamara.generateSalary = function randomSalary() {
    function getRandomSalaryValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log('r mintamara', min);
        console.log('r maxtamara', max);
        const randomSalaryValue = Math.floor(Math.random() * (max - min) + min);
        console.log('randomSalaryTamara', randomSalaryValue);
        console.log('taxTamara', (randomSalaryValue * (7.5 / 100)))
        return randomSalaryValue

    }
    console.log('levelTamara', this.level);

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
tamara.generateSalary();
console.log('netSalaryTamara', tamara.netSalary);






let safi = {
    employeeID: '',
    FullName: 'Safi Walid',
    Department: 'Administration',
    level: 'Mid-Senior',
    Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWs3eB1DfKh-x4-K2gCp-tcE-9V9vvlJOa_CmuYliV0hhA3GPjtXiBzA-xh8jc3MxndsI&usqp=CAU',
    Salary: '',
    netSalary: '',
    getEmployeeDetails: function () {
        return `Employee name: ${this.FullName}
        Employee salary: ${this.Salary}`
    },
    generateEmployeeID: function () {
        const min = 1000;
        const max = 9999;
        this.employeeID = Math.floor(Math.random() * (max - min) + min);
    }
}
safi.generateEmployeeID();
safi.generateSalary = function randomSalary() {
    function getRandomSalaryValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log('r minsafi', min);
        console.log('r maxsafi', max);
        const randomSalaryValue = Math.floor(Math.random() * (max - min) + min);
        console.log('randomSalarySafi', randomSalaryValue);
        console.log('taxSafi', (randomSalaryValue * (7.5 / 100)))
        return randomSalaryValue

    }
    console.log('levelSafi', this.level);

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
safi.generateSalary();
console.log('netSalarySafi', safi.netSalary);










let omar = {
    employeeID: '',
    FullName: 'OmarZaid',
    Department: 'Development',
    level: 'Senior',
    Image: 'https://icon-library.com/images/personal-icon/personal-icon-4.jpg',
    Salary: '',
    netSalary: '',
    getEmployeeDetails: function () {
        return `Employee name: ${this.FullName}
        Employee salary: ${this.Salary}`
    },
    generateEmployeeID: function () {
        const min = 1000;
        const max = 9999;
        this.employeeID = Math.floor(Math.random() * (max - min) + min);
    }
}
omar.generateEmployeeID();
omar.generateSalary = function randomSalary() {
    function getRandomSalaryValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log('r minOmar', min);
        console.log('r maxOmar', max);
        const randomSalaryValue = Math.floor(Math.random() * (max - min) + min);
        console.log('randomSalaryOmar', randomSalaryValue);
        console.log('taxOmar', (randomSalaryValue * (7.5 / 100)))
        return randomSalaryValue

    }
    console.log('levelOmar', this.level);

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
omar.generateSalary();
console.log('netSalaryOmar', omar.netSalary);








let rana = {
    employeeID: '',
    FullName: 'RanaSaleh',
    Department: 'Development',
    level: 'Junior',
    Image: 'https://cdn.onlinewebfonts.com/svg/img_389211.png',
    Salary: '',
    netSalary: '',
    getEmployeeDetails: function () {
        return `Employee name: ${this.FullName}
        Employee salary: ${this.Salary}`
    },
    generateEmployeeID: function () {
        const min = 1000;
        const max = 9999;
        this.employeeID = Math.floor(Math.random() * (max - min) + min);
    }
}
rana.generateEmployeeID();
rana.generateSalary = function randomSalary() {
    function getRandomSalaryValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log('r minRana', min);
        console.log('r maxRana', max);
        const randomSalaryValue = Math.floor(Math.random() * (max - min) + min);
        console.log('randomSalaryRana', randomSalaryValue);
        console.log('taxRana', (randomSalaryValue * (7.5 / 100)))
        return randomSalaryValue

    }
    console.log('levelRana', this.level);
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
rana.generateSalary();
console.log('netSalaryRana', rana.netSalary);








let hadi = {
    employeeID: '',
    FullName: 'HadiAhmad',
    Department: 'Finance',
    level: 'Mid-Senior',
    Image: 'https://cdn-icons-png.flaticon.com/512/310/310869.png',
    Salary: '',
    netSalary: '',
    getEmployeeDetails: function () {
        return `Employee name: ${this.FullName}
        Employee salary: ${this.Salary}`
    },
    generateEmployeeID: function () {
        const min = 1000;
        const max = 9999;
        this.employeeID = Math.floor(Math.random() * (max - min) + min);
    }
}
hadi.generateEmployeeID();
hadi.generateSalary = function randomSalary() {
    function getRandomSalaryValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log('r minHadi', min);
        console.log('r maxHadi', max);
        const randomSalaryValue = Math.floor(Math.random() * (max - min) + min);
        console.log('randomSalaryHadi', randomSalaryValue);
        // console.log('mathHadi',Math.random() * (max-min) + min);
        console.log('taxHadi', (randomSalaryValue * (7.5 / 100)))
        return randomSalaryValue

    }
    console.log('levelHadi', this.level);

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
hadi.generateSalary();
console.log('netSalaryHadi', hadi.netSalary);





console.log(ghazi.getEmployeeDetails())
console.log(lana.getEmployeeDetails())
console.log(tamara.getEmployeeDetails())
console.log(safi.getEmployeeDetails())
console.log(omar.getEmployeeDetails())
console.log(rana.getEmployeeDetails())
console.log(hadi.getEmployeeDetails())
mainHTML[0].innerHTML = (`<div>Employee name: ${ghazi.FullName} <br/> Employee salary: ${ghazi.Salary}</div> <br/>`)
mainHTML[0].innerHTML += (`<div>Employee name: ${lana.FullName} <br/> Employee salary: ${lana.Salary}</div> <br/>`)
mainHTML[0].innerHTML += (`<div>Employee name: ${tamara.FullName} <br/> Employee salary: ${tamara.Salary}</div> <br/>`)
mainHTML[0].innerHTML += (`<div>Employee name: ${safi.FullName} <br/> Employee salary: ${safi.Salary}</div> <br/>`)
mainHTML[0].innerHTML += (`<div>Employee name: ${omar.FullName} <br/> Employee salary: ${omar.Salary}</div> <br/>`)
mainHTML[0].innerHTML += (`<div>Employee name: ${rana.FullName} <br/> Employee salary: ${rana.Salary}</div> <br/>`)
mainHTML[0].innerHTML += (`<div>Employee name: ${hadi.FullName} <br/> Employee salary: ${hadi.Salary}</div> <br/>`)
