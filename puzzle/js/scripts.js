let images={
    imgDB:[
        [
            "lion1.jpg",
            "lion2.jpg",
            "lion3.jpg",
            "lion4.jpg",
            "lion5.jpg",
        ],
        [
            "tiger1.jpg",
            "tiger2.jpg",
            "tiger3.jpg",
            "tiger4.jpg",
            "tiger5.jpg",
        ],
        [
            "wolf1.jpg",
            "wolf2.jpg",
            "wolf3.jpg",
            "wolf4.jpg",
            "wolf5.jpg",
        ]
    ],
    imgpos:[0,0,0,0,0]
};
function placeImg(imgPos1,imgClick) {
images.imgpos[imgPos1-1]=imgClick;
let imgName='#img'+ imgPos1.toString();
    $(imgName).attr("src", "./images/" + images.imgDB[imgClick][imgPos1 - 1]);
}
function randomizeImages() {
    for (let i=1; i <= 5; i++)
    {
        let num1 = Math.floor ((Math.random() * 3));
        placeImg(i, num1);
    }
}

function imageClick(imgPos1) {
    let imgClick = images.imgpos[imgPos1 - 1];
    if (imgClick === 0) {
        placeImg(imgPos1, 1);
    }
    else if (imgClick === 1) {
        placeImg(imgPos1, 2);
    }
    else if (imgClick === 2) {
        placeImg(imgPos1, 0);
    }

}

function checkSet() {
    let setFlag = true;
    for (let i=1; i < 5; i++)
    {
        if (images.imgpos[i] !== images.imgpos[i - 1]) {
            setFlag = false;
        }
    }

    if (setFlag) {
        $('img').css("box-shadow", "4px 4px 9px red")
    }
    else {
        $('img').css("box-shadow", "2px 3px 3px black")
    }
}

let main = function ()
{

    randomizeImages();

    $("#img1").click(function(){
        imageClick(1);
        checkSet();
    });
    $("#img2").click(function(){
        imageClick(2);
        checkSet();
    });
    $("#img3").click(function(){
        imageClick(3);
        checkSet();
    });
    $("#img4").click(function(){
        imageClick(4);
        checkSet();
    });
    $("#img5").click(function(){
        imageClick(5);
        checkSet();
    })

};


$(document).ready(main());