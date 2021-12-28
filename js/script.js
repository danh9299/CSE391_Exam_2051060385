yes = document.getElementById("yes"); //button đồng ý
no = document.getElementById("no"); //button reset

/*Nhập họ tên*/
nameInput = document.getElementById("nameInput");
nameHelp = document.getElementById("nameHelp");
/*Nhập địa chỉ*/
addrInput = document.getElementById("addrInput");
addrHelp = document.getElementById("addrHelp");
/*Nhập số điện thoại*/
phoneInput = document.getElementById("phoneInput");
phoneHelp = document.getElementById("phoneHelp");
/*Chọn tour*/
choiceInput = document.getElementById("choiceInput");
choiceHelp = document.getElementById("choiceHelp");
/*Chọn phương tiện */
validationFormCheck2 = document.getElementById("validationFormCheck2");
validationFormCheck3 = document.getElementById("validationFormCheck3")
vehicleHelp = document.getElementById("vehicleHelp");
/*Chọn số khách*/
adultInput = document.getElementById("adultInput");
childInput = document.getElementById("childInput");
guestHelp = document.getElementById("guestHelp");


//bắt sự kiện đồng ý
yes.addEventListener('click', Func1); //kiểm tra xem nhập thông tin hết chưa
yes.addEventListener('click', Func2); //kiểm tra xem họ tên có chứ số hay kí tự không?


//reset mọi function
no.addEventListener('click',reset); //xóa thông tin đã nhập



//kiểm tra việc nhập thông tin
function Func1(){
    

    //Chưa nhập địa chỉ
    if(addrInput.value ==""){
        addrHelp.textContent="Vui lòng nhập thông tin";
        addrHelp.style.color="red";
    }
    else{
        addrHelp.textContent="";
    }

    //Chưa nhập số điện thoại
    if(phoneInput.value ==""){
        phoneHelp.textContent="Vui lòng nhập thông tin";
        phoneHelp.style.color="red";
    }
    else{
        phoneHelp.textContent="";
    }
    //Chưa chọn tour
    if(choiceInput.value =="0"){
        choiceHelp.textContent="Vui lòng chọn tour";
        choiceHelp.style.color="red";
    }
    else{
        choiceHelp.textContent="";
    }
    //Chưa chọn phương tiện
    /*
    if(validationFormCheck2.value == none){
        vehicleHelp.textContent="Vui lòng chọn tour";
        vehicleHelp.style.color="red";
    }
    else{
        vehicleHelp.textContent="";
    }
    */
   //Chưa nhập số khách
   if(adultInput.value =="" & childInput.value == ""){
    guestHelp.textContent="Vui lòng nhập thông tin";
    guestHelp.style.color="red";
}
else{
    guestHelp.textContent="";
}
}



function Func2(){
    let namePattern = /^[0-9]+$/;
    //Chưa nhập họ và tên
    if(nameInput.value ==""){
        nameHelp.textContent="Vui lòng nhập thông tin";
        nameHelp.style.color="red";
    }
    else if(namePattern.test(nameInput.value)){
        nameHelp.textContent="Tên chỉ được là chữ!";
        nameHelp.style.color="red";
    }
    else{
        nameHelp.textContent="";
}
}


//xóa thông tin
function reset(){
    nameInput.value = "";
    nameHelp.textContent="";
    addrInput.value ="";
    addrHelp.textContent="";
    phoneInput.value ="";
    phoneHelp.textContent="";
    choiceInput.value ="";
    choiceHelp.textContent ="";
    adultInput.value = "";
    childInput.value="";
    guestHelp.textContent="";
}