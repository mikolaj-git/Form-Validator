const clearBtn = document.querySelector('.wrapper__buttons-clear');
const sendBtn = document.querySelector('.wrapper__buttons-send');
const formBoxes = document.querySelectorAll('.wrapper__form-box');
const user = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');

const popup = document.querySelector('.wrapper__popup');
const popupBtn = document.querySelector('.wrapper__popup-button');


const checkUsername = (input) => {
	const parent = input.parentElement;
	const child = parent.querySelector('.wrapper__form-box-error');

	if (input.value === '' || input.value.length < 6) {
		parent.classList.add('error');
		child.innerText = 'Username must contain at least 6 characters';
	} else {
		parent.classList.remove('error');
	}
};


const checkPassword = (input) => {
	const parent = input.parentElement;
	const child = parent.querySelector('.wrapper__form-box-error');

	if (input.value === '' || input.value.length < 8) {
		parent.classList.add('error');
		child.innerText = 'Password must contain at least 8 characters';
	} else {
		parent.classList.remove('error');
	}
};

const checkPassword2 = (input) => {
	const parent = input.parentElement;
	const child = parent.querySelector('.wrapper__form-box-error');

	if (pass.value !== pass2.value) {
		parent.classList.add('error');
		child.innerText = 'Passwords must be the same!';
	} else if (pass2.value === '' || pass2.value.length < 8) {
		parent.classList.add('error');
		child.innerText = 'Password must contain at least 8 characters';
	} else {
		parent.classList.remove('error');
	}
};

const checkEmail = (input) => {
	const parent = input.parentElement;
	const child = parent.querySelector('.wrapper__form-box-error');

	const reg =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (reg.test(input.value)) {
		parent.classList.remove('error');
	} else {
		parent.classList.add('error');
		child.innerText = 'Enter a valid email address';
	}
};

const clearFunction = () => {
	formArray = [user, pass, pass2, email];

	formArray.forEach((el) => {
		el.value = '';
	});

	formBoxes.forEach((el) => {
		el.classList.remove('error');
	});
};

const sendFunction = () => {
	let errorNumber = 0;

	formBoxes.forEach((el) => {
		if (el.classList.contains('error')) {
			errorNumber++;
		}
	});

	if (errorNumber === 0) {
		popup.classList.add('show-popup');
		clearFunction();
	}
};

popupBtn.addEventListener('click', function () {
	popup.classList.remove('show-popup');
});

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();
	checkUsername(user);
	checkPassword(pass);
	checkPassword2(pass2);
	checkEmail(email);
	sendFunction();
});

document.addEventListener('keypress', (e)=>{
	if (e.keyCode === 13 || e.which ===13) {
		e.preventDefault();
		checkUsername(user);
		checkPassword(pass);
		checkPassword2(pass2);
		checkEmail(email);
		sendFunction();
	}
})


clearBtn.addEventListener('click', (e) => {
	e.preventDefault();
	clearFunction();
});
