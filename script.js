function button() {
    let input_ele = document.getElementById("input").value;
    let textarea_ele = document.getElementById("textarea");

    textarea_ele.value += input_ele + "\n"; // appends input text with a new line
}
function remove(){
     let textarea_ele = document.getElementById("textarea");

    textarea_ele.value ="" ;

}