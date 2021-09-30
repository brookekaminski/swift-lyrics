/***** VARIABLES *****/

// search input field 
const searchInput = document.getElementById('search-input');
// search button 
const searchButton = document.getElementById('search-button');
// area to display results
const display = document.getElementById('results');

// user search
let search;

// array of songs found via search
let tracks = [];

// list of stored track titles via search
let list;

// amount of times wor//d appears in song
let instances = [];

/***** FUNCTIONS *****/

// search via input field
function enterSearch(){
    // users search value 
    search = searchInput.value;

    // returns song object where search equals true
    let albums = discography.map(album => {

        //filter through songs
        songs = album.tracklist.filter(song => {

        // gets lyrics for each song
        lyrics = song.lyrics;

        // create new regular expression to search variable 
        let regex =  new RegExp('(?:|^\\W|\\s)(' + search + ')(?=\\W|\\s|$)', 'gmi');

        // store matches in variable
        let results = lyrics.match(regex);
        
        // check if search is found in lyrics
        let isFound = regex.test(lyrics);

        //gets track name for each song and store in list 
        if (isFound) {

            // gets length of object to find amount of times search is in song
            instances = Object.keys(results).length;

            display.classList.add("results");
    
            // push song tracks to list
            tracks.push(`<li>${song.track}: <strong>${instances}</strong> times</li>`);
            
            // join list of songs to remove comma
            list = tracks.join(' ');
          
            return true;
        } else {
            return false;
        }
    });

});

    // how many songs contained search 
    let numOfSongs = tracks.length; 

    //message for true or false search result
    if (search === ''){
        display.innerHTML = '';
    } else if (numOfSongs === 1) {
        display.innerHTML = `<p>Taylor sings the lyrics '${search}' in <strong>${numOfSongs}</strong> song. This song is:</p>
        <ul>${list}</ul>`
    } else if (numOfSongs > 1) {
        display.innerHTML = `<p>Taylor sings the lyrics '${search}' in <strong>${numOfSongs}</strong> songs. These songs are:</p>
        <ul>${list}</ul>`;
    } else {
        display.innerHTML = 'Taylor never sings that word!';
    }  

    // empty array for new search
    tracks = [];

    return search;
}

/***** ISSUES *****//*

Need to find way to add total of times sung

- Could only access search result with adding onclick to html
*/








 