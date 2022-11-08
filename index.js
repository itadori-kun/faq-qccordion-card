
let listItems = document.querySelectorAll(".faq-list");

function toggle() {
  listItems.forEach((e) => {
    e.onclick = function () {
      // loop through to remove .active from the loop
     listItems.forEach((el) => {
       el.classList.remove("active");
     }); 
      // to add .active on each target item
      e.classList.add("active");
      // take away .active on each individual and result to default.
      e.addEventListener('click', function () {
        e.classList.toggle("active");
      })
    };
  });
}
toggle();
