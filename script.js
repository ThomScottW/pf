

const projects = document.getElementsByClassName("projects-col");

for (let i = 0; i < projects.length; i++)
{
    const project = projects[i];
    const h4 = project.querySelector('h4');
    project.addEventListener("click", function() {
        h4.style.color = 'red';
    });
}
