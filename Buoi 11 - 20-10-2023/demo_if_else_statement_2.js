let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () => {
    //lay gia tri tu the input
    let billValue = parseFloat(document.getElementById("bill-value").value);
    
    if (billValue >= 2000000) {
        alert(`Ban da duoc giam gia ${billValue * 0.1}`);
        //cap nhat gia tri don hang
        billValue = billValue * 0.9;
    }
    //xu li trong truong hop ket qua false
    else{
        alert(`Ban da duoc giam gia ${billValue * 0.05}`);
        billValue *= 0.95;
    }

    let infoElem = document.getElementById("info");
    infoElem.innerText = `Ban can thanh toan ${billValue} VND`;
});