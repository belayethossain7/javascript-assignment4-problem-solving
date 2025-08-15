function resultReport(marks){
    if (!Array.isArray(marks)){
        return "Invalid";
    }

    let total = 0;
    let pass = 0;
    let fail = 0;
    for (let i =0; i<marks.length; i++){
        total += marks[i];
        if (marks[i] >= 40){
            pass++;
        }
        else{
            fail++;
        }
    }
    let avg = marks.length > 0 ? Math.round(total / marks.length): 0;
    return {finalScore: avg, pass: pass, fail: fail};
}

let a = resultReport([98, 87, 67, 91, 92, 33, 87]);
console.log(a);