
// Set the default section and default cell
const defaultSectionId = 'section1';
const defaultCell = document.querySelector(`[data-section="${defaultSectionId}"]`);

// Apply the default class to the default cell
if (defaultCell) {
  defaultCell.classList.add('default');
}

// Show the default section initially
const defaultSection = document.getElementById(defaultSectionId);
if (defaultSection) {
  defaultSection.style.display = 'block';
}

// Apply the default class to the corresponding button
const defaultButton = document.getElementById(`button-${defaultSectionId}`);
if (defaultButton) {
  defaultButton.classList.add('selected-button');
}

function showSection(sectionId) {
  // Hide all related sections
  const sections = document.querySelectorAll('.related-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }

}
// contact form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx4cZFC-9jd0snjaehqLkP0p8Vr1TdXprflyiLi6rBGnhu9xg2LKmLZyPjthUFZS1Ih/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
