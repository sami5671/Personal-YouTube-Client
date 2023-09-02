// ============================================ INITIAL FETCH FOR FETCHING THE BUTTONS =========================================
const loadData = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await response.json();
  console.log(data);

  const categories = document.getElementById("category-container");
  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button onclick="loadCategory('${category.category_id}')" class="mb-2 btn hover:bg-red-500 hover:text-white btn-outline">
  ${category.category}
</button>
  `;
    categories.appendChild(div);
  });
};

// ======
// function click =====
// ======

// ====================================== PAGE NOT FOUND SECTIONS =====================================================
// function pageNotFound() {
//   const pageNotFound = document.getElementById("page-not-found");
//   const div = document.createElement("div");
//   div.innerHTML = `
//   <img src="Icon.png" alt="" class="w-3/4" />
//   <h1 class="text-xl font-bold">Oops!! Sorry, There is no content here</h1>
//   `;
// }
// =================================== CATEGORY LOAD 2 AFTER CLICKING THE BUTTON ======================================
const loadCategory = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await response.json();
  // console.log(data.data);
  const cards = data.data;
  // console.log("cards", cards);
  const allCategory = document.getElementById("all-category-container");
  allCategory.innerText = " ";

  cards.forEach((category) => {
    const apiDataSeconds = category.others.posted_date;
    const minutes = Math.floor(apiDataSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMin = minutes % 60;
    // console.log(data.data);
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="max-w-md w-full bg-white rounded-lg shadow-md p-6 space-y-4">
      <div class="flex justify-center">
        <img
          src="${category.thumbnail}"
          alt="Thumbnail Image"
          class="h-44 w-96 rounded-lg"
        />
        <div class= "bg-black absolute ml-6 mt-36 px-2 rounded-lg shadow-xl"> 
        <h2 class= "text-white">${hours}hr ${remainingMin}min ago</h2>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <img
          src="${category.authors[0].profile_picture}"
          alt="Profile Picture"
          class="w-12 h-12 rounded-full border-2 border-black"
        />
        <h2 class="text-xl font-semibold">${category.title}</h2>
      </div>
      <div class="text-sm">
      <p class="">${category.authors[0].profile_name}</p>
      <p class="">${category.others.views} Views</p>
      </div>

    </div>
  `;
    allCategory.appendChild(div);
  });
};
// ================================================ CATEGORY LOAD 1 ==================================================
const loadCategory1 = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/1000`
  );
  const data = await response.json();
  // console.log(data.data[0].others.posted_date);
  const cards = data.data;

  const allCategory = document.getElementById("all-category-container");
  allCategory.innerText = "";

  cards.forEach((category) => {
    const apiDataSeconds = category.others.posted_date;

    const minutes = Math.floor(apiDataSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMin = minutes % 60;
    // console.log(data.data);
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="max-w-md w-full bg-white rounded-lg shadow-md p-6 space-y-4">
      <div class="flex justify-center">
        <img
          src="${category.thumbnail}"
          alt="Thumbnail Image"
          class="h-44 w-96 rounded-lg"
        />
        <div class= "bg-black absolute ml-6 mt-36 px-2 rounded-lg shadow-xl"> 
        <h2 class= "text-white">${hours}hr ${remainingMin}min ago</h2>
        </div>
        </div>
       
      <div class="flex items-center gap-2">
        <img
          src="${category.authors[0].profile_picture}"
          alt="Profile Picture"
          class="w-12 h-12 rounded-full border-2 border-black"
        />
        <h2 class="text-xl font-semibold">${category.title}</h2>
      </div>
      <div class="text-sm">
      <p class="">${category.authors[0].profile_name}</p>
      <p class="">${category.others.views} Views</p>
      </div>

    </div>
  `;
    allCategory.appendChild(div);
  });
};

// ===============================FOR LOADING DATA ON THE WEBSITE INITIALLY===========================================
loadData();
loadCategory1();
// =======================================SHORT BY THE VIEW USER =====================================================
const sortbyUser = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/1000`
  );
  const data = await response.json();
  const cards = data.data;
  const allCategory = document.getElementById("all-category-container");
  allCategory.innerText = "";
  // sorting by views
  cards.sort((a, b) => {
    const vA = parseInt(a.others.views);
    const vB = parseInt(b.others.views);
    return vA - vB;
  });

  // console.log("sorted", cards);
  cards.forEach((category) => {
    const apiDataSeconds = category.others.posted_date;

    const minutes = Math.floor(apiDataSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMin = minutes % 60;
    // console.log(data.data);
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="max-w-md w-full bg-white rounded-lg shadow-md p-6 space-y-4">
      <div class="flex justify-center">
        <img
          src="${category.thumbnail}"
          alt="Thumbnail Image"
          class="h-44 w-96 rounded-lg"
        />
        <div class= "bg-black absolute ml-6 mt-36 px-2 rounded-lg shadow-xl">
        <h2 class= "text-white">${hours}hr ${remainingMin}min ago</h2>
        </div>
        </div>

      <div class="flex items-center gap-2">
        <img
          src="${category.authors[0].profile_picture}"
          alt="Profile Picture"
          class="w-12 h-12 rounded-full border-2 border-black"
        />
        <h2 class="text-xl font-semibold">${category.title}</h2>
      </div>
      <div class="text-sm">
      <p class="">${category.authors[0].profile_name}</p>
      <p class="">${category.others.views} Views</p>
      </div>

    </div>
  `;
    allCategory.appendChild(div);
  });
};

// ==================================================================================================================

// =============================================BLOG SECTION ========================================================
function blog() {
  window.location.href = "index2.html";
}
// =================================================================================================================
