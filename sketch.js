//Pink == letter is in word but not in correct spot
//Blue == letter is in word and in correct spot
//black == letter is not in word

let x = 0;
let count = 0;
let x2 = 0;
let count2 = 0;
let n = 0;
let list = [];
let xlist = [];
let indexlist = [];
let emptyWord = "";
let word = "";
let words, h;
let success;
let tempCount = 1;
let tempString = "";
let lineNumber = 1.2;
let mode = "";
var myFont;
let counter = 0;
let tempMode = 0;
let buttonList = [];
let correctlist = [];
let qlist = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
function preload() {
  words = loadStrings("words.txt");
  //myFont = loadFont('Helvetica-Bold.tff')
} // end preload
function setup() {
  success = false;
  createCanvas(500, 500);
  background("beige");
  h = round(random(words.length));
  //a_button_class = new ButtonClass();
  //a_button_class.buttonName.position(425, 480);
  //a_button_class.buttonName.style("background-color", "beige");
  // a_button_class.buttonName.style("color", "beige");
  //a_button_class.buttonName.style("border: 0px solid");
  for (i = 0; i < 26; i++) {
    buttonList[i] = 0;
    indexlist[i] = 0;
    correctlist[i] = 0;
  }
  squares();
  squares2();
  squares3();
  squares4();
  squares5();
  squares6();
  word = words[h];
  word2 = words[h];
  //console.log("word2= " + word2);
  //text(word2, 10, 475);
  OutputButtons();
  OutputButtons2();
  OutputButtons3();
} //setup
function keyPressed() {
  if (keyIsPressed == true) {
    if (xlist.indexOf(key.toUpperCase()) != -1) {
      text1 = key.toUpperCase();
      buttonCommand();
    }
    if (keyCode == ENTER) {
      enterFunc();
    }
    if (keyCode == BACKSPACE) {
      delFunc();
    }
  } //end KeyIsPressed
} //end KeyPressed
function charRepeats(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      //lastindexof checks the last instance of whatever is within the brackets
      return true;
    }
  }
  return false;
}

