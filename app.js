// class Customer {
//     name;
//     age;
//     address;

//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// let customer1 = new Customer("Sharada", 20, "Wattala");
// console.log(customer1);


// class Customer {
//     name;
//     age;
//     address;

//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// let customer1 = new Customer("Inham", 23, "Wattala");
// console.log(customer1);


// let customer2 = {
//     name: "John",
//     age: 30,
//     address: "wattala",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item2",
//             price: 200,
//             variants: [
//                 {
//                     id: 1,
//                     name:"variant1",
//                     price:10
//                 },
//                 {
//                     id:2,
//                     name:"variant2",
//                     price:12
//                 }

//             ]
//         },
//         {
//             id: 2,
//             name: "item2",
//             price: 100,
//         }, {
//             id: 3,
//             name: "item3",
//             price: 300,
//         }
//     ],
//     father: {
//         name: "inham",
//         age: 50,
//         address: "chicago"

//     },
//     location:"Colombo"

    
// };



// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items);
// console.log(customer2.father);
// console.log(customer2.items[2]);
// console.log(customer2.father.name);
// console.log(customer2.items[0].variants[0].name);
// console.log(customer2.location);

// let employee = {
//     id: "E001",
//     name: "Alice",
//     age: 28,
//     department: "IT",
//     salary: 75000,

//     projects: [
//         {
//             id: 101,
//             name: "Library Management System",
//             budget: 150000,

//             team: [
//                 {
//                     id: 1,
//                     name: "David",
//                     role: "Frontend Developer"
//                 },
//                 {
//                     id: 2,
//                     name: "Emma",
//                     role: "Backend Developer"
//                 }
//             ]
//         },
//         {
//             id: 102,
//             name: "Online Shopping System",
//             budget: 250000
//         },
//         {
//             id: 103,
//             name: "Banking Application",
//             budget: 500000
//         }
//     ],

//     manager: {
//         id: "M001",
//         name: "Michael",
//         age: 45,
//         office: "Colombo"
//     },

//     company: "Tech Solutions Ltd"
// };

// console.log(employee.id);
// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.department);
// console.log(employee.salary);

// console.log(employee.projects);
// console.log(employee.projects[0]);
// console.log(employee.projects[1].name);
// console.log(employee.projects[2].budget);

// console.log(employee.manager);
// console.log(employee.manager.name);
// console.log(employee.manager.office);

// console.log(employee.projects[0].team);
// console.log(employee.projects[0].team[0].name);
// console.log(employee.projects[0].team[1].role);

// console.log(employee.company);


// document.write("<p>vksjdvljsdvljnjlvnsjdvn kdfsdnfsdnffd ififushfiusdf</p>");
// console.log(document.title);
// console.log(document.URL);


// let heading = document.getElementById("heading");

let heading = document.getElementById("heading");
console.log(heading);


// // heading.innerText = "lapulga";
// let number = 0;

// function increment() {
//     heading.innerText = "sanga"+ (++number);
//     console.log("clicked");

// }


// function decrement(){
//         heading.innerText = "sanga"+ (--number);
//     console.log("clicked");

// }
// let num = 0;

// function adding() {
//     let txtInput1 = document.getElementById("inputText01");
//     console.log(txtInput1.value);
//     let txtInput2 = document.getElementById("inputText02");
//     console.log(txtInput2.value);
//     let heading = document.getElementById("heading");
//     num = Number(txtInput1.value) + Number(txtInput2.value);
//     heading.innerText = "Sum: " + num;


// }

// function Substracting() {
//     let txtInput1 = document.getElementById("inputText01");
//     console.log(txtInput1.value);
//     let txtInput2 = document.getElementById("inputText02");
//     console.log(txtInput2.value);
//     let heading = document.getElementById("heading");
//     num = txtInput1.value - txtInput2.value;
//     heading.innerText = num;


// }

// let num = 0;

// function adding() {
//     let txtInput1 = document.getElementById("inputText01");
//     console.log(txtInput1.value);
//     let txtInput2 = document.getElementById("inputText02");
//     console.log(txtInput2.value);
//     let heading = document.getElementById("heading");
//     num = Number(txtInput1.value) + Number(txtInput2.value);
//     heading.innerText = "Sum: " + num;


// }

// function Substracting() {
//     let txtInput1 = document.getElementById("inputText01");
//     console.log(txtInput1.value);
//     let txtInput2 = document.getElementById("inputText02");
//     console.log(txtInput2.value);
//     let heading = document.getElementById("heading");
//     num = txtInput1.value - txtInput2.value;
//     heading.innerText = num;


// }



// let customerList = [];

// function btnAddCustomerOnAction(){
//     let txtName = document.getElementById("txtName").value;
//     let txtAddress = document.getElementById("txtAddress").value;
//     let txtAge = document.getElementById("txtAge").value;
//     let txtEmail = document.getElementById("txtEmail").value;
//     let txtSalary = document.getElementById("txtSalary").value;

//     let customer={
//         name:txtName,
//         address:txtAddress,
//         age:txtAge,
//         email:txtEmail,
//         salary:txtSalary
//     }

//     customerList.push(customer);
//     loadTable();

//     console.log(customerList);
      
// }

// function loadTable(){
//     let tblCustomers = document.getElementById("tblCustomers");

//     let body ="";

//     for(let i =0; i<customerList.length; i++){
//             body+=`<tr>
//             <td>${customerList[i].name}</td>
//             <td>${customerList[i].address}</td>
//             <td>${customerList[i].age}</td>
//             <td>${customerList[i].email}</td>
//             <td>${customerList[i].salary}</td>
//         </tr>`;
//     }

//     tblCustomers.innerHTML=body;

//     console.log(tblCustomers);
    
// }

// let customerList = [];

// function btnAddCustomerOnAction(){
//     let txtName = document.getElementById("txtName").value;
//     let txtAddress = document.getElementById("txtAddress").value;
//     let txtAge = document.getElementById("txtAge").value;
//     let txtEmail = document.getElementById("txtEmail").value;
//     let txtSalary = document.getElementById("txtSalary").value;

//     let customer={
//         name:txtName,
//         address:txtAddress,
//         age:txtAge,
//         email:txtEmail,
//         salary:txtSalary
//     }

//     customerList.push(customer);
//     loadTable();

//     console.log(customerList);
      
// }

// function loadTable(){
//     let tblCustomers = document.getElementById("tblCustomers");

//     let body ="";

//     for(let i =0; i<customerList.length; i++){
//             body+=`<tr>
//             <td>${customerList[i].name}</td>
//             <td>${customerList[i].address}</td>
//             <td>${customerList[i].age}</td>
//             <td>${customerList[i].email}</td>
//             <td>${customerList[i].salary}</td>
//         </tr>`;
//     }

//     tblCustomers.innerHTML=body;

//     console.log(tblCustomers);
    
// }