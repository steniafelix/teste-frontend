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
for (var i = 0; i < itemMenu.length; i++) {
  const item = document.createElement("li");
  const itemLink = document.createElement("a");
  itemLink.textContent = itemMenu[i];
  itemLink.href = "#" + itemMenu[i];
  item.appendChild(itemLink);
  menu.appendChild(item);
}

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
const imgLink = document.createElement("a");
imgLink.href = "#";
const imgContent = document.createElement("img");
imgContent.src = "/images/dw.png";
imgContent.className = "img-content";

div.appendChild(header);
header.appendChild(divTopBar).appendChild(logo);
header.appendChild(divBanner);
divTopBar.appendChild(menu);
divBanner.appendChild(h2Banner);
divBanner.appendChild(pBanner);
divBanner.appendChild(img);
divBanner.appendChild(imgLink).appendChild(imgContent);