var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var span2 = document.getElementsByClassName("close")[1];

function load_modal(result) {
    const modalText = document.querySelector("#modal-content2");

    

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
    const yearFilm5 = all_ps[2];
    yearFilm5.innerText = `Année de sortie : ${yearFifthtFilm}`;    

    const votesFifthtFilm = result.votes;
    const votesFilm5 = all_ps[3];
    votesFilm5.innerText = `Votes : ${votesFifthtFilm}`;        

    const scoreFifthtFilm = result.imdb_score;
    const scoreFilm5 = all_ps[4];
    scoreFilm5.innerText = `Score : ${scoreFifthtFilm}`;  

    const directorsFifthtFilm = result.directors;
    const directorsFilm5 = all_ps[5];
    directorsFilm5.innerText = `Réalisateur(s) : ${directorsFifthtFilm}`;  

    const actorsFifthtFilm = result.actors;
    const actorsFilm5 = all_ps[6];
    actorsFilm5.innerText = `Acteurs : ${actorsFifthtFilm}`;   

    const writersFifthtFilm = result.writers;
    const writersFilm5 = all_ps[7];
    writersFilm5.innerText = `Scénariste(s) : ${writersFifthtFilm}`;  

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