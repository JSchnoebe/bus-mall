'use strict';
console.log('js file is connected');




//global variables 
let totalClicks = 0;
let imageElements = document.getElementsByTagName('img');
let productIndex1 = 0;
let productIndex2 = 1;
let productIndex3 = 2;
let rounds = 25;
let allProducts = [];



//constructor function
function Product(name, imageSrc){
    this.name = name;
    this.imageSrc = imageSrc;
    //count product votes.
    this.clicks = 0;
    this.timesShown = 0;
    //push object into our array to store the product object.
    allProducts.push(this);
};

console.log('all products',allProducts);













new Product('R2D2 Bag', 'images/bag.jpg');
new Product('Banana Slicer', 'images/banana.jpg');
new Product('Bathroom Stand', 'images/bathroom.jpg');
new Product('Toeless Boots', 'images/boots.jpg');
new Product('Breakfast Maker', 'images/breakfast.jpg');
new Product('Meatball Gum', 'images/bubblegum.jpg');
new Product('Curvy Chair', 'images/chair.jpg');
new Product('Monster Action Figure', 'images/cthulhu.jpg');
new Product('Duck Muzzle', 'images/dog-duck.jpg');
new Product('Dragon Meat', 'images/dragon.jpg');
new Product('Silverware Pen Caps', 'images/pen.jpg');
new Product('Pet Sweeper', 'images/pet-sweep.jpg');
new Product('Pizza Scissors', 'images/scissors.jpg');
new Product('Shark Sleeping Bag', 'images/shark.jpg');
new Product('Baby Sweeper', 'images/sweep.png');
new Product('Star Wars Sleeping Bag', 'images/tauntaun.jpg');
new Product('Unicorn Meat', 'images/unicorn.jpg');
new Product('Endless Water Can', 'images/water-can.jpg');
new Product('Futuristic Wine Glass', 'images/wine-glass.jpg');









function imageWasClicked(event){
    // console.log('event that we can get the id from to check and see what image was clicked and update count for that id', event);
    totalClicks++;
    // console .log(productIndex3);
    if(event.srcElement.id === '1'){
        allProducts[productIndex1].clicks++;
        // console.log('this was the image and we added the clicks', allProducts[productIndex1]);
    } else if(event.srcElement.id === '2'){
        allProducts[productIndex2].clicks++;
    } else if(event.srcElement.id === '3'){
        allProducts[productIndex3].clicks++;
    }

    let nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
    let nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
    let nextProductIndex3 = Math.floor(Math.random() * allProducts.length);

    


    while(productIndex1 ===  nextProductIndex1 || productIndex1  === nextProductIndex2 || productIndex1 === nextProductIndex3){
        nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
    }
  
    while(productIndex2 ===  nextProductIndex1 || productIndex2  === nextProductIndex2 || productIndex2 === nextProductIndex3){
        nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
    }
    while(productIndex3 ===  nextProductIndex1 || productIndex3  === nextProductIndex2 || productIndex3 === nextProductIndex3){
        nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
    }

    // console.log('new nextProductIndex1',nextProductIndex1);
    // console.log('new nextProductIndex2',nextProductIndex2);
    // console.log('new nextProductIndex3',nextProductIndex3);
    //set up ref to the product index array
    productIndex1 = nextProductIndex1;
    productIndex2 = nextProductIndex2;
    productIndex3 = nextProductIndex3;

    //update the image array positions 0 and 1 with the new pictures url
    imageElements[0].src = allProducts[productIndex1].imageSrc;

    // console.log('allProducts[productIndex1].imageSrc;',allProducts[productIndex1].imageSrc);

    allProducts[productIndex1].timesShown++;

    imageElements[1].src = allProducts[productIndex2].imageSrc;
    allProducts[productIndex2].timesShown++;

    imageElements[2].src = allProducts[productIndex3].imageSrc;
    allProducts[productIndex3].timesShown++;

    if(totalClicks >= rounds){
        let footerElement = document.getElementsByTagName('footer');
        //remove the first child h2
        if(footerElement.firstChildElement){
            footerElement.firstChildElement.remove();
        }

        footerElement.textContent = 'You voted a lot.';

        let asideUL = document.getElementById('voteResults');


        //count total clicks vs rounds
        //create li items to show image information on clicks and display the percentages

        for(let i = 0; i < allProducts.length; i++){
            let voteResultsListItem = document.createElement('li');
            voteResultsListItem.textContent = ''
            
        }
    }

    






}





for(let i = 0; i < imageElements.length; i++){
    imageElements[i].addEventListener('click', imageWasClicked);
    console.log('this is the add event listener');
  }