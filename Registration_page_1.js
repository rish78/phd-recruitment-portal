let token = localStorage.getItem("token");

const apiUrl = "http://localhost:5000";

if(!token || token==="null"){ 
    alert("Sign in first!"); 
    location.href = "./cand_login.html";
}

window.addEventListener("load", () => {
    if(token){
        fetch(`${apiUrl}/user`,
        {
            method: 'GET',
            headers : {
                Authorization:token,
            },
            credentials: 'same-origin',
        })
        .then((res)=> res.json())
        .then((data)=>{
            const {user} = data;
            console.log(user)
            const name = document.getElementById("name_full");
            name.value = user.name;
            const mobile = document.getElementById("mobile");
            mobile.value = user.phonenumber;
            const email = document.getElementById("email_id");
            email.value = user.email;
        })
    }
})

const button = document.getElementById("save-btn")

button.onclick = (e) => {
    e.preventDefault();
    const date = document.getElementById("date").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    let dob = date + " / " + month + " / " + year;
    
    const fatherName = document.getElementById("father-name").value
    const gender = document.getElementById("gender").value
    const category = document.getElementById("category").value
    const marital = document.getElementById("marital").value
    const country = document.getElementById("country").value

    const alternatePhone = document.getElementById("alt_phone").value
    const alternateEmail = document.getElementById("alt_email").value
    const aadhar = document.getElementById("aadhar").value
    const address = document.getElementById("address").value
    const fax = document.getElementById("fax").value

   

    fetch(`${apiUrl}/user/personal`, 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization:token,
              },
              credentials: 'same-origin',
            body: JSON.stringify({dob, fatherName, gender, category, marital, country, alternatePhone, alternateEmail, aadhar, address, fax}),
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);

            
        })
        .catch((error) =>{
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Warning!',
                text: 'Internal server error occured. Please try again!',
        })
    })
}

