const div = document.getElementById("app");
const footer = document.createElement("footer");
footer.className = "footer";
const menu = document.createElement("ul");
menu.className = "menu";
const copyright = document.createElement("p");
copyright.textContent = "Copyright © Your Company 2014. All Rights Reserved";

const itemMenu = ["Home", "About", "Team", "Portfolio", "Contact"];
const listMenu = itemMenu.map(item => {
  const li = document.createElement("li");
  const itemLink = document.createElement("a");
  itemLink.textContent = item + " " + " : ";
  itemLink.href = "#" + item;
  menu.appendChild(li);
  li.appendChild(itemLink);
});

div.appendChild(footer);
footer.appendChild(menu);
footer.appendChild(copyright);
