let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');
} else {
  alert('但是巧克力才是我的最爱呀……');
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

document.querySelector('h1').onclick = function() {
    alert('别戳我，我怕疼h1。');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.jpeg') {
      myImage.setAttribute('src', 'images/test2.jpg');
    } else {
      myImage.setAttribute('src', 'images/test.jpeg');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName)
    {
        setUserName()
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = '酷毙了，' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} 
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
  
myButton.onclick = function() {
    setUserName();
}
  