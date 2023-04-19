
const submit = document.getElementById("submit");

const apiUrl = "http://localhost:5000";

submit.onclick = (e) => {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var userid = document.getElementById("reg_user_id").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var program = document.getElementById("program").value;

    if (password != confirmpassword){
        Swal.fire({
            icon: 'warning',
            title: 'Passwords don\'t match',
        })
        return;
    }

    fetch(`${apiUrl}/auth/signup`, 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              credentials: 'same-origin',
            body: JSON.stringify({name, email, password, userid, phonenumber, program}),
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);

            if(data.customer){
                Swal.fire({
                    icon: 'success',
                    title: `${data.msg}`,
                  }).then(() => {
                    location.href = "/cand_login.html";
                  })
            }
            else if (data.error){
                Swal.fire({
                    icon: 'error',
                    text: `${data.error}`,
                  })
            }

            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Warning!',
                    text: 'Error occured!',
                  })
            }
            
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