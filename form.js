window.onload = function () {

	const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let emailInput = document.querySelector("#email");
	
  emailInput.oninput = function () {
    let email = this.value;
    if (!validation.test(email)) {
      emailInput.style.backgroundColor = 'red';
      emailNote.style.color = 'red';
      emailNote.innerHTML = "<b>Wrong email format!</b>"
    } else {
      emailInput.style.backgroundColor = 'green';
      emailNote.style.color = 'green';
      emailNote.innerHTML = "<b>Good email format</b>";
    }
  }

	let nameInput = document.querySelector("#name");
	
  nameInput.oninput = function () {
    let name = this.value;
    if (name.length < 5) {
      nameInput.style.backgroundColor = 'red';
      nameNote.style.color = 'red';
      nameNote.innerHTML = "<b>Your name can't be shorter than 5 characters!</b>"
    } else {
      nameInput.style.backgroundColor = 'green';
      nameNote.style.color = 'green';
      nameNote.innerHTML = "<b>Good name format</b>";
    }
  }

	let dateInput = document.querySelector("#date");
	
  dateInput.oninput = function () {
    if (this.valueAsDate <= new Date()) {
      dateInput.style.backgroundColor = 'red';
      dateNote.style.color = 'red';
      dateNote.innerHTML = "<b>You can't book a table before the actual date!</b>"
    } else {
      dateInput.style.backgroundColor = 'green';
      dateNote.style.color = 'green';
      dateNote.innerHTML = "<b>Good date.</b>";
    }
  }

	let timeInput = document.querySelector("#time");
	
  timeInput.oninput = function () {
    if (this.valueAsTime <= new Date()) {
      timeInput.style.backgroundColor = 'red';
      timeNote.style.color = 'red';
      timeNote.innerHTML = "<b>You can't book a table one hour before the actual time!</b>"
    } else {
      timeInput.style.backgroundColor = 'green';
      timeNote.style.color = 'green';
      timeNote.innerHTML = "<b>Good time.</b>";
    }
  }

	let numberInput = document.querySelector("#number");
	
  numberInput.oninput = function () {
    if (this.valueAsNumber < 1) {
      numberInput.style.backgroundColor = 'red';
      numberNote.style.color = 'red';
			numberNote.innerHTML = "<b>You can book a table at least for 1!</b>";
			this.valueAsNumber = 0;
    }	else if (this.valueAsNumber > 10) {
      numberInput.style.backgroundColor = 'red';
      numberNote.style.color = 'red';
			numberNote.innerHTML = "<b>You can't book a table for more than 10!</b>";
    } else {
      numberInput.style.backgroundColor = 'green';
      numberNote.style.color = 'green';
      numberNote.innerHTML = "<b>You may book a table!</b>";
    }
  }

	let bookBtn = document.querySelector('#bookBtn');
	
  bookBtn.addEventListener('click', function () {
    let nameIsSet = nameInput.value;
    let emailIsSet = emailInput.value;
    let dateIsSet = dateInput.value;
    let timeIsSet = timeInput.value;
    let numberIsSet = numberInput.value;
    if (nameIsSet && emailIsSet && dateIsSet && timeIsSet && numberIsSet) {
      submitNote.innerHTML = "";
      console.log(nameInput.value + " with " + emailInput.value +
        " email address, reserved a table on " + dateInput.value + " at " +
        timeInput.value + " for " + numberInput.value + " people.");
    } else {
      submitNote.style.color = 'red';
      submitNote.innerHTML = "<b>All inputs are required!</b>";
      console.log("All inputs are required!");
    }
	});
	
}