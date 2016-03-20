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
var ex = convert_string_to_example_sentence;
function convert_string_to_example_sentence(s){
    //return "<em style='color:blue;'>" + s + "</em>";
    return "<span class='example-sentence'>" + s + "</span>";
}
//--------------------------------------------------
i(
    "caustic", 
    "Able to burn or corrode organic tissue by chemical action: " + ex("a caustic cleaner")
    + definition_separator + "Sarcastic in a scathing and bitter way: " + ex("the players were making caustic comments about the refereeing")
    );
i(
    "chastise",
    "Rebuke or reprimand severely: " + ex("he chastised his colleagues for their laziness")
    );
i(
    "epithet",
    "An adjective or descriptive phrase expressing a quality characteristic of the person or thing mentioned: " + ex("\"Difficult\" is another epithet that trails [David Hammons], voiced with rueful smiles by dealers and curators.")
    );
    );
//--------------------------------------------------
console.log("data.js was loaded");




