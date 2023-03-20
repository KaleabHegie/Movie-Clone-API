function fun() {

    var topmovies = 'https://imdb-api.com/API/MostPopularMovies/k_nbagored';
    var topTvseries = 'https://imdb-api.com/API/MostPopularTVs/k_nbagored';
    var commingSoon = 'https://imdb-api.com/API/ComingSoon/k_nbagored';



    const Top_Movies = document.querySelector(".Top_Movies");
    const Top_Tv_Series = document.querySelector(".Top_Tv_Series");
    const Comming_Soon = document.querySelector(".Comming_Soon");


    fetch(topmovies)
        .then(response => response.json())
        .then(data => {
            var poster = new Array();
            var title = new Array();
            var id=new Array();
            for (var i = 0; i < 12; i++) {
                poster[i] = data.items[i].image;
                title[i] = data.items[i].title;
                id[i] = data.items[i].id;
            }

            var container = document.createElement('div');
            container.classList.add('container-fluid');
            Top_Movies.appendChild(container);

            var header = document.createElement('h2');
            header.innerHTML = "Top movies";
            header.style = "padding-bottom:100px;padding-top:50px;color:white"
            container.appendChild(header);

            for (var i = 0; i < 5; i++) {
                var row = document.createElement('div');
                row.classList.add('row');
                container.appendChild(row);
            }
            for (var i = 0; i < 12; i++) {
                var card = document.createElement('card');
                card.classList.add('card', 'col-lg-2', 'Anchor');
                card.style = "border:none;background-color:#211e1f";
                row.appendChild(card);


                var Anchor = document.createElement('button');
                Anchor.classList.add('Anchor');
                Anchor.style = "background-color:black"
                Anchor.href = "detail.html"
                card.appendChild(Anchor);



                var image = document.createElement('img');
                image.classList.add('img-fluid', 'rounded');
                image.src = poster[i];
                image.style = "height:100%;object-fit:cover;"
                card.appendChild(image);


                var ttl = document.createElement('h5');
                ttl.innerHTML = title[i];
                ttl.style = "color:white;margin-top:10px"
                card.appendChild(ttl);
            }


        })
        .catch(error => console.error(error))






    //     fetch(topTvseries)
    //     .then(response => response.json())
    //     .then(data => {
    //         var poster = new Array();
    //         var title = new Array();
    //         for (var i = 0; i < 12; i++) {
    //             poster[i] = data.items[i].image;
    //             title[i] = data.items[i].title;
    //         }

    //         var container = document.createElement('div');
    //         container.classList.add('container-fluid');
    //         Top_Tv_Series.appendChild(container);

    //         var header = document.createElement('h2');
    //         header.innerHTML = "Top Tv-Series";
    //         header.style = "padding-bottom:100px;padding-top:50px;color:white"
    //         container.appendChild(header);

    //         for (var i = 0; i < 5; i++) {
    //             var row = document.createElement('div');
    //             row.classList.add('row');
    //             container.appendChild(row);
    //         }
    //         for (var i = 0; i < 12; i++) {
    //             var card = document.createElement('card');
    //             card.classList.add('card', 'col-lg-2');
    //             card.style = "border:none;background-color:#211e1f"
    //             row.appendChild(card);

    //             var image = document.createElement('img');
    //             image.classList.add('img-fluid','rounded','w-100');
    //             image.src = poster[i];
    //             image.style = "height:300px;"
    //             card.appendChild(image);


    //             var ttl = document.createElement('h5');
    //             ttl.innerHTML = title[i];
    //             ttl.style = "color:white;margin-top:10px"
    //             card.appendChild(ttl);
    //         }


    //     })
    //     .catch(error => console.error(error))



    // fetch(commingSoon)
    //     .then(response => response.json())
    //     .then(data => {
    //         var poster = new Array();
    //         var title = new Array();
    //         for (var i = 0; i < 12; i++) {
    //             poster[i] = data.items[i].image;
    //             title[i] = data.items[i].title;
    //         }

    //         var container = document.createElement('div');
    //         container.classList.add('container-fluid');
    //         Comming_Soon.appendChild(container);

    //         var header = document.createElement('h2');
    //         header.innerHTML = "Comming Soon";
    //         header.style = "padding-bottom:100px;padding-top:50px;color:white"
    //         container.appendChild(header);

    //         for (var i = 0; i < 5; i++) {
    //             var row = document.createElement('div');
    //             row.classList.add('row');
    //             container.appendChild(row);
    //         }
    //         for (var i = 0; i < 12; i++) {
    //             var card = document.createElement('card');
    //             card.classList.add('card', 'col-lg-2');
    //             card.style = "border:none;background-color:#211e1f"
    //             row.appendChild(card);

    //             var image = document.createElement('img');
    //             image.classList.add('img-fluid','rounded','w-100');
    //             image.src = poster[i];
    //             image.style = "height:300px;"
    //             card.appendChild(image);


    //             var ttl = document.createElement('h5');
    //             ttl.innerHTML = title[i];
    //             ttl.style = "color:white;margin-top:10px"
    //             card.appendChild(ttl);
    //         }


    //     })
    //     .catch(error => console.error(error))


}


// function load(a) {
//     var topmovies = 'https://imdb-api.com/API/MostPopularMovies/k_nbagored';
//     var topTvseries = 'https://imdb-api.com/API/MostPopularTVs/k_nbagored';
//     var commingSoon = 'https://imdb-api.com/API/ComingSoon/k_nbagored';

//     var discription = document.querySelector(".discription");

//     fetch(topmovies)
//         .then(response => response.json())
//         .then(data => {
//             var poster;
//             var title;


//             var row = document.createElement('div');
//             row.classList.add('row','justify-content-center');
//             discription.appendChild(row);

//             discription.style = "background-image: url()"

//             var img = document.createElement('div');
//             img.classList.add('col-3');
//             row.appendChild(img);

//             var dis = document.createElement('div');
//             dis.classList.add('col-7');
//             row.appendChild(dis);






//         })
//         .catch(error => console.error(error))

// }














