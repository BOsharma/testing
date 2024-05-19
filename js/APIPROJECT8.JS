fetch('https://fakestoreapi.com/products').then((data) => {
      return data.json();
    }).then((FullData) => {
      let mydata = "";
      FullData.map((value) => {
        mydata += `
        <div class="card" style="width: 18rem;">
        <img src=${value.image} class="card-img-top" alt=${value.title} widht="100" height="250px">
        <div class="card-body">
          <h5 class="card-title">${value.title.substr(1, 20)}...</h5>
          <p class="card-text">${value.description.substr(1, 140)}....</p>
          <p>Price : $<strong>${value.price}</strong></p>
          <a href="#" class="btn btn-light">Buy Now </a>
        </div>
      </div>
        `
      })

      document.getElementById("card").innerHTML = mydata
    }).catch((api) => {
      console.log(api)
    })