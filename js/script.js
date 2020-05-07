//Variable declaration
let posit = 0, content, header, question, choice, choices, valueA, valueB, valueC, grand_score, score_status, rightChoice = 0;
let rightScore = 0;
let myQuestionsArray = [
  ["Who is the Baba Isale of Start.ng?", "Seyi Onifade", "Eniola Agboola", "Tomisin Lalude", "A"],
  ["Who is the owner of Hotels.ng?", "Mark Essien", "Mark John", "Mark Allen", "A"],
  ["Who is the current President of the United States of America?", "President Donald Trump", "President Robert Mugabe", "Andrea Jackson", "A"],
  ["Who is the current President of Nigeria?", "President Muhammadu Buhari", "President Olusegun Obasanjo", "President Goodluck Ebele Jonathan", "A"],
  ["Who is the current President of Rwanda?", "President Paul Kagame", "President John Bruce", "President Mark Hayley", "A"],
];
function displayQuestions(){
  content = document.getElementById("content");
  grand_score = document.getElementById("grand_score");
  if(posit >= myQuestionsArray.length){
    content.innerHTML = "<h4>You got "+rightChoice+" of "+myQuestionsArray.length+" questions right</h4><br />";
    grand_score.innerHTML = "<h4>Your grand score: "+rightScore+" marks</h4>";
    document.getElementById("header").innerHTML = "Well done!";
    posit = 0;
    rightChoice = 0;
    rightScore = 0;
    return false;
  }
  document.getElementById("header").innerHTML = "Question "+(posit + 1)+"";
  question = myQuestionsArray[posit][0];
  valueA = myQuestionsArray[posit][1];
  valueB = myQuestionsArray[posit][2];
  valueC = myQuestionsArray[posit][3];
  content.innerHTML = "<h2>"+question+"</h2>";
  content.innerHTML += "<input onclick='confirmAnswer()' type='radio' name='selected' value='A' id='valueA'> <label for='valueA'>" + valueA + "</label><br>";
  content.innerHTML += "<input onclick='confirmAnswer()' type='radio' name='options' value='B' id='valueB'> <label for='valueB'>" + valueB + "</label><br>";
  content.innerHTML += "<input onclick='confirmAnswer()' type='radio' name='options' value='C' id='valueC'> <label for='valueC'>" + valueC + "</label><br><br>";
  content.innerHTML += "<button onclick='nextResult()' disabled='disabled' id='choiceSubmit'>Next</button>";
}
function confirmAnswer() {
    choiceClicked = true;
    $("#choiceSubmit").removeAttr("disabled");
    $("#content label").css("background-color", "transparent");
    if ($("#content input:checked").val() == myQuestionsArray[posit][4]) {
        $("#content input:checked+label").css("background-color", "green");
        $("#content input:checked+label").css("color", "#fff");
        rightChoice++;
        rightScore+=3;
    }
    else {
        $("#content input:checked+label").css("background-color", "red");
        $("#content input:checked+label").css("color", "#fff");
        $("#content input:radio[id=valueA]+label").css("background-color", "green");
        $("#content input:radio[id=valueA]+label").css("color", "#fff");     
    }
}
function nextResult(){
    setTimeout(function () {
        posit++;
        displayQuestions();
    }, 700);    
}
$("document").ready(function () {
    displayQuestions();
});