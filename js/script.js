addcontact = () => {
    let cname = document.getElementById("name").value;
    let cnumber = document.getElementById("number").value;
    let displayNotification = document.getElementById("displaynotify-1");
    if(cname == "" || cnumber == ""){
        displayNotification.style.display = "block";
        displayNotification.innerHTML = "Please Enter Details";
        displayNotification.style.backgroundColor = "#fedfe1";
        displayNotification.style.color = "#cd4243";
    }else{
        localStorage.setItem(cname,cnumber);
        displayNotification.style.display = "block";
        displayNotification.innerHTML = "Successfully Added New Contact";
        displayNotification.style.backgroundColor = "#def0d8";
        displayNotification.style.color = "#416b47";
    }
}

let addbtn = document.getElementById("add");
addbtn.addEventListener("click",addcontact)

getcontact = () => {
    let display = document.querySelector(".display");
    let displayNotification = document.getElementById("displaynotify-1");
    let getcontactname = document.getElementById("getContactName").value;
    let displayname = document.getElementById("contact-name");
    let displaynumber = document.getElementById("contact-number");
    let result = localStorage.getItem(getcontactname);
    if(result == null){
        displayNotification.style.display = "block";
        displayNotification.innerHTML = "This Contact Is not Added";
        displayNotification.style.backgroundColor = "#fedfe1";
        displayNotification.style.color = "#cd4243";
    }else{
        display.style.display = "block";
        displayNotification.style.display = "block";
        displayNotification.innerHTML = "Contact Retrieve Successfully";
        displayNotification.style.backgroundColor = "#def0d8";
        displayNotification.style.color = "#416b47";
        displayname.innerHTML = getcontactname;
        displaynumber.innerHTML = result;
    }
    getcontactname = "";
}


let getbtn = document.getElementById("get");

getbtn.addEventListener("click",getcontact);