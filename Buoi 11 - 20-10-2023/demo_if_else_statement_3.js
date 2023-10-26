let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {
    //lay gia tri tu the input
    let billValue = parseFloat(document.getElementById("bill-value").value);
    
    if (billValue >= 4000000) {
        alert(`Ban da duoc giam gia ${billValue * 0.2}VND`);
        billValue = billValue * 0.8;
    }else if (billValue >= 2500000) {
        alert(`Ban da duoc giam gia ${billValue * 0.15}VND`);
        billValue = billValue * 0.85; 
    }else if (billValue >= 1500000) {
        alert(`Ban da duoc giam gia ${billValue - 200000}VND`);
        billValue -= 200000; 
    }else{
        alert("Don hang cua ban khong duoc giam gia");
    }
    

    let infoElem = document.getElementById("info");
    infoElem.innerText = `Ban can thanh toan ${billValue} VND`;
});