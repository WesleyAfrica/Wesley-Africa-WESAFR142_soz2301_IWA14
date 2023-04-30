firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = (message) => {
  console.log(message)
  console.log(message)
}

function display () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

display()