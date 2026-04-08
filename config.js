//Global variables for site configuration
//Note: when adding new variables, add them to the setById function below for use on the page
const SITE = {
  name: "Alex Lancaster",
  job_title: "Technical Consultant",
  github: "https://github.com/Lancaster2001",
  linkedin: "https://www.linkedin.com/in/alex-lancaster-7437671b4/",
  favicon: "Assets/Website_Icon.png",
}

//function for forcing browsers to refresh the css files for pages
function refreshCSS() {
  const links = document.querySelectorAll('link[rel="stylesheet"]');

  links.forEach(oldLink => {
    const newLink = oldLink.cloneNode();
    const url = new URL(oldLink.href);
    url.searchParams.set('v', Date.now());
    newLink.href = url.toString();

    newLink.onload = () => {
      oldLink.remove(); // remove only AFTER new CSS loads
    };

    oldLink.parentNode.insertBefore(newLink, oldLink.nextSibling);
  });
}

//sets website icon image, if not set it will default to the browser's default icon
function setFavicon(href) {
  if (!href) return;

  const prefixes = ['', '../', '../../'];
  let index = 0;

  const img = new Image();

  img.onload = () => {
    const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = img.src;
    document.head.appendChild(favicon);
  };

  img.onerror = () => {
    index++;
    if (index < prefixes.length) {
      img.src = prefixes[index] + href; // 👈 try next prefix on failure
    }
    // If all prefixes fail, do nothing — browser keeps default icon
  };

  img.src = prefixes[0] + href;
}

//set website icon image
setFavicon(SITE.favicon);
//refresh css file
refreshCSS();

//Sets page Title
document.title = SITE.name + " | Portfolio";

//Error handles variables that aren't used
function setById(id, prop, value) {
  const element = document.getElementById(id);
  if (element) element[prop] = value;
}

//Set variables for page use
setById("year", "textContent", new Date().getFullYear());
setById("name", "textContent", SITE.name);
setById("job_title", "textContent", SITE.job_title);
setById("footer", "textContent", `Built and maintained by ${SITE.name} — © ${new Date().getFullYear()}`);
setById("github_link", "href", SITE.github);
setById("linkedin_link", "href", SITE.linkedin);