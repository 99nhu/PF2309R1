//khai bao mang
let nameList = ["Anne", "Bella", "Chris", "Dan"];
let ageList = [19,21,20,18];
let averageMarkList = [6.5, 7.5, 6.2, 7.2];
let genderList = [false, false, true, true];
let hobbyList = [[], ["music", "book"], ["badminton", "swimming"], [movie]];
 
document.write(`Name list of student: ${nameList}<br>`);
document.write(`Age list of student: ${ageLish}<br>`);

//kiem tra kieu du lieu
document.write(`Kieu du lieu cua mang nameList: ${typof(nameList)}`);

//truy van phan tu trong mang
document.write(`Phan tu thu ba trong nameList: ${nameList[2]}`);

//Chris -> Colle 
//thay the gia tri phan tu trong mang
document.write(`Mang ban dau: ${nameList}`);
nameList[2] = "Cole"; //thay doi gia tri tai index 2
document.write(`Mang sau khi thay doi gia tri: ${nameList}`);
