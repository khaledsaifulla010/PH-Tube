console.log("added");

// Load Categories for load all categories videos  (1)
const loadCategories = async () => {
  try {
    const fetchedData = await fetch(
      "https://openapi.programming-hero.com/api/phero-tube/categories"
    );

    const data = await fetchedData.json();
    displayCategories(data.categories);
  } catch (error) {
    console.log("Categories is not Load !");
  }
};

// Display Categories for Display all categories videos (2)

const displayCategories = (data) => {
  console.log(data);
};

//  All Functions Call

loadCategories();
