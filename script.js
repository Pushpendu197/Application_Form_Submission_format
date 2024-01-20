const validateForm = () => {
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var dob = document.getElementById('dob').value;
    var adhar = document.getElementById('adhar').value;
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    var image = document.getElementById('image').value;
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    //var regex1 = /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;



    // if(!name){
    //     alert("Enter Your Name");
    //     return false

    // }else if(!mobile){
    //     alert("Enter Your Mobile Number");
    //     return false;
    // }else if(mobile.length != 10){
    //     alert("Enter Your 10 Digit Mobile Number")
    //     return false
    // }else if(!dob){
    //     alert("Enter Date Of Birth");
    //     return false
    // }else if(!adhar){
    //     alert("Enter Your Adhar Number");
    //     return false
    // }else if(adhar.length != 12){
    //     alert("Enter 12 Digit Adhar Number");
    //     return false
    // }else if(!username){
    //     alert("Enter Username");
    //     return false
    // }else if(username.length < 8){
    //     alert("Enter 8 Digit Username");
    //     return false
    // }else if(!pass){
    //     alert("Enter Password");
    //     return false;
    // }else if(!regex.test(pass)){
    //     alert("Enter Password With Any Special Charrector");
    //     return false
    // }else if(!image){
    //     alert("Upload Your Image");
    //     return false
    // }




    //calculate age

    function calculateAge(dob) {

        const birthdateObj = new Date(dob);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthdateObj.getFullYear();
        if (
            currentDate.getMonth() < birthdateObj.getMonth() ||
            (currentDate.getMonth() === birthdateObj.getMonth() &&
                currentDate.getDate() < birthdateObj.getDate())
        ) {

            return age - 1;
        } else {
            return age;
        }
    }
    const age = calculateAge(dob);










    if (!name) {
        document.getElementById('mobilevalid').style.display = 'block';
        name.focus();
        return false
    } else if (!mobile) {
        document.getElementById('mobilevalid').style.display = 'block';
        alert("Enter Your Mobile Number");
        mobile.focus();
        return false

    } else if (!username) {
        document.getElementById('mobilevalid').style.display = 'block';
        alert("Enter Your User name");
        username.focus();
        return false
    } else if (!pass) {
        document.getElementById('mobilevalid').style.display = 'block';
        alert("Enter Your Password");
        pass.focus();
        return false
    } else if (!adhar) {
        document.getElementById('mobilevalid').style.display = 'block';
        alert("Enter Your Aadhar No");
        adhar.focus();




    } else if (age < 18) {
        alert("You are not eligible");
        return false
    }



    return true
}



//Image - upload image less than 100 kb

document.getElementById("image").addEventListener("change", function () {
    const image = this;
    const selectFile = image.files[0];
    if (selectFile) {
        const size = selectFile.size;
        const max = 100 * 1024;

        if (size > max) {
            alert(`Image file must be less than 100 kb `);

            image.value = "";
        } else {
            alert("Your Image is Successfully Accepted ")
        }
    }

});

//Adhar Number -> add space after 4 digit number
adhar.addEventListener('keyup', function (e) {
    // console.log(e.keyCode);
    if (e.keyCode !== 8) {
        if (this.value.length === 4 || this.value.length === 9 || this.value.length === 14) {
            this.value = this.value += ' ';
        }
    }
});





