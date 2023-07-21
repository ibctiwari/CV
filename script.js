function generateCVPreview() {
  // Implement your CV form logic here to update the preview
  const name = document.getElementById('nameInput').value;
  const address = document.getElementById('addressInput').value;
  const email = document.getElementById('emailInput').value;
  const mobile = document.getElementById('mobileInput').value;
  const education = document.getElementById('educationInput').value;
  const experience = document.getElementById('experienceInput').value;
  const skills = document.getElementById('skillsInput').value;
  const technicalSkills = document.getElementById('technicalSkillsInput').value;

  const previewContainer = document.getElementById('cv-preview');
  previewContainer.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mobile:</strong> ${mobile}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experiences</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    <h3>Technical Skills</h3>
    <p>${technicalSkills}</p>
  `;
}

function clearCVForm() {
  // Clear all form inputs and preview
  document.getElementById('nameInput').value = '';
  document.getElementById('addressInput').value = '';
  document.getElementById('emailInput').value = '';
  document.getElementById('mobileInput').value = '';
  document.getElementById('educationInput').value = '';
  document.getElementById('experienceInput').value = '';
  document.getElementById('skillsInput').value = '';
  document.getElementById('technicalSkillsInput').value = '';
  document.getElementById('cv-preview').innerHTML = '';
}

function downloadAsPdf() {
  const cvPreview = document.getElementById('cv-preview');

  // Create a new window to print the preview section as PDF
  const printWindow = window.open('', '_blank', 'height=600,width=800');
  printWindow.document.write('<html><head><title>CV Preview</title></head><body>');
  printWindow.document.write(cvPreview.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();

  // Wait for the print window to load before printing
  printWindow.onload = function () {
    printWindow.print();
  };
}
