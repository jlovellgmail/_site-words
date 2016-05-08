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
    return "<span class='example-sentence'>" + s + "</span>";
}
var etym = convert_string_to_etymology;
function convert_string_to_etymology(s){
    return "<span class='etymology'>" + s + "</span>";
}
var o = convert_string_to_origin_word;
function convert_string_to_origin_word(s){
    return "<span class='origin-word'>" + s + "</span>";
}
//--------------------------------------------------
i("synecdoche",
    "A figure of speech in which a part is made to represent the whole or vice versa: " 
    + ex("There is a typology of rhetorical figures of speech made up of four tropes... metaphor, metonymy, synecdoche, and irony. ")
    + etym("Greek "+o("syn-")+" \"with\", "+o("ek")+" \"out\", "+o("dekhesthai")+" \"to receive\"")
    );
i("ardent",
    "Enthusiastic or passionate. Synonyms: fervent, zealous, fervid, wholehearted, vehement, intense, fierce, fiery, keen, eager, avid, committed, dedicated. " 
    + etym("Latin "+o("ardere")+" \"to burn\"")
    );
i("grapheme",
	"A minimal unit of a writing system. "
	+ ex("Baer uses the hyperrealism of objects as a counterpoint in an elaborate vocabulary of nonrepresentational graphemes and painted interventions. ")
	);
i("bereft",
	"Deprived of or lacking something, especially a nonmaterial asset. "
	+ "Bereaved applies to loss of loved ones, bereft to circumstances. "
	+ ex("Her room was stark and bereft of color. ")
	);
i("categorical",
    "Without exceptions or conditions. "
    + "Synonyms: absolute, unqualified, unconditional, unequivocal, explicit, express, unambiguous, definite, direct, downright, outright. "
    + etym( 
          o("Kata") + " \"down to, against\" "
        + o("Agoreuein") + " \"to harangue, to declaim (in the assembly)\" "
        + o("Agora") + " \"public assembly\" "
        + "Original sense of \"accuse\" weakened to \"assert, name\" by the time Aristotle applied " + o("kategoria") + " to his 10 classes of things that can be named."
        )
    );
//--------------------------------------------------
// Obsequious
//--------------------------------------------------
console.log("data.js was loaded");




