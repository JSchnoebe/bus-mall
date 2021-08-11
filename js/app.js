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


function getProductArray(nameOfThePropertyIWant){
    let answer = [];
    for(let i = 0; i < allProducts.length; i++){
      answer[i] = allProducts[i][nameOfThePropertyIWant];
    }
    console.log(answer);
    return answer;
  }













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

allProducts[0].timesShown = 1;
allProducts[1].timesShown = 1;
allProducts[2].timesShown = 1;







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

    while((nextProductIndex1 === productIndex1) ||
      (nextProductIndex1 === productIndex2)     || 
      (nextProductIndex1 === productIndex3)     || 
      (nextProductIndex1 === nextProductIndex2) || 
      (nextProductIndex1 === nextProductIndex3)  
    ){
    nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
    }
    while(
    (nextProductIndex2 === productIndex1) || 
    (nextProductIndex2 === productIndex2) || 
    (nextProductIndex2 === productIndex3) ||
    (nextProductIndex2 === nextProductIndex1) ||
    (nextProductIndex2 === nextProductIndex3)
    ){
    nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
    }
    while(
    (nextProductIndex3 === productIndex1) ||
    (nextProductIndex3 === productIndex2) ||
    (nextProductIndex3 === productIndex3) ||
    (nextProductIndex3 === nextProductIndex1) ||
    (nextProductIndex3 === nextProductIndex2)
  
    ){
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
            voteResultsListItem.textContent = `${allProducts[i].name} was clicked on ${allProducts[i].clicks} times and was shown ${allProducts[i].timesShown} times `;
            asideUL.appendChild(voteResultsListItem);

            let percentageListItem = document.createElement('li');
            let math;
            if(allProducts[i].clicks === 0){
                math = `Zero clicks and shown ${allProducts[i].timesShown} times. Must be a bad product.`;
            } else {
            math = Math.round(((allProducts[i]['clicks']/ allProducts[i]['timesShown']).toFixed(2) * 100)) + '%';
            }
            percentageListItem.textContent = `${allProducts[i].name} percentage of times clicked on vs times shown is ` + math;
            asideUL.appendChild(percentageListItem);  
        }//closes for loop

        //remove event listener
        for(let i = 0; i < imageElements.length; i++){
            imageElements[i].removeEventListener('click', imageWasClicked);
            console.log('Is this working?');
        }

        runMyChartsNow();
    }
}

function runMyChartsNow(){
    let ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
    data: {
      labels: getProductArray('name'),
      datasets: [{
        label: '# of Votes',
        data: getProductArray('clicks'),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}




for(let i = 0; i < imageElements.length; i++){
    imageElements[i].addEventListener('click', imageWasClicked);
    console.log('this is the add event listener');
  }