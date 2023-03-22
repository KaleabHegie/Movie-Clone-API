function fun() {

    var mostpopular = `https://imdb-api.com/API/MostPopularMovies/k_y5wpf6jf`;
    var boxoffice = `https://imdb-api.com/en/API/BoxOffice/k_y5wpf6jf`;
    var intheaters = `https://imdb-api.com/en/API/InTheaters/k_y5wpf6jf`;



    const Most_Popular = document.querySelector(".Most_Popular");
    const Box_Office = document.querySelector(".Box_Office");
    const InTheaters = document.querySelector(".InTheaters");


    fetch(mostpopular)
        .then(response => response.json())
        .then(data => {



            for (var i = 0; i < 1; i++) {

                var main = `
        <div id="card" class="card border-0 col-lg-2 col-md-3 col-sm-4 col-6">
            <button onclick="getId(this.value)" src="detail.html" style = "background-color:#211e1f" value="${data.items[i].id} ">
              <img style = "height:300px;object-fit:cover;" class="img-fluid rounded" src="${data.items[i].image}" alt="">
            </button>
        <p style="margin:10px 10px 10px 0px;font-size:18px">${data.items[i].title}</p>
        </div>`;
                Most_Popular.innerHTML += main;

            }


        })
        .catch(error => console.error("error"))



        fetch(boxoffice)
        .then(response => response.json())
        .then(data => {



            for (var i = 0; i < 1; i++) {

                var main = `
        <div id="card" class="card border-0 col-lg-2 col-md-3 col-sm-4 col-6">
            <button onclick="getId(this.value)" src="detail.html" style = "background-color:#211e1f" value="${data.items[i].id} ">
              <img style = "height:300px;object-fit:cover;" class="img-fluid rounded" src="${data.items[i].image}" alt="">
            </button>
        <p style="margin:10px 10px 10px 0px;font-size:18px">${data.items[i].title}</p>
        </div>`;
                Box_Office.innerHTML += main;

            }


        })
        .catch(error => console.error("error"))



        fetch(intheaters)
        .then(response => response.json())
        .then(data => {



            for (var i = 0; i < 1; i++) {

                var main = `
        <div id="card" class="card border-0 col-lg-2 col-md-3 col-sm-4 col-6">
            <button onclick="getId(this.value)" src="detail.html" style = "background-color:#211e1f" value="${data.items[i].id} ">
              <img style = "height:300px;object-fit:cover;" class="img-fluid rounded" src="${data.items[i].image}" alt="">
            </button>
        <p style="margin:10px 10px 10px 0px;font-size:18px">${data.items[i].title}</p>
        </div>`;
        InTheaters.innerHTML += main;

            }


        })
        .catch(error => console.error("error"))

}





function getMoies() {


    var searchNew = document.querySelector(".searchNew");

    var src = document.querySelector("#search");

    


    document.querySelector(".Most_Popular").innerHTML = '';
    document.querySelector(".Box_Office").innerHTML = '';
    document.querySelector(".InTheaters").innerHTML = '';



    var movieSearch = `https://imdb-api.com/en/API/SearchMovie/k_zraqfvt4/${src.value}`;


    fetch(movieSearch)
        .then(response => response.json())
        .then(Newdata => {
            for (var i = 0; i < Newdata.results.length; i++) {
                var card =
                    `<div id="card" class="card border-0 col-lg-2 col-md-3 col-sm-4 col-6">
                <button onclick="getId(this.value)" src="detail.html" style = "background-color:#211e1f" value="${Newdata.results[i].id} ">
                  <img style = "height:300px;object-fit:cover;" class="img-fluid rounded" src="${Newdata.results[i].image}" alt="">
                </button>
            <p style="margin:10px 10px 10px 0px;font-size:18px">${Newdata.results[i].title}</p>
            </div>`
                searchNew.innerHTML += card;
            }
        })
        .catch(console.error("error"))
}









function getId(a) {

    
  


    var identiti = `https://imdb-api.com/en/API/Title/k_zraqfvt4/${a}`;
    var x = document.querySelector(".body");
    var top = document.querySelector(".top");
    fetch(identiti)
        .then(response => response.json())
        .then(data => {
            console.log("hello");
            top.style = "background-color:#272d33";
            x.classList.add("container-fluid");
            var dis = `<div class="container-fluid" style="background-color: #272d33;background-size: cover;">
    <div class="row" style="padding-top: 100px;margin-left: 100px;color: white;">
        <div class="col-lg-3">
            <div class="card" style="margin-bottom: 30px;background-color:#272d33;border: none;">
                <img style="opacity: 1;height: 400px;" class="img-fluid" src="${data.image}" alt="">
                <div>
            <button style="margin: 10px 10px 10px 0;padding-top: 10px;padding-bottom: 10px;" class="btn btn-primary">Like</button>
            <button style="margin: 10px 10px 10px 0;padding-top: 10px;padding-bottom: 10px;"  class="btn btn-secondary">Dislike</button>
        </div>    
        </div>
        </div>
        <div class="col-lg-7">
            <button class="btn btn-danger" style="margin-bottom: 20px;"> Watch Now </button>
            <h2>${data.fullTitle}</h2>
            <p>${data.plot}</p>
            <button class="btn btn-light"> Teailer </button>
            <button class="btn btn-success"> HD </button>
            <ul style="list-style: none;">
                <li style="padding: 10px;">Relesed: ${data.releasedDate} </li>
                <li style="padding: 10px;">Full Title: ${data.fullTitle}</li> 
                <li style="padding: 10px;">Directors: ${data.directors}</li> 
                <li style="padding: 10px;">Gener: ${data.genres}</li> 
                <li style="padding: 10px;">Duration: ${data.runtimeStr}</li> 

            </ul>

            </div>
          </div>
      </div>`

      
            x.innerHTML = dis;



        })
        .catch(error => console.error(error))


}


