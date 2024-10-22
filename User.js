var Input = require('prompt-sync')();
var age = Input('Enter Age ');
var num = Number(age);
var sex = Input('Enter sex ');
function User(age, sex, maritalstatus) {
    if (sex === 'female') {
        console.log("She will work only in urban areas");
    }
    else if (sex === 'male' && age >= 20 && age <= 40) {
        console.log("He may wok in anywhere");
    }
    else if (sex === 'male' && age >= 40 && age <= 60) {
        console.log("Urban areas only");
    }
    else {
        console.log('Error');
    }
}
User(age, sex);
