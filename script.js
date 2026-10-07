

const jobs = [

    {
        title: "Frontend Developer",
        company: "Google",
        location: "Hyderabad",
        salary: "₹6 - ₹10 LPA",
        type: "Full Time",
        category: "Web Development"
    },

    {
        title: "Python Developer",
        company: "TCS",
        location: "Hyderabad",
        salary: "₹4 - ₹7 LPA",
        type: "Full Time",
        category: "Python"
    },

    {
        title: "Data Analyst",
        company: "Microsoft",
        location: "Bangalore",
        salary: "₹5 - ₹9 LPA",
        type: "Full Time",
        category: "Data Analytics"
    },

    {
        title: "Web Developer",
        company: "Amazon",
        location: "Chennai",
        salary: "₹5 - ₹8 LPA",
        type: "Full Time",
        category: "Web Development"
    },

    {
        title: "Python Intern",
        company: "Infosys",
        location: "Pune",
        salary: "₹20,000 / Month",
        type: "Internship",
        category: "Python"
    },

    {
        title: "Software Developer",
        company: "Wipro",
        location: "Hyderabad",
        salary: "₹4 - ₹8 LPA",
        type: "Full Time",
        category: "Software Development"
    },

    {
        title: "Data Analyst Intern",
        company: "Accenture",
        location: "Mumbai",
        salary: "₹25,000 / Month",
        type: "Internship",
        category: "Data Analytics"
    },

    {
        title: "Web Developer Intern",
        company: "Deloitte",
        location: "Bangalore",
        salary: "₹22,000 / Month",
        type: "Internship",
        category: "Web Development"
    }

];


// ========================================
// 2. DISPLAY JOBS
// ========================================

function displayJobs(jobList) {

    const container =
        document.getElementById("jobContainer");


    // Clear old jobs

    container.innerHTML = "";


    // Check if jobs are available

    if (jobList.length === 0) {

        container.innerHTML = `

            <div class="no-jobs">

                <h3>No Jobs Found</h3>

                <p>
                    Try changing your search
                    or filters.
                </p>

            </div>

        `;

        return;
    }


    // Create job cards

    jobList.forEach(function(job) {

        const jobCard =
            document.createElement("div");


        jobCard.classList.add("job-card");


        jobCard.innerHTML = `

            <h3>${job.title}</h3>

            <p>
                <strong>Company:</strong>
                ${job.company}
            </p>

            <p>
                <strong>Location:</strong>
                ${job.location}
            </p>

            <p>
                <strong>Salary:</strong>
                ${job.salary}
            </p>

            <p>
                <strong>Category:</strong>
                ${job.category}
            </p>

            <p>
                <strong>Job Type:</strong>
                ${job.type}
            </p>


            <button
                onclick="viewJobDetails('${job.title}')"
            >
                View Details
            </button>

        `;


        container.appendChild(jobCard);

    });

}


// ========================================
// 3. SEARCH AND FILTER JOBS
// ========================================

function searchJobs() {


    // Get search text

    const searchText =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    // Get location

    const locationText =
        document
        .getElementById("locationInput")
        .value
        .toLowerCase();


    // Get category

    const category =
        document
        .getElementById("categoryFilter")
        .value;


    // Get job type

    const jobType =
        document
        .getElementById("jobTypeFilter")
        .value;


    // Filter jobs

    const filteredJobs =
        jobs.filter(function(job) {


            // Search by title or company

            const matchesSearch =

                job.title
                .toLowerCase()
                .includes(searchText)

                ||

                job.company
                .toLowerCase()
                .includes(searchText);


            // Search by location

            const matchesLocation =

                job.location
                .toLowerCase()
                .includes(locationText);


            // Search by category

            const matchesCategory =

                category === ""

                ||

                job.category === category;


            // Search by job type

            const matchesJobType =

                jobType === ""

                ||

                job.type === jobType;


            // Return matching jobs

            return (

                matchesSearch &&

                matchesLocation &&

                matchesCategory &&

                matchesJobType

            );

        });


    // Display filtered jobs

    displayJobs(filteredJobs);

}


// ========================================
// 4. CLEAR FILTERS
// ========================================

function clearFilters() {


    // Clear search input

    document
        .getElementById("searchInput")
        .value = "";


    // Clear location

    document
        .getElementById("locationInput")
        .value = "";


    // Clear category

    document
        .getElementById("categoryFilter")
        .value = "";


    // Clear job type

    document
        .getElementById("jobTypeFilter")
        .value = "";


    // Display all jobs

    displayJobs(jobs);

}


// ========================================
// 5. VIEW JOB DETAILS
// ========================================

