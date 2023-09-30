# Project of DOM
Project link is here 

[Click Here]()

## Project 1 

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// console.log(buttons)
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }
  });
});
```
## Project 5

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `;
});
```

## Project 6

```javascript
// document.querySelector('#start').addEventListener('click', function () {
//   const setColor = setInterval(function () {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = '#' + randomColor;

//     document.querySelector('#stop').addEventListener('click', function () {
//       clearInterval(setColor);
//     });
//   }, 1000);
// });

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let Interval;

document.querySelector('#start').addEventListener('click', function () {
  const colorChanged = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if (!Interval) {
    Interval = setInterval(colorChanged, 1000);
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(Interval);
  Interval = null;
});

// console.log(randomColor());
```
