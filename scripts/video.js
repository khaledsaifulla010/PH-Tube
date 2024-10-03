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
  //   console.log(categoriesData);

  categoriesData.forEach((singleCategory) => {
    console.log(singleCategory);

    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = singleCategory.category;
    const categoriesContainer = document.getElementById("categories");

    categoriesContainer.append(button);
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

  videosData.forEach((singleVideo) => {
    console.log(singleVideo);

    const videosContainer = document.getElementById("videos");

    const videoCard = document.createElement("div");
    videoCard.classList = "card w-[460px] h-[350px] ml-4 border-2 ";
    videoCard.innerHTML = `
      <figure>
    <img class="h-full w-full object-cover"
      src= ${singleVideo.thumbnail}
       />
  </figure>

  <span class="absolute bg-black text-white rounded-lg p-2 right-8 bottom-4"> ${
    singleVideo.others.posted_date
  }</span>

  <div class="card-body ">

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

//  All Functions Call

loadCategories();

loadVideos();
