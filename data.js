//--------------------------------------------------
var cache = "_____";
var endash = "\u2013";
var definition_separator = " - - - ";
var e_acute = "\u00E9"; // é
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
    + etym("Greek: "+o("Syn-")+" \"with\", "+o("Ek")+" \"out\", "+o("Dekhesthai")+" \"to receive\"")
    );
i("ardent",
    "Enthusiastic or passionate. Synonyms: fervent, zealous, fervid, wholehearted, vehement, intense, fierce, fiery, keen, eager, avid, committed, dedicated. " 
    + etym("Latin: "+o("Ardere")+" \"to burn\"")
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
    	"Greek: "
        + o("Kata") + " \"down to, against\" "
        + o("Agoreuein") + " \"to harangue, to declaim (in the assembly)\" "
        + o("Agora") + " \"public assembly\" "
        + "Original sense of \"accuse\" weakened to \"assert, name\" by the time Aristotle applied " + o("kategoria") + " to his 10 classes of things that can be named."
        )
    );
i("provenance",
    "The place of origin or earliest known history of something. "
    + ex("Martini brought along a psychologist, who helped him come to the conclusion that Falciani seemed credible about the provenance of his data. ") // New Yorker MAY 30, 2016 ISSUE "THE BANK ROBBER" http://www.newyorker.com/magazine/2016/05/30/herve-falcianis-great-swiss-bank-heist
    + etym( 
		"Latin: " 
		+ o("Provenire") + " \"come forth, originate, appear, arise\" "
        )
    );
i("vignette",
    "A brief evocative description, account, or episode. "
    + "A small illustration or portrait photograph that fades into its background without a definite border. "
    + ex("The film is a series of vignettes about living with cancer. ")
    + etym( 
    	"Originally a design in the form of vine tendrils around the borders of a book page, especially a picture page. "
		+ "Old French: " + "diminutive of " + o("vigne") + " \"vine\" "
		+ "Sense transferred from the border to the picture itself, then (1853) to a type of small photographic portrait with blurred edges very popular mid-19c. "
		)
    );
i("semantic",
    "Relating to meaning in language or logic. "
    + etym(
        "French: "+o("s"+e_acute+"mantique. ")
        + "Applied by Michel Br"+e_acute+"al (1883) to the psychology of language. "
        + "Greek: " + o("sema") + " \"sign, mark, token; omen, portent; constellation; grave.\" "
        )
    );
//--------------------------------------------------
// Obsequious
//--------------------------------------------------
console.log("data.js was loaded");