class redoClass {
  constructor(buttonName) {
    this.buttonName = createButton(buttonName);
    this.buttonName.mousePressed(redoFunc);
    function redoFunc() {
      setup();
      redo.buttonName.hide();
    }
  }
}
class ButtonClass {
  //all classes have a constructor
  //this is used to create objects of that class
  constructor(buttonName, text1, num) {
    if (text1 == "ENTER") {
      this.buttonName = createButton(text1);
      this.buttonName.mousePressed(enterFunc);
    } else if (text1 == "DEL") {
      this.buttonName = createButton(text1);
      this.buttonName.mousePressed(delFunc);
    } else {
      //all our letter buttons
      this.buttonName = createButton(text1);
      this.buttonName.mousePressed(buttonCommand);
    }
    function buttonCommand() {
      if (count < 5) {
        fill("beige");
        noStroke();
        rect(250, 475, 500, 50);
        stroke("black");
        tempString += text1;
        count++;
        //console.log(count);
        //console.log("tempString = " + tempString);
        textAlign(CENTER);
        textSize(30);
        stroke("black");
        fill("black");
        //rect(142 + 50 * (count - 1), 125 + 50 * (lineNumber - 0.2), 40, 40);
        fill("black");
        text(text1 + " ", 145 + 50 * (count - 1), 125 + 50 * lineNumber);
      }
      // fill('black')
      //  rect(142+50*x,125+50*(count+1),40,40)
      //  fill('white')
      //   text(text1 + " ", 145 + 50 * x, 125 + 50 * (count+1.2));
    } //buttonCommand
    function enterFunc() {
      if (count == 5) {
        let wrd = tempString.toLowerCase();
        if (words.indexOf(tempString.toLowerCase()) == -1) {
          fill("black");
          textSize(20);
          console.log("index is " + words.indexOf(tempString.toLowerCase()));
          text("Word is not in database. Please try again!", 250, 475);
          textSize(30);
          tempString = "";
          count = 0;
          fill("white");
          if (lineNumber == 1.2) {
            squares();
            lineNumber = 1.2;
          } //end first row
          if (lineNumber == 2.2) {
            squares2();
            lineNumber = 2.2;
          } //end second row
          if (lineNumber == 3.2) {
            squares3();
            lineNumber = 3.2;
          } //end third row
          if (lineNumber == 4.2) {
            squares4();
            lineNumber = 4.2;
          } //end fourth row
          if (lineNumber == 5.2) {
            squares5();
            lineNumber = 5.2;
          } //end fifth row
          if (lineNumber == 6.2) {
            squares6();
            lineNumber = 6.2;
          } //end sixth row
        }

        //if the word exists
        else {
          fill("beige");
          noStroke();
          rect(250, 475, 500, 50);
          stroke("black");
          if (tempString.toLowerCase() == word2) {
            //rectMode(CORNER)
            fill("beige");
            rect(250, 250, 500, 500);
            rect(250, 250, 500, 500);
            success = true;
            enter.buttonName.hide();
            del.buttonName.hide();
            fill("white");
            for (i = 0; i < 26; i++) {
              list[i].buttonName.hide();
            }
            fill("black");
            stroke("white");
            text("Correct!", 250, 225);
            text("The word was: " + word2, 250, 280);
            textSize(15);
            var guesses = lineNumber - 0.2;
            text("It took you " + guesses + " guesses!", 250, 350);
            lineNumber = 0.2;
            function correct() {
              redo.hide();
              setup();
            }
            let redo = createButton("RESTART");
            redo.position(211, 150);
            //WAIT(2000).then(function(){
            redo.show();
            redo.mousePressed(correct);
            // })
          } //end if correct word
          else {
            for (i = 0; i < 5; i++) {
              let c = wrd.charAt(i);
              indexlist[unchar(c.toUpperCase())-65] = (indexlist[unchar(c.toUpperCase())-65])+1
              correctlist[unchar(word2.charAt(i).toUpperCase()) - 65] = (correctlist[unchar(word2.charAt(i).toUpperCase()) - 65]) + 1
              console.log(indexlist)
              let g = qlist.indexOf(c.toUpperCase());
              //console.log(charRepeats(wrd));
                //console.log("counter = " + counter);
                  if (word2.indexOf(c) != -1) {
                    let a = wrd.charAt(i);
                    let f = word2.charAt(i);
                    //console.log(alphabetic)
                    console.log("index of letter: "+indexlist[unchar(c.toUpperCase()) - 65])
                    if (a == word2.charAt(i)) {
                      if (indexlist[unchar(c.toUpperCase()) - 65] > 0 && correctlist[unchar(c.toUpperCase()) - 65] > 0){
                      correctlist[unchar(c.toUpperCase()) - 65] = (correctlist[unchar(c.toUpperCase()) - 65] -1)
                      fill(88, 88, 255); // fill blue
                      buttonList.splice(unchar(c.toUpperCase()) - 65, 1, 3);
                      if (buttonList[unchar(c.toUpperCase()) - 65] == 3) {
                        list[g].buttonName.style(
                          "background-color",
                          "rgb(88,88,255)"
                        );
                        list[g].buttonName.style("color:white");
                        list[g].buttonName.style("border: 1px solid black");
                      }
                     } else {
                         fill("black");
                         indexlist[unchar(c.toUpperCase()) - 65] = (indexlist[unchar(c.toUpperCase()) - 65] -1)
                         //list[g].buttonName.style(
                           //"background-color",
                           //"rgb(78,78,78)"
                         //);
                         //list[g].buttonName.style("color:white");
                         //list[g].buttonName.style("border: 1px solid black");
                         buttonList.splice(unchar(c.toUpperCase()) - 65, 1, 1);
                     }
                    } //end blue if
                    else {
                      if (indexlist[unchar(c.toUpperCase()) - 65] > 0 && correctlist[unchar(c.toUpperCase()) - 65] > 0){
                        correctlist[unchar(c.toUpperCase()) - 65] = (correctlist[unchar(c.toUpperCase()) - 65]) -1
                        fill(255, 116, 140); //fill pink
                        if (buttonList[unchar(c.toUpperCase()) - 65] != 3) {
                          buttonList.splice(unchar(c.toUpperCase()) - 65, 1, 2);
                        }
                        if (buttonList[unchar(c.toUpperCase()) - 65] == 2) {
                          list[g].buttonName.style(
                            "background-color",
                            "rgb(255,116,140)"
                          );
                          list[g].buttonName.style("color:white");
                          list[g].buttonName.style("border: 1px solid black");
                        } 
                        
                      } else {
                         fill("black");
                         indexlist[unchar(c.toUpperCase()) - 65] = (indexlist[unchar(c.toUpperCase()) - 65] -1)
                         //list[g].buttonName.style(
                           //"background-color",
                           //"rgb(78,78,78)"
                         //);
                         //list[g].buttonName.style("color:white");
                         //list[g].buttonName.style("border: 1px solid black");
                         buttonList.splice(unchar(c.toUpperCase()) - 65, 1, 1);
                      }

                    } //end pink else
                  } //end if
                  else {
                    fill("black");
                    list[g].buttonName.style(
                      "background-color",
                      "rgb(78,78,78)"
                    );
                    correctlist[unchar(c.toUpperCase()) - 65] = (correctlist[unchar(c.toUpperCase()) - 65] -1)
                    list[g].buttonName.style("color:white");
                    list[g].buttonName.style("border: 1px solid black");
                    buttonList.splice(unchar(c.toUpperCase()) - 65, 1, 1);
                  }
                  rect(142 + 50 * i, 125 + 50 * (lineNumber - 0.2), 40, 40);
                  fill("white");
                  text(
                    tempString[i] + " ",
                    145 + 50 * i,
                    125 + 50 * lineNumber
                  );
            } //end for i
          } //end correct word else
          //console.log("Line number = " + lineNumber);
          lineNumber++;
          if (lineNumber == 7.2 && success == false) {
            fill("black");
            text("Game over! The word was " + word2 + "!", 250, 100);
            enter.buttonName.hide();
            del.buttonName.hide();
            for (i = 0; i < 26; i++) {
              list[i].buttonName.hide();
              //console.log("button removed");
            }
          }
          tempString = "";
          count = 0;
        }
      }
    } //end Enter Function
    function delFunc() {
      tempString = tempString.slice(0, -1);
      fill("white");
      if (count > 0) {
        rect(142 + 50 * (count - 1), 125 + 50 * (lineNumber - 0.2), 40, 40);
        count = count - 1;
      }
    } //end del function
  } //constructor
} //class Lbtn

