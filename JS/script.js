/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

console.log("ciao");

const mail = [
  "metal-gear-89@hotmail.it",
  "pippobaudo@gmail.com",
  "papera@boolean.com",
];

const user = prompt("digita la tua mail per entrare!");

for (let i = 0; i < mail.length; i++) {
  const list = mail[i];
  console.log(list);
  if (user == mail) {
    alert("Benvenuto!");
  } else {
    alert("Tu non puoi passare!");
  }
}
