//Create a function getGreetingMessage in javascript that takes a user's preferred language as input and returns an appropriate greeting message in that language. If the language is not supported, the function should return a default greeting in english

//====== process-1 ========//
/* function getGreetingMessage(lang) {
  if (lang === "en") {
    return "Hello";
  }
  if (lang === "fr") {
    return "Bonjour";
  }
  if (lang === "es") {
    return "Hola";
  }
  if (lang === "de") {
    return "Hallo";
  }
  if (lang === "jp") {
    return "こんにちは";
  }

  return "Heloooo";
} */

//=== process-2 ===//
function getGreetingMessage(lang) {
  const langMessageTracker = {
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
    de: "Hallo",
    jp: "こんにちは",
  };

  return langMessageTracker[lang] ? langMessageTracker[lang] : "Helooo";
}
console.log(getGreetingMessage("en")); //Hello
console.log(getGreetingMessage("fr")); //'Bonjour'
console.log(getGreetingMessage("es")); //'Hola'
console.log(getGreetingMessage("de")); //'Hallo'
console.log(getGreetingMessage("jp")); //'こんにちは'
console.log(getGreetingMessage("ds")); //'Heloooo' (by default)