function buttonCommand() {
  if (count < 5) {
    fill("beige");
    noStroke();
    rect(250, 475, 500, 50);
    stroke("black");
    tempString += text1;
    count++;
    //console.log(count);
    //console.log("tempString = " + tempString);
    textAlign(CENTER);
    textSize(30);
    stroke("black");
    fill("black");
    //rect(142 + 50 * (count - 1), 125 + 50 * (lineNumber - 0.2), 40, 40);
    fill("black");
    text(text1 + " ", 145 + 50 * (count - 1), 125 + 50 * lineNumber);
  }
  // fill('black')
  //  rect(142+50*x,125+50*(count+1),40,40)
  //  fill('white')
  //   text(text1 + " ", 145 + 50 * x, 125 + 50 * (count+1.2));
} //buttonCommand
function enterFunc() {
  if (count == 5) {
    let wrd = tempString.toLowerCase();
    if (words.indexOf(tempString.toLowerCase()) == -1) {
      fill("black");
      textSize(20);
      //console.log("index is " + words.indexOf(tempString.toLowerCase()));
      text("Word is not in database. Please try again!", 250, 475);
      textSize(30);
      tempString = "";
      count = 0;
      fill("white");
      if (lineNumber == 1.2) {
        squares();
        lineNumber = 1.2;
      } //end first row
      if (lineNumber == 2.2) {
        squares2();
        lineNumber = 2.2;
      } //end second row
      if (lineNumber == 3.2) {
        squares3();
        lineNumber = 3.2;
      } //end third row
      if (lineNumber == 4.2) {
        squares4();
        lineNumber = 4.2;
      } //end fourth row
      if (lineNumber == 5.2) {
        squares5();
        lineNumber = 5.2;
      } //end fifth row
      if (lineNumber == 6.2) {
        squares6();
        lineNumber = 6.2;
      } //end sixth row
    }

    //if the word exists
    else {
      fill("beige");
      noStroke();
      rect(250, 475, 500, 50);
      stroke("black");
      if (tempString.toLowerCase() == word2) {
        //rectMode(CORNER)
        fill("beige");
        rect(250, 250, 500, 500);
        rect(250, 250, 500, 500);
        success = true;
        enter.buttonName.hide();
        del.buttonName.hide();
        fill("white");
        for (i = 0; i < 26; i++) {
          list[i].buttonName.hide();
        }
        fill("black");
        stroke("white");
        text("Correct!", 250, 225);
        text("The word was: " + word2, 250, 280);
        textSize(15);
        var guesses = lineNumber - 0.2;
        text("It took you " + guesses + " guesses!", 250, 350);
        lineNumber = 0.2;
        function correct() {
          redo.hide();
          setup();
        }
        let redo = createButton("RESTART");
        redo.position(211, 150);
        //WAIT(2000).then(function(){
        redo.show();
        redo.mousePressed(correct);
        // })
      } //end if correct word
      else {
        for (i = 0; i < 5; i++) {
          let c = wrd.charAt(i);
          //indexlist = xlist;
          let g = qlist.indexOf(c.toUpperCase());
          console.log(charRepeats(wrd));
          if (charRepeats(wrd) == true) {
            if (charRepeats(word2) == true) {
              let alphabetic = wrd.split("").sort().join("");
              let alphabeticCor = word2.split("").sort().join("");
              console.log("Correct word = " + alphabeticCor);
              if (alphabeticCor[i] == alphabeticCor[i + 1]) {
                tempMode = 1;
              }
              if (alphabetic[i] == alphabetic[i + 1]) {
                mode = alphabetic[i];
              }
              console.log("tempmode = " + tempMode);
            }
            console.log("counter = " + counter);
            if (counter == 1) {
              fill("black");
              list[g].buttonName.style("background-color", "rgb(78,78,78)");
              list[g].buttonName.style("color:white");
              list[g].buttonName.style("border: 1px solid black");
              rect(142 + 50 * i, 125 + 50 * (lineNumber - 0.2), 40, 40);
              fill("white");
              text(tempString[i] + " ", 145 + 50 * i, 125 + 50 * lineNumber);
              console.log(counter);
              counter--;
              console.log(counter);
            } else if (counter < 1) {
              if (word2.indexOf(c) != -1) {
                let a = wrd.charAt(i);
                let f = word2.charAt(i);
                console.log(charRepeats(wrd));
                //console.log(alphabetic)
                if (a == word2.charAt(i)) {
                  fill(88, 88, 255); // fill blue
                  buttonList.splice(unchar(a.toUpperCase()) - 65, 1, 3);
                  console.log(list.indexOf(c.toUpperCase()));
                  if (buttonList[unchar(a.toUpperCase()) - 65] == 3) {
                    list[g].buttonName.style(
                      "background-color",
                      "rgb(88,88,255)"
                    );
                    list[g].buttonName.style("color:white");
                    list[g].buttonName.style("border: 1px solid black");
                  }
                  if (a == mode) {
                    counter++;
                  }
                } //end blue if
                else {
                  fill(255, 116, 140); //fill pink
                  if (buttonList[unchar(a.toUpperCase()) - 65] != 3) {
                    buttonList.splice(unchar(a.toUpperCase()) - 65, 1, 2);
                  }
                  if (buttonList[unchar(a.toUpperCase()) - 65] == 2) {
                    list[g].buttonName.style(
                      "background-color",
                      "rgb(255,116,140)"
                    );
                    list[g].buttonName.style("color:white");
                    list[g].buttonName.style("border: 1px solid black");
                  }
                  if (a == mode) {
                    counter++;
                  }
                } //end pink else
              } //end if
              else {
                fill("black");
                list[g].buttonName.style("background-color", "rgb(78,78,78)");
                list[g].buttonName.style("color:white");
                list[g].buttonName.style("border: 1px solid black");
                buttonList.splice(
                  unchar(wrd.charAt(i).toUpperCase()) - 65,
                  1,
                  1
                );
              }
              rect(142 + 50 * i, 125 + 50 * (lineNumber - 0.2), 40, 40);
              fill("white");
              text(tempString[i] + " ", 145 + 50 * i, 125 + 50 * lineNumber);
            }
          } else {
            //console.log(indexlist);
            if (word2.indexOf(c) != -1) {
              let a = wrd.charAt(i);
              let f = word2.charAt(i);
              let alphabetic = wrd.split("").sort().join("");
              console.log(charRepeats(wrd));
              console.log(alphabetic);
              if (a == word2.charAt(i)) {
                fill(88, 88, 255); // fill blue
                buttonList.splice(unchar(a.toUpperCase()) - 65, 1, 3);
                console.log(list.indexOf(c.toUpperCase()));
                if (buttonList[unchar(a.toUpperCase()) - 65] == 3) {
                  list[g].buttonName.style(
                    "background-color",
                    "rgb(88,88,255)"
                  );
                  list[g].buttonName.style("color:white");
                  list[g].buttonName.style("border: 1px solid black");
                }
                if (a == mode) {
                  counter++;
                }
              } //end blue if
              else {
                fill(255, 116, 140); //fill pink
                if (buttonList[unchar(a.toUpperCase()) - 65] != 3) {
                  buttonList.splice(unchar(a.toUpperCase()) - 65, 1, 2);
                }
                if (buttonList[unchar(a.toUpperCase()) - 65] == 2) {
                  list[g].buttonName.style(
                    "background-color",
                    "rgb(255,116,140)"
                  );
                  list[g].buttonName.style("color:white");
                  list[g].buttonName.style("border: 1px solid black");
                }
                if (a == mode) {
                  counter++;
                }
              } //end pink else
            } //end if
            else {
              fill("black");
              list[g].buttonName.style("background-color", "rgb(78,78,78)");
              list[g].buttonName.style("color:white");
              list[g].buttonName.style("border: 1px solid black");
              buttonList.splice(unchar(wrd.charAt(i).toUpperCase()) - 65, 1, 1);
            }
            rect(142 + 50 * i, 125 + 50 * (lineNumber - 0.2), 40, 40);
            fill("white");
            text(tempString[i] + " ", 145 + 50 * i, 125 + 50 * lineNumber);
          }
        } //end for i
      } //end correct word else
      console.log("Line number = " + lineNumber);
      lineNumber++;
      if (lineNumber == 7.2 && success == false) {
        fill("black");
        text("Game over! The word was " + word2 + "!", 250, 100);
        enter.buttonName.hide();
        del.buttonName.hide();
        for (i = 0; i < 26; i++) {
          list[i].buttonName.hide();
          //console.log("button removed");
        }
      }
      tempString = "";
      count = 0;
    }
  }
} //end Enter Function
function delFunc() {
  tempString = tempString.slice(0, -1);
  fill("white");
  if (count > 0) {
    rect(142 + 50 * (count - 1), 125 + 50 * (lineNumber - 0.2), 40, 40);
    count = count - 1;
  }
} //end del function
function squares(n) {
  rectMode(CENTER);
  y = 1;
  fill("white");
  stroke("black");
  rect(142, 125 + 50 * y, 40, 40);
  rect(142 + 50, 125 + 50 * y, 40, 40);
  rect(142 + 100, 125 + 50 * y, 40, 40);
  rect(142 + 150, 125 + 50 * y, 40, 40);
  rect(142 + 200, 125 + 50 * y, 40, 40);
} // end squares

function squares2(n) {
  rectMode(CENTER);
  y = 2;
  rect(142, 125 + 50 * y, 40, 40);
  rect(142 + 50, 125 + 50 * y, 40, 40);
  rect(142 + 100, 125 + 50 * y, 40, 40);
  rect(142 + 150, 125 + 50 * y, 40, 40);
  rect(142 + 200, 125 + 50 * y, 40, 40);
} // end squares

function squares3(n) {
  rectMode(CENTER);
  y = 3;
  rect(142, 125 + 50 * y, 40, 40);
  rect(142 + 50, 125 + 50 * y, 40, 40);
  rect(142 + 100, 125 + 50 * y, 40, 40);
  rect(142 + 150, 125 + 50 * y, 40, 40);
  rect(142 + 200, 125 + 50 * y, 40, 40);
} // end squares

function squares4(n) {
  rectMode(CENTER);
  y = 4;
  rect(142, 125 + 50 * y, 40, 40);
  rect(142 + 50, 125 + 50 * y, 40, 40);
  rect(142 + 100, 125 + 50 * y, 40, 40);
  rect(142 + 150, 125 + 50 * y, 40, 40);
  rect(142 + 200, 125 + 50 * y, 40, 40);
} // end squares

function squares5(n) {
  rectMode(CENTER);
  y = 5;
  rect(142, 125 + 50 * y, 40, 40);
  rect(142 + 50, 125 + 50 * y, 40, 40);
  rect(142 + 100, 125 + 50 * y, 40, 40);
  rect(142 + 150, 125 + 50 * y, 40, 40);
  rect(142 + 200, 125 + 50 * y, 40, 40);
} // end squares

function squares6(n) {
  rectMode(CENTER);
  y = 6;
  rect(142, 125 + 50 * y, 40, 40);
  rect(142 + 50, 125 + 50 * y, 40, 40);
  rect(142 + 100, 125 + 50 * y, 40, 40);
  rect(142 + 150, 125 + 50 * y, 40, 40);
  rect(142 + 200, 125 + 50 * y, 40, 40);
} // end squares

function OutputButtons() {
  let count = 0;
  var num = 65;
  for (i = 0; i < 10; i++) {
    list[i] = new ButtonClass(qlist[i], qlist[i], 1);
    list[i].buttonName.position(85 + 30 * i, 45);
    list[i].buttonName.size(31);
    list[i].buttonName.style("border: 1px solid black");
    num++;
    //list[i].buttonName.style("font-family","Stencil Std")
  } //for i
  //create enter and del
  enter = new ButtonClass("button", "ENTER");
  enter.buttonName.position(365, 105);
  enter.buttonName.style("background-color", "rgb(96,228,96)");
  enter.buttonName.style("border: 1px solid black");
  //enter.buttonName.style('color',"white")
  del = new ButtonClass("button", "DEL");
  //del.buttonName.style("font-size","20px")
  //del.buttonName.style('vertical-align:middle')
  del.buttonName.position(80, 105);
  del.buttonName.style("background-color", "rgb(231,49,49)");
  del.buttonName.style("border: 1px solid black");
  //del.buttonName.style('color','white')
  //redo = new redoClass("RESTART");
  ///redo.buttonName.position(211, 150);
  //redo.buttonName.hide();
  var letter = 65;
  for (i = 0; i < 26; i++) {
    xlist.push(char(letter));
    letter++;
  }
} //outputbuttons
function OutputButtons2() {
  let count = 0;
  var num = 75;
  for (i = 1; i < 10; i++) {
    list[i + 9] = new ButtonClass(char(num), qlist[i + 9], 1);
    list[i + 9].buttonName.position(75 + 30 * i, 75);
    list[i + 9].buttonName.size(31);
    list[i + 9].buttonName.style("border: 1px solid black");
    //list[i + 13].buttonName.style("font-family","Stencil Std")
    num++;
  } //for i
} //outputbuttons
function OutputButtons3() {
  let count = 0;
  var num = 83;
  for (i = 3; i < 10; i++) {
    list[i + 16] = new ButtonClass(char(num), qlist[i + 16], 1);
    list[i + 16].buttonName.position(45 + 30 * i, 105);
    list[i + 16].buttonName.size(31);
    list[i + 16].buttonName.style("border: 1px solid black");
    //list[i + 13].buttonName.style("font-family","Stencil Std")
    num++;
  } //for i
} //outputbuttons
