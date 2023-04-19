const submit = document.getElementById('submit');

const apiUrl = "http://localhost:5000";

submit.onclick = ((e)=> {
    e.preventDefault();

    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    fetch(`${apiUrl}/auth/signin`, 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              credentials: 'same-origin',
            body: JSON.stringify({ password, userid}),
        })
        .then((res) => res.json())
        .then((data) =>{
            const token = data.accessToken;

            if(token){
                localStorage.setItem('token', token);
                Swal.fire({
                    icon: 'success',
                    title: `${data.msg}`,
                  }).then(() => {
                    location.href = "/Registration_page_1.html";
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
})