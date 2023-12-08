// Mail

/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

*/

const mail = ["giuseppe@ciao.it", "pippo@baudo.com", "papera@boolean.com"];

const user = prompt("digita la tua mail per entrare!");

if (mail.includes(user)) {
  alert("Benvenuto!");
  console.log(user);
} else {
  alert("Tu non puoi passare!");
}

// Gioco dei dadi

/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const player = Math.floor(Math.random(1) * 7);

Math.floor(Math.random(1) * 7);

console.log(user);

const bot = Math.floor(Math.random(1) * 7);

Math.floor(Math.random(1) * 7);

console.log(bot);

if (player > bot) {
  alert("Hai battuto il computer!");
} else if (bot > player) {
  alert("Il computer ti ha battuto!");
} else {
  alert("Avete pareggiato!");
}
