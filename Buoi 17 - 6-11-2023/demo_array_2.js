let nameList = ["Anne", "Bella", "Chris", "Dan"];

//duyet tung phan tu trong mang
document.write("Danh sach phan tu trong nameList: <br>");

// for(let i = 0; i < nameList.length; i++){
  //  document.write(`${nameList[i]} <br>`);
 //}

 for(let i in nameList){
    document.write(`${nameList[i]} ,<br>`)
 }