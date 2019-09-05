const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
const navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];

// cta
document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text button').textContent = siteContent.cta.button;
document.getElementById('cta-img').src = siteContent['cta']['img-src'];

// main

const headings = document.querySelectorAll('.text-content h4');
headings[0].textContent = siteContent["main-content"]["features-h4"];
headings[1].textContent = siteContent["main-content"]["about-h4"];
headings[2].textContent = siteContent["main-content"]["services-h4"];
headings[3].textContent = siteContent["main-content"]["product-h4"];
headings[4].textContent = siteContent["main-content"]["vision-h4"];

const content = document.querySelectorAll('.text-content p');
content[0].textContent = siteContent["main-content"]["features-content"];
content[1].textContent = siteContent["main-content"]["about-content"];
content[2].textContent = siteContent["main-content"]["services-content"];
content[3].textContent = siteContent["main-content"]["product-content"];
content[4].textContent = siteContent["main-content"]["vision-content"];

document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"];

// contact

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];
const addressFields = document.querySelectorAll(".contact p");
addressFields[0].textContent = siteContent.contact.address;
addressFields[1].textContent = siteContent.contact.phone;
addressFields[2].textContent = siteContent.contact.email;

// footer 

document.querySelector('footer p').textContent = siteContent.footer.copyright;

// Task 3


let newLink = document.createElement('a');
newLink.href = "./stretch-assignment/digital_timer/index.html";
newLink.textContent = "Timer";
let anotherLink = document.createElement('a');
anotherLink.href = "#";
anotherLink.textContent = "Another Link";
document.querySelector('nav').append(newLink);
document.querySelector('nav').append(anotherLink);

document.querySelectorAll('nav a').forEach(element => element.style.color = "green");

const stretchData = {
  "h4": "Now You See Me!",
  "content": "More than just a movie...",
  "img-src": "img/stretch.jpeg",
};

const stretchButton = document.createElement('button');
stretchButton.textContent = "Click Me";
stretchButton.style.margin = "10px auto";
stretchButton.style.padding = "10px 30px";
document.querySelector(".main-content").append(stretchButton);

const aDiv = document.createElement('div');
const aHeading = document.createElement('h4');
const someText = document.createElement('p');
const anImg = document.createElement('img');
aDiv.style.textAlign = "center";
aDiv.style.display = "none";
anImg.style.maxWidth = "50%";
aDiv.appendChild(aHeading);
aDiv.appendChild(anImg);
aDiv.appendChild(someText);
document.querySelector('.main-content').appendChild(aDiv);

stretchButton.addEventListener('click', event => {
  aHeading.textContent = stretchData.h4;
  someText.textContent = stretchData.content;
  anImg.src = stretchData["img-src"];
  if (aDiv.style.display !== "none") {
    aDiv.style.display = "none";
  } else {
    stretchButton.textContent = "Click Again!";
    aDiv.style.display = "block";
  }
});
