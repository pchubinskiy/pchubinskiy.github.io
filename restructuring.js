    var tile1x1 = document.getElementById("white1x1");
    var tile1x2 = document.getElementById("white1x2");
    var tile1x3 = document.getElementById("white1x3");
    var tile1x4 = document.getElementById("white1x4");
    var tile1x5 = document.getElementById("white1x5");
    var tile1x6 = document.getElementById("white1x6");
    var tile1x7 = document.getElementById("white1x7");
    var tile1x8 = document.getElementById("white1x8");

    var tile2x1 = document.getElementById("white2x1");
    var tile2x2 = document.getElementById("white2x2");
    var tile2x3 = document.getElementById("white2x3");
    var tile2x4 = document.getElementById("white2x4");
    var tile2x5 = document.getElementById("white2x5");
    var tile2x6 = document.getElementById("white2x6");
    var tile2x7 = document.getElementById("white2x7");
    var tile2x8 = document.getElementById("white2x8");

    var tile3x1 = document.getElementById("white3x1");
    var tile3x2 = document.getElementById("white3x2");
    var tile3x3 = document.getElementById("white3x3");
    var tile3x4 = document.getElementById("white3x4");
    var tile3x5 = document.getElementById("white3x5");
    var tile3x6 = document.getElementById("white3x6");
    var tile3x7 = document.getElementById("white3x7");
    var tile3x8 = document.getElementById("white3x8");

    var tile4x1 = document.getElementById("white4x1");
    var tile4x2 = document.getElementById("white4x2");
    var tile4x3 = document.getElementById("white4x3");
    var tile4x4 = document.getElementById("white4x4");
    var tile4x5 = document.getElementById("white4x5");
    var tile4x6 = document.getElementById("white4x6");
    var tile4x7 = document.getElementById("white4x7");
    var tile4x8 = document.getElementById("white4x8");

    var tile5x1 = document.getElementById("white5x1");
    var tile5x2 = document.getElementById("white5x2");
    var tile5x3 = document.getElementById("white5x3");
    var tile5x4 = document.getElementById("white5x4");
    var tile5x5 = document.getElementById("white5x5");
    var tile5x6 = document.getElementById("white5x6");
    var tile5x7 = document.getElementById("white5x7");
    var tile5x8 = document.getElementById("white5x8");

    var tile6x1 = document.getElementById("white6x1");
    var tile6x2 = document.getElementById("white6x2");
    var tile6x3 = document.getElementById("white6x3");
    var tile6x4 = document.getElementById("white6x4");
    var tile6x5 = document.getElementById("white6x5");
    var tile6x6 = document.getElementById("white6x6");
    var tile6x7 = document.getElementById("white6x7");
    var tile6x8 = document.getElementById("white6x8");

    var tile7x1 = document.getElementById("white7x1");
    var tile7x2 = document.getElementById("white7x2");
    var tile7x3 = document.getElementById("white7x3");
    var tile7x4 = document.getElementById("white7x4");
    var tile7x5 = document.getElementById("white7x5");
    var tile7x6 = document.getElementById("white7x6");
    var tile7x7 = document.getElementById("white7x7");
    var tile7x8 = document.getElementById("white7x8");

    var tile8x1 = document.getElementById("white8x1");
    var tile8x2 = document.getElementById("white8x2");
    var tile8x3 = document.getElementById("white8x3");
    var tile8x4 = document.getElementById("white8x4");
    var tile8x5 = document.getElementById("white8x5");
    var tile8x6 = document.getElementById("white8x6");
    var tile8x7 = document.getElementById("white8x7");
    var tile8x8 = document.getElementById("white8x8");

    var tile9x1 = document.getElementById("white9x1");
    var tile9x2 = document.getElementById("white9x2");
    var tile9x3 = document.getElementById("white9x3");
    var tile9x4 = document.getElementById("white9x4");
    var tile9x5 = document.getElementById("white9x5");
    var tile9x6 = document.getElementById("white9x6");
    var tile9x7 = document.getElementById("white9x7");
    var tile9x8 = document.getElementById("white9x8");

    var tile10x1 = document.getElementById("white10x1");
    var tile10x2 = document.getElementById("white10x2");
    var tile10x3 = document.getElementById("white10x3");
    var tile10x4 = document.getElementById("white10x4");
    var tile10x5 = document.getElementById("white10x5");
    var tile10x6 = document.getElementById("white10x6");
    var tile10x7 = document.getElementById("white10x7");
    var tile10x8 = document.getElementById("white10x8");

    var defaultsrc = "/images/otherart/restructuring/10x8/white_tile.png";
    var putin_tile = "/images/otherart/restructuring/10x8/putin10x8/putin_crop [www.imagesplitter.net]-";
    var trump_tile = "/images/otherart/restructuring/10x8/trump10x8/trump_crop [www.imagesplitter.net]-";

    var arr = [[0, 0, 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]];

    function changeTile() {

        var random = Math.random();

        if ((.1 > random > 0) && (tile1x1.src == defaultsrc || tile1x2.src == defaultsrc || tile1x3.src == defaultsrc || tile1x4.src == defaultsrc || tile1x5.src == defaultsrc || tile1x6.src == defaultsrc || tile1x7.src == defaultsrc || tile1x8.src == defaultsrc)) { 
                        if ((tile1x1.src == defaultsrc) && (.125 > Math.random() > 0))
                        { 
                                if (Math.random() > .5) {
                                    tile1x1.src = putin_tile + "0-0.png";
                                } else {
                                    tile1x1.src = trump_tile + "0-0.png";
                                }
                        }
                        else if ((tile1x2.src == defaultsrc) && (.25 > Math.random() > .125)) 
                            { 
                                if (Math.random() > .5) {
                                    tile1x2.src = putin_tile + "0-1.png";
                                } else {
                                    tile1x2.src = trump_tile + "0-1.png";
                                }
                            }
                        else if ((tile1x3.src == defaultsrc) && (.375 > Math.random() > .25)) 
                            { 
                                if (Math.random() > .5) {
                                    tile1x3.src = putin_tile + "0-2.png";
                                } else {
                                    tile1x3.src = trump_tile + "0-2.png";
                                }
                            }
                        else if ((tile1x4.src == defaultsrc) && (.5 > Math.random() > .375)) 
                            { 
                                if (Math.random() > .5) {
                                    tile1x4.src = putin_tile + "0-3.png";
                                } else {
                                    tile1x4.src = trump_tile + "0-3.png";
                                }
                            }
                        else if ((tile1x5.src == defaultsrc) && (.625 > Math.random() > .5)) 
                            { 
                                if (Math.random() > .5) {
                                    tile1x5.src = putin_tile + "0-4.png";
                                } else {
                                    tile1x5.src = trump_tile + "0-4.png";
                                }
                            }
                        else if ((tile1x6.src == defaultsrc) && (.75 > Math.random() > .625)) 
                            { 
                                if (Math.random() > .5) {
                                    tile1x6.src = putin_tile + "0-5.png";
                                } else {
                                    tile1x6.src = trump_tile + "0-5.png";
                                }
                            }
                        else if ((tile1x7.src == defaultsrc) && (.875 > Math.random() > .75)) 
                            { 
                                if (Math.random() > .5) {
                                    tile1x7.src = putin_tile + "0-6.png";
                                } else {
                                    tile1x7.src = trump_tile + "0-6.png";
                                }
                            }
                        else if ((tile1x8.src == defaultsrc) && (1 > Math.random() > .875)) 
                            { 
                                if (Math.random() > .5) {
                                    tile1x8.src = putin_tile + "0-7.png";
                                } else {
                                    tile1x8.src = trump_tile + "0-7.png";
                                }
                            } else { return }
        } else if ((.2 > random > .1) && (tile2x1.src == defaultsrc || tile2x2.src == defaultsrc || tile2x3.src == defaultsrc || tile2x4.src == defaultsrc || tile2x5.src == defaultsrc || tile2x6.src == defaultsrc || tile2x7.src == defaultsrc || tile2x8.src == defaultsrc)) { 
                        if ((tile2x1.src == defaultsrc) && (.125 > Math.random() > 0)) 
                            { 
                                if (Math.random() > .5) {
                                    tile2x1.src = putin_tile + "1-0.png";
                                } else {
                                    tile2x1.src = trump_tile + "1-0.png";
                                }
                            }
                        else if ((tile2x2.src == defaultsrc) && (.25 > Math.random() > .125)) 
                            { 
                                if (Math.random() > .5) {
                                    tile2x2.src = putin_tile + "1-1.png";
                                } else {
                                    tile2x2.src = trump_tile + "1-1.png";
                                }
                            }
                        else if ((tile2x3.src == defaultsrc) && (.375 > Math.random() > .25)) 
                            { 
                                if (Math.random() > .5) {
                                    tile2x3.src = putin_tile + "1-2.png";
                                } else {
                                    tile2x3.src = trump_tile + "1-2.png";
                                }
                            }
                        else if ((tile2x4.src == defaultsrc) && (.5 > Math.random() > .375)) 
                            { 
                                if (Math.random() > .5) {
                                    tile2x4.src = putin_tile + "1-3.png";
                                } else {
                                    tile2x4.src = trump_tile + "1-3.png";
                                }
                            }
                        else if ((tile2x5.src == defaultsrc) && (.625 > Math.random() > .5)) 
                            { 
                                if (Math.random() > .5) {
                                    tile2x5.src = putin_tile + "1-4.png";
                                } else {
                                    tile2x5.src = trump_tile + "1-4.png";
                                }
                            }
                        else if ((tile2x6.src == defaultsrc) && (.75 > Math.random() > .625))
                            { 
                                if (Math.random() > .5) {
                                    tile2x6.src = putin_tile + "1-5.png";
                                } else {
                                    tile2x6.src = trump_tile + "1-5.png";
                                }
                            }
                        else if ((tile2x7.src == defaultsrc) && (.875 > Math.random() > .75)) 
                            { 
                                if (Math.random() > .5) {
                                    tile2x7.src = putin_tile + "1-6.png";
                                } else {
                                    tile2x7.src = trump_tile + "1-6.png";
                                }
                            }
                        else if ((tile2x8.src == defaultsrc) && (1 > Math.random() > .875)) 
                            { 
                                if (Math.random() > .5) {
                                    tile2x8.src = putin_tile + "1-7.png";
                                } else {
                                    tile2x8.src = trump_tile + "1-7.png";
                                }
                            } else { return }
        } else if ((.3 > random > .2) && (tile3x1.src == defaultsrc || tile3x2.src == defaultsrc || tile3x3.src == defaultsrc || tile3x4.src == defaultsrc || tile3x5.src == defaultsrc || tile3x6.src == defaultsrc || tile3x7.src == defaultsrc || tile3x8.src == defaultsrc)) { 
                        if ((tile3x1.src == defaultsrc) && (.125 > Math.random() > 0)) 
                            { 
                                if (Math.random() > .5) {
                                    tile3x1.src = putin_tile + "2-0.png";
                                } else {
                                    tile3x1.src = trump_tile + "2-0.png";
                                }
                            }
                        else if ((tile3x2.src == defaultsrc) && (.25 > Math.random() > .125)) 
                            { 
                                if (Math.random() > .5) {
                                    tile3x2.src = putin_tile + "2-1.png";
                                } else {
                                    tile3x2.src = trump_tile + "2-1.png";
                                }
                            }
                        else if ((tile3x3.src == defaultsrc) && (.375 > Math.random() > .25)) 
                            { 
                                if (Math.random() > .5) {
                                    tile3x3.src = putin_tile + "2-2.png";
                                } else {
                                    tile3x3.src = trump_tile + "2-2.png";
                                }
                            }
                        else if ((tile3x4.src == defaultsrc) && (.5 > Math.random() > .375)) 
                            { 
                                if (Math.random() > .5) {
                                    tile3x4.src = putin_tile + "2-3.png";
                                } else {
                                    tile3x4.src = trump_tile + "2-3.png";
                                }
                            }
                        else if ((tile3x5.src == defaultsrc) && (.625 > Math.random() > .5)) 
                            { 
                                if (Math.random() > .5) {
                                    tile3x5.src = putin_tile + "2-4.png";
                                } else {
                                    tile3x5.src = trump_tile + "2-4.png";
                                }
                            }
                        else if ((tile3x6.src == defaultsrc) && (.75 > Math.random() > .625)) 
                            { 
                                if (Math.random() > .5) {
                                    tile3x6.src = putin_tile + "2-5.png";
                                } else {
                                    tile3x6.src = trump_tile + "2-5.png";
                                }
                            }
                        else if ((tile3x7.src == defaultsrc) && (.875 > Math.random() > .75)) 
                            { 
                                if (Math.random() > .5) {
                                    tile3x7.src = putin_tile + "2-6.png";
                                } else {
                                    tile3x7.src = trump_tile + "2-6.png";
                                }
                            }
                        else if ((tile3x8.src == defaultsrc) && (1 > Math.random() > .875)) 
                            { 
                                if (Math.random() > .5) {
                                    tile3x8.src = putin_tile + "2-7.png";
                                } else {
                                    tile3x8.src = trump_tile + "2-7.png";
                                }
                            } else { return }
        } else if ((.4 > random > .3) && (tile4x1.src == defaultsrc || tile4x2.src == defaultsrc || tile4x3.src == defaultsrc || tile4x4.src == defaultsrc || tile4x5.src == defaultsrc || tile4x6.src == defaultsrc || tile4x7.src == defaultsrc || tile4x8.src == defaultsrc)) { 
                        if ((tile4x1.src == defaultsrc) && (.125 > Math.random() > 0)) 
                            { 
                                if (Math.random() > .5) {
                                    tile4x1.src = putin_tile + "3-0.png";
                                } else {
                                    tile4x1.src = trump_tile + "3-0.png";
                                }
                            }
                        else if ((tile4x2.src == defaultsrc) && (.25 > Math.random() > .125)) 
                            { 
                                if (Math.random() > .5) {
                                    tile4x2.src = putin_tile + "3-1.png";
                                } else {
                                    tile4x2.src = trump_tile + "3-1.png";
                                }
                            }
                        else if ((tile4x3.src == defaultsrc) && (.375 > Math.random() > .25)) 
                            { 
                                if (Math.random() > .5) {
                                    tile4x3.src = putin_tile + "3-2.png";
                                } else {
                                    tile4x3.src = trump_tile + "3-2.png";
                                }
                            }
                        else if ((tile4x4.src == defaultsrc) && (.5 > Math.random() > .375)) 
                            { 
                                if (Math.random() > .5) {
                                    tile4x4.src = putin_tile + "3-3.png";
                                } else {
                                    tile4x4.src = trump_tile + "3-3.png";
                                }
                            }
                        else if ((tile4x5.src == defaultsrc) && (.625 > Math.random() > .5)) 
                            { 
                                if (Math.random() > .5) {
                                    tile4x5.src = putin_tile + "3-4.png";
                                } else {
                                    tile4x5.src = trump_tile + "3-4.png";
                                }
                            }
                        else if ((tile4x6.src == defaultsrc) && (.75 > Math.random() > .625)) 
                            { 
                                if (Math.random() > .5) {
                                    tile4x6.src = putin_tile + "3-5.png";
                                } else {
                                    tile4x6.src = trump_tile + "3-5.png";
                                }
                            }
                        else if ((tile4x7.src == defaultsrc) && (.875 > Math.random() > .75)) 
                            { 
                                if (Math.random() > .5) {
                                    tile4x7.src = putin_tile + "3-6.png";
                                } else {
                                    tile4x7.src = trump_tile + "3-6.png";
                                }
                            }
                        else if ((tile4x8.src == defaultsrc) && (1 > Math.random() > .875)) 
                            { 
                                if (Math.random() > .5) {
                                    tile4x8.src = putin_tile + "3-7.png";
                                } else {
                                    tile4x8.src = trump_tile + "3-7.png";
                                }
                            } else { return }
        } else if ((.5 > random > .4) && (tile5x1.src == defaultsrc || tile5x2.src == defaultsrc || tile5x3.src == defaultsrc || tile5x4.src == defaultsrc || tile5x5.src == defaultsrc || tile5x6.src == defaultsrc || tile5x7.src == defaultsrc || tile5x8.src == defaultsrc)) { 
                        if ((tile5x1.src == defaultsrc) && (.125 > Math.random() > 0)) 
                            { 
                                if (Math.random() > .5) {
                                    tile5x1.src = putin_tile + "4-0.png";
                                } else {
                                    tile5x1.src = trump_tile + "4-0.png";
                                }
                            }
                        else if ((tile5x2.src == defaultsrc) && (.25 > Math.random() > .125)) 
                            { 
                                if (Math.random() > .5) {
                                    tile5x2.src = putin_tile + "4-1.png";
                                } else {
                                    tile5x2.src = trump_tile + "4-1.png";
                                }
                            }
                        else if ((tile5x3.src == defaultsrc) && (.375 > Math.random() > .25)) 
                            { 
                                if (Math.random() > .5) {
                                    tile5x3.src = putin_tile + "4-2.png";
                                } else {
                                    tile5x3.src = trump_tile + "4-2.png";
                                }
                            }
                        else if ((tile5x4.src == defaultsrc) && (.5 > Math.random() > .375)) 
                            { 
                                if (Math.random() > .5) {
                                    tile5x4.src = putin_tile + "4-3.png";
                                } else {
                                    tile5x4.src = trump_tile + "4-3.png";
                                }
                            }
                        else if ((tile5x5.src == defaultsrc) && (.625 > Math.random() > .5)) 
                            { 
                                if (Math.random() > .5) {
                                    tile5x5.src = putin_tile + "4-4.png";
                                } else {
                                    tile5x5.src = trump_tile + "4-4.png";
                                }
                            }
                        else if ((tile5x6.src == defaultsrc) && (.75 > Math.random() > .625)) 
                            { 
                                if (Math.random() > .5) {
                                    tile5x6.src = putin_tile + "4-5.png";
                                } else {
                                    tile5x6.src = trump_tile + "4-5.png";
                                }
                            }
                        else if ((tile5x7.src == defaultsrc) && (.875 > Math.random() > .75)) 
                            { 
                                if (Math.random() > .5) {
                                    tile5x7.src = putin_tile + "4-6.png";
                                } else {
                                    tile5x7.src = trump_tile + "4-6.png";
                                }
                            }
                        else if ((tile5x8.src == defaultsrc) && (1 > Math.random() > .875)) 
                            { 
                                if (Math.random() > .5) {
                                    tile5x8.src = putin_tile + "4-7.png";
                                } else {
                                    tile5x8.src = trump_tile + "4-7.png";
                                }
                            } else { return }
        } else if ((.6 > random > .5) && (tile6x1.src == defaultsrc || tile6x2.src == defaultsrc || tile6x3.src == defaultsrc || tile6x4.src == defaultsrc || tile6x5.src == defaultsrc || tile6x6.src == defaultsrc || tile6x7.src == defaultsrc || tile6x8.src == defaultsrc)) { 
                        if ((tile6x1.src == defaultsrc) && (.125 > Math.random() > 0)) 
                            { 
                                if (Math.random() > .5) {
                                    tile6x1.src = putin_tile + "5-0.png";
                                } else {
                                    tile6x1.src = trump_tile + "5-0.png";
                                }
                            }
                        else if ((tile6x2.src == defaultsrc) && (.25 > Math.random() > .125)) 
                            { 
                                if (Math.random() > .5) {
                                    tile6x2.src = putin_tile + "5-1.png";
                                } else {
                                    tile6x2.src = trump_tile + "5-1.png";
                                }
                            }
                        else if ((tile6x3.src == defaultsrc) && (.375 > Math.random() > .25)) 
                            { 
                                if (Math.random() > .5) {
                                    tile6x3.src = putin_tile + "5-2.png";
                                } else {
                                    tile6x3.src = trump_tile + "5-2.png";
                                }
                            }
                        else if ((tile6x4.src == defaultsrc) && (.5 > Math.random() > .375)) 
                            { 
                                if (Math.random() > .5) {
                                    tile6x4.src = putin_tile + "5-3.png";
                                } else {
                                    tile6x4.src = trump_tile + "5-3.png";
                                }
                            }
                        else if ((tile6x5.src == defaultsrc) && (.625 > Math.random() > .5)) 
                            { 
                                if (Math.random() > .5) {
                                    tile6x5.src = putin_tile + "5-4.png";
                                } else {
                                    tile6x5.src = trump_tile + "5-4.png";
                                }
                            }
                        else if ((tile6x6.src == defaultsrc) && (.75 > Math.random() > .625)) 
                            { 
                                if (Math.random() > .5) {
                                    tile6x6.src = putin_tile + "5-5.png";
                                } else {
                                    tile6x6.src = trump_tile + "5-5.png";
                                }
                            }
                        else if ((tile6x7.src == defaultsrc) && (.875 > Math.random() > .75)) 
                            { 
                                if (Math.random() > .5) {
                                    tile6x7.src = putin_tile + "5-6.png";
                                } else {
                                    tile6x7.src = trump_tile + "5-6.png";
                                }
                            }
                        else if ((tile6x8.src == defaultsrc) && (1 > Math.random() > .875)) 
                            { 
                                if (Math.random() > .5) {
                                    tile6x8.src = putin_tile + "5-7.png";
                                } else {
                                    tile6x8.src = trump_tile + "5-7.png";
                                }
                            } else { return }
        } else if ((.7 > random > .6) && (tile7x1.src == defaultsrc || tile7x2.src == defaultsrc || tile7x3.src == defaultsrc || tile7x4.src == defaultsrc || tile7x5.src == defaultsrc || tile7x6.src == defaultsrc || tile7x7.src == defaultsrc || tile7x8.src == defaultsrc)) { 
                        if ((tile7x1.src == defaultsrc) && (.125 > Math.random() > 0)) 
                            { 
                                if (Math.random() > .5) {
                                    tile7x1.src = putin_tile + "6-0.png";
                                } else {
                                    tile7x1.src = trump_tile + "6-0.png";
                                }
                            }
                        else if ((tile7x2.src == defaultsrc) && (.25 > Math.random() > .125)) 
                            { 
                                if (Math.random() > .5) {
                                    tile7x2.src = putin_tile + "6-1.png";
                                } else {
                                    tile7x2.src = trump_tile + "6-1.png";
                                }
                            }
                        else if ((tile7x3.src == defaultsrc) && (.375 > Math.random() > .25)) 
                            { 
                                if (Math.random() > .5) {
                                    tile7x3.src = putin_tile + "6-2.png";
                                } else {
                                    tile7x3.src = trump_tile + "6-2.png";
                                }
                            }
                        else if ((tile7x4.src == defaultsrc) && (.5 > Math.random() > .375))
                            { 
                                if (Math.random() > .5) {
                                    tile7x4.src = putin_tile + "6-3.png";
                                } else {
                                    tile7x4.src = trump_tile + "6-3.png";
                                }
                            }
                        else if ((tile7x5.src == defaultsrc) && (.625 > Math.random() > .5)) 
                            { 
                                if (Math.random() > .5) {
                                    tile7x5.src = putin_tile + "6-4.png";
                                } else {
                                    tile7x5.src = trump_tile + "6-4.png";
                                }
                            }
                        else if ((tile7x6.src == defaultsrc) && (.75 > Math.random() > .625)) 
                            { 
                                if (Math.random() > .5) {
                                    tile7x6.src = putin_tile + "6-5.png";
                                } else {
                                    tile7x6.src = trump_tile + "6-5.png";
                                }
                            }
                        else if ((tile7x7.src == defaultsrc) && (.875 > Math.random() > .75)) 
                            { 
                                if (Math.random() > .5) {
                                    tile7x7.src = putin_tile + "6-6.png";
                                } else {
                                    tile7x7.src = trump_tile + "6-6.png";
                                }
                            }
                        else if ((tile7x8.src == defaultsrc) && (1 > Math.random() > .875))
                            { 
                                if (Math.random() > .5) {
                                    tile7x8.src = putin_tile + "6-7.png";
                                } else {
                                    tile7x8.src = trump_tile + "6-7.png";
                                }
                            } else { return }
        } else if ((.8 > random > .7) && (tile8x1.src == defaultsrc || tile8x2.src == defaultsrc || tile8x3.src == defaultsrc || tile8x4.src == defaultsrc || tile8x5.src == defaultsrc || tile8x6.src == defaultsrc || tile8x7.src == defaultsrc || tile8x8.src == defaultsrc)) { 
                        console.log("eight!");
                        if ((tile8x1.src == defaultsrc) && (.125 > Math.random() > 0)) 
                            { 
                                if (Math.random() > .5) {
                                    tile8x1.src = putin_tile + "7-0.png";
                                } else {
                                    tile8x1.src = trump_tile + "7-0.png";
                                }
                            }
                        else if ((tile8x2.src == defaultsrc) && (.25 > Math.random() > .125)) 
                            { 
                                if (Math.random() > .5) {
                                    tile8x2.src = putin_tile + "7-1.png";
                                } else {
                                    tile8x2.src = trump_tile + "7-1.png";
                                }
                            }
                        else if ((tile8x3.src == defaultsrc) && (.375 > Math.random() > .25)) 
                            { 
                                if (Math.random() > .5) {
                                    tile8x3.src = putin_tile + "7-2.png";
                                } else {
                                    tile8x3.src = trump_tile + "7-2.png";
                                }
                            }
                        else if ((tile8x4.src == defaultsrc) && (.5 > Math.random() > .375)) 
                            { 
                                if (Math.random() > .5) {
                                    tile8x4.src = putin_tile + "7-3.png";
                                } else {
                                    tile8x4.src = trump_tile + "7-3.png";
                                }
                            }
                        else if ((tile8x5.src == defaultsrc) && (.625 > Math.random() > .5)) 
                            { 
                                if (Math.random() > .5) {
                                    tile8x5.src = putin_tile + "7-4.png";
                                } else {
                                    tile8x5.src = trump_tile + "7-4.png";
                                }
                            }
                        else if ((tile8x6.src == defaultsrc) && (.75 > Math.random() > .625)) 
                            { 
                                if (Math.random() > .5) {
                                    tile8x6.src = putin_tile + "7-5.png";
                                } else {
                                    tile8x6.src = trump_tile + "7-5.png";
                                }
                            }
                        else if ((tile8x7.src == defaultsrc) && (.875 > Math.random() > .75)) 
                            { 
                                if (Math.random() > .5) {
                                    tile8x7.src = putin_tile + "7-6.png";
                                } else {
                                    tile8x7.src = trump_tile + "7-6.png";
                                }
                            }
                        else if ((tile8x8.src == defaultsrc) && (1 > Math.random() > .875)) 
                            { 
                                if (Math.random() > .5) {
                                    tile8x8.src = putin_tile + "7-7.png";
                                } else {
                                    tile8x8.src = trump_tile + "7-7.png";
                                }
                            } else { return }
        } else if ((.9 > random > .8) && (tile9x1.src == defaultsrc || tile9x2.src == defaultsrc || tile9x3.src == defaultsrc || tile9x4.src == defaultsrc || tile9x5.src == defaultsrc || tile9x6.src == defaultsrc || tile9x7.src == defaultsrc || tile9x8.src == defaultsrc)) { 
                        if ((tile9x1.src == defaultsrc) && (.125 > Math.random() > 0)) 
                            { 
                                if (Math.random() > .5) {
                                    tile9x1.src = putin_tile + "8-0.png";
                                } else {
                                    tile9x1.src = trump_tile + "8-0.png";
                                }
                            }
                        else if ((tile9x2.src == defaultsrc) && (.25 > Math.random() > .125)) 
                            { 
                                if (Math.random() > .5) {
                                    tile9x2.src = putin_tile + "8-1.png";
                                } else {
                                    tile9x2.src = trump_tile + "8-1.png";
                                }
                            }
                        else if ((tile9x3.src == defaultsrc) && (.375 > Math.random() > .25)) 
                            { 
                                if (Math.random() > .5) {
                                    tile9x3.src = putin_tile + "8-2.png";
                                } else {
                                    tile9x3.src = trump_tile + "8-2.png";
                                }
                            }
                        else if ((tile9x4.src == defaultsrc) && (.5 > Math.random() > .375)) 
                            { 
                                if (Math.random() > .5) {
                                    tile9x4.src = putin_tile + "8-3.png";
                                } else {
                                    tile9x4.src = trump_tile + "8-3.png";
                                }
                            }
                        else if ((tile9x5.src == defaultsrc) && (.625 > Math.random() > .5))
                            { 
                                if (Math.random() > .5) {
                                    tile9x5.src = putin_tile + "8-4.png";
                                } else {
                                    tile9x5.src = trump_tile + "8-4.png";
                                }
                            }
                        else if ((tile9x6.src == defaultsrc) && (.75 > Math.random() > .625)) 
                            { 
                                if (Math.random() > .5) {
                                    tile9x6.src = putin_tile + "8-5.png";
                                } else {
                                    tile9x6.src = trump_tile + "8-5.png";
                                }
                            }
                        else if ((tile9x7.src == defaultsrc) && (.875 > Math.random() > .75)) 
                            { 
                                if (Math.random() > .5) {
                                    tile9x7.src = putin_tile + "8-6.png";
                                } else {
                                    tile9x7.src = trump_tile + "8-6.png";
                                }
                            }
                        else if ((tile9x8.src == defaultsrc) && (1 > Math.random() > .875)) 
                            { 
                                if (Math.random() > .5) {
                                    tile9x8.src = putin_tile + "8-7.png";
                                } else {
                                    tile9x8.src = trump_tile + "8-7.png";
                                }
                            } else { return }
        } else if ((1 > random > .9) && (tile10x1.src == defaultsrc || tile10x2.src == defaultsrc || tile10x3.src == defaultsrc || tile10x4.src == defaultsrc || tile10x5.src == defaultsrc || tile10x6.src == defaultsrc || tile10x7.src == defaultsrc || tile10x8.src == defaultsrc)) { 
                        if ((tile10x1.src == defaultsrc) && (.125 > Math.random() > 0)) 
                            { 
                                if (Math.random() > .5) {
                                    tile10x1.src = putin_tile + "9-0.png";
                                } else {
                                    tile10x1.src = trump_tile + "9-0.png";
                                }
                            }
                        else if ((tile10x2.src == defaultsrc) && (.25 > Math.random() > .125))
                            { 
                                if (Math.random() > .5) {
                                    tile10x2.src = putin_tile + "9-1.png";
                                } else {
                                    tile10x2.src = trump_tile + "9-1.png";
                                }
                            }
                        else if ((tile10x3.src == defaultsrc) && (.375 > Math.random() > .25)) 
                            { 
                                if (Math.random() > .5) {
                                    tile10x3.src = putin_tile + "9-2.png";
                                } else {
                                    tile10x3.src = trump_tile + "9-2.png";
                                }
                            }
                        else if ((tile10x4.src == defaultsrc) && (.5 > Math.random() > .375)) 
                            { 
                                if (Math.random() > .5) {
                                    tile10x4.src = putin_tile + "9-3.png";
                                } else {
                                    tile10x4.src = trump_tile + "9-3.png";
                                }
                            }
                        else if ((tile10x5.src == defaultsrc) && (.625 > Math.random() > .5)) 
                            { 
                                if (Math.random() > .5) {
                                    tile10x5.src = putin_tile + "9-4.png";
                                } else {
                                    tile10x5.src = trump_tile + "9-4.png";
                                }
                            }
                        else if ((tile10x6.src == defaultsrc) && (.75 > Math.random() > .625)) 
                            { 
                                if (Math.random() > .5) {
                                    tile10x6.src = putin_tile + "9-5.png";
                                } else {
                                    tile10x6.src = trump_tile + "9-5.png";
                                }
                            }
                        else if ((tile10x7.src == defaultsrc) && (.875 > Math.random() > .75)) 
                            { 
                                if (Math.random() > .5) {
                                    tile10x7.src = putin_tile + "9-6.png";
                                } else {
                                    tile10x7.src = trump_tile + "9-6.png";
                                }
                            }
                        else if ((tile10x8.src == defaultsrc) && (1 > Math.random() > .875)) 
                            { 
                                if (Math.random() > .5) {
                                    tile10x8.src = putin_tile + "9-7.png";
                                } else {
                                    tile10x8.src = trump_tile + "9-7.png";
                                }
                            } else { return }
        } else if ((tile1x1.src != defaultsrc) && (tile1x2.src != defaultsrc) && (tile1x3.src != defaultsrc) && (tile1x4.src != defaultsrc) && (tile1x5.src != defaultsrc) && (tile1x6.src != defaultsrc) && (tile1x7.src != defaultsrc) && (tile1x8.src != defaultsrc) && (tile2x1.src != defaultsrc) && (tile2x2.src != defaultsrc) && (tile2x3.src != defaultsrc) && (tile2x4.src != defaultsrc) && (tile2x5.src != defaultsrc) && (tile2x6.src != defaultsrc) && (tile2x7.src != defaultsrc) && (tile2x8.src != defaultsrc) && (tile3x1.src != defaultsrc) && (tile3x2.src != defaultsrc) && (tile3x3.src != defaultsrc) && (tile3x4.src != defaultsrc) && (tile3x5.src != defaultsrc) && (tile3x6.src != defaultsrc) && (tile3x7.src != defaultsrc) && (tile3x8.src != defaultsrc) && (tile4x1.src != defaultsrc) && (tile4x2.src != defaultsrc) && (tile4x3.src != defaultsrc) && (tile4x4.src != defaultsrc) && (tile4x5.src != defaultsrc) && (tile4x6.src != defaultsrc) && (tile4x7.src != defaultsrc) && (tile4x8.src != defaultsrc) && (tile5x1.src != defaultsrc) && (tile5x2.src != defaultsrc) && (tile5x3.src != defaultsrc) && (tile5x4.src != defaultsrc) && (tile5x5.src != defaultsrc) && (tile5x6.src != defaultsrc) && (tile5x7.src != defaultsrc) && (tile5x8.src != defaultsrc) && (tile6x1.src != defaultsrc) && (tile6x2.src != defaultsrc) && (tile6x3.src != defaultsrc) && (tile6x4.src != defaultsrc) && (tile6x5.src != defaultsrc) && (tile6x6.src != defaultsrc) && (tile6x7.src != defaultsrc) && (tile6x8.src != defaultsrc) && (tile7x1.src != defaultsrc) && (tile7x2.src != defaultsrc) && (tile7x3.src != defaultsrc) && (tile7x4.src != defaultsrc) && (tile7x5.src != defaultsrc) && (tile7x6.src != defaultsrc) && (tile7x7.src != defaultsrc) && (tile7x8.src != defaultsrc) && (tile8x1.src != defaultsrc) && (tile8x2.src != defaultsrc) && (tile8x3.src != defaultsrc) && (tile8x4.src != defaultsrc) && (tile8x5.src != defaultsrc) && (tile8x6.src != defaultsrc) && (tile8x7.src != defaultsrc) && (tile8x8.src != defaultsrc) && (tile9x1.src != defaultsrc) && (tile9x2.src != defaultsrc) && (tile9x3.src != defaultsrc) && (tile9x4.src != defaultsrc) && (tile9x5.src != defaultsrc) && (tile9x6.src != defaultsrc) && (tile9x7.src != defaultsrc) && (tile9x8.src != defaultsrc) && (tile10x1.src != defaultsrc) && (tile10x2.src != defaultsrc) && (tile10x3.src != defaultsrc) && (tile10x4.src != defaultsrc) && (tile10x5.src != defaultsrc) && (tile10x6.src != defaultsrc) && (tile10x7.src != defaultsrc) && (tile10x8.src != defaultsrc)) 
        {
            return;
        }
        alert("end of function");
    }

    window.setInterval(function() {
        changeTile();
    }, 300);

    alert("end of JS");