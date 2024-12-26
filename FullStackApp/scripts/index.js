// scripts
import { renderNavbar } from "./navbar.js";
import { renderFooter } from "./navbar.js";

// initialize navbar and footer on all pages
renderNavbar();
renderFooter();

const baseurl = "http://localhost:3000";
//const urlTodos = "http://localhost:3000/todos";

let signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', function(){
    let name = signupForm.name.value;
    let email = signupForm.email.value;
    let password = signupForm.password.value;
    let userObj = {name, email, password};

    fetch(`${baseurl}/users`)
    .then((res) => res.json())
    .then((data) => {
        let user = data.filter((el,i) => this.lang.email == email);
        if(user.length != 0){
            alert('User already registered, please login');
        }
        else {
            fetch(`${baseurl}/users`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userObj),
            }).then(() => {
                alert('SignUp successfull');
            });
        }
    })
    .catch((err) => {
        console.log(err);
        alert('Something went wrong, please try again later');
    });
});