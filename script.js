let cards = document.querySelector(".cards");
function getMenu() {
    //  this function fetches the menu items from a JSON source and displays them on the screen.
    fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
      .then(response => response.json())
      .then(menu => {
        // Display the menu to the user
         menu.forEach(element => {
          // console.log(element.name)
          let div =document.createElement("div")
          div.className="card";
          div.id = element.id;
          let img = document.createElement("img")
          img.src=element.imgSrc
          let div1 = document.createElement("div")
          div1.className="card-body"
          let div2 =document.createElement("div")
          let p1 = document.createElement("p")
          p1.innerText=element.name;
          let p2 = document.createElement("P")
          p2.innerText=element.price;
          let img1 = document.createElement("img")
          img1.src="./assets/plus (1) 1.svg"
          div2.append(p1,p2);
          div1.append(div2,img1)
          div.append(img,div1)
          cards.appendChild(div)
         });
      });
  }
        
  function takeOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const burgers = ['Burger A', 'Burger B', 'Burger C'];
        const randomBurgers = [];
  
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          randomBurgers.push(burgers[randomIndex]);
        }
  
        resolve({ burgers: randomBurgers });
      }, 2500);
    });
  }
  
  function orderPrep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  function payOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  async function orderProcess() {
    try {
        getMenu();
      const order = await takeOrder();
      console.log('Order:', order);
  
      const prepStatus = await orderPrep();
      console.log('Preparation Status:', prepStatus);
  
      const paymentStatus = await payOrder();
      console.log('Payment Status:', paymentStatus);
  
      if (paymentStatus.paid) {
        thankyouFnc();
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Call the orderProcess function to initiate the ordering process.
  orderProcess();
 