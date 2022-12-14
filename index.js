let theNum = "0";
let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Next() {
    theNum++;
    if (theNum == arr.length) {
        theNum = "0";
    }
    change_image.src = 'images/' + arr[theNum] + '.jpg';
}

function HideNext() {
    if (arr.length = 9) {

    }
}

function Prev() {
    theNum--;
    if (theNum == "-1") {
        theNum = arr.length - 1;
    }
    console.log(theNum);
    change_image.src = 'images/' + arr[theNum] + '.jpg';
}