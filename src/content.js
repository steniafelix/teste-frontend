const div = document.getElementById("app");

//Content
const content = document.createElement("content");
content.className = "content";

//Abount
const divAbout = document.createElement("div");
divAbout.className = "about";
divAbout.id = "About";
const titleAbout = document.createElement("h3");
titleAbout.textContent = "About Us";
const textAbout = document.createElement("p");
textAbout.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
const img = document.createElement("img");
img.src = "/images/iPad-Air.png";
img.className = "img";
const linkAbount = document.createElement("a");
linkAbount.href = "#";
const linkImg = document.createElement("img");
linkImg.src = "/images/Image-iPad-Deviceweb-elements.png";
const descriptionAbout = document.createElement("p");
descriptionAbout.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.";

//OurTem
const divOurTeam = document.createElement("div");
divOurTeam.className = "our-team";
divOurTeam.id = "Team";
const titleOurTem = document.createElement("h3");
titleOurTem.textContent = "Our Team";
const textOurTem = document.createElement("p");

divOurTeam.appendChild(titleOurTem);
divOurTeam.appendChild(textOurTem);

textOurTem.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

const Team = ["M", "F", "M", "F"];

const team = Team.map(item => {
  const a = document.createElement("a");
  a.className = "team";
  const name = document.createElement("h6");
  name.textContent = "Name";
  const nameDescription = document.createElement("p");
  nameDescription.textContent =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ";
  const btnTeam = document.createElement("icon");
  if (item == "M") {
    const img = document.createElement("img");
    img.src = "/images/ClipM.png";
    a.appendChild(img);
  } else {
    const img = document.createElement("img");
    img.src = "/images/ClipF.png";
    a.appendChild(img);
  }
  divOurTeam.appendChild(a).appendChild(name);
  a.appendChild(nameDescription);
  a.appendChild(btnTeam);
});

//Portfolio
const divProtfolio = document.createElement("div");
divProtfolio.className = "portfolio";
divProtfolio.id = "Portfolio";
const titlePortfolio = document.createElement("h3");
titlePortfolio.textContent = "Portfolio";
const textPortfolio = document.createElement("p");
textPortfolio.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

divProtfolio.appendChild(titlePortfolio);
divProtfolio.appendChild(textPortfolio);

const list = [
  "Design",
  "Identify",
  "Design",
  "Photography",
  "none",
  "Identify",
  "Ilustration",
  "Ilustration",
  "Design"
];

const listar = list.map(item => {
  if (item !== "none") {
    const a = document.createElement("a");
    a.className = "itens";
    a.href = "#";
    const name = document.createElement("h4");
    name.textContent = item;
    const nameDescription = document.createElement("p");
    nameDescription.textContent =
      "Lorem ipsum dolor sit amet, consec tetuer adipiscing elit.";
    divProtfolio.appendChild(a);
    a.appendChild(name);
    a.appendChild(nameDescription);
  } else {
    const a = document.createElement("a");
    a.className = "itens";
    a.href = "#";
    divProtfolio.appendChild(a);
  }
});

//Contact
const divContact = document.createElement("div");
divContact.className = "contact";
divContact.id = "Contact";
const titleContact = document.createElement("h3");
titleContact.textContent = "Contact";
const textContact = document.createElement("p");
textContact.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

//Form
const form = document.createElement("form");
//input Name
const inputName = document.createElement("input");
inputName.type = "text";
inputName.id = "name";
inputName.placeholder = "Enter your Name";
//input Address
const inputAddress = document.createElement("input");
inputAddress.type = "text";
inputAddress.id = "address";
inputAddress.placeholder = "Enter your Address";
//input City
const inputCity = document.createElement("input");
inputCity.type = "text";
inputCity.id = "city";
inputCity.placeholder = "Enter your City";
//input Email
const inputEmail = document.createElement("input");
inputEmail.type = "text";
inputEmail.id = "email";
inputEmail.placeholder = "Enter your Email";
//input Message
const inputMessage = document.createElement("input");
inputMessage.type = "text";
inputMessage.id = "message";
inputMessage.placeholder = "Enter your Message";
//Button
const btnForm = document.createElement("button");
btnForm.id = "sendForm";
btnForm.textContent = "Submit";
btnForm.href = "#";

divContact.appendChild(titleContact);
divContact.appendChild(textContact);
divContact.appendChild(form);
form.appendChild(inputName);
form.appendChild(inputAddress);
form.appendChild(inputCity);
form.appendChild(inputEmail);
form.appendChild(inputMessage);
form.appendChild(btnForm);

//Content
div.appendChild(content);

//Abount
content.appendChild(divAbout);
divAbout.appendChild(titleAbout);
divAbout.appendChild(textAbout);
divAbout.appendChild(img);
divAbout.appendChild(linkAbount).appendChild(linkImg);
divAbout.appendChild(descriptionAbout);

//Our Tem
content.appendChild(divOurTeam);

//Portfolio
content.appendChild(divProtfolio);
//Contact
content.appendChild(divContact);
