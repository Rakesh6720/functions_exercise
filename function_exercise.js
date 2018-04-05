/*function calculatePay(){
	
	
	let hoursWorked = prompt("Please enter the hours you worked this week:");
	let hourRate = prompt("Please enter your hourly rate:");
	let workWeek = 40;
	let overtimeFactor = 1.5;
	let weeklyPay = hoursWorked * hourRate;
	let overtimeHours = hoursWorked - workWeek;
		if (overtimeHours > 0) {
			let overtimePay = overtimeHours * (hourRate * overtimeFactor);
			console.log("Your weekly pay is: $" + parseInt(overtimePay) + parseInt(weeklyPay) + ".");
		}
		else {
			console.log("Your weekly pay amount is: $" + weeklyPay + ".");
		}
	
}

calculatePay();*/


let userHours = prompt("Please enter the hours you worked this week: ");
let userRate = prompt("Please enter your hourly rate: ");

calculatePay(userHours, userRate);

function calculatePay(hours, rate) {

			if (hours<=40) {
				let weeklyRate = hours * rate;
				console.log("Your pay this week is: $" + weeklyRate + ".");
			}
			
			else {
				let overtimeHours = hours-40;
				let overtimeRate = rate * 1.5;
				let overtimePay = overtimeHours * overtimeRate;
				let weeklyRate = overtimePay + (hours * rate);
				console.log("Your pay this week is: $" + weeklyRate + ".");
			}
}