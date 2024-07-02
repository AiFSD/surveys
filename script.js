const form = document.getElementById('survey-form');
const tableBody = document.getElementById('table-body');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const checkboxes = document.getElementsByName('food[]');
  let selectedCount = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedCount++;
    }
  }

  if (selectedCount < 2) {
    alert('Please select at least two food options!');
    return;
  }

 const formData = {
  firstName: document.getElementById('first-name').value,
  lastName: document.getElementById('last-name').value,
  email: document.getElementById('email').value,
  state: document.getElementById('state').value,
  country: document.getElementById('country').value,
  address: document.getElementById('address').value,
  pincode: document.getElementById('pincode').value,
  gender: document.querySelector('input[name="gender"]:checked').value,
  foodChoice: getSelectedCheckboxValues('food[]')
};

const tableRow = `
  <tr>
    <td>${formData.firstName}</td>
    <td>${formData.lastName}</td>
    <td>${formData.gender}</td>
    <td>${formData.email}</td>
    <td>${formData.state}</td>
    <td>${formData.country}</td>
    <td>${formData.address}</td>
    <td>${formData.pincode}</td>
    <td>${formData.foodChoice}</td>
  </tr>
`;

    tableBody.innerHTML += tableRow;
    form.reset();
});

function getSelectedCheckboxValues(name) {
  const checkboxes = document.getElementsByName(name);
  const selectedValues = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedValues.push(checkboxes[i].value);
    }
  }
  return selectedValues.join(', ');
}

