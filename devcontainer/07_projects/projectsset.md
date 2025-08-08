# projects realated to dom 

##project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

##project 1

```javascript


const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function( button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id
    }


  })
});


*******   2nd method*******

```javascript```


const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

const colorMap = {
  grey: 'grey',
  white: 'white',
  blue: 'blue',
  yellow: 'yellow'
};

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    const color = colorMap[e.target.id];
    if (color) {
      body.style.backgroundColor = color;
    }
  });
});



****project 2 solution [BMI calculator]

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#Height').value);
  const weight = parseInt(document.querySelector('#Weight').value);
  const result = document.querySelector('#results'); 

  if (isNaN(height) || height <= 0 || height==='' ) {
    result.innerHTML = `Please enter a valid height: ${height}`;
  } else if (isNaN(weight) || weight <= 0||weight==='') {
    result.innerHTML = `Please enter a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = <span>`${bmi}`</span>; 
  }
});
   


## 3 rd project digital clock

```javascript

const clock =document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function(){let date= new Date()
  clock.innerHTML=date.toLocaleTimeString();},1000);
const clock =document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function(){let date= new Date()
  clock.innerHTML=date.toLocaleTimeString();},1000);


