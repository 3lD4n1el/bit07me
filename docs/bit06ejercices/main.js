const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let usuario = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (usuario !== "bit") {
    (document.getElementById(
      "respuesta"
    ).innerHTML = `hay algun dato mal, por favor verifica`),
      console.error("error nombre equivocado");
  }
  if (password !== "2023") {
    (document.getElementById(
      "respuesta"
    ).innerHTML = `hay algun dato mal, por favor verifica`),
      console.error("revisa la contraseña");
  } else {
    window.location.assign("./ejerecicios/ejercicios.html");
  }
});
