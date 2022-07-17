//--- LAB 2 - The World Translator
// - Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for at least 3 languages.
//   It should default to returning English.
// - Call that function for each of the supported languages
//   and log the result to make sure it works.

function helloWord(language) {
    if (language === "es") {
        return "Hola mundo"

    } else if (language === "fr") {
        return "Bonjour globe"

    } else if (language === "it") {
        return "Chao tutti"

    } else {
        return"Hello Word"
    }
}
helloWord("es")