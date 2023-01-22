
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

        const bestFilm2 = data.results[2]; 
        const bestFilm2ImageUrl = bestFilm2.image_url;
        const imageElement2 = document.createElement("img");
        imageElement2.src = bestFilm2ImageUrl;  
        const sectionBestFilms2 = document.querySelector(".scroll-images1 .boxtwo");
        sectionBestFilms2.appendChild(imageElement2);

        const bestFilm3 = data.results[3]; 
        const bestFilm3ImageUrl = bestFilm3.image_url;
        const imageElement3 = document.createElement("img");
        imageElement3.src = bestFilm3ImageUrl;  
        const sectionBestFilms3 = document.querySelector(".scroll-images1 .boxthree");
        sectionBestFilms3.appendChild(imageElement3);


        const bestFilm4 = data.results[4]; 
        const bestFilm4ImageUrl = bestFilm4.image_url;
        const imageElement4 = document.createElement("img");
        imageElement4.src = bestFilm4ImageUrl;  
        const sectionBestFilms4 = document.querySelector(".scroll-images1 .boxfour");
        sectionBestFilms4.appendChild(imageElement4);

        fetch('http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score')
            .then((response) => response.json())
            .then((data) => {
                const bestFilm5 = data.results[0]; 
                const bestFilm5ImageUrl = bestFilm5.image_url;
                const imageElement5 = document.createElement("img");
                imageElement5.src = bestFilm5ImageUrl;  
                const sectionBestFilms5 = document.querySelector(".scroll-images1 .boxfive");
                sectionBestFilms5.appendChild(imageElement5);

                const bestFilm6 = data.results[1]; 
                const bestFilm6ImageUrl = bestFilm6.image_url;
                const imageElement6 = document.createElement("img");
                imageElement6.src = bestFilm6ImageUrl;  
                const sectionBestFilms6 = document.querySelector(".scroll-images1 .boxsix");
                sectionBestFilms6.appendChild(imageElement6);

                const bestFilm7 = data.results[2]; 
                const bestFilm7ImageUrl = bestFilm7.image_url;
                const imageElement7 = document.createElement("img");
                imageElement7.src = bestFilm7ImageUrl;  
                const sectionBestFilms7 = document.querySelector(".scroll-images1 .boxseven");
                sectionBestFilms7.appendChild(imageElement7);

                fetch('http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score')
                    .then((response) => response.json())
                    .then((data) => {

                            const bestFilm1 = data.results[0]; 
                            const bestFilm1ImageUrl = bestFilm1.image_url;
                            const imageElement1 = document.createElement("img");
                            imageElement1.src = bestFilm1ImageUrl;  
                            const sectionBestFilms1 = document.querySelector(".scroll-images2 .boxone");
                            sectionBestFilms1.appendChild(imageElement1);

                            const bestFilm2 = data.results[1]; 
                            const bestFilm2ImageUrl = bestFilm2.image_url;
                            const imageElement2 = document.createElement("img");
                            imageElement2.src = bestFilm2ImageUrl;  
                            const sectionBestFilms2 = document.querySelector(".scroll-images2 .boxtwo");
                            sectionBestFilms2.appendChild(imageElement2);

                            const bestFilm3 = data.results[2]; 
                            const bestFilm3ImageUrl = bestFilm3.image_url;
                            const imageElement3 = document.createElement("img");
                            imageElement3.src = bestFilm3ImageUrl;  
                            const sectionBestFilms3 = document.querySelector(".scroll-images2 .boxthree");
                            sectionBestFilms3.appendChild(imageElement3);

                            const bestFilm4 = data.results[3]; 
                            const bestFilm4ImageUrl = bestFilm4.image_url;
                            const imageElement4 = document.createElement("img");
                            imageElement4.src = bestFilm4ImageUrl;  
                            const sectionBestFilms4 = document.querySelector(".scroll-images2 .boxfour");
                            sectionBestFilms4.appendChild(imageElement4);

                            const bestFilm5 = data.results[4]; 
                            const bestFilm5ImageUrl = bestFilm5.image_url;
                            const imageElement5 = document.createElement("img");
                            imageElement5.src = bestFilm5ImageUrl;  
                            const sectionBestFilms5 = document.querySelector(".scroll-images2 .boxfive");
                            sectionBestFilms5.appendChild(imageElement5);


                            fetch('http://localhost:8000/api/v1/titles/?genre=Adventure&page=2&sort_by=-imdb_score')
                                .then((response) => response.json())
                                .then((data) => {
                                    
                                    const bestFilm6 = data.results[0]; 
                                    const bestFilm6ImageUrl = bestFilm6.image_url;
                                    const imageElement6 = document.createElement("img");
                                    imageElement6.src = bestFilm6ImageUrl;  
                                    const sectionBestFilms6 = document.querySelector(".scroll-images2 .boxsix");
                                    sectionBestFilms6.appendChild(imageElement6);

                                    const bestFilm7 = data.results[1]; 
                                    const bestFilm7ImageUrl = bestFilm7.image_url;
                                    const imageElement7 = document.createElement("img");
                                    imageElement7.src = bestFilm7ImageUrl;  
                                    const sectionBestFilms7 = document.querySelector(".scroll-images2 .boxseven");
                                    sectionBestFilms7.appendChild(imageElement7);

                                    fetch('http://localhost:8000/api/v1/titles/?genre=Animation&sort_by=-imdb_score')
                                        .then((response) => response.json())
                                        .then((data) => {

                                                const bestFilm1 = data.results[0]; 
                                                const bestFilm1ImageUrl = bestFilm1.image_url;
                                                const imageElement1 = document.createElement("img");
                                                imageElement1.src = bestFilm1ImageUrl;  
                                                const sectionBestFilms1 = document.querySelector(".scroll-images3 .boxone");
                                                sectionBestFilms1.appendChild(imageElement1);

                                                const bestFilm2 = data.results[1]; 
                                                const bestFilm2ImageUrl = bestFilm2.image_url;
                                                const imageElement2 = document.createElement("img");
                                                imageElement2.src = bestFilm2ImageUrl;  
                                                const sectionBestFilms2 = document.querySelector(".scroll-images3 .boxtwo");
                                                sectionBestFilms2.appendChild(imageElement2);

                                                const bestFilm3 = data.results[2]; 
                                                const bestFilm3ImageUrl = bestFilm3.image_url;
                                                const imageElement3 = document.createElement("img");
                                                imageElement3.src = bestFilm3ImageUrl;  
                                                const sectionBestFilms3 = document.querySelector(".scroll-images3 .boxthree");
                                                sectionBestFilms3.appendChild(imageElement3);

                                                const bestFilm4 = data.results[3]; 
                                                const bestFilm4ImageUrl = bestFilm4.image_url;
                                                const imageElement4 = document.createElement("img");
                                                imageElement4.src = bestFilm4ImageUrl;  
                                                const sectionBestFilms4 = document.querySelector(".scroll-images3 .boxfour");
                                                sectionBestFilms4.appendChild(imageElement4);

                                                const bestFilm5 = data.results[4]; 
                                                const bestFilm5ImageUrl = bestFilm5.image_url;
                                                const imageElement5 = document.createElement("img");
                                                imageElement5.src = bestFilm5ImageUrl;  
                                                const sectionBestFilms5 = document.querySelector(".scroll-images3 .boxfive");
                                                sectionBestFilms5.appendChild(imageElement5);

                                                const modalText = document.querySelector("#modal-content2");

                                                const imageFifthFilm = document.createElement("img");
                                                imageFifthFilm.src = bestFilm5ImageUrl;
                                                modalText.appendChild(imageFifthFilm);

                                                const titleFifthtFilm = bestFilm5.title;
                                                const titleFilm5 = document.createElement("p");
                                                titleFilm5.innerText = `Titre : ${titleFifthtFilm}`;        
                                                modalText.appendChild(titleFilm5);

                                                const genreFifthtFilm = bestFilm5.genres;
                                                const genreFilm5 = document.createElement("p");
                                                genreFilm5.innerText = `Genre : ${genreFifthtFilm}`;        
                                                modalText.appendChild(genreFilm5);

                                                const yearFifthtFilm = bestFilm5.year;
                                                const yearFilm5 = document.createElement("p");
                                                yearFilm.innerText = `Année de sortie : ${yearFifthtFilm}`;        
                                                modalText.appendChild(yearFilm5);

                                                const votesFifthtFilm = bestFilm5.votes;
                                                const votesFilm5 = document.createElement("p");
                                                votesFilm5.innerText = `Votes : ${votesFifthtFilm}`;        
                                                modalText.appendChild(votesFilm5);

                                                const scoreFifthtFilm = bestFilm5.imdb_score;
                                                const scoreFilm5 = document.createElement("p");
                                                scoreFilm5.innerText = `Score : ${scoreFifthtFilm}`;        
                                                modalText.appendChild(scoreFilm5);

                                                const directorsFifthtFilm = bestFilm5.directors;
                                                const directorsFilm5 = document.createElement("p");
                                                directorsFilm5.innerText = `Réalisateur(s) : ${directorsFifthtFilm}`;        
                                                modalText.appendChild(directorsFilm5);

                                                const actorsFifthtFilm = bestFilm5.actors;
                                                const actorsFilm5 = document.createElement("p");
                                                actorsFilm5.innerText = `Acteurs : ${actorsFifthtFilm}`;        
                                                modalText.appendChild(actorsFilm5);

                                                const writersFifthtFilm = bestFilm5.writers;
                                                const writersFilm5 = document.createElement("p");
                                                writersFilm5.innerText = `Scénariste(s) : ${writersFifthtFilm}`;        
                                                modalText.appendChild(writersFilm5);

                                                var modal2 = document.getElementById("myModal2");

                                                // Get the button that opens the modal
                                                var btn2 = document.getElementById("fifth-film");

                                                // Get the <span> element that closes the modal
                                                var span2 = document.getElementsByClassName("close")[1];

                                                // When the user clicks the button, open the modal 
                                                btn2.onclick = function() {
                                                modal2.style.display = "block";
                                                }

                                                // When the user clicks on <span> (x), close the modal
                                                span2.onclick = function() {
                                                modal2.style.display = "none";
                                                }

                                                // When the user clicks anywhere outside of the modal, close it
                                                window.onclick = function(event) {
                                                    if (event.target == modal) {
                                                      modal.style.display = "none";
                                                    }
                                                    else if (event.target == modal2) {
                                                      modal2.style.display = "none";
                                                    }
                                                  }
                                   
                                                fetch('http://localhost:8000/api/v1/titles/?genre=Animation&page=2&sort_by=-imdb_score')
                                                    .then((response) => response.json())
                                                    .then((data) => {
                                                        
                                                        const bestFilm6 = data.results[0]; 
                                                        const bestFilm6ImageUrl = bestFilm6.image_url;
                                                        const imageElement6 = document.createElement("img");
                                                        imageElement6.src = bestFilm6ImageUrl;  
                                                        const sectionBestFilms6 = document.querySelector(".scroll-images3 .boxsix");
                                                        sectionBestFilms6.appendChild(imageElement6);

                                                        const bestFilm7 = data.results[1]; 
                                                        const bestFilm7ImageUrl = bestFilm7.image_url;
                                                        const imageElement7 = document.createElement("img");
                                                        imageElement7.src = bestFilm7ImageUrl;  
                                                        const sectionBestFilms7 = document.querySelector(".scroll-images3 .boxseven");
                                                        sectionBestFilms7.appendChild(imageElement7);

                                                        fetch('http://localhost:8000/api/v1/titles/?genre=Biography&sort_by=-imdb_score')
                                                            .then((response) => response.json())
                                                            .then((data) => {

                                                                    const bestFilm1 = data.results[0]; 
                                                                    const bestFilm1ImageUrl = bestFilm1.image_url;
                                                                    const imageElement1 = document.createElement("img");
                                                                    imageElement1.src = bestFilm1ImageUrl;  
                                                                    const sectionBestFilms1 = document.querySelector(".scroll-images4 .boxone");
                                                                    sectionBestFilms1.appendChild(imageElement1);

                                                                    const bestFilm2 = data.results[1]; 
                                                                    const bestFilm2ImageUrl = bestFilm2.image_url;
                                                                    const imageElement2 = document.createElement("img");
                                                                    imageElement2.src = bestFilm2ImageUrl;  
                                                                    const sectionBestFilms2 = document.querySelector(".scroll-images4 .boxtwo");
                                                                    sectionBestFilms2.appendChild(imageElement2);

                                                                    const bestFilm3 = data.results[2]; 
                                                                    const bestFilm3ImageUrl = bestFilm3.image_url;
                                                                    const imageElement3 = document.createElement("img");
                                                                    imageElement3.src = bestFilm3ImageUrl;  
                                                                    const sectionBestFilms3 = document.querySelector(".scroll-images4 .boxthree");
                                                                    sectionBestFilms3.appendChild(imageElement3);

                                                                    const bestFilm4 = data.results[3]; 
                                                                    const bestFilm4ImageUrl = bestFilm4.image_url;
                                                                    const imageElement4 = document.createElement("img");
                                                                    imageElement4.src = bestFilm4ImageUrl;  
                                                                    const sectionBestFilms4 = document.querySelector(".scroll-images4 .boxfour");
                                                                    sectionBestFilms4.appendChild(imageElement4);

                                                                    const bestFilm5 = data.results[4]; 
                                                                    const bestFilm5ImageUrl = bestFilm5.image_url;
                                                                    const imageElement5 = document.createElement("img");
                                                                    imageElement5.src = bestFilm5ImageUrl;  
                                                                    const sectionBestFilms5 = document.querySelector(".scroll-images4 .boxfive");
                                                                    sectionBestFilms5.appendChild(imageElement5);

                                                                    fetch('http://localhost:8000/api/v1/titles/?genre=Biography&page=2&sort_by=-imdb_score')
                                                                        .then((response) => response.json())
                                                                        .then((data) => {
                                                                            
                                                                            const bestFilm6 = data.results[0]; 
                                                                            const bestFilm6ImageUrl = bestFilm6.image_url;
                                                                            const imageElement6 = document.createElement("img");
                                                                            imageElement6.src = bestFilm6ImageUrl;  
                                                                            const sectionBestFilms6 = document.querySelector(".scroll-images4 .boxsix");
                                                                            sectionBestFilms6.appendChild(imageElement6);

                                                                            const bestFilm7 = data.results[1]; 
                                                                            const bestFilm7ImageUrl = bestFilm7.image_url;
                                                                            const imageElement7 = document.createElement("img");
                                                                            imageElement7.src = bestFilm7ImageUrl;  
                                                                            const sectionBestFilms7 = document.querySelector(".scroll-images4 .boxseven");
                                                                            sectionBestFilms7.appendChild(imageElement7);
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
       
