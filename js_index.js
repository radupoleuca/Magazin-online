const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    ingredients: "post",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    ingredients: "carne",
  },
  {
    id: 3,
    title: "papa",
    category: "lunch",
    price: 15.99,
    img: "./images/item-2.jpeg",
    desc: `lsdlapsdasj kasdj kasd lasdk sa core selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thun`,
    ingredients: "post",
  },
  {
    id: 4,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    ingredients: "a",
  },
  {
    id: 5,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    ingredients: "b",
  },
  {
    id: 6,
    title: "papa",
    category: "lunch",
    price: 15.99,
    img: "./images/item-2.jpeg",
    desc: `lsdlapsdasj kasdj kasd lasdk sa sdaaaaaaadsadsadsaweqwewqewqeqwe`,
    ingredients: "h",
  },
  {
    id: 7,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    ingredients: "h",
  },
  {
    id: 8,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    ingredients: "j",
  },
  {
    id: 9,
    title: "papa",
    category: "lunch",
    price: 15.99,
    img: "./images/item-2.jpeg",
    desc: `lsdlapsdasj kasdj kasd lasdk sa core selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thun`,
    ingredients: "k",
  },
  {
    id: 10,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    ingredients: "k",
  },
  {
    id: 11,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    ingredients: "j",
  },
  {
    id: 12,
    title: "papa",
    category: "shakes",
    price: 15.99,
    img: "./images/item-2.jpeg",
    desc: `lsdlapsdasj kasdj kasd lasdk sa sdaaaaaaadsadsadsaweqwewqewqeqwe`,
    ingredients: "f",
  }
];

var show = true; 
  
function showCheckboxes() { 
  var checkboxes = document.getElementById("checkBoxes"); 
  if (show) { 
    checkboxes.style.display = "block"; 
    show = false; 
  } else { 
    checkboxes.style.display = "none"; 
    show = true; 
    } 
} 

var ing1 = "";
var ing2 = "";
var ing3 = "";
var ing4 = "";

function validate(type){
  /*ing1 = "";
  ing2 = "";
  ing3 = "";
  ing4 = "";*/
  if(document.getElementById(type).checked){
    if(type === "first")
    {
      ing1 = "post";
      console.log(ing1);
    }
    
    if(type === "second")
    {
      ing2 = "zahar";
      console.log(ing2);
    }
    
    if(type === "third")
    {
      ing3 = "grasimi";
      console.log(ing3);
    }
    
    if(type === "fourth")
    {
      ing4 = "carne";
      console.log(ing4);
    }
  }
}


// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);

  const modalBtn = document.querySelectorAll(".modal-btn");
  const modal = document.querySelector(".modal-container");
  const closeBtn = document.querySelector(".close-btn");
  const modaltext = document.querySelector(".modal-text");

  modal.style.display = "none";

    modalBtn.forEach(item => { 
      item.addEventListener("click", function (e) {
        var j = item.getAttribute('data-foo');
        var cursorX = e.pageX;
        var cursorY = e.pageY;
        console.log(cursorX);
        console.log(cursorY);
        modaltext.innerHTML = menu[j-1].ingredients;
      if (modal.style.display === "none") {
        
        modal.style.left = cursorX + "px";
        modal.style.top = cursorY + "px";
        modal.style.display = "block";
      }
      })
    });

    closeBtn.addEventListener("click", function () {
      if (modal.style.display === "block") {
        modal.style.display = "none";
      }
    });

    /*--------------*/
    const filterBtns = document.querySelectorAll(".filter-btn"); // selectez toate butoanele

    filterBtns.forEach(function (btn) {                     // pentru fiecare buton btn selectat apelez functia
      btn.addEventListener("click", function (e) {          // daca am dat click pe buton
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;        // in category retin data-id-ul butonului btn (all/breakfast/lunch/shakes)
        const menuCategory = menu.filter(function (menuItem) {     // in menuCategory retin obiectul din menu ce are categoria egala cu data-id-ul (category) butonului 
          if(ing1 != ""){         // daca am aplicat un filtru, si anume dupa "post" (primul filtru bifat)
            if (menuItem.category === category && menuItem.ingredients === ing1) {    // fac filtrarea dupa categorie si ing
              console.log(ing1);
              console.log(menuItem);
              return menuItem;
            }
          }
          else
          {
            if (menuItem.category === category) {    // fac filtrarea dupa categorie
              return menuItem;
            }
          }

          if(ing2 != ""){
            if (menuItem.category === category && menuItem.ingredients === ing2) {
              console.log(ing2);
              return menuItem;
            }
          }
          else
          {
            if (menuItem.category === category) {
              return menuItem;
            }
          }

          if(ing3 != ""){
            if (menuItem.category === category && menuItem.ingredients === ing3) {
              console.log(ing3);
              return menuItem;
            }
          }
          else
          {
            if (menuItem.category === category) {
              return menuItem;
            }
          }

          if(ing4 != ""){
            if (menuItem.category === category && menuItem.ingredients === ing4) {
              console.log(ing4);
              return menuItem;
            }
          }
          else
          {
            if (menuItem.category === category) {
              return menuItem;
            }
          }

        });
        if (category === "all") {              // daca am apasat pe butonul all (ce are data-id-ul 'all')
          diplayMenuItems(menu);                // afisez tot din menu
        } else {
          diplayMenuItems(menuCategory);      // altfel, afisez doar acele obiecte pentru care am apasat butonul 
        }
      });
    });

    
    /*
    document.getElementById("first").addEventListener("click", function(){
      console.log("aa");
    });*/

});

function diplayMenuItems(menuItems) {

  let displayMenu = menuItems.map(function (item) {
    return `<article class="item">
          <div class="item-info">
            <img src=${item.img} alt="imagine produs" class="imagine">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price} LEI</h4>
            </header>
            <p>
              ${item.desc}
            </p>
            <div class="details"><button>cumpara</button</div>
            <div class="details"><button data-foo="${item.id}" class="modal-btn">ingrediente</button</div>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  document.getElementsByClassName("container")[0].innerHTML = displayMenu;
}


/*
<div id='strawberry-plant' data-fruit='12'></div>

var plant = document.getElementById('strawberry-plant');
var fruitCount = plant.getAttribute('data-fruit'); // fruitCount = '12'

// 'Setting' data-attributes using setAttribute
plant.setAttribute('data-fruit','7'); // Pesky birds
*/
// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay



