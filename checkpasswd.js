var check = function() {

    // re = /[a-z]/;
    // if(!re.test.document.getElementById('password')) {
    //     document.getElementById('message').style.color = 'green';
    //     document.getElementById('minOneLowercase').innerHTML = 'Hasło musi zawierać przynajmniej jedną małą listerę!';
    // }  else {
    //     document.getElementById('message').style.color = 'red';
    //     document.getElementById('minOneLowercase').innerHTML = 'Hasło musi zawierać przynajmniej jedną małą listerę!';
    // }

    // re = /[A-Z]/;
    // if(!re.test.document.getElementById('password')) {
    //     document.getElementById('message').style.color = 'green';
    //     document.getElementById('minOneUppercase').innerHTML = 'HHasło musi zawierać przynajmniej jedną dużą literę!';
    // }  else {
    //     document.getElementById('message').style.color = 'red';
    //     document.getElementById('minOneUppercase').innerHTML = 'HHasło musi zawierać przynajmniej jedną dużą literę!';
    // }

    // re = /^\w+$/;
    // if(!re.test.document.getElementById('password')) {
    //     document.getElementById('message').style.color = 'green';
    //     document.getElementById('minOneSpecial').innerHTML = 'Hasło musi zawierać przynajmniej jeden znak specjalny!';
    // }  else {
    //     document.getElementById('message').style.color = 'red';
    //     document.getElementById('minOneSpecial').innerHTML = 'Hasło musi zawierać przynajmniej jeden znak specjalny!';
    // }

    if (document.getElementById('password').value == document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Wszystko ok!';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Hasła różnią się od siebie';
  }
}