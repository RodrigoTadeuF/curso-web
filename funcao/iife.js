// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executadp na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

// Função que não acessa o escopo global!! 
// Ocorre pela "Proteção" dos parênteses