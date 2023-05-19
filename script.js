let projectArray = [
  {
    projectImage: "../img/musicweb.jpg",
    projectName: "Music Website",
    date: "December 25, 2022",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis. ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.r sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.",
    technology: [
      ["HTML5", "mdi:language-html5"],
      ["CSS3", "ion:logo-css3"],
      ["JavaScript", "fluent:javascript-16-filled"],
    ],
    demoLink: [
      "https://github.com/AungKaungMo/musicPj",
      "file:///C:/Users/Asus/Desktop/p/Music%20Project/index.html",
    ],
  },
  {
    projectImage: "../img/gweb.jpg",
    projectName: "Game Website",
    date: "November 25, 2022",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis. ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.r sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.",
    technology: [
      ["HTML5", "mdi:language-html5"],
      ["CSS3", "ion:logo-css3"],
      ["JavaScript", "fluent:javascript-16-filled"],
      ["Bootstrap", "akar-icons:bootstrap-fill"],
      ["Jquery", "akar-icons:jquery-fill"],
    ],
    demoLink: [
      "https://github.com/AungKaungMo/Gaming-Project",
      "file:///C:/Users/Asus/Desktop/GameWebsite/html/homeAndAbout.html",
    ],
  },
  {
    projectImage: "../img/cafe.jpg",
    projectName: "Cafe Website",
    date: "March 1, 2023",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis. ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.r sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.",
    technology: [
      ["HTML5", "mdi:language-html5"],
      ["CSS3", "ion:logo-css3"],
      ["Bootstrap", "akar-icons:bootstrap-fill"],
      ["PHP", "file-icons:php"],
    ],
    demoLink: [
      "https://github.com/AungKaungMo/Cafe-php-project-",
      "http://159.223.38.19/StudentProject/CafeProject/Customer/View/h.php",
    ],
  },
  {
    projectImage: "../img/banana.png",
    projectName: "Memory Game",
    date: "November 20, 2023",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis. ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.r sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.",
    technology: [
      ["HTML5", "mdi:language-html5"],
      ["CSS3", "ion:logo-css3"],
      ["JavaScript", "fluent:javascript-16-filled"],
    ],
    demoLink: [
      "https://github.com/AungKaungMo/EXBRAIN/tree/master/Homework/AdvanceQ12",
      "file:///C:/Users/Asus/Desktop/EXBRAIN/Homework/AdvanceQ12/AdvanceQ12.html",
    ],
  },
  {
    projectImage: "../img/bingobg.jpg",
    projectName: "Bingo Game",
    date: "December 15, 2023",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis. ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.r sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.",
    technology: [
      ["HTML5", "mdi:language-html5"],
      ["CSS3", "ion:logo-css3"],
      ["JavaScript", "fluent:javascript-16-filled"],
    ],
    demoLink: [
      "https://github.com/AungKaungMo/EXBRAIN/tree/master/Homework/AdvanceQ9",
      "file:///C:/Users/Asus/Desktop/EXBRAIN/Homework/AdvanceQ9/AdvanceQ9.html",
    ],
  },
  {
    projectImage: "../img/word.png",
    projectName: "Word Guessing Game",
    date: "August 3, 2023",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis. ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.r sit amet consectetur adipisicing elit. Quidem dolores eius vel corrupti quam odit deleniti sed recusandae officiis.",
    technology: [
      ["HTML5", "mdi:language-html5"],
      ["CSS3", "ion:logo-css3"],
      ["JavaScript", "fluent:javascript-16-filled"],
    ],
    demoLink: [
      "https://github.com/AungKaungMo/EXBRAIN/tree/master/WordGuess%20v1",
      "file:///C:/Users/Asus/Desktop/EXBRAIN/WordGuess%20v1/index.html",
    ],
  },
];

