const projects = [
    { title: "Project 1", description: "Description of project 1" },
    { title: "Project 2", description: "Description of project 2" },
];

const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(projectItem);
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Message sent!');
});