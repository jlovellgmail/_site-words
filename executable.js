var cache = "_____";
var endash = "\u2013";
var definition_separator = " - - - ";
function go(){
    var shuffled = get_shuffled_list();
    var length = parseFloat(document.getElementById('list_length_input').value) || shuffled.length;
    var truncated = shuffled.slice(0,length);
    display_count(truncated.length, shuffled.length);
    display_with_separate_elements(truncated);
}
function is_mp3(url){
    return url.substr(url.length - 4) == ".mp3";
}
function display_with_separate_elements(list){
    var result = d3.select("#result");
    result.selectAll("*").remove();
    var containers = 
        result
        .selectAll(".list-item-container")
        .data(list)
        .enter()
        .append("div")
        .attr("class", "list-item-container")
        ;
    var numbers =
        containers
        .append("div")
        .attr("class", "line-number")
        .text(function(d,i){ return i+1; })
        ;
    var links_containers =
        containers
        .append("div")
        .attr("class", "links-container")
        ;
    links_containers
        .selectAll("a")
        .data(function(d){ 
            if(d.links) return d.links;
            else return [];
        })
        .enter()
        .append("a")
        .append("div")
        .attr("class", "word-link")
        .classed("audio", function(d){ return is_mp3(d); })
        .text(function(d,i){ return i+1; })
        ;
    var items = 
        containers
        .append("div")
        .attr("class", "item")
        
        //.text(function(d){ return d.word; })
        .html(function(d){ return d.word; })
        //.html(function(d){ return "<em>this is italic</em>"; })

        ;
    items
        .on("click", function(){
            var this_sel = d3.select(this);
            this_sel
                .classed("clicked", function(){ 
                    return !this_sel.classed("clicked"); 
                })
                ;
        })
        ;
    // play audio or open the link
    links_containers
        .selectAll("a")
        .on("click", function(url){
            if(is_mp3(url)){
                new Audio(url).play();
            }
            else{
                window.open(url, "_blank");
            }
        });
    result
        .append("div")
        .attr("class", "list-bottom-margin")
        ;
}
function flip(){
    var items = 
        d3.selectAll(".item")

        /*
        .text(function(d){ 
            if(d3.select(this).text() == d.word){
                return d.definition; 
            }
            else {
                return d.word; 
            }
        */
        .html(function(d){
            if(d3.select(this).html() == d.word){
                return d.definition; 
            }
            else {
                return d.word; 
            }


        })
        ;
}
function check_keypress(e) {
    if (e.keyCode == 13) {
    	go();
    }
}
function display_count(displayed, max){
    var output = "";
    output += "showing: " + displayed + " / " + max;
    document.getElementById("next_to_button").innerHTML = output;
}
function get_shuffled(array){
    var currentIndex = array.length, temporaryValue, randomIndex ;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;        
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function get_shuffled_list(){
    var shuffled = get_shuffled(data.items.slice());
    return shuffled;
}
function setInputValue(){
	var count = get_shuffled_list().length;
	document.getElementById("list_length_input").value = count;
}
d3.select("body").on("keydown", function(){    
    // http://jsfiddle.net/qAHC2/292/
    // f = 70
    // ` = 192
    if(d3.event.keyCode == 192){
        flip();
    }
});



//--------------------------------------------------
console.log("executable.js was loaded");



