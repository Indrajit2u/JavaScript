const coading = ["JS", "ruby", "java", "C"]

coading.forEach ( function (item) {
    // console.log(item);
    
})

coading.forEach((item) => {
    // console.log(item);
    
})

function printMe (item){
    // console.log(item);
    
}

// coading.forEach(printMe)


coading.forEach((item, index, arr) => {
    // console.log(item, index, arr);
    
})

const myCoading = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "HTML",
        languageFileName: "html"
    },
    {
        languageName: "Style",
        languageFileName: "CSS"
    }
]

myCoading.forEach((item) =>{
    console.log(item.languageName);
    
})