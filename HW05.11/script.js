let course = prompt("Kai kursta okip zhatirsiz? (1, 2, 3 nemese 4):");

let isAlmaty = prompt("Siz Almatidan siz ba? (yes nemese no):");

if ((course == "1" || course === "2") && isAlmaty == "no") {
    alert("Sizge zhatahana beriledi.");
} else {
    alert("Sizge zhatahana berilmeidi.");
}





//2tapsirma
alert("Oin sharti:arbir duris zhayan yshin 1 upai beriledi.")

let surak1 = prompt("Kazakhstanin tayelsizdik algan zhili?");
let surak2 = prompt("Kazir okip zhatkan kalaniz? ");

let score = 0;

if(surak1 =="1991"){
    score +=1
}

if(surak2 == "Almaty"){
    score +=1
}

alert("Sizdin zhinagan upainiz: " + score);