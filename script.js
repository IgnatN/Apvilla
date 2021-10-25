
// /////////////// Nav Bar !

let navButons = document.querySelector('.nav-butons');
let listNav = document.querySelectorAll('.liNav')
listNav.forEach(li => {
    li.style.display = 'flex';
    li.style.fontSize = '14px';
    li.style.margin = '0 6% 0';
    li.style.color = 'white';
    li.style.fontWeight = 'bold';
});

function clickButton() {
    window.open('https://uideck.com/templates/appvilla/')
};


///////////////// Features Page 
let pBlock = document.querySelectorAll('.p-blocks-features');
pBlock.forEach(p => {
    p.style.fontSize = '19px';
    p.style.margin = '20px 0';
})

let contentBlock = document.querySelectorAll('.content-feature-block');
contentBlock.forEach(contStyle => {
    contStyle.style.fontSize = '17px';
    contStyle.style.color = 'rgb(173, 165, 165)';
})
/////////////////////// Overview Page second page

let overviewSecond = document.querySelector('.second');
overviewSecond.style.marginBottom = '7%';

let pinkDiv = document.querySelector('.pink-div');
pinkDiv.style.backgroundColor = '#ff6b81';
pinkDiv.style.display = 'flex';
pinkDiv.style.flexDirection = 'column';
pinkDiv.style.alignItems = 'center';
pinkDiv.style.height = '400px';
pinkDiv.style.paddingTop = '90px';


let bigTxtPink = document.querySelector('.pink-fist-txt');
bigTxtPink.style.fontSize = '40px';

// /////////////////// PRICING page

let block = document.querySelector('.allBlocks');

class Block {
    constructor(title, txt, money, button,) {
        this.title = title;
        this.txt = txt;
        this.money = money;
        this.button = button
    }
    showBlock() {
        block.innerHTML += `<div class ="big-div">
                            <div class="first-block"> <h4 class = "titleBlock">${this.title}</h4>
                                                    <p class = "pBlock"> ${this.txt}</p> 
                                                   <h2 class = "priceBlock">${this.money}/mo</h2>
                                                    <button class="pricingBtn">${this.button}</button>
                            </div>
                            <div class ="second-block">
                            <h4 class = "h4Pricing">WHAT'S INCLUDED</h4>
                            <div class= "listBlock">
                                    <ul>
                                      <li class = "liBlock">Cras justo odio</li>
                                      <li class = "liBlock">Dapibus ac facilisis in.</li>
                                      <li class = "liBlock">Morbi leo risus.</li>
                                      <li class = "liBlock">Potenti felis, in cras ligula.</li>
                                 </ul>
                                  </div>
                              </div>
                          </div>`
    }
};

let hobby = new Block('Hobby', 'All the basics for starting a new business', '$12', 'Buy Hobby');
hobby.showBlock();
let freelancer = new Block('Freelancer', 'All the basics for starting a new business', '$24', 'Buy Freelancer');
freelancer.showBlock();
let startup = new Block('Startup', 'All the basics for starting a new business', '$32', 'Buy Startup');
startup.showBlock();
enterprise = new Block('Enterprise', 'All the basics for starting a new business', '$48', 'Buy Enterprise');
enterprise.showBlock()

let li = document.querySelectorAll('.liBlock')
li.forEach(list => {
    list.style.position = 'relative';
    list.style.paddingLeft = '25px';
    list.style.fontSize = '14px';
    list.style.marginBottom = '13px';
    list.style.color = '#888888';
})

let team = document.querySelector('.teamBlock');
class Team {
    constructor(img, name, job) {
        this.img = img;
        this.name = name;
        this.job = job
    }
    funcImg() {
        team.innerHTML += `<div class="contentTeam"><div class="imgTeam">
                            <img src="${this.img}" alt="img"></div>
                            <div class="names-jobs"><p>${this.name}</p>
                            <h5 style="color: red; padding:2%">${this.job}</h5></div></div> `
    }
};
let team1 = new Team('./images/team1.jpg', 'Leonard Krasner', 'Senior Designer');
team1.funcImg();
let team2 = new Team('./images/team2.jpg', 'Leonard Krasner', 'Senior Designer');
team2.funcImg();
let team3 = new Team('./images/team3.jpg', 'Leonard Krasner', 'Senior Designer');
team3.funcImg();

let contact = document.querySelector('.contactBlocks');
class Contact {
    constructor(title, address, icon) {
        this.title = title;
        this.address = address;
        this.icon = icon
    }
    showAddress() {
        contact.innerHTML += `<div class= "address">
                             <div> <img src="${this.icon}" alt="img" class ="imgContact"></div>
                             <div> <h3 class="titleBlock">${this.title}</h3><br> 
                              <p class = "p-contact">${this.address}</p>
                              </div></div> `
    }
}
let contact1 = new Contact('Address', '3333 Raleigh St, Houston, TX 77021, <br>USA', './images/addressimg.png');
contact1.showAddress();
let contact2 = new Contact('Call us on', '+1 800 555 44 00 (Toll free) <br> +321 55 666 7890', './images/callimg.png');
contact2.showAddress();
let contact3 = new Contact('Mail at', 'supportteam@example. <br> comcareer@example.com', './images/smsimg.png');
contact3.showAddress();

let column = document.querySelector('.aLLcolumn');

class Columns {
    constructor(title, item1, item2, item3, item4, item5) {
        this.title = title;
        this.item1 = item1;
        this.item2 = item2;
        this.item3 = item3;
        this.item4 = item4;
        this.item5 = item5
    }
    showColumn() {
        column.innerHTML += `<div class = "column">
                            <h3>${this.title}</h3><br>
                            <ul class = "pret">
                            <li>${this.item1}</li>
                            <li>${this.item2}</li>
                            <li>${this.item3}</li>
                            <li>${this.item4}</li>
                            <li>${this.item5}</li>
                            </ul>
                            </div>`
    }
}
let item1 = new Columns('Solutions', 'Marketing', 'Analytics', 'Commerce', 'Insights', 'Promotion');
item1.showColumn();
let item2 = new Columns('Support', 'Pricing', 'Documentation', 'Guides', 'API Status', 'Live Support');
item2.showColumn();
let item3 = new Columns('Company', 'About Us', 'Our Blog', 'Jobs', 'Press', 'Contact Us');
item3.showColumn();
let item4 = new Columns('Legal', 'Terms & Conditions', 'Privacy Policy', 'Catering Services', 'Customer Relations', 'Innovation');
item4.showColumn();
