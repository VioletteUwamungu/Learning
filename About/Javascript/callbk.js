var numberOfClicks = 0;
function countMe () {
	numberOfClicks++;
	var element = document.getElementByID ("number");
	if (numberOfClicks== 1) {
		element.innerText ="clicked Once";
	}
	else {
		element.innerText=="clicked" + numberOfClicks +"times";
	}	
}
function showMe(){
	var input = document.getElementByID('input');
    var paragraph.innerText = input.value;
    paragraph.innerText = input.value;
}
var phones = ["iphone", "tecno", "nokia"];
var mylist = getElementByID('phones')
for (var i=0; i<phones.length; i++) {
	var phone = phones[i];
	mylist.innerText+='<li>'+phone+'</li>'
}
var phonePrice = [200,100,150];
var myPrice = document.getElementByID('price');

var sum =0;
for ( var i =0; i<phonePrice.length; i++) {
	sum +=phonePrice[i]
	myPrice.innerHTML = '<b>$' + sum + '</b>'
}