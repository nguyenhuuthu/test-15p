//Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và
//in ra kết quả. (1đ)
//● Đầu vào: str
//● Đầu ra: đảo ngược chuỗi và in ra kết quả
//● Ví dụ:
//○ Cho: str = &quot;program&quot;; in ra: &quot;margorp&quot;
//○ Cho: str = &quot;data&quot;; in ra: &quot;atad&quot;
//● Lưu ý: không sử dụng hàm reverse()

// let str = prompt("please enter your name");
// let b = "";
// for (let i = str.length - 1; i >= 0; i = i - 1){
//     b = b + str[i]
// } console.log(b);

// 2.. Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra
//chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.
//(1đ)
//● Đầu vào: str
//● Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
//● Ví dụ
//○ Cho &quot;this is A Test&quot;; In ra &quot;This Is A Test&quot;
//○ Cho &quot;hello rikkei academy&quot;; In ra &quot;Hello Rikkei Academy”


// let input = prompt('nhap vao mot chuoi').toLowerCase().split(",")
// for (let i = 0; i < input.length; i++) {
//     input[i] = input[i][0].toUpperCase()+input[i].slice(1);
// }
// let str = input.join(" ");
// console.log(str);

// 3. . (1đ)
//● Đầu vào: 1 mảng
//● Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
//● Ví dụViết một chương trình xóa các phần tử trùng của một
//mảng và in ra kết quả
//○ Cho
//Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”fi
//ve”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
//○ Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]
let arr =[1,2,3,3,4,5,4,4,4,5,5];
let a = 0;
for(i =0; i <= arr.length; i++){
    if(arr[i] < arr[a]){
        arr[a] = arr[i];
console.log(arr);
}
}




//4. Viết một chương sắp xếp các phần tử là số ở trong
//mảng theo thứ tự tăng dần. (1đ)
//● Đầu vào: 1 mảng
//● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
//● Ví dụ
//○ Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
//● Lưu ý: Không dùng hàm sort()
// let arr = [5, 2, 3, 4, 1]
// let temp = arr[0];
// for(let i = 0; i< arr.length-1; i++ ){
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i] > arr[j]){
//             temp = arr[j]
//             arr[j] = arr[i]
//             arr[i] = temp
//         }
//     }
// }
// console.log(arr);


//5 .Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên
//nhân viên). Xây dựng chương trình quản lý nhân viên với các
//chức năng (Read, Create, Update, Delete). (2đ)/


// let rikkei = ["cuong", "phu", "long"];
// let userinput = prompt("Please enter c/r/u/d");
// if (userinput === "r") {
//     for (name of rikkei) {

//     }
//     console.log(rikkei);
// } else if (userinput === "c") {
//     let input = prompt("please enter new name");
//     moi = rikkei.push(input);
//     for (name in moi) {
//     }
//     console.log(rikkei);
// } else if (userinput === "u") {
//     let update = prompt("please enter update");
//     rikkei[3] = update;
//     console.log(rikkei);
// } else if (userinput === "d") { 
//     let deletez = prompt("please enter delete");
//     rikkei[2] = deletez[2];
//     console.log(rikkei);
// // }
// bookStore = ["Tôi thấy hoa vàng trên cỏ xanh”, “Đắc nhân tâm"]
// cart = []
// console.log();
// for (let i = 0; i <= bookStore.length - 1; i = i + 1) {
//     console.log(`${i + 1}. ${bookStore[i]}`);
// }
// console.log();

// let userInput = prompt("Please input C/R/U/D/E");

// if (userInput === "C") {
//     let buyItem = prompt("Input your buying book");

//     let findIndex = -1;
//     for (let i = 0; i <= bookStore.length - 1; i = i + 1) {
//         if (buyItem === bookStore[i]) {
//             findIndex = i;
//         }
//     }
//     if (findIndex === -1) {
//         console.log("Item is not available");
//     } else {
//         let findIndex2 = -1;
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//             if (buyItem === cart[i][0]) {
//                 findIndex2 = i;
//             }
//         }
//         let number = Number(prompt("Please input your number"));
//         if (findIndex2 === -1) {
//             cart.push([buyItem, number]);
//         } else {
//             cart[findIndex2][1] = cart[findIndex2][1] + number;
//         }
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//             console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//         }
//     }
// } else if (userInput === "R") {
//     for (let i = 0; i <= bookStore.length - 1; i = i + 1) {
//         console.log(`${i + 1}. ${bookStore[i]}`);
//     }
//     // cart
//     for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//     }
// } else if (userInput === "U") {
//     let updatedItem = prompt("Please input updated item name");
//     let findIndex = -1;
//     for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         if (updatedItem === cart[i][0]) {
//             findIndex = i;
//         }
//     }
//     if (findIndex === -1) {
//         console.log("Item is not in cart");
//     } else {
//         let newNumber = prompt("Please input new number");
//         cart[findIndex][1] = newNumber;
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//             console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//         }
//     }
// } else if (userInput === "D") {
//     let deletedItem = prompt("Please input deleted item name");
//     let findIndex = -1;
//     for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         if (deletedItem === cart[i][0]) {
//             findIndex = i;
//         }
//     }
//     if (findIndex === -1) {
//         console.log("Item is not in cart");
//     } else {
//         cart.splice(findIndex, 1);
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//             console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//         }
//     }
// } else {
//     console.log("Invalid command");
// }




