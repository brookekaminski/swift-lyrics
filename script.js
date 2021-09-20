/***** VARIABLES *****/

// search input field 
const searchInput = document.getElementById('search-input');
// search button 
const searchButton = document.getElementById('search-button');

// area to display results
let display = document.getElementById('results');

// user entered search word
let search = ''; // = prompt();

// resulting lyrics containing search
let lyrics;

// resulting track
let track;

// albums to search 
const folklore = [
    {
        track: 'the 1',
        length: '3:30',
        lyrics: `I'm doing good, I'm on some new shit
        Been saying "yes" instead of "no"
        I thought I saw you at the bus stop, I didn't though
        
        I hit the ground running each night
        I hit the Sunday matinee
        You know the greatest films of all time were never made
        
        I guess you never know, never know
        And if you wanted me, you really should've showed
        And if you never bleed, you're never gonna grow
        And it's alright now
        
        But we were something, don't you think so?
        Roaring twenties, tossing pennies in the pool
        And if my wishes came true
        It would've been you
        In my defense, I have none
        For never leaving well enough alone
        But it would've been fun
        If you would've been the one
        
        I have this dream you're doing cool shit
        Having adventures on your own
        You meet some woman on the Internet and take her home
        We never painted by the numbers, baby
        But we were making it count
        You know the greatest loves of all time are over now
        
        I guess you never know, never know
        And it's another day, waking up alone
        
        But we were something, don't you think so?
        Roaring twenties, tossing pennies in the pool
        And if my wishes came true
        It would've been you
        In my defense, I have none
        For never leaving well enough alone
        But it would've been fun
        If you would've been the one
        
        Hey, yeah-yeah
        I persist and resist the temptation to ask you
        If one thing had been different
        Would everything be different today?
        
        We were something, don't you think so?
        Rosé flowing with your chosen family
        And it would've been sweet
        If it could've been me
        In my defense, I have none
        For digging up the grave another time
        But it would've been fun
        If you would've been the one`
    },
    {
        track: 'cardigan',
        length: '3:59',
        lyrics: `Vintage tee, brand new phone
        High heels on cobblestones
        When you are young, they assume you know nothing
        Sequin smile, black lipstick
        Sensual politics
        When you are young, they assume you know nothing
        
        But I knew you
        Dancing in your Levi's
        Drunk under a streetlight, I
        I knew you
        Hand under my sweatshirt
        Baby kiss it better, right
        
        And when I felt like I was an old cardigan under someone's bed
        You put me on and said I was your favorite
        A friend to all is a friend to none
        Chase two girls, lose the one
        When you are young, they assume you know nothing
        
        But I knew you
        Playing hide-and-seek and
        Giving me your weekends
        I, I knew you
        Your heartbeat on the High Line
        Once in twenty lifetimes, I
        
        And when I felt like I was an old cardigan under someone's bed
        You put me on and said I was your favorite
        
        To kiss in cars and downtown bars
        Was all we needed
        You drew stars around my scars
        But now I'm bleeding
        
        'Cause I knew you
        Stepping on the last train
        Marked me like a bloodstain, I
        I knew you
        Tried to change the ending
        Peter losing Wendy
        I, I knew you
        Leaving like a father
        Running like water, I
        When you are young, they assume you know nothing
        
        But I knew you'd linger like a tattoo kiss
        I knew you'd haunt all of my what-ifs
        The smell of smoke would hang around this long
        'Cause I knew everything when I was young
        I knew I'd curse you for the longest time
        Chasing shadows in the grocery line
        I knew you'd miss me once the thrill expired
        And you'd be standing in my front porch light
        And I knew you'd come back to me
        You'd come back to me
        And you'd come back to me
        And you'd come back
        
        And when I felt like I was an old cardigan under someone's bed
        You put me on and said I was your favorite`
    } 

];

/***** FUNCTIONS *****/

// search via input field

function enterSearch(){
    search = searchInput.value;

    // returns song object where search equals true
    let songs = folklore.filter(function(song) {
   // boolean result 
    song.lyrics.includes(search);
    console.log(song);
    // gets lyrics for each song
    lyrics = song.lyrics;

    // gets track name for each song and store in list 
    track = `<li>${song.track}</li>`;
    console.log(track);

    // return the track 
    return track;
});

    // how many songs contained search 
    let numOfSongs = songs.length; 

    // search amount of times word is sung in each song's lyrics
    let instances = lyrics.split(search).length - 1;

    console.log(instances);

    // message for true or false search result
    if (search === ''){
        display.innerHTML = '';
    } else if (instances > 0) {
        display.innerHTML = `<p>Taylor sings the word '${search}' ${instances} times in ${numOfSongs} songs. These songs are:</p>
        <ul>${track}</ul>`;
    } else {
        display.innerHTML = 'Taylor never sings that word!';
    }  

    return search;
}

console.log(enterSearch());

// let results = searchButton.addEventListener('click', () => {
//     search = searchInput.value; 

//      console.log ( `You searched for: ${search}` );

//  });











