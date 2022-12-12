const student = "Дедов Даниил Романович"; 

document.getElementById("student").innerHTML = student;

let chislo1 = prompt("Введите реальный счёт первой команды");
let chislo2 = prompt("Введите реальный счёт второй команды");
let chislo1Q = prompt("Введите предполагаемый счёт первой команды");
let chislo2Q = prompt("Введите предполагаемый счёт второй команды");
if ((chislo1==chislo1Q) && (chislo2==chislo2Q)) {
    alert ("Счёт был угадан верно!");
}
else if (
    (chislo1>chislo2) && (chislo1Q>chislo2Q)
    ||
    (chislo1==chislo2) && (chislo1Q==chislo2Q)
    ||
    (chislo1<chislo2) && (chislo1Q<chislo2Q)
)   {
alert ("Счёт не угадали, но исход угадали");
} else {
alert ("Ни счёта, ни исхода не угадали");
}