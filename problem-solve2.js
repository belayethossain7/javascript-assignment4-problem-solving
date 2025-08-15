function onlyCharacter(str){
    if(typeof str !== "string"){
        return "Invalid";
    }

    let cleanStr = str.replaceAll(" ","");
    return cleanStr.toUpperCase();
}

let a = onlyCharacter("  h e llo wor   ld");
console.log(a);