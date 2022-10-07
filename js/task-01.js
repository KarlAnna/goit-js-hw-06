// 1
const categoriesEl = document.querySelectorAll('.item');
console.log("Number of categories: " + categoriesEl.length);

// 2
categoriesEl.forEach(element => {
    console.log("Category: " + element.firstElementChild.textContent);
    console.log("Elements: " + element.lastElementChild.children.length)
});