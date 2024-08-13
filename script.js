function validateSyntax() {
    let input = document.getElementById('petInput').value;

  const regex = /^pet_\w+$/;

  let result;
  if (regex.test(input)) {
      result = 'Valid Syntax';
  } else {
      result = 'Invalid Syntax';
  }
    document.getElementById('result').innerText = result;
}