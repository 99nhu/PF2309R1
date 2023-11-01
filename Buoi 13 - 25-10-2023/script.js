let btnAction = document.getElementById("btn-action");

btnAction.addEventListener("click", () =>{
    let totalWorkingHour = parseInt(document.getElementById("total-hour").value);
    let empLevel = parseInt(document.getElementById("emp-level").value);

    if (totalWorkingHour >= 400) {
        //co thuong

        //thuong bao nhieu?
        if(empLevel == 1){
            alert("Ban duoc thuong 1000USD");
        } else {
            alert("Ban duoc thuong 2000USD");
        }
    } else{
        alert("Ban chua du tieu chuan nhan thuong theo che do cua cong ty");
    }
});