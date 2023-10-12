const mainElement = document.getElementById('main');
mainElement.remove();

const newHeader = document.querySelector("h1");
if (newHeader) {
  console.log(newHeader.nodeName); // Accessing nodeName property
} else {
  console.log("No h1 element found");
}