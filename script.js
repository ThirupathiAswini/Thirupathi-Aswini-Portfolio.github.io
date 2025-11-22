const technicalSkills = [
    "Frontend Development",
    "Python",
    "Digital Marketing",
    "SEO Tools"
];

const communicationSkills = [
    "English",
    "Telugu",
    "Tamil",
    "Malayalam"
];

const technicalSkillsList = document.getElementById("technical-skills");
technicalSkillsList.innerHTML = "";
technicalSkills.forEach((skill, index) => {
    const li = document.createElement("li");
    li.textContent = skill;
    li.style.animation = `fadeInScale 0.5s ease forwards`;
    li.style.animationDelay = `${index * 0.1}s`;
    technicalSkillsList.appendChild(li);
});

const communicationSkillsList = document.getElementById("communication-skills");
communicationSkillsList.innerHTML = "";
communicationSkills.forEach((skill, index) => {
    const li = document.createElement("li");
    li.textContent = skill;
    li.style.animation = `fadeInScale 0.5s ease forwards`;
    li.style.animationDelay = `${index * 0.1}s`;
    communicationSkillsList.appendChild(li);
});

// Updated projects data with technologies and duration fields
const projects = [
  {
    title: "Machine Learning-Based UPI Fraud Detection",
    summary: "Designed to identify and reduce fraudulent transactions in UPI-based digital payments using ML algorithms.",
    description: "Developed a sophisticated machine learning model to detect fraudulent UPI transactions, leveraging classification algorithms, feature engineering, and data preprocessing to improve security and reduce fraud.",
    link: "#"
  },
  {
    title: "Online Blood Bank Management System",
    summary: "Web-based system to create emergency blood requests and manage donor/receiver records.",
    description: "Created a web-based platform to streamline blood donor and receiver management, inventory tracking, and donation scheduling, enhancing healthcare support during emergencies.",
    link: "#"
  }
];

const container = document.getElementById("project-container");
container.innerHTML = "";

projects.forEach((proj, index) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.style.animation = `fadeInUp 0.5s ease forwards`;
  card.style.animationDelay = `${index * 0.2}s`;
  card.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.summary}</p>
    <a href="${proj.link}" class="project-link" data-index="${index}" aria-label="More about ${proj.title}">View Details</a>
  `;
  container.appendChild(card);
});

// Modal handling
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

const contactButton = document.querySelector(".cta-button");

// Open modal with given title and content
function openModal(title, content) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // prevent background scroll
}

// Close modal
function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    modalTitle.textContent = "";
    modalBody.innerHTML = "";
    document.body.style.overflow = ""; // restore scroll
}

// Open contact modal on click
contactButton.addEventListener("click", function(event) {
    event.preventDefault();
    const contactInfo = `
        <p>Email: <a href="mailto:aswinithirupathi825@gmail.com">aswinithirupathi825@gmail.com</a></p>
        <p>Mobile: 6309018925</p>
    `;
    openModal("Contact Me", contactInfo);
});

// Event delegation for project View Details links
container.addEventListener("click", function(event) {
    if (event.target.classList.contains("project-link")) {
        event.preventDefault();
        const index = event.target.getAttribute("data-index");
        const project = projects[index];
        if(project) {
            // Improved Modal Content: image, description and contact note
            const projectImageSrc = index === "0" ? "assets/UPI.jpg" : index === "1" ? "assets/Blood Bank.jpg" : "assets/profile.jpg";
            const projectContent = `
                <img src="${projectImageSrc}" alt="${project.title} Image" style="max-width:100%; height:auto; margin-bottom: 1em; border-radius: 8px;">
                <p>${project.description}</p>
                <p>For more info, please contact me.</p>
            `;
            openModal(project.title, projectContent);
        }
    }
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

// Close modal with ESC key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
        closeModal();
    }
});
