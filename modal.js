var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var span2 = document.getElementsByClassName("close")[1];

function load_modal(result) {

    const idAnyFilm = result.id;

    const modalText = document.querySelector("#modal-content2");

    fetch(`http://localhost:8000/api/v1/titles/${idAnyFilm}`)
            .then((response) => response.json())
            .then((data) => {

                const imageFifthFilm = modalText.getElementsByTagName("img")[0]
                imageFifthFilm.src = result.image_url;
    
                all_ps = modalText.getElementsByTagName("p")
    
                const titleFifthtFilm = result.title;
                const titleFilm5 = all_ps[0];
                titleFilm5.innerText = `Titre : ${titleFifthtFilm}`;        
    
                const genreFifthtFilm = result.genres;
                const genreFilm5 = all_ps[1];
                genreFilm5.innerText = `Genre : ${genreFifthtFilm}`;    
    
                const yearFifthtFilm = result.year;
                const yearFilm5 = all_ps[3];
                yearFilm5.innerText = `Année de sortie : ${yearFifthtFilm}`;    
    
                const votesFifthtFilm = result.votes;
                const votesFilm5 = all_ps[4];
                votesFilm5.innerText = `Votes : ${votesFifthtFilm}`;        
    
                const scoreFifthtFilm = result.imdb_score;
                const scoreFilm5 = all_ps[5];
                scoreFilm5.innerText = `Score : ${scoreFifthtFilm}`;  
    
                const directorsFifthtFilm = result.directors;
                const directorsFilm5 = all_ps[6];
                directorsFilm5.innerText = `Réalisateur(s) : ${directorsFifthtFilm}`;  
    
                const actorsFifthtFilm = result.actors;
                const actorsFilm5 = all_ps[7];
                actorsFilm5.innerText = `Acteurs : ${actorsFifthtFilm}`;   
    
                const writersFifthtFilm = result.writers;
                const writersFilm5 = all_ps[8];
                writersFilm5.innerText = `Scénariste(s) : ${writersFifthtFilm}`;

                const synopsisAnyFilm = data.description;
                const synopsisFilm = all_ps[2];
                synopsisFilm.innerText = `Résumé du film : ${synopsisAnyFilm}`;
                
                
                const ratedAnyFilm = data.rated;
                const ratedFilm = all_ps[9];
                ratedFilm.innerText = `Classement : ${ratedAnyFilm}`;
                

                const durationAnyFilm = data.duration;
                const durationFilm = all_ps[10];
                durationFilm.innerText = `Durée : ${durationAnyFilm} minutes`;
                

                const originCountryAnyFilm = data.countries;
                const  originCountryFilm = all_ps[11];
                originCountryFilm.innerText = `Pays d'origine : ${originCountryAnyFilm}`;
                

                const incomeAnyFilm = data.worldwide_gross_income;
                const  incomeFilm = all_ps[12];
                incomeFilm.innerText = `Résultat au Box Office : ${incomeAnyFilm}`;
                
    
                modal2.style.display = "block";
            })
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