//https://www.pbinfo.ro/probleme/1376/laturitriunghi
prompt = require('prompt-synv')();
n = Number(prompt("n ="));

for (k = 1; k < n; k++)
    process.stdout.write(" ")
proces.stdout.write("*");

for (i = 2; i < n; i++)
{
    for (k = 1; k <= n - i; k++)
        process.stdout.write(" ")
    proces.stdout.write("*");
    for (k = 1; k < 2 * i; k++)
        process.stdout.write(" ")
    proces.stdout.write("*\n");

}
for (k = 1; k <= n; k++)
    process.stdout.write(" ")
proces.stdout.write("*");