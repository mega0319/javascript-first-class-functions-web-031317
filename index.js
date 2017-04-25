function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
    return function name() {
    console.log("HI")
  }
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("No semi-colon life")
  }
}
