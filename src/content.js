const div = document.getElementById("app");

//
//----------------------Content----------------------//
const content = document.createElement("content");
content.className = "content";

div.appendChild(content);

//----------------------Abount----------------------//
const sectionAbount = document.createElement("section");
sectionAbount.className = "about";
sectionAbount.id = "About";
const titleAbout = document.createElement("h3");
titleAbout.textContent = "About Us";
const textAbout = document.createElement("p");
textAbout.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis  natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
const img = document.createElement("img");
img.src = "/images/iPad-Air.png";
img.className = "img";
img.alt = "";
const linkAbount = document.createElement("a");
linkAbount.href = "#";
linkAbount.target = "_blank";

const linkImgDw = document.createElement("img");
linkImgDw.src = "/images/download-icon-b.png";
linkImgDw.alt = "";
const descriptionAbout = document.createElement("p");
descriptionAbout.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.";

//Abount
content.appendChild(sectionAbount);
sectionAbount.appendChild(titleAbout);
sectionAbount.appendChild(textAbout);
sectionAbount.appendChild(img);
sectionAbount.appendChild(linkAbount);
linkAbount.appendChild(linkImgDw);
sectionAbount.appendChild(descriptionAbout);

//
//----------------------OurTem----------------------//
const sectionOurTem = document.createElement("section");
sectionOurTem.className = "our-team";
sectionOurTem.id = "Team";
const titleOurTem = document.createElement("h3");
titleOurTem.textContent = "Our Team";
const textOurTem = document.createElement("p");

sectionOurTem.appendChild(titleOurTem);
sectionOurTem.appendChild(textOurTem);

textOurTem.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

const Team = ["M", "F", "M", "F"];

//------Renderizando lista de team ------//
const team = Team.map(item => {
  const div = document.createElement("div");
  div.className = "team";
  const a = document.createElement("a");
  a.href = "#";
  a.target = "_blank";
  const imgLink = document.createElement("img");
  imgLink.src = "/images/button.png";
  imgLink.className = "btn";
  imgLink.alt = "";
  const name = document.createElement("h6");
  name.textContent = "Name";
  const nameDescription = document.createElement("p");
  nameDescription.textContent =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ";

  if (item == "M") {
    const img = document.createElement("img");
    img.src = "/images/ClipM.png";
    img.alt = "";
    div.appendChild(img);
  } else {
    const img = document.createElement("img");
    img.src = "/images/ClipF.png";
    img.alt = "";
    div.appendChild(img);
  }
  sectionOurTem.appendChild(div).appendChild(name);
  div.appendChild(nameDescription);
  div.appendChild(a).appendChild(imgLink);
});

//Our Tem
content.appendChild(sectionOurTem);

//
//----------------------Portfolio----------------------//
const sectionPortilofio = document.createElement("section");
sectionPortilofio.className = "portfolio";
sectionPortilofio.id = "Portfolio";
const titlePortfolio = document.createElement("h3");
titlePortfolio.textContent = "Portfolio";
const textPortfolio = document.createElement("p");
textPortfolio.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

const divTags = document.createElement("div");
divTags.className = "tags";
const All = document.createElement("button");
All.textContent = "All";
const Design = document.createElement("button");
Design.textContent = "Design";
const Identify = document.createElement("button");
Identify.textContent = "Identify";
const Photography = document.createElement("button");
Photography.textContent = "Photography";
const Ilustration = document.createElement("button");
Ilustration.textContent = "Ilustration";

content.appendChild(sectionPortilofio);
sectionPortilofio.appendChild(titlePortfolio);
sectionPortilofio.appendChild(textPortfolio);
sectionPortilofio.appendChild(divTags);
divTags.appendChild(All);
divTags.appendChild(Design);
divTags.appendChild(Identify);
divTags.appendChild(Photography);
divTags.appendChild(Ilustration);

const divWorks = document.createElement("div");
divWorks.className = "works";
sectionPortilofio.appendChild(divWorks);

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

//------Renderizando works ------//
const listar = list.map(item => {
  if (item !== "none") {
    const a = document.createElement("a");
    a.className = "itens";
    a.href = "#";
    a.target = "_blank";
    const article = document.createElement("article");
    article.className = "article";
    const name = document.createElement("h4");
    name.textContent = item;
    const nameDescription = document.createElement("p");
    nameDescription.textContent =
      "Lorem ipsum dolor sit amet, consec tetuer adipiscing elit.";
    divWorks.appendChild(a);
    a.appendChild(article);
    article.appendChild(name);
    article.appendChild(nameDescription);
  } else {
    const a = document.createElement("a");
    a.className = "itens";
    a.href = "#";
    a.id = "none";

    const article = document.createElement("article");
    article.className = "article";
    const img = document.createElement("img");
    img.src = "/images/Shape-9.png";
    img.alt = "";
    divWorks.appendChild(a);
    a.appendChild(article);
    article.appendChild(img);
  }
});

//
//----------------------Contact----------------------//
const sectionContact = document.createElement("section");
sectionContact.className = "contact";
sectionContact.id = "Contact";
const titleContact = document.createElement("h3");
titleContact.textContent = "Contact";
const textContact = document.createElement("p");
textContact.textContent =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

//
//-----------------Form-----------------//
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

content.appendChild(sectionContact);
sectionContact.appendChild(titleContact);
sectionContact.appendChild(textContact);
sectionContact.appendChild(form);
form.appendChild(inputName);
form.appendChild(inputAddress);
form.appendChild(inputCity);
form.appendChild(inputEmail);
form.appendChild(inputMessage);
form.appendChild(btnForm);
