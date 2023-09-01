const loadData = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await response.json();
  console.log(data.data);
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

// ======================================
// function pageNotFound() {
//   const pageNotFound = document.getElementById("page-not-found");
//   const div = document.createElement("div");
//   div.innerHTML = `
//   <img src="Icon.png" alt="" class="w-3/4" />
//   <h1 class="text-xl font-bold">Oops!! Sorry, There is no content here</h1>
//   `;
// }
// ======================================
const loadCategory = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await response.json();
  console.log(data);
  const cards = data.data;

  const allCategory = document.getElementById("all-category-container");
  allCategory.innerText = "";

  cards.forEach((category) => {
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
// =================================================================
const loadCategory1 = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/1000`
  );
  const data = await response.json();
  console.log(data);
  const cards = data.data;

  const allCategory = document.getElementById("all-category-container");
  allCategory.innerText = "";

  cards.forEach((category) => {
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

// =================================================================
loadData();
loadCategory1();
// ==================Short by user====================
const shortbyUser = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/1000`
  );
  const data = await response.json();
  const cards = data.data;
  cards.forEach((category) => {
    console.log(category.others.views);
  });
};

// ======================================

// ======================blog======================================

function blog() {
  window.location.href = "index2.html";
}
// =================================================================
