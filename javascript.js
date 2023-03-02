// Fetch the JSON data
fetch('job-data.json')
  .then(response => response.json())
  .then(data => {
    // Get the featured jobs container
    const featuredJobsContainer = document.getElementById('featured-jobs');

    // Loop through the featured jobs data and create HTML elements
    data.featuredJobs.forEach(job => {
      // Create a job card element
      const jobCard = document.createElement('div');
      jobCard.classList.add('job-card');

      // Add the job details to the job card
      jobCard.innerHTML = `
        <h2>${job.position}</h2>
        <p>${job.company} - ${job.location}</p>
        <p>${job.salary}</p>
        <p>${job.description}</p>
        <ul>
          ${job.requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>
        <p>Posted: ${job.postedDate} - Expires: ${job.expirationDate}</p>
        <a href="${job.applyLink}" target="_blank">Apply Now</a>
      `;

      // Add the job card to the featured jobs container
      featuredJobsContainer.appendChild(jobCard);
    });
  })
  .catch(error => console.error(error));

  // Get the search input fields
const searchKeywordsInput = document.getElementById('search-keywords');
const searchLocationInput = document.getElementById('search-location');

// Add event listeners to the search input fields
searchKeywordsInput.addEventListener('input', filterJobs);
searchLocationInput.addEventListener('input', filterJobs);


// Create a job card element
const jobCard = document.createElement('div');
jobCard.classList.add('job-card');

// Add the job details to the job card
jobCard.innerHTML = `
  <h2>${job.position}</h2>
  <p>${job.company} - <span class="job-location">${job.location}</span></p>
  <p>${job.salary}</p>
  <p>${job.description}</p>
  <ul>
    ${job.requirements.map(req => `<li>${req}</li>`).join('')}
  </ul>
  <p><span class="job-keywords">${job.keywords.join(', ')}</span></p>
  <p>Posted: ${job.postedDate} - Expires: ${job.expirationDate}</p>
  <a href="${job.applyLink}" target="_blank">Apply Now</a>
`;
