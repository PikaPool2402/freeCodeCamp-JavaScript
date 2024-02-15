let age = 100;

if (age < 100) {
    console.log("not eligible!")
} else if (age === 100) {
    console.log("congratulations!")
} else{
    console.log("you already have one!")
}
// === strict check, == true even if 100 is a string, doesn't check datatype