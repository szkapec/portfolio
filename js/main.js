var f = document.forms['dane_osobowe'];
if ((f.f_imie.value == '')||(f.f_imie.value.length < 2))
    {
        f.f_imie.style.borderColor='red';    
        f.f_imie.focus();
        document.getElementById('f_imie_error').style.display = 'inline-block'; // lub samo inline < nie jestem pewny.
        return false;
    }


    