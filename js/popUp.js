const projects = [
  {
    title: "Tonic",
    devs: ["Ranjeet", " • backend", " • 2021"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tags: ["html", "css", "javascript"],
    image: "images/project1pu.png",
    liveVersion: "See Live",
    sourceLink: "See Source",
    btnImg1: "images/btn-img-pu1.png",
    btnImg2: "images/btn-img-pu2.png",
  },

  {
    title: "Multi-Post Stories",
    devs: ["Ranjeet", " • backend", " • 2021"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    tags: ["html", "css", "javascript"],
    image: "images/project2.png",
    liveVersion: "See Live",
    sourceLink: "See Source",
    btnImg1: "images/btn-img-pu1.png",
    btnImg2: "images/btn-img-pu2.png",
  },

  {
    title: "Facebook 360",
    devs: ["Ranjeet", " • backend", " • 2021"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    tags: ["html", "css", "javascript"],
    image: "images/project3.png",
    liveVersion: "See Live",
    sourceLink: "See Source",
    btnImg1: "images/btn-img-pu1.png",
    btnImg2: "images/btn-img-pu2.png",
  },
];

const buttonOne = document.querySelector(".project-button.one");
const buttonTwo = document.querySelector(".project-button.two");
const buttonThree = document.querySelector(".project-button.three");

function open(index) {
  let title = projects[index].title;
  let description = projects[index].description;
  let liveVersion = projects[index].liveVersion;
  let sourceLink = projects[index].sourceLink;
  let image = projects[index].image;
  let dev1 = projects[index].devs[0];
  let dev2 = projects[index].devs[1];
  let dev3 = projects[index].devs[2];
  let tags1 = projects[index].tags[0];
  let tags2 = projects[index].tags[1];
  let tags3 = projects[index].tags[2];
  let btnImg1=projects[index].btnImg1;
  let btnImg2=projects[index].btnImg2;
  const container = document.querySelector(".popup-container");
  container.innerHTML = `
  <div class="main-pu-container">
  <div class="content-container">
  <div class="heading-btn">
  <h1 class="project-title-pu">${title}</h1>
  <button type="button" class="close-btn-pu">X</button>
  </div>
  <ul class="devs-pu">
  <li class="dev-pu">${dev1}</li>
  <li class="dev-pu2">${dev2}</li>
  <li class="dev-pu2">${dev3}</li>
  </ul>
  <div class="img-container-pu">
  <img src=${image} alt"project-image-pu" class="project-img-pu">
  </div>
  <div class="conatiner-pc-pu">
  <p class="project-info-pu">${description}</p>
  <div class="project-info-pu2">
  <ul class="tags-pu">
  <li class="tag-pu">${tags1}</li>
  <li class="tag-pu">${tags2}</li>
  <li class="tag-pu">${tags3}</li>
  </ul>
  <div class="btn-container-pu">
  <button type="button" class="btn-pu">${liveVersion}<img src=${btnImg1}></button>
  <button type="button" class="btn-pu t">${sourceLink}<img src=${btnImg2}></button>
  </div>
  </div>
  </div>
  </div>
  </div>

`;
  container.style.display = "block";

  const buttonClose = document.querySelector(".close-btn-pu");
  buttonClose.addEventListener("click", close);
};

function close() {
  const container = document.querySelector(".popup-container");
  container.style.display = "none";
};

buttonOne.addEventListener("click", () => {
  open(0);
});
buttonTwo.addEventListener("click", () => {
  open(1);
});
buttonThree.addEventListener("click", () => {
  open(2);
});






