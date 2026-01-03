'use strict';

// // Amaliyot /////////////////////////////////////////////////
// // 1-masala ////////////////////////////////////////////////////////////////////////////////

// class Animal {
//     constructor(ism, turi, tone){
//         this.name= ism
//         this.species = turi
//         this.tone= tone
//     }

//     speak(){
//         const tone= {
//             cat: 'miyov',
//             dog: 'vov vov',
//             lion: 'hrrrrr'
//         }

//         if(this.tone) return this.tone
//         return tone[this.species] || 'gapirmaydigan xayvon'
//     }
// }

// let it = new Animal('tuzik', 'dog')
// let sher = new Animal('dilozor', 'lion')
// let pishak = new Animal('najim', 'cat')
// let qochqor = new Animal('chempion', 'sheep', 'baaaaaaaaaaa')

// console.log(it.speak())
// console.log(sher.speak())
// console.log(pishak.speak())
// console.log(qochqor.speak())

// // 2-masala ////////////////////////////////////////////////////////////////////////////////

//  class Product {
//     static #arr= []
//     constructor(name, type, weight, price){
//         this.name=name
//         this.type=type
//         this.weight=weight
//         this.price=price

//         Product.#arr.push(this)
//     }

//     static byPrice(){
//         return Product.#arr.sort((a, b)=>a.price-b.price)
//     }
    
//     static byWeight(){
//         return Product.#arr.sort((a, b)=>a.weight-b.weight)
//     }
//  }


//  let a = new Product('snikers', 'oziq_ovqat', 300, 12000)
//  let b = new Product('pistolet', 'oyinchoq', 150, 25000)
//  let c = new Product('shakar', 'oziq_ovqat', 1000, 8000)
//  let d = new Product('olma', 'meva_cheva', 1000, 9000)

//  console.log(Product.byPrice())
//  console.log(Product.byWeight())

// 3-masala ////////////////////////////////////////////////////////////////////////////////

// class User {
//     static users=[]

//     constructor(username, password){
//         if(!users.some(v=>v===username)){
//             this.username=username
//             this.password=password

//             User.users.push(this)
//         }else{
//             console.log("Bu user band. bohsqasini kiriting");
//         }
//     }


//     static login(username, password){
//         if(users.some(v => {
//             v.username=username
//             v.password=password
//         })){
//             return 'xush kelibsiz'
//         }else{
//             "Login yoki parol xato"
//         }
//     }
// }




// 4-masala ////////////////////////////////////////////////////////////////////////////////
// 5-masala ////////////////////////////////////////////////////////////////////////////////
// 6-masala ////////////////////////////////////////////////////////////////////////////////
// 7-masala ////////////////////////////////////////////////////////////////////////////////