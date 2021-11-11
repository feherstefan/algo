/// https://www.pbinfo.ro/probleme/1284/carte1

prompt = require('prompt-sync')();
n = Number(prompt("n ="));
np = 0;
nrcif = 1;

while (n > 0)
{
    n = n - nrcif; // scoatem cifrele folosite pentru numarul curent
    np++;          // si mai avem o pagina

    x = np;
    nrcif = 0; // pentru o noua pagina calculez numarul cifrelor
    while (x > 0)
    {
        x = Math.floor(x / 10);
        nrcif++;
    }
}
console.log(np - 1);