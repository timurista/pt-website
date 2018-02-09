
function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  console.log(e.action, e.target.action);
  /* do what you want with the form */

  var firstName = e.target[0].value;
  var lastName = e.target[1].value;
  var date = e.target[2].value;

  var cristinasEmail = 'cristinaruns2@gmail.com';
  var body = 'at ' + date;
  var subject = firstName + ' ' + lastName + ' requests an appointment';
  console.log(body);
  window.location.href = 'mailto:'+ cristinasEmail   +'?subject= ' + subject + '&body=' + body;
  return false;
}

var form = document.getElementById('form');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}
