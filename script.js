function getMenu() {
    // Assuming this function fetches the menu items from a JSON source and displays them on the screen.
    return fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
      .then(response => response.json())
      .then(menu => {
        // Display the menu to the user
        console.log('Menu:', menu)
      });
  }
  getMenu();
  
  // function takeOrder() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const burgers = ['Burger A', 'Burger B', 'Burger C'];
  //       const randomBurgers = [];
  
  //       for (let i = 0; i < 3; i++) {
  //         const randomIndex = Math.floor(Math.random() * burgers.length);
  //         randomBurgers.push(burgers[randomIndex]);
  //       }
  
  //       resolve({ burgers: randomBurgers });
  //     }, 2500);
  //   });
  // }
  
  // function orderPrep() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({ order_status: true, paid: false });
  //     }, 1500);
  //   });
  // }
  
  // function payOrder() {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({ order_status: true, paid: true });
  //     }, 1000);
  //   });
  // }
  
  // function thankyouFnc() {
  //   alert('Thank you for eating with us today!');
  // }
  
  // async function orderProcess() {
  //   try {
  //     await getMenu();
  //     const order = await takeOrder();
  //     console.log('Order:', order);
  
  //     const prepStatus = await orderPrep();
  //     console.log('Preparation Status:', prepStatus);
  
  //     const paymentStatus = await payOrder();
  //     console.log('Payment Status:', paymentStatus);
  
  //     if (paymentStatus.paid) {
  //       thankyouFnc();
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // }
  
  // // Call the orderProcess function to initiate the ordering process.
  // orderProcess();
 
  
  