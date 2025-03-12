

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "indrajit"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); can call from child object

    two()
    
}
// one()

if (true){
    const username = "ind"
    if (username === "ind"){
        const website = "youtube 1"
        console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);


// **********************

function addone(num) {
    return num + 1
}

addone(5)

const addtwo = function(num){
    return num + 2
}

addtwo()