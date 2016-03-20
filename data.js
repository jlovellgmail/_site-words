//--------------------------------------------------
var cache = "_____";
var endash = "\u2013";
var definition_separator = " - - - ";
//--------------------------------------------------
//--------------------------------------------------
var data = {};
data.items = [];
function i(word, definition, links){
    var item ={};
    if(word) item.word = word;
    if(definition) item.definition = definition;
    if(links){
        if( Object.prototype.toString.call( links ) === '[object Array]' ) {
            item.links = links;
        }
        else {
            item.links = [].concat(links);
        }
    }    
    data.items.push(item);
}
//--------------------------------------------------

// example from french version:
//i("secular", "The Charlie Hebdo shootings had been widely understood as an assault on freedom of expression and French secularism; Relating to the worldly or temporal <secular concerns>; not overtly or specifically religious; from Latin saecularis \"of an age, occurring once in an age,\" from saeculum \"age, span of time, generation.\"");

i(
    "caustic", 
    "Able to burn or corrode organic tissue by chemical action: <em>a caustic cleaner</em>"
    + definition_separator + "Sarcastic in a scathing and bitter way: <em>the players were making caustic comments about the refereeing</em>"
    );
i(
    "chastise",
    "Rebuke or reprimand severely: <em>he chastised his colleagues for their laziness</em>"
    );
i(
    "epithet",
    "An adjective or descriptive phrase expressing a quality characteristic of the person or thing mentioned: <em>\"Difficult\" is another epithet that trails [David Hammons], voiced with rueful smiles by dealers and curators.</em>"
    );
//--------------------------------------------------
console.log("data.js was loaded");




