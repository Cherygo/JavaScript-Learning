// Task 5
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the
// string. In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's
// with 0, and 's's with 5.

// Examples
// hackerSpeak("javascript is cool") "j4v45cr1pt 15 c001'
function hackerSpeak(sentence = ""){
    const filter = {'a': 4, 'e': 3, 'i': 1, 'o': 0, 's': 5};
    return String(sentence).replace(/[aeios]/gi, letter => filter[letter]);
    // g -> global(throughout the entire string) i -> case-insensitive(searches both lower and upper characters)
}
console.log(hackerSpeak("javascriptee is cool"));