let bosluk = document.getElementById('bosluk');
let butonlar = Array.from(document.getElementsByClassName('buton'));

butonlar.map( buton => {
    buton.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                bosluk.innerText = '';
                break;
            case '=':
                try{
                    bosluk.innerText = eval(bosluk.innerText);
                   } catch {
                    bosluk.innerText = "Error"
                    }
                break;
            case '←':
                if (bosluk.innerText){
                   bosluk.innerText = bosluk.innerText.slice(0, -1);
                }
                break;
            default:
                bosluk.innerText += e.target.innerText;
        }
    });
});