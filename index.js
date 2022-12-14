let theNum = "0";
let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Next() {
    theNum++;
    document.querySelector(".btn_Prev").style.display = 'block';
    if (theNum + 1 == arr.length) {
        document.querySelector(".btn_Next").style.display = 'none';
    }
    change_image.src = 'images/' + arr[theNum] + '.jpg';
}

function Prev() {
    theNum--;
    document.querySelector(".btn_Next").style.display = 'block';
    if (theNum == 0) {
        document.querySelector(".btn_Prev").style.display = 'none';
    }
    change_image.src = 'images/' + arr[theNum] + '.jpg';
}


