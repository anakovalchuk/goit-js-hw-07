const categoryQuantity = document.querySelectorAll(".item")
console.log(`Number of categories: ${categoryQuantity.length}`);

categoryQuantity.forEach(category => {
    const categoryTitle = category.querySelector("h2").textContent;
    console.log(`Category: ${categoryTitle}`);
    const categoryElements = category.querySelectorAll("ul li").length;
    console.log(`Elements: ${categoryElements}`);
});









