
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