$(document).ready(function () {
  const openSideBar = $("#openSideBar");
  const showSideBar = $("#showSideBar");
  const closeSideBar = $("#closeSideBar");
  const projectViewIcon = $(".projectViewIcon");
  const back = $("#back");
  const backContent = $("#backContent");

  openSideBar.click(function () {
    showSideBar.removeClass("right-[-300px]");
    showSideBar.addClass("right-0");
  });
  closeSideBar.click(function () {
    showSideBar.addClass("right-[-300px]");
    showSideBar.removeClass("right-0");
  });

  projectViewIcon.each(function () {
    $(this).click(function () {
      backContent.html("");
      let dataImage = $(this).attr("data-image");
      for (let i = 0; i < projectArray.length; i++) {
        if (dataImage == projectArray[i].projectImage) {
          backContent.append(
            `<div class="lg:grid grid-cols-2 gap-10 mt-20 flex flex-col">
                <div class="fourthMini:mx-10  lg:mr-0 mx-4"><!--left-->
                  <div>
                    <div class="font-bold text-2xl ">${projectArray[i].projectName}</div>
                    <div class="text-sm mt-0">${projectArray[i].date}</div>
                    <div class="mt-10 opacity-80 leading-7">
                    ${projectArray[i].des}
                    </div>
                 
                  </div>
                  <div class="mt-16 tracking-wide">
                    <div class=" text-xl">What technology i used in this project ?</div>
                    <div class="flex mt-6 justify-between flex-wrap text-center" id="tech">

                  </div>
                  </div>
                </div>
        
                <div class="fourthMini:mx-10 lg:ml-0 mx-4"><!--right-->
                  <div class="w-full"><img src="${projectArray[i].projectImage}" class="shadow-2xl"></div>
                  <div class="mt-5 text-center">
                    <button class="py-2 px-4 mr-4 buttonEff mb-4" id="closeTab">Close Tab</button>
                    <button class="py-2 px-4 buttonEff"><a href='${projectArray[i].demoLink[1]}'>Go to website</a></button>
                  </div>
                </div>
              </div>
        
              <div class=" flex justify-center flex-wrap mt-14 fourthMini:mb-0 mb-7">
                <div class="mb-3 mr-3 flex items-center">
                <iconify-icon icon="mdi:github" class=" mr-3" width='30' height='30'></iconify-icon>
                  <a href="${projectArray[i].demoLink[0]}" class="hover:text-skin-mainColor transition-all duration-200">Git Hub Link</a>
                </div>
                <div class=" fourthMini:mt-0 flex">
               
              </div>`
          );

          for (let j = 0; j < projectArray[i].technology.length; j++) {
            $("#tech").append(
              `<div class="mr-3">
                    <iconify-icon icon="${projectArray[i].technology[j][1]}" class="technology" ></iconify-icon>
                        <p class="my-2">${projectArray[i].technology[j][0]}</p>
                    </div>`
            );
          }
          back.removeClass("showProject");
          setTimeout(() => {
            backContent.removeClass("opacity-0");
          }, 1000);
          $("#closeTab").click(function () {
            console.log("ok");
            backContent.addClass("opacity-0");
            setTimeout(() => {
              back.addClass("showProject");
            }, 700);
          });
        }
      }
    });
  });

  $("#miniGame").click(function () {
    $("#miniGame").addClass("text-skin-mainColor");
    $("#website").removeClass("text-skin-mainColor");
    $("#web").addClass("hidden");
    $("#game").removeClass("hidden");
  });

  $("#website").click(function () {
    $("#website").addClass("text-skin-mainColor");
    $("#miniGame").removeClass("text-skin-mainColor");
    $("#web").removeClass("hidden");
    $("#game").addClass("hidden");
  });
  $(".colorSetting").click(function () {
    $("#openColorSetting").toggleClass("right-[0]");
    $("#openColorSetting").toggleClass("opacity-100");
  });
  $(".changeColorTheme").click(function () {
    let colorMode = $(this).attr("data-mode");
    checkColorTheme(colorMode);
    localStorage.setItem("colorTheme", colorMode);
  });
  checkColorTheme(localStorage.getItem("colorTheme"));
});

function checkColorTheme(color) {
  if (color == "darkBlue") {
    $("body").removeClass("pureOrange");
    $("body").addClass("darkBlue");
  } else if (color == "pureOrange") {
    $("body").removeClass("darkBlue");
    $("body").addClass("pureOrange");
  } else {
    $("body").removeClass("pureOrange");
    $("body").removeClass("darkBlue");
  }
}
