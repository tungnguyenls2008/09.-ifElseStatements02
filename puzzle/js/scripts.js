let img1 = "lion1.jpg";
let img2 = "lion2.jpg";
let img3 = "lion3.jpg";
let img4 = "lion4.jpg";
let img5 = "lion5.jpg";

function firstPiece() {
    if (img1 === "lion1.jpg") {
        img1 = "tiger1.jpg"
    } else if (img1 === "tiger1.jpg") {
        img1 = "wolf0.jpg"
    } else if (img1 === "wolf0.jpg") {
        img1 = "lion1.jpg"
    }
    document.getElementById('img1').src = 'images/' + img1;
    console.log(img1);
    checkIfCorrected();
}

function secondPiece() {
    if (img2 === "lion2.jpg") {
        img2 = "tiger2.jpg"
    } else if (img2 === "tiger2.jpg") {
        img2 = "wolf2.jpg"
    } else if (img2 === "wolf2.jpg") {
        img2 = "lion2.jpg"
    }
    document.getElementById('img2').src = 'images/' + img2;
    checkIfCorrected();
}

function thirdPiece() {
    if (img3 === "lion3.jpg") {
        img3 = "tiger3.jpg"
    } else if (img3 === "tiger3.jpg") {
        img3 = "wolf3.jpg"
    } else if (img3 === "wolf3.jpg") {
        img3 = "lion3.jpg"
    }
    document.getElementById('img3').src = 'images/' + img3;
    checkIfCorrected();
}

function forthPiece() {
    if (img4 === "lion4.jpg") {
        img4 = "tiger4.jpg"
    } else if (img4 === "tiger4.jpg") {
        img4 = "wolf4.jpg"
    } else if (img4 === "wolf4.jpg") {
        img4 = "lion4.jpg"
    }
    document.getElementById('img4').src = 'images/' + img4;
    checkIfCorrected();
}

function fifthPiece() {
    if (img5 === "lion5.jpg") {
        img5 = "tiger5.jpg"
    } else if (img5 === "tiger5.jpg") {
        img5 = "wolf5.jpg"
    } else if (img5 === "wolf5.jpg") {
        img5 = "lion5.jpg"
    }
    document.getElementById('img5').src = 'images/' + img5;
    checkIfCorrected();
}

function checkIfCorrected() {
    if (img1 === "lion1.jpg" && img2 === "lion2.jpg" && img3 === "lion3.jpg" && img4 === "lion4.jpg" && img5 === "lion5.jpg") {
        document.getElementById("theWholeThing").style.background = "red";
        document.getElementById('info').hidden=false;
        document.getElementById('info').innerHTML = "<h3>The lion (Panthera leo) is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane, which is the most recognisable feature of the species. With a typical head-to-body length of 184–208 cm (72–82 in) they are larger than females at 160–184 cm (63–72 in). It is a social species, forming groups called prides. A lion pride consists of a few adult males, related females and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator, although some lions scavenge when opportunities occur, and have been known to hunt humans, although the species typically does not.</h3>";
    } else if (img1 === "tiger1.jpg" && img2 === "tiger2.jpg" && img3 === "tiger3.jpg" && img4 === "tiger4.jpg" && img5 === "tiger5.jpg") {
        document.getElementById("theWholeThing").style.background = "red";
        document.getElementById('info').hidden=false;
        document.getElementById('info').innerHTML = "<h3>The tiger (Panthera tigris) is the largest species among the Felidae and classified in the genus Panthera. It is most recognisable for its dark vertical stripes on orangish-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat, which support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years, before they become independent and leave their mother's home range to establish their own.</h3>";
    } else if (img1 === "wolf0.jpg" && img2 === "wolf2.jpg" && img3 === "wolf3.jpg" && img4 === "wolf4.jpg" && img5 === "wolf5.jpg") {
        document.getElementById("theWholeThing").style.background = "red";
        document.getElementById('info').hidden=false;
        document.getElementById('info').innerHTML = "<h3>The wolf (Canis lupus), also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America. It is the largest extant member of Canidae, with males averaging 40 kg (88 lb) and females 37 kg (82 lb). On average, wolves measure 105–160 cm (41–63 in) in length and 80–85 cm (31–33 in) at shoulder height. The wolf is also distinguished from other Canis species by its less pointed ears and muzzle, as well as a shorter torso and a longer tail. The wolf is nonetheless related closely enough to smaller Canis species, such as the coyote and the golden jackal, to produce fertile hybrids with them. The banded fur of a wolf is usually mottled white, brown, gray, and black. Up to 38 subspecies of wolf have been recognized including the domestic dog.</h3>";
    } else {
        document.getElementById('info').hidden=true;
        document.getElementById("theWholeThing").style.background = "aqua";
    }
}