const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', function (event){
	var div = document.getElementById('al-pb');	
	var count=0;
	var updateInterval = setInterval(function () {
		if(count<=10)
		{
			div.setAttribute('aria-busy', 'true');
			div.setAttribute('aria-valuetext', 'loading');
			div.innerHTML = `${count}%`;
			div.setAttribute('aria-valuenow', count++);
		}
		else
		{
			div.setAttribute('aria-busy', 'false');
			clearInterval(updateInterval);
		}
		}, 1000);
});

btn2.addEventListener('click', function (event){
	var div = document.getElementById('al-status');
	div.innerHTML = 'Loading';
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
			div.innerHTML = 'Loading';
			break;
		case "false":
			div.setAttribute('data-toggle', 'true')
			div.innerHTML = '';
			break;
	}
}
