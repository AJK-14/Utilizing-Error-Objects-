function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
try {
  doSomethingErrorProne();
} catch (e) {
  console.error(e.name);    // logs 'Error'
  console.error(e.message); // logs 'The message', or a JavaScript error message
}