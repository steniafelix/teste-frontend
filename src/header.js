const div = document.getElementById("app");
//Header
const header = document.createElement("header");
header.className = "header";
header.id = "Home";
//Top Bar
const divTopBar = document.createElement("div");
divTopBar.className = "divTopBar";
const logo = document.createElement("h1");
logo.textContent = "LOGO";
logo.className = "logo";
const menu = document.createElement("ul");
menu.className = "menu";

//Fazer loop para incluir itens do menu
const itemMenu = ["Home", "About", "Team", "Portfolio", "Contact"];

//------Renderizando menu ------//
const listMenu = itemMenu.map(item => {
  const li = document.createElement("li");
  const itemLink = document.createElement("a");
  itemLink.textContent = item;
  itemLink.href = "#" + item;
  li.appendChild(itemLink);
  menu.appendChild(li);
});

//Banner
const divBanner = document.createElement("div");
divBanner.className = "banner";
const h2Banner = document.createElement("h2");
h2Banner.textContent = "We Build Awesome Wireframe";
const pBanner = document.createElement("p");
pBanner.textContent = "A Template by Your Company";
const img = document.createElement("img");
img.src = "/images/Macbook-Pro.png";
img.className = "img";
img.alt = "";
const imgLink = document.createElement("a");
imgLink.href = "#";
imgLink.target = "_blank";
const imgContent = document.createElement("img");
imgContent.src = "/images/download-icon.png";
imgContent.className = "img-content";
imgContent.alt = "";

div.appendChild(header);
header.appendChild(divTopBar).appendChild(logo);
header.appendChild(divBanner);
divTopBar.appendChild(menu);
divBanner.appendChild(h2Banner);
divBanner.appendChild(pBanner);
divBanner.appendChild(img);
divBanner.appendChild(imgLink).appendChild(imgContent);
