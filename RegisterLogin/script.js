
const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 20) {
      nav.style.display = "none";
    } else {
      nav.style.display = "initial";
    }
  }

const apiUrl = "http://localhost:5000";

const signInForm = document.querySelector(".btn-in");

signInForm.addEventListener("click", (event) => {

  event.preventDefault();

  const signInEmail = document.querySelector(".mail");
  const signInPassword = document.querySelector(".pass");

  const email = signInEmail.value;
  const password = signInPassword.value;

  fetch(`${apiUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.error)
      alert(data.error);
     
      else{
      alert(data.message);
      location.href = "https://essencefest.netlify.app/";}
    })
    .catch((err) => {
      alert("Error Signing In");
      console.log(err);
    });
});

const signUpForm = document.querySelector(".btn-up");

signUpForm.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector(".mailin").value;
  const name = document.querySelector(".name").value;
  const college = document.querySelector(".college").value;
  const phonenumber = document.querySelector("#phone").value;
  const password = document.querySelector(".passin").value;
  const retypedPassword = document.querySelector(".repassin").value;

  if (password !== retypedPassword) {
    alert("Passwords don't match");
    return;
  }

  fetch(`${apiUrl}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, college, phonenumber, password }),
  })
    .then((res) =>
      (res.json()))
    .then((data) => {
      console.log(data);
      if (data.error)
        alert(data.error);

      else {
        alert("A verification mail sent. Please verify yourslef before logging in.")
        location.href = "/waiting/index.html"
      }
    })
    .catch((err) => {
      alert("Error Signing Up");
      console.log(err);
    });
});
