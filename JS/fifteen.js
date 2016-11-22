var click=0;
var counterField=document.createElement('div');
counterField.setAttribute("style", "width:100px; height:100px; text-align:center; font-size:36px; border:1px solid black; margin:auto; margin-top:20px");
function fifteen(){
    var main = document.body;
    var elements = new Array(15);
    var mainContainer = document.createElement('div');
    var emptyElement = document.createElement('div');
    mainContainer.setAttribute('class','battle-field');
    emptyElement.addEventListener("click", checkMove);
//random position of elements
    var arr = new Array(15);
    for (var i = 0; i < 15; i++) {
        arr[i] = i + 1;
    }
    arr.sort(compareRandom);
    mainContainer.setAttribute('style', 'width:408px; height:408px; margin:auto; border:1px solid black; display:flex; flex-wrap:wrap;');
    emptyElement.setAttribute("style", "width:100px; height:100px; text-align:center; font-size:36px; border:1px solid black;");
    addFifteen(mainContainer, elements, arr);
    mainContainer.appendChild(emptyElement);
    main.appendChild(mainContainer);
    counterField.innerHTML=click;
    document.body.appendChild(counterField);



}
function compareRandom(a, b) {
    return Math.random() - 0.5;
}
function addFifteen(node, elements, randomArray) {
    for (var i = 0; i < 15; i++) {
        elements[i] = document.createElement('div');
        elements[i].setAttribute("style", "width:100px; height:100px; text-align:center; font-size:36px; border:1px solid black;");
        elements[i].addEventListener("click", checkMove);
        elements[i].setAttribute("class", "number");
        elements[i].innerHTML = (i + 1).toString();

    }
    for (var j = 0; j < 15; j++) {
        var localI = randomArray[j];
        node.appendChild(elements[localI - 1]);
    }
}
function checkMove() {
    var leftSibling=this.previousElementSibling;
    var rightSibling=this.nextSibling;


    try {
        var topSibling = this.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    }
    catch(err){
        var topSibling=null;
    }
    try {
        var bottomSibling=this.nextSibling.nextSibling.nextSibling.nextSibling;
    }
    catch(err){
        var bottomSibling=null;
    }
    if (leftSibling !== null && !leftSibling.innerHTML) {
        leftSibling.innerHTML = this.innerHTML;
        this.innerHTML = '';
        click++;
    }
    if (rightSibling !== null && !rightSibling.innerHTML) {
        rightSibling.innerHTML = this.innerHTML;
        this.innerHTML = '';
        click++;
    }
    if (topSibling !== null && !topSibling.innerHTML) {
        topSibling.innerHTML = this.innerHTML;
        this.innerHTML = '';
        click++;
    }
    if (bottomSibling !== null && !bottomSibling.innerHTML) {
        bottomSibling.innerHTML = this.innerHTML;
        this.innerHTML = '';
        click++;
    }
    counterField.innerHTML=click;

     //   alert(click);

}
fifteen();