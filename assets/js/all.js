"use strict";

function openCollapseHandler(that) {
  var target = document.getElementById('navbarRow');

  target.classList.toggle('showMenuList');
} 


function changePageHandler(targetPage) {
  console.log($(window).width()); 

  if (targetPage === 'Product' && $(window).width() < 992) return;
  window.location = './product.html';
} 


$(document).ready(function () {
  console.log(location.pathname);

  if (!!location.pathname.match(/index/i)) {
    $('.header').addClass('nowOnIndexPage');
  } else if (!!location.pathname.match(/information|payment/i)) {
    $('.bugerBtnIcon').remove();
    $('.menuList').remove();
    $('#footer').remove();
  } else if (!!location.pathname.match(/done/i)) {
    $('.bugerBtnIcon').remove();
    $('.menuList').remove();
    $('#footer').remove(); 
    $('.logoText').addClass('done-logoText');
  }
}); 

function addCountNumHandler(that, num, price) {
  var targetNum = $(that).parent().find('input').val(); 

  var totalPriceSpan = $(that).parent().parent().parent().find('span')[0]; // 如果減少之後小於一就 return;

  if (parseInt(targetNum) + num < 1) return; //增加

  $(that).parent().find('input').val(parseInt(targetNum) + num);
  totalPriceSpan.innerHTML = 'NT$' + formatNumber($(that).parent().find('input').val() * price);
}


function formatNumber(str, glue) {
  if (isNaN(str)) {
    return NaN;
  } 

  var glue = typeof glue == 'string' ? glue : ',';
  var digits = str.toString().split('.'); 

  var integerDigits = digits[0].split(""); // 將整數的部分切割成陣列

  var threeDigits = []; 
  while (integerDigits.length > 3) {
    threeDigits.unshift(integerDigits.splice(integerDigits.length - 3, 3).join(""));
  }

  threeDigits.unshift(integerDigits.join(""));
  digits[0] = threeDigits.join(glue);
  return digits.join(".");
} //- 轉換錢的格式


function clearNumberText(str) {
  str = str.replace(/,|N|T/g, "");

  return str;
} //-- 把移商品移除


function removeGoodHandler(that) {
  //- 把移商品移除
  $(that).parents().eq(4).remove();
} //- 打開購物車


function openShoppingCartHandler() {
  //- 布幕
  var darkScreen = document.getElementById('darkScreen'); //- 購物車

  var shoppingCartModal = document.getElementById('shoppingCartModal');

  darkScreen.classList.toggle('show');
  shoppingCartModal.classList.toggle('show');
}
//# sourceMappingURL=all.js.map
