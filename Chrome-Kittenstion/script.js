const paths = [
  "kitten1.jpg",
  "kitten2.jpg",
  "kitten3.jpg",
  "kitten4.jpg",
  "kitten5.jpg",
  "kitten6.jpg",
];

webImgs = document.getElementsByTagName("img");

for (imgElement of webImgs) {
  let fileIndex = Math.floor(Math.random() * paths.length);
  let url = "imgs/" + paths[fileIndex];
  imgElement.src = chrome.runtime.getURL(url);
}
