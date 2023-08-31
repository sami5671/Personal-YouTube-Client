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
    <button onclick="loadCategory('${category.category_id}')" class="mb-2 btn btn-outline btn-primary">
  ${category.category}
</button>
  `;
    categories.appendChild(div);
  });
};

const loadCategory = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await response.json();
  console.log(data.data);
  const allCategory = document.getElementById("all-category-container");
  data.data.forEach((category) => {
    // console.log(data.data);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-auto bg-base-100 shadow-xl">
          <figure><img src="${category.thumbnail}" alt="" class="w-auto" /></figure>
          <div class="card-body">
            <div class="flex items-center gap-5">
              <img src="${category.authors[0].profile_picture}" alt="" class="w-14 h-12 rounded-full" />
              <h2 class="text-xl font-bold">${category.title}</h2>
            </div>
            <div class="flex">
              <p>${category.authors[0].profile_name}</p>
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <p class="text-sm">${category.others.views}</p>
          </div>
        </div>
    `;
    allCategory.appendChild(div);
  });
};

loadData();
