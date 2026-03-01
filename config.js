//Global variables for site configuration
//Note: when adding new variables, add them to the setById function below for use on the page
const SITE = {
  name: "Alex Lancaster",
  job_title: "Technical Consultant",
  github: "https://github.com/Lancaster2001",
  linkedin: "https://www.linkedin.com/in/alex-lancaster-7437671b4/",
}

//Sets page Title
document.title = SITE.name + " | Portfolio";

//Error handles variables that aren't used
function setById(id, prop, value) {
  const element = document.getElementById(id);
  if (element) element[prop] = value;
}

//functiont to change css file name to forces browsers to refresh the cache and load the new css file.
function refreshCSS() {
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach(link => {
    const url = new URL(link.href);
    url.searchParams.set('v', Date.now());
    link.href = url.toString();
  });
}

//refresh css file
refreshCSS();

//Set variables for page use
setById("year", "textContent", new Date().getFullYear());
setById("name", "textContent", SITE.name);
setById("job_title", "textContent", SITE.job_title);
setById("footer", "textContent", `Built and maintained by ${SITE.name} — © ${new Date().getFullYear()}`);
setById("github_link", "href", SITE.github);
setById("linkedin_link", "href", SITE.linkedin);