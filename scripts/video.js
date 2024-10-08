// Get Hour Minute Second
const getTimeString = (time) => {
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  const minute = parseInt(remainingSecond / 60);
  remainingSecond = remainingSecond % 60;
  return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
};

// Load Categories for load all categories videos  (1)
const loadCategories = async () => {
  try {
    const fetchedData = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/categories"
    );

    const categoriesData = await fetchedData.json();
    displayCategories(categoriesData.categories);
  } catch (error) {
    console.log("Categories is not Load !");
  }
};

// Display Categories for Display all categories videos (2)

const displayCategories = (categoriesData) => {
  const categoriesContainer = document.getElementById("categories");
  //   console.log(categoriesData);

  categoriesData.forEach((singleCategory) => {
    console.log(singleCategory);
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    
      <button id="btn-${singleCategory.category_id}" onclick="loadCategoryVideos(${singleCategory.category_id})" class="btn category-btn">${singleCategory.category}</button>
    `;

    categoriesContainer.append(buttonContainer);
  });
};

// Load All Videos (3) //

const loadVideos = async () => {
  try {
    const fetchedData = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/videos"
    );

    const videosData = await fetchedData.json();
    displayAllVideos(videosData.videos);
  } catch (error) {
    console.log("Videos is not Load !");
  }
};

// Display All videos //

const displayAllVideos = (videosData) => {
  //   console.log(videosData);
  const videosContainer = document.getElementById("videos");
  videosContainer.innerHTML = "";

  if (videosData.length === 0) {
    videosContainer.innerHTML = `
      <div class=" w-[500px] ml-[500px] mt-40 flex flex-col gap-5 justify-center items-center">

      <img  src = "assets/Icon.png" />

      <h2 class="text-3xl font-black text-center">No Content Here in This Category </h2>
      

      </div>
    `;
    return;
  }

  videosData.forEach((singleVideo) => {
    console.log(singleVideo);

    const videoCard = document.createElement("div");
    videoCard.classList = "card w-[460px] h-[380px] ml-4 border-2 ";
    videoCard.innerHTML = `
      <figure>
    <img class="h-full w-full object-cover"
      src= ${singleVideo.thumbnail}
       />
  </figure>

  ${
    singleVideo.others.posted_date?.length === 0
      ? ""
      : `<span class="absolute bg-black text-white rounded-lg p-2 right-2 bottom-2"> ${getTimeString(
          singleVideo.others.posted_date
        )}</span>`
  }

  

  <div class="card-body">

  <div class="flex items-center gap-4">
  <img class='w-16 h-16 rounded-full'
      src= ${singleVideo.authors[0].profile_picture}
       />

  <div>
    <h2 class="card-title font-black text-2xl">${singleVideo.title}</h2>
    <div class="flex items-center gap-1">
    <h2 class="text-lg font-semibold text-gray-400">${
      singleVideo.authors[0].profile_name
    }</h2>
    <h2 class="w-6">${
      singleVideo.authors[0].verified === true
        ? '<img src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"'
        : ""
    }</h2>
    
  </div>

  <h2 class=" ">${singleVideo.others.views} Views</h2>
  
  </div>
    `;
    videosContainer.append(videoCard);
  });
};

// Load Category Wise video (4)

const loadCategoryVideos = async (category_id) => {
  try {
    const fetchedData = await fetch(
      `https://openapi.programming-hero.com/api/phero-tube/category/${category_id}`
    );

    const videosData = await fetchedData.json();

    const activeBtn = document.getElementById(`btn-${category_id}`);
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to the clicked button
    activeBtn.classList.add("active");

    console.log(activeBtn);
    displayAllVideos(videosData.category);
  } catch (error) {
    console.log("Videos is not Load !");
  }
};

//  All Functions Call

loadCategories();

loadVideos();
