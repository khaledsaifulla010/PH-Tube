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

//  All Functions Call

loadCategories();
