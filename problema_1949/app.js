/// https://www.pbinfo.ro/probleme/1949/tort-lma

prompt = require('prompt-sync')();
n = Number(prompt("n ="));
console.log(Math.floor((n + 1) / 2));
cost = 0
for (i = 1; i <= n; i++)
{
    for (i = 1; i <= n; i++) {
        ///process.stdout.write(" ("+i+" , "+j +")");
        dmin = n
        if (i - 1 < dmin) dmin = i - 1;
        if (n - 1 < dmin) dmin = n - i;
        if (j - 1 < dmin) dmin = j - 1;
        if (n - 1 < dmin) dmin = n - j;
        process.stdout.write(" " + (dmin + 1));
        cost = cost + (dmin + 1) * (dmin + 2) / 2;
    }

    process.stdout.write("\n")
}
console.log("test")
