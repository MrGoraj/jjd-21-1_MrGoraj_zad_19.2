var check = function() {


    const reLow = /[a-z]/;
    let pass = document.getElementById('password').value;
    if (reLow.test.pass) {
        document.getElementById('minOneLowercase').style.color = 'green';
        document.getElementById('minOneLowercase').innerHTML = '<br> Hasło zawiera przynajmniej jedną małą listerę';
    }  else {
        document.getElementById('minOneLowercase').style.color = 'red';
        document.getElementById('minOneLowercase').innerHTML = '<br> Hasło musi zawierać przynajmniej jedną małą listerę!';
    }

    const reUp = /[A-Z]/;
    if (reUp.test.pass) {
        document.getElementById('minOneUppercase').style.color = 'green';
        document.getElementById('minOneUppercase').innerHTML = '<br> Hasło zawiera przynajmniej jedną dużą literę';
    }  else {
        document.getElementById('minOneUppercase').style.color = 'red';
        document.getElementById('minOneUppercase').innerHTML = '<br> Hasło musi zawierać przynajmniej jedną dużą literę!';
    }

    const reSpec = /^\w+$/;
    if (reSpec.test.pass) {
        document.getElementById('minOneSpecial').style.color = 'green';
        document.getElementById('minOneSpecial').innerHTML = '<br> Hasło zawiera przynajmniej jeden znak specjalny';
    }  else {
        document.getElementById('minOneSpecial').style.color = 'red';
        document.getElementById('minOneSpecial').innerHTML = '<br> Hasło musi zawierać przynajmniej jeden znak specjalny!';
    }

    if (pass.length > 7) {
        document.getElementById('min8Char').style.color = 'green';
        document.getElementById('min8Char').innerHTML = '<br> Hasło min 8 znaków';
    } else {
        document.getElementById('min8Char').style.color = 'red';
        document.getElementById('min8Char').innerHTML = '<br> Hasło musi mieć min 8 znaków!';
    }

    if (document.getElementById('password').value == document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'Wszystko ok!';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Hasła różnią się od siebie';
  }
}