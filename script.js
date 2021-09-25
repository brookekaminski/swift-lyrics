/***** VARIABLES *****/

// search input field 
const searchInput = document.getElementById('search-input');
// search button 
const searchButton = document.getElementById('search-button');
// area to display results
const display = document.getElementById('results');

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
    },
    {
        track: 'the last great american dynasty',
        length: '3:59',
        lyrics: `Rebekah rode up on the afternoon train
        It was sunny
        Her saltbox house on the coast
        Took her mind off St. Louis
        Bill was the heir to the Standard Oil name and money
        And the town said, "How did a middle-class divorcée do it?"
        The wedding was charming, if a little gauche
        There's only so far new money goes
        They picked out a home and called it "Holiday House"
        Their parties were tasteful, if a little loud
        The doctor had told him to settle down
        It must have been her fault his heart gave out
        And they said
        "There goes the last great American dynasty"
        "Who knows if she never showed up, what could've been"
        "There goes the maddest woman this town has ever seen"
        "She had a marvelous time ruinin' everything"
        Rebekah gave up on the Rhode Island set
        Forever
        Flew in all her Bitch Pack friends from the city
        Filled the pool with champagne and swam with the big names
        And blew through the money on the boys and the ballet
        And losin' on card game bets with Dalí
        And they said
        "There goes the last great American dynasty"
        "Who knows if she never showed up, what could've been"
        "There goes the most shameless woman this town has ever seen"
        "She had a marvelous time ruinin' everything"
        They say she was seen on occasion
        Pacing the rocks, staring out at the midnight sea
        And in a feud with her neighbour
        She stole his dog and dyed it key lime green
        50 years is a long time
        Holiday house sat quietly on that beach
        Free of women with madness, their men and bad habits
        And then it was bought by me
        Who knows if I never showed up what could've been
        There goes the loudest woman this town has ever seen
        I had a marvelous time ruinin' everything
        I had a marvelous time ruinin' everything
        A marvelous time ruinin' everything
        A marvelous time
        I had a marvelous time`
    }  

];

// user search
let search;

let lyrics;

// array of songs found via search
let tracks = [];

// list of stored track titles via search
let list;

// amount of times word appears in song
let instances = [];

/***** FUNCTIONS *****/

// search via input field
function enterSearch(){
    // users search value 
    search = searchInput.value;

    // returns song object where search equals true
    let songs = folklore.filter(song => {

   // boolean result 
    //let result = song.lyrics.includes(search);
    // gets lyrics for each song
    lyrics = song.lyrics;

    // create new regular expression to search variable 
    let regex =  new RegExp('(?:^|\\s)(' + search + ')(?=\\s|$)', 'gmi');

    // store matches in variable
    let results = lyrics.match(regex);
    
    // check if search is found in lyrics
    let isFound = regex.test(lyrics);

    instances.push(results);

    //console.log(`instances: ${instances}`);
    //console.log(`number of instances: ${instances.length}`);

    
    //gets track name for each song and store in list 
    if (isFound) {
    
        tracks.push(`<li>${song.track}</li>`);
        list = tracks.join(' ');

           
        return true;
    } else {
        return false;
    }
});

    // how many songs contained search 
    let numOfSongs = songs.length; 

    console.log(`Number of songs: ${songs.length}`);

    // message for true or false search result
    if (search === ''){
        display.innerHTML = '';
    } else if (instances === 1 && numOfSongs === 1) {
        display.innerHTML = `<p>Taylor sings the word '${search}' ${instances} time in ${numOfSongs} song. This song is:</p>
        <ul>${list}</ul>`;
    } else if (instances > 1 && numOfSongs === 1) {
        display.innerHTML = `<p>Taylor sings the word '${search}' ${instances} times in ${numOfSongs} song. This song is:</p>
        <ul>${list}</ul>`;
    } else if (instances === 1 && numOfSongs > 1) {
        display.innerHTML = `<p>Taylor sings the word '${search}' ${instances} time in ${numOfSongs} songs. These songs are:</p>
        <ul>${list}</ul>`;
    } else if (instances > 1 && numOfSongs > 1) {
        display.innerHTML = `<p>Taylor sings the word '${search}' ${instances} times in ${numOfSongs} songs. These songs are:</p>
        <ul>${list}</ul>`;
    } else {
        display.innerHTML = 'Taylor never sings that word!';
    }  

    if (instances === 13) {

    }

    tracks = [];

    return search;
}

/***** ISSUES *****//*

- Searching a partial word shows a true result
    - tried to fix with regex but same results so far

- Could only access search result with adding onclick to html
*/








 