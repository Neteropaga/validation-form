let form1 = document.querySelector(".form");
let nom = document.querySelector("#nom");
let postnom = document.querySelector("#postnom");
let mail = document.querySelector("#mail");
let numero = document.querySelector("#numero");
let password = document.querySelector("#password");
let pays = document.getElementById("pays");
let checkboxs = document.querySelectorAll("input[type='checkbox']");

let form2 = document.getElementById("form2");
form2.style.display = "none";
let myProfil = document.getElementById("profil");
myProfil.style.display = "none";

let obj = {
  nom: "",
  postnom: "",
  mail: "",
  numero: "",
  langue: "",
  pays: "",
  password: "",
};

let tabcheckbox = [];

form1.addEventListener("submit", function (event) {
  event.preventDefault();
  let expreg1 = /^[a-zA-Z]+$/;
  let expreg2 = /^\d+$/;
  let cocher = false;

  checkboxs.forEach((box) => {
    if (box.checked) {
      tabcheckbox.push(box.value);
      cocher = true;
      document.querySelector("#alert5").textContent = "";
      // return true;
    }
  });

  if (
    !nom.value.trim() == "" ||
    !expreg1.test(nom.value) == false ||
    nom.value.length <= 20
  ) {
    document.getElementById("alert").textContent = "";
  }
  if (
    !postnom.value.trim() == "" ||
    !expreg1.test(postnom.value) == false ||
    postnom.value.length <= 20
  ) {
    document.querySelector("#alert2").textContent = "";
  }
  if (mail.value.includes("@") && mail.value.includes(".")) {
    document.querySelector("#alert3").textContent = "";
  }
  if (
    !numero.value.trim() == "" ||
    expreg2.test(numero.value) == false ||
    numero.value.length <= 14
  ) {
    document.querySelector("#alert4").textContent = "";
  }
  if (cocher) {
    document.querySelector("#alert5").textContent = "";
    //  event.preventDefault();
  }
  if (!pays.value == "") {
    document.querySelector("#alert7").textContent = "";
  }
  if (
    !password.value.trim() == "" ||
    !expreg2.test(password.value) == false ||
    password.value.length <= 20
  ) {
    document.querySelector("#alert6").textContent = "";
  }

  if (
    nom.value.trim() == "" ||
    expreg1.test(nom.value) == false ||
    nom.value.length > 20
  ) {
    document.getElementById("alert").textContent = "Ce champ n'est pas valide";
  } else if (
    postnom.value.trim() == "" ||
    expreg1.test(postnom.value) == false ||
    postnom.value.length > 20
  ) {
    document.querySelector("#alert2").textContent = "Ce champ n'est pas validé";
  } else if (!mail.value.includes("@") && !mail.value.includes(".")) {
    document.querySelector("#alert3").textContent = "Ce champ n'est pas validé";
  } else if (
    numero.value.trim() == "" ||
    expreg2.test(numero.value) == false ||
    numero.value.length > 14
  ) {
    document.querySelector("#alert4").textContent = "Ce champ n'est pas validé";
  } else if (!cocher) {
    document.querySelector("#alert5").textContent = "Ce champ n'est pas validé";
    //  event.preventDefault();
  } else if (pays.value == "") {
    document.querySelector("#alert7").textContent = "Ce champ n'est pas validé";
  } else if (
    password.value.trim() == "" ||
    expreg2.test(password.value) == false ||
    password.value.length > 20
  ) {
    document.querySelector("#alert6").textContent = "Ce champ n'est pas validé";
  } else {
    event.target.style.display = "none";
    form2.style.display = "flex";
    obj.nom = nom.value;
    obj.postnom = postnom.value;
    obj.mail = mail.value;
    obj.numero = numero.value;
    obj.langue = tabcheckbox.join(",");
    obj.pays = pays.value;
    obj.password = password.value;

    console.log(obj.mail);
    console.log(obj.password);
  }
});

let mail2 = document.querySelector("#mail2");
let password2 = document.getElementById("password2");

form2.addEventListener("submit", function (e) {
  e.preventDefault();

  if (mail2.value == obj.mail) {
    document.querySelector("#alert8").textContent = "";
  }

  if (mail2.value != obj.mail) {
    document.querySelector("#alert8").textContent = "Ce champ n'est pas validé";
  } else if (password2.value != obj.password) {
    document.querySelector("#alert9").textContent = "Ce champ n'est pas validé";
  } else {
    e.target.style.display = "none";
    myProfil.style.display = "flex";
    document.getElementById("nomination").textContent =
      obj.nom + " " + obj.postnom;
    document.getElementById("origine").textContent =
      "Nationalite" + " : " + obj.pays;
    document.getElementById("langue").textContent =
      "Langues parlees" + " : " + obj.langue;
    document.getElementById("contact").textContent =
      "Vos contacts" + ":" + obj.numero + "," + obj.mail;
  }
});