function viewJobDetails(jobTitle) {


    // Find the selected job

    const job = jobs.find(function(job) {

        return job.title === jobTitle;

    });


    // If job doesn't exist

    if (!job) {

        return;

    }


    // Get job details container

    const detailsContainer =
        document.getElementById(
            "jobDetailsContainer"
        );


    // Add job details

    detailsContainer.innerHTML = `


        <h2>${job.title}</h2>


        <div class="details-info">


            <p>

                <strong>
                    Company:
                </strong>

                ${job.company}

            </p>


            <p>

                <strong>
                    Location:
                </strong>

                ${job.location}

            </p>


            <p>

                <strong>
                    Salary:
                </strong>

                ${job.salary}

            </p>


            <p>

                <strong>
                    Job Type:
                </strong>

                ${job.type}

            </p>


            <p>

                <strong>
                    Category:
                </strong>

                ${job.category}

            </p>


        </div>


        <h3>
            Job Description
        </h3>


        <p>

            We are looking for a talented
            ${job.title} to join our team.
            The candidate will work on
            real-world projects and
            contribute to innovative
            solutions.

        </p>


        <h3>
            Requirements
        </h3>


        <ul>

            <li>
                Good communication skills
            </li>

            <li>
                Problem solving skills
            </li>

            <li>
                Knowledge of relevant technologies
            </li>

            <li>
                Ability to work in a team
            </li>

        </ul>


        <h3>
            Skills
        </h3>


        <div class="skills">


            <span>
                HTML
            </span>


            <span>
                CSS
            </span>


            <span>
                JavaScript
            </span>


            <span>
                Git
            </span>


        </div>


        <button
            class="apply-btn"
            onclick="applyJob('${job.title}')"
        >

            Apply Now

        </button>

    `;


    // Show job details section

    document
        .getElementById("jobDetails")
        .style.display = "block";


    // Scroll to job details

    document
        .getElementById("jobDetails")
        .scrollIntoView({

            behavior: "smooth"

        });

}

// ========================================
// 6. APPLY JOB 
// ========================================

function applyJob(jobTitle) {

    const applicationSection =
        document.getElementById(
            "applicationSection"
        );

    const selectedJob =
        document.getElementById(
            "selectedJob"
        );


    // Show selected job

    selectedJob.innerHTML =
        "Applying for: <strong>" +
        jobTitle +
        "</strong>";


    // Show application form

    applicationSection.style.display =
        "block";


    // Scroll to application form

    applicationSection.scrollIntoView({
        behavior: "smooth"
    });

}
// ========================================
// 7. SUBMIT APPLICATION
// ========================================

function submitApplication(event) {

    // Stop page from refreshing

    event.preventDefault();


    const name =
        document.getElementById(
            "applicantName"
        ).value;


    const email =
        document.getElementById(
            "applicantEmail"
        ).value;


    const phone =
        document.getElementById(
            "applicantPhone"
        ).value;


    const resume =
        document.getElementById(
            "resume"
        ).files[0];


    const coverLetter =
        document.getElementById(
            "coverLetter"
        ).value;


    // Check required information

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        !resume ||
        coverLetter === ""
    ) {

        alert(
            "Please fill all the fields."
        );

        return;

    }


    // Show success message

    const successMessage =
        document.getElementById(
            "applicationSuccess"
        );


    successMessage.innerHTML = `

        <h3>
            Application Submitted Successfully!
        </h3>

        <p>
            Thank you, ${name}.
        </p>

        <p>
            Your application has been received.
        </p>

    `;


    // Clear form

    document
        .getElementById("applicationForm")
        .reset();

}


// ========================================
// 8. DISPLAY ALL JOBS WHEN PAGE LOADS
// ========================================

displayJobs(jobs);
// ========================================
// LOGIN / REGISTER
// STAGE 5
// ========================================


// ========================================
// OPEN LOGIN
// ========================================

function openLogin() {

    const modal =
        document.getElementById(
            "authModal"
        );

    modal.style.display = "flex";


    showLogin();

}



// ========================================
// CLOSE LOGIN / REGISTER
// ========================================

function closeAuth() {

    const modal =
        document.getElementById(
            "authModal"
        );

    modal.style.display = "none";

}



// ========================================
// SHOW LOGIN FORM
// ========================================

function showLogin() {

    document.getElementById(
        "loginForm"
    ).style.display = "block";


    document.getElementById(
        "registerForm"
    ).style.display = "none";

}



// ========================================
// SHOW REGISTER FORM
// ========================================

function showRegister() {

    document.getElementById(
        "loginForm"
    ).style.display = "none";


    document.getElementById(
        "registerForm"
    ).style.display = "block";

}



// ========================================
// LOGIN USER
// ========================================

function loginUser() {

    const email =
        document.getElementById(
            "loginEmail"
        ).value;


    const password =
        document.getElementById(
            "loginPassword"
        ).value;


    if (
        email === "" ||
        password === ""
    ) {

        alert(
            "Please enter email and password."
        );

        return;

    }


    alert(
        "Login successful!"
    );


    closeAuth();

}



// ========================================
// REGISTER USER
// ========================================

function registerUser() {

    const name =
        document.getElementById(
            "registerName"
        ).value;


    const email =
        document.getElementById(
            "registerEmail"
        ).value;


    const password =
        document.getElementById(
            "registerPassword"
        ).value;


    const confirmPassword =
        document.getElementById(
            "confirmPassword"
        ).value;



    // CHECK EMPTY FIELDS

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert(
            "Please fill all the fields."
        );

        return;

    }



    // CHECK PASSWORD

    if (
        password !== confirmPassword
    ) {

        alert(
            "Passwords do not match."
        );

        return;

    }



    alert(
        "Registration successful!"
    );


    showLogin();

}