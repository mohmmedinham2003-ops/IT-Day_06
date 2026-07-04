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

//     }
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

// document.write("<p>vksjdvljsdvljnjlvnsjdvn kdfsdnfsdnffd ififushfiusdf</p>");
// console.log(document.title);
// console.log(document.URL);


let heading = document.getElementById("heading");

// heading.innerText = "lapulga";
let number = 0;

function increment() {
    heading.innerText = "sanga"+ number++;
    console.log("clicked");

}

function decrement(){
        heading.innerText = "sanga"+ number--;
    console.log("clicked");
    

}





