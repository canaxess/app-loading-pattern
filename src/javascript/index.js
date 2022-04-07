const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', function (event){
	var div = document.getElementById('al-pb');
	div.innerHTML = 'Loading...';
	count=0;
		
	setInterval(function () {div.setAttribute('aria-valuenow', count++);}, 1000);
});

btn2.addEventListener('click', function (event){
	var div = document.getElementById('al-status');
	div.innerHTML = 'Loading...';
});

btn3.addEventListener('click', function (event){
	setInterval(function () {change()}, 1000);
});

function change()
{
	var div = document.getElementById('al-status-c');
	var ab = div.getAttribute('data-toggle');
	switch(ab)
	{
		case "true":
			div.setAttribute('data-toggle', 'false')
			div.innerHTML = 'Loading...';
			console.log(1);
			break;
		case "false":
			div.setAttribute('data-toggle', 'true')
			div.innerHTML = '';
			console.log(2);
			break;
	}
}