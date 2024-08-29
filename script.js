//  https://script.google.com/macros/s/AKfycbzllWqt_I-97fICDHCIERwvdDTSU3NeXA6pTlIgVnhyBmVmLL3K9CDDCDGWBU_POWfLZQ/exec
//  AKfycbzllWqt_I-97fICDHCIERwvdDTSU3NeXA6pTlIgVnhyBmVmLL3K9CDDCDGWBU_POWfLZQ

const form = document.getElementById('fitness-feedback-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const getSelectedCheckboxes = (name) => {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value).join(';');
  };
  
  const name = document.getElementById('name').value;
  const question1 = document.querySelector('input[name="question1"]:checked').value;
  const question2 = document.querySelector('input[name="question2"]:checked').value;
  const question3 = document.querySelector('input[name="question3"]:checked').value;
  const question4 = document.querySelector('input[name="question4"]:checked').value;
  const question5 = document.querySelector('input[name="question5"]:checked').value;
  const question6 = getSelectedCheckboxes('question6');
  const question7 = getSelectedCheckboxes('question7');
  const question8 = document.querySelector('input[name="question8"]:checked').value;
  const question9 = document.querySelector('input[name="question9"]:checked').value;
  const question10 = document.querySelector('input[name="question10"]:checked').value;
  const question11 = document.querySelector('input[name="question11"]:checked').value;
  const question12 = getSelectedCheckboxes('question12');
  const question13 = document.querySelector('input[name="question13"]:checked').value;
  const question14 = document.querySelector('input[name="question14"]:checked').value;
  const question15 = document.querySelector('input[name="question15"]:checked').value;
  const question16 = getSelectedCheckboxes('question16');



  const url = 'https://script.google.com/macros/s/AKfycbzllWqt_I-97fICDHCIERwvdDTSU3NeXA6pTlIgVnhyBmVmLL3K9CDDCDGWBU_POWfLZQ/exec';
  const params = `action=submitFeedback&name=${encodeURIComponent(name)}&question1=${encodeURIComponent(question1)}&question2=${encodeURIComponent(question2)}&question3=${encodeURIComponent(question3)}&question4=${encodeURIComponent(question4)}&question5=${encodeURIComponent(question5)}&question6=${encodeURIComponent(question6)}&question7=${encodeURIComponent(question7)}&question8=${encodeURIComponent(question8)}&question9=${encodeURIComponent(question9)}&question10=${encodeURIComponent(question10)}&question11=${encodeURIComponent(question11)}&question12=${encodeURIComponent(question12)}&question13=${encodeURIComponent(question13)}&question14=${encodeURIComponent(question14)}&question15=${encodeURIComponent(question15)}&question16=${encodeURIComponent(question16)}`;

  fetch(`${url}?${params}`)
    .then(response => response.text())
    .then(data => {
      console.log(data);
      form.reset();
      alert('Feedback submitted successfully!');
    })
    .catch(error => {
      console.error(error);
      alert('Error submitting feedback. Please try again.');
    });
});

