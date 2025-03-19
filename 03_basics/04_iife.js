// Immediately Invoked Function Expressions (IIFE)

(function chai () {
    console.log('DB CONNECTED');
    
})();

(() => {
    console.log('D CONNECTED TWO');
    
})();

((name) => {
    console.log(`D CONNECTED THREE ${name}`);
    
})("Indrajit")