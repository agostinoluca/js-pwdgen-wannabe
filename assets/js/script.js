/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23

Strumenti:
-prompt
-const
-getElementById
-innerHtml
*/

// ask name
const UserFirstName = prompt(`What's your name?`)

// ask last name
const UserLastName = prompt(`What's your last name?`)

// ask favourite colour
const FavoriteColor = prompt(`What's your favourite colour?`)

// get element by id username
const UserName = document.getElementById('username')

// welcome message + innerhtml with result name + last name
UserName.innerHTML = `Ciao ${UserFirstName} ${UserLastName}, benvenuto nel tuo generatore di password.`

// get element by id password
const password = document.getElementById(`password`)

// create password
password.innerHTML = `${UserFirstName}${UserLastName}${FavoriteColor}23`