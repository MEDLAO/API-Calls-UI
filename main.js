
function leftScroll() {
    const left = document.querySelector(".scroll-images1");
    left.scrollBy(200, 0);
}
function rightScroll() {
    const right = document.querySelector(".scroll-images1");
    right.scrollBy(-200, 0);
}

function leftScroll2() {
    const left = document.querySelector(".scroll-images2");
    left.scrollBy(200, 0);
}
function rightScroll2() {
    const right = document.querySelector(".scroll-images2");
    right.scrollBy(-200, 0);
}

function leftScroll3() {
    const left = document.querySelector(".scroll-images3");
    left.scrollBy(200, 0);
}
function rightScroll3() {
    const right = document.querySelector(".scroll-images3");
    right.scrollBy(-200, 0);
}

function leftScroll4() {
    const left = document.querySelector(".scroll-images4");
    left.scrollBy(200, 0);
}
function rightScroll4() {
    const right = document.querySelector(".scroll-images4");
    right.scrollBy(-200, 0);
}

fetch('http://localhost:8000/api/v1/titles?sort_by=-imdb_score')
  .then((response) => response.json())
  .then((data) => {
        const bestFilm = data.results[0]; 
        const bestFilmImageUrl = bestFilm.image_url;
        const imageElement = document.createElement("img");
        imageElement.src = bestFilmImageUrl;  
        const navBestFilm = document.querySelector("#first-film");
        navBestFilm.appendChild(imageElement);

        const modalText = document.querySelector("#modal-content");

        const imageFirstFilm = document.createElement("img");
        imageFirstFilm.src = bestFilmImageUrl;
        modalText.appendChild(imageFirstFilm);

        const titleFirstFilm = bestFilm.title;
        const titleFilm = document.createElement("p");
        titleFilm.innerText = `Titre : ${titleFirstFilm}`;        
        modalText.appendChild(titleFilm);

        const genreFirstFilm = bestFilm.genres;
        const genreFilm = document.createElement("p");
        genreFilm.innerText = `Genre : ${genreFirstFilm}`;        
        modalText.appendChild(genreFilm);

        const yearFirstFilm = bestFilm.year;
        const yearFilm = document.createElement("p");
        yearFilm.innerText = `Année de sortie : ${yearFirstFilm}`;        
        modalText.appendChild(yearFilm);

        const votesFirstFilm = bestFilm.votes;
        const votesFilm = document.createElement("p");
        votesFilm.innerText = `Votes : ${votesFirstFilm}`;        
        modalText.appendChild(votesFilm);

        const scoreFirstFilm = bestFilm.imdb_score;
        const scoreFilm = document.createElement("p");
        scoreFilm.innerText = `Score : ${scoreFirstFilm}`;        
        modalText.appendChild(scoreFilm);

        const directorsFirstFilm = bestFilm.directors;
        const directorsFilm = document.createElement("p");
        directorsFilm.innerText = `Réalisateur(s) : ${directorsFirstFilm}`;        
        modalText.appendChild(directorsFilm);

        const actorsFirstFilm = bestFilm.actors;
        const actorsFilm = document.createElement("p");
        actorsFilm.innerText = `Acteurs : ${actorsFirstFilm}`;        
        modalText.appendChild(actorsFilm);

        const writersFirstFilm = bestFilm.writers;
        const writersFilm = document.createElement("p");
        writersFilm.innerText = `Scénariste(s) : ${writersFirstFilm}`;        
        modalText.appendChild(writersFilm);

        /* const para = document.createElement("p");
        const element = document.querySelector("#modal-content");
        const node = document.createTextNode(titleFirstFilm);
        para.appendChild(node);
        element.appendChild(para);  */
        
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("first-film");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
        modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }


        const bestFilm1 = data.results[1]; 
        const bestFilm1ImageUrl = bestFilm1.image_url;
        const imageElement1 = document.createElement("img");
        imageElement1.src = bestFilm1ImageUrl;  
        const sectionBestFilms1 = document.querySelector(".scroll-images1 .boxone");
        sectionBestFilms1.appendChild(imageElement1);
        sectionBestFilms1.onclick = function(){load_modal(data.results[1]);};

        const bestFilm2 = data.results[2]; 
        const bestFilm2ImageUrl = bestFilm2.image_url;
        const imageElement2 = document.createElement("img");
        imageElement2.src = bestFilm2ImageUrl;  
        const sectionBestFilms2 = document.querySelector(".scroll-images1 .boxtwo");
        sectionBestFilms2.appendChild(imageElement2);
        sectionBestFilms2.onclick = function(){load_modal(data.results[2]);};

        const bestFilm3 = data.results[3]; 
        const bestFilm3ImageUrl = bestFilm3.image_url;
        const imageElement3 = document.createElement("img");
        imageElement3.src = bestFilm3ImageUrl;  
        const sectionBestFilms3 = document.querySelector(".scroll-images1 .boxthree");
        sectionBestFilms3.appendChild(imageElement3);
        sectionBestFilms3.onclick = function(){load_modal(data.results[3]);};

        const bestFilm4 = data.results[4]; 
        const bestFilm4ImageUrl = bestFilm4.image_url;
        const imageElement4 = document.createElement("img");
        imageElement4.src = bestFilm4ImageUrl;  
        const sectionBestFilms4 = document.querySelector(".scroll-images1 .boxfour");
        sectionBestFilms4.appendChild(imageElement4);
        sectionBestFilms4.onclick = function(){load_modal(data.results[4]);};

        fetch('http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score')
            .then((response) => response.json())
            .then((data) => {
                const bestFilm5 = data.results[0]; 
                const bestFilm5ImageUrl = bestFilm5.image_url;
                const imageElement5 = document.createElement("img");
                imageElement5.src = bestFilm5ImageUrl;  
                const sectionBestFilms5 = document.querySelector(".scroll-images1 .boxfive");
                sectionBestFilms5.appendChild(imageElement5);
                sectionBestFilms5.onclick = function(){load_modal(data.results[0]);};

                const bestFilm6 = data.results[1]; 
                const bestFilm6ImageUrl = bestFilm6.image_url;
                const imageElement6 = document.createElement("img");
                imageElement6.src = bestFilm6ImageUrl;  
                const sectionBestFilms6 = document.querySelector(".scroll-images1 .boxsix");
                sectionBestFilms6.appendChild(imageElement6);
                sectionBestFilms6.onclick = function(){load_modal(data.results[1]);};

                const bestFilm7 = data.results[2]; 
                const bestFilm7ImageUrl = bestFilm7.image_url;
                const imageElement7 = document.createElement("img");
                imageElement7.src = bestFilm7ImageUrl;  
                const sectionBestFilms7 = document.querySelector(".scroll-images1 .boxseven");
                sectionBestFilms7.appendChild(imageElement7);
                sectionBestFilms7.onclick = function(){load_modal(data.results[2]);};

                fetch('http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score')
                    .then((response) => response.json())
                    .then((data) => {

                            const bestFilm1 = data.results[0]; 
                            const bestFilm1ImageUrl = bestFilm1.image_url;
                            const imageElement1 = document.createElement("img");
                            imageElement1.src = bestFilm1ImageUrl;  
                            const sectionBestFilms1 = document.querySelector(".scroll-images2 .boxone");
                            sectionBestFilms1.appendChild(imageElement1);                            
                            sectionBestFilms1.onclick = function(){load_modal(data.results[0]);};

                            const bestFilm2 = data.results[1]; 
                            const bestFilm2ImageUrl = bestFilm2.image_url;
                            const imageElement2 = document.createElement("img");
                            imageElement2.src = bestFilm2ImageUrl;  
                            const sectionBestFilms2 = document.querySelector(".scroll-images2 .boxtwo");
                            sectionBestFilms2.appendChild(imageElement2);
                            sectionBestFilms2.onclick = function(){load_modal(data.results[1]);};

                            const bestFilm3 = data.results[2]; 
                            const bestFilm3ImageUrl = bestFilm3.image_url;
                            const imageElement3 = document.createElement("img");
                            imageElement3.src = bestFilm3ImageUrl;  
                            const sectionBestFilms3 = document.querySelector(".scroll-images2 .boxthree");
                            sectionBestFilms3.appendChild(imageElement3);
                            sectionBestFilms3.onclick = function(){load_modal(data.results[2]);};

                            const bestFilm4 = data.results[3]; 
                            const bestFilm4ImageUrl = bestFilm4.image_url;
                            const imageElement4 = document.createElement("img");
                            imageElement4.src = bestFilm4ImageUrl;  
                            const sectionBestFilms4 = document.querySelector(".scroll-images2 .boxfour");
                            sectionBestFilms4.appendChild(imageElement4);
                            sectionBestFilms4.onclick = function(){load_modal(data.results[3]);};

                            const bestFilm5 = data.results[4]; 
                            const bestFilm5ImageUrl = bestFilm5.image_url;
                            const imageElement5 = document.createElement("img");
                            imageElement5.src = bestFilm5ImageUrl;  
                            const sectionBestFilms5 = document.querySelector(".scroll-images2 .boxfive");
                            sectionBestFilms5.appendChild(imageElement5);
                            sectionBestFilms5.onclick = function(){load_modal(data.results[4]);};


                            fetch('http://localhost:8000/api/v1/titles/?genre=Adventure&page=2&sort_by=-imdb_score')
                                .then((response) => response.json())
                                .then((data) => {
                                    
                                    const bestFilm6 = data.results[0]; 
                                    const bestFilm6ImageUrl = bestFilm6.image_url;
                                    const imageElement6 = document.createElement("img");
                                    imageElement6.src = bestFilm6ImageUrl;  
                                    const sectionBestFilms6 = document.querySelector(".scroll-images2 .boxsix");
                                    sectionBestFilms6.appendChild(imageElement6);
                                    sectionBestFilms6.onclick = function(){load_modal(data.results[0]);};

                                    const bestFilm7 = data.results[1]; 
                                    const bestFilm7ImageUrl = bestFilm7.image_url;
                                    const imageElement7 = document.createElement("img");
                                    imageElement7.src = bestFilm7ImageUrl;  
                                    const sectionBestFilms7 = document.querySelector(".scroll-images2 .boxseven");
                                    sectionBestFilms7.appendChild(imageElement7);                                    
                                    sectionBestFilms7.onclick = function(){load_modal(data.results[1]);};

                                    fetch('http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score')
                                        .then((response) => response.json())
                                        .then((data) => {

                                                const bestFilm1 = data.results[0]; 
                                                const bestFilm1ImageUrl = bestFilm1.image_url;
                                                const imageElement1 = document.createElement("img");
                                                imageElement1.src = bestFilm1ImageUrl;  
                                                const sectionBestFilms1 = document.querySelector(".scroll-images3 .boxone");
                                                sectionBestFilms1.appendChild(imageElement1);
                                                sectionBestFilms1.onclick = function(){load_modal(data.results[0]);};

                                                const bestFilm2 = data.results[1]; 
                                                const bestFilm2ImageUrl = bestFilm2.image_url;
                                                const imageElement2 = document.createElement("img");
                                                imageElement2.src = bestFilm2ImageUrl;  
                                                const sectionBestFilms2 = document.querySelector(".scroll-images3 .boxtwo");
                                                sectionBestFilms2.appendChild(imageElement2);
                                                sectionBestFilms2.onclick = function(){load_modal(data.results[1]);};

                                                const bestFilm3 = data.results[2]; 
                                                const bestFilm3ImageUrl = bestFilm3.image_url;
                                                const imageElement3 = document.createElement("img");
                                                imageElement3.src = bestFilm3ImageUrl;  
                                                const sectionBestFilms3 = document.querySelector(".scroll-images3 .boxthree");
                                                sectionBestFilms3.appendChild(imageElement3);
                                                sectionBestFilms3.onclick = function(){load_modal(data.results[2]);};

                                                const bestFilm4 = data.results[3]; 
                                                const bestFilm4ImageUrl = bestFilm4.image_url;
                                                const imageElement4 = document.createElement("img");
                                                imageElement4.src = bestFilm4ImageUrl;  
                                                const sectionBestFilms4 = document.querySelector(".scroll-images3 .boxfour");
                                                sectionBestFilms4.appendChild(imageElement4);
                                                sectionBestFilms4.onclick = function(){load_modal(data.results[3]);};

                                                const bestFilm5 = data.results[4]; 
                                                const bestFilm5ImageUrl = bestFilm5.image_url;
                                                const imageElement5 = document.createElement("img");
                                                imageElement5.src = bestFilm5ImageUrl;  
                                                const sectionBestFilms5 = document.querySelector(".scroll-images3 .boxfive");                                                
                                                sectionBestFilms5.appendChild(imageElement5);
                                                sectionBestFilms5.onclick = function(){load_modal(data.results[4]);};
                                                
                                   
                                                fetch('http://localhost:8000/api/v1/titles/?genre=Animation&page=2&sort_by=-imdb_score')
                                                    .then((response) => response.json())
                                                    .then((data) => {
                                                        
                                                        const bestFilm6 = data.results[0]; 
                                                        const bestFilm6ImageUrl = bestFilm6.image_url;
                                                        const imageElement6 = document.createElement("img");
                                                        imageElement6.src = bestFilm6ImageUrl;  
                                                        const sectionBestFilms6 = document.querySelector(".scroll-images3 .boxsix");
                                                        sectionBestFilms6.appendChild(imageElement6);
                                                        sectionBestFilms6.onclick = function(){load_modal(data.results[0]);};

                                                        const bestFilm7 = data.results[1]; 
                                                        const bestFilm7ImageUrl = bestFilm7.image_url;
                                                        const imageElement7 = document.createElement("img");
                                                        imageElement7.src = bestFilm7ImageUrl;  
                                                        const sectionBestFilms7 = document.querySelector(".scroll-images3 .boxseven");
                                                        sectionBestFilms7.appendChild(imageElement7);
                                                        sectionBestFilms7.onclick = function(){load_modal(data.results[1]);};

                                                        fetch('http://localhost:8000/api/v1/titles/?genre=Biography&sort_by=-imdb_score')
                                                            .then((response) => response.json())
                                                            .then((data) => {

                                                                    const bestFilm1 = data.results[0]; 
                                                                    const bestFilm1ImageUrl = bestFilm1.image_url;
                                                                    const imageElement1 = document.createElement("img");
                                                                    imageElement1.src = bestFilm1ImageUrl;  
                                                                    const sectionBestFilms1 = document.querySelector(".scroll-images4 .boxone");
                                                                    sectionBestFilms1.appendChild(imageElement1);
                                                                    sectionBestFilms1.onclick = function(){load_modal(data.results[0]);};

                                                                    const bestFilm2 = data.results[1]; 
                                                                    const bestFilm2ImageUrl = bestFilm2.image_url;
                                                                    const imageElement2 = document.createElement("img");
                                                                    imageElement2.src = bestFilm2ImageUrl;  
                                                                    const sectionBestFilms2 = document.querySelector(".scroll-images4 .boxtwo");
                                                                    sectionBestFilms2.appendChild(imageElement2);
                                                                    sectionBestFilms2.onclick = function(){load_modal(data.results[1]);};

                                                                    const bestFilm3 = data.results[2]; 
                                                                    const bestFilm3ImageUrl = bestFilm3.image_url;
                                                                    const imageElement3 = document.createElement("img");
                                                                    imageElement3.src = bestFilm3ImageUrl;  
                                                                    const sectionBestFilms3 = document.querySelector(".scroll-images4 .boxthree");
                                                                    sectionBestFilms3.appendChild(imageElement3);
                                                                    sectionBestFilms3.onclick = function(){load_modal(data.results[2]);};

                                                                    const bestFilm4 = data.results[3]; 
                                                                    const bestFilm4ImageUrl = bestFilm4.image_url;
                                                                    const imageElement4 = document.createElement("img");
                                                                    imageElement4.src = bestFilm4ImageUrl;  
                                                                    const sectionBestFilms4 = document.querySelector(".scroll-images4 .boxfour");
                                                                    sectionBestFilms4.appendChild(imageElement4);
                                                                    sectionBestFilms4.onclick = function(){load_modal(data.results[3]);};

                                                                    const bestFilm5 = data.results[4]; 
                                                                    const bestFilm5ImageUrl = bestFilm5.image_url;
                                                                    const imageElement5 = document.createElement("img");
                                                                    imageElement5.src = bestFilm5ImageUrl;  
                                                                    const sectionBestFilms5 = document.querySelector(".scroll-images4 .boxfive");
                                                                    sectionBestFilms5.appendChild(imageElement5);
                                                                    sectionBestFilms5.onclick = function(){load_modal(data.results[4]);};

                                                                    fetch('http://localhost:8000/api/v1/titles/?genre=Biography&page=2&sort_by=-imdb_score')
                                                                        .then((response) => response.json())
                                                                        .then((data) => {
                                                                            
                                                                            const bestFilm6 = data.results[0]; 
                                                                            const bestFilm6ImageUrl = bestFilm6.image_url;
                                                                            const imageElement6 = document.createElement("img");
                                                                            imageElement6.src = bestFilm6ImageUrl;  
                                                                            const sectionBestFilms6 = document.querySelector(".scroll-images4 .boxsix");
                                                                            sectionBestFilms6.appendChild(imageElement6);
                                                                            sectionBestFilms6.onclick = function(){load_modal(data.results[0]);};

                                                                            const bestFilm7 = data.results[1]; 
                                                                            const bestFilm7ImageUrl = bestFilm7.image_url;
                                                                            const imageElement7 = document.createElement("img");
                                                                            imageElement7.src = bestFilm7ImageUrl;  
                                                                            const sectionBestFilms7 = document.querySelector(".scroll-images4 .boxseven");
                                                                            sectionBestFilms7.appendChild(imageElement7);
                                                                            sectionBestFilms7.onclick = function(){load_modal(data.results[1]);};
                                                                       })
                                                                   })
                                                               })
                                                           })
                                                       })
                                                   })
                                                })
                                            })
    



/* const Http = new XMLHttpRequest();
const url='http://localhost:8000/api/v1/titles?sort_by=-imdb_score';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function (){
    if (this.readyState == 4 && this.status ===200){
        const data = JSON.parse(Http.responseText);
    }  */
       
