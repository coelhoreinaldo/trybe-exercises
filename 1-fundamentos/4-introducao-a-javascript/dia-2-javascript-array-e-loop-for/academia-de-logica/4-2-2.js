let marinaAge = 14;
let silviaAge = 35;
let izaAge = 43;

if (marinaAge < silviaAge && marinaAge < izaAge) {
    console.log("Marina é a pessoa mais jovem e possui " + marinaAge + " anos de idade.")
} else if (silviaAge < marinaAge  && silviaAge < izaAge) {
    console.log("Sílvia é a pessoa mais jovem e possui " + silviaAge + " anos de idade.")
} else if (izaAge < marinaAge  && izaAge < silviaAge) {
    console.log("Iza é a pessoa mais jovem e possui " + izaAge + " anos de idade.")
}