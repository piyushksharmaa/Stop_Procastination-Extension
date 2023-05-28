const generateHTML = (Site_name) => {
  return `<h1>Stop wasting your time on ${Site_name} and Go study.</h1>`;
};
const generateStyles = () => {
  return `*{background-color:white}`;
};
switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Youtube");
    break;
  case "www.hotstar.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Hotstar");
    break;
  case "www.instagram.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Instagram");
    break;
}
