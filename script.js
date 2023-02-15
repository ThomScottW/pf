// const proj1Title = document.getElementById("proj1-title");
// const proj1Description = document.getElementById("proj1-description");

// proj1Title.addEventListener("click", function() {
//   proj1Title.style.marginBottom = "20px";
//   proj1Description.classList.remove("hidden");
// });


const projects = documents.getElementsByClassName("projects-col");

for (let i = 0; i < projects.length; i++)
{
    const project = projects[i];
    const h4 = project.querySelector('h4');
    project.addEventListener("click", function() {
        h4.style.color = 'red';
    });
}
