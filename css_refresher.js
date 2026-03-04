//function to change css file name to forces browsers to refresh the cache and load the new css file.
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