const container = document.querySelector("#container");
console.log(container);

const p = document.createElement('p');
p.style.color = "red";
p.textContent = 'Hey I\'m red!';
const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = 'I\'m a blue h3!';

container.appendChild(p);
container.appendChild(h3);

const div = document.createElement('div');
div.style.border = "1px solid black";
div.style.background = "pink";
const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
const p2 = document.createElement('p');
p2.textContent = 'ME TOO!';

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(div);

/*const btn = document.querySelector("#testBtn");
btn.addEventListener('click', function (e) {
	console.log(e);
	console.log(e.target);
	e.target.style.background = 'blue';
});*/

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});