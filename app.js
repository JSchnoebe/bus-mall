'use strict';
console.log('js file is connected');

const productImageSectionTag = document.getElementById('allProducts');
const leftProductImgTag = document.getElementById('leftProductImage');
const centerProductImgTag = document.getElementById('centerProduct');
const rightProductImgTag = document.getElementById('rightProduct');

let totalClicks = 0;

//variables to store products already on the page.
let leftProductOnPage = null;
let centerProductOnPage = null;
let rightProductOnPage = null;

//constructor function
const ProductPicture = function(name, imageSrc){
    this.name = name;
    this.url = imageSrc;
    //count product votes.
    this.clicks = 0;
    this.timesShown = 0;
    //push object into our array to store the product object.
    ProductPicture.allImages.push(this);
};
ProductPicture.allImages = [];

//prevent last picked products from being picked
const renderNewProduct = function(leftIndex, centerIndex, rightIndex){
    console.log('create the image src="X" for left, center and right images', leftIndex);
    
}