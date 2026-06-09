let score = 0
let score_percent = 0
let score1 = null
let score2 = null
let score3 = null
let score4 = null
let score5 = null

function start_button(){
    document.getElementById("btn11").disabled = false;
    document.getElementById("btn12").disabled = false;
    document.getElementById("btn13").disabled = false;
    document.getElementById("btn14").disabled = false;
    document.getElementById("start_btn").disabled = true;
}

function true_answer1()
{
    alert("คำตอบถูก");
    document.getElementById("btn11").disabled = true;
    document.getElementById("btn12").disabled = true;
    document.getElementById("btn13").disabled = true;
    document.getElementById("btn14").disabled = true;

    document.getElementById("btn21").disabled = false;
    document.getElementById("btn22").disabled = false;
    document.getElementById("btn23").disabled = false;
    document.getElementById("btn24").disabled = false;

    score1 = 1
    document.getElementById("point_score1").innerHTML = score1;
}
function false_answer1()
{
    alert("คำตอบผิด");
    document.getElementById("btn11").disabled = true;
    document.getElementById("btn12").disabled = true;
    document.getElementById("btn13").disabled = true;
    document.getElementById("btn14").disabled = true;

    document.getElementById("btn21").disabled = false;
    document.getElementById("btn22").disabled = false;
    document.getElementById("btn23").disabled = false;
    document.getElementById("btn24").disabled = false;

    score1 = 0
    document.getElementById("point_score1").innerHTML = score1;
}

function true_answer2()
{
    alert("คำตอบถูก");
    document.getElementById("btn21").disabled = true;
    document.getElementById("btn22").disabled = true;
    document.getElementById("btn23").disabled = true;
    document.getElementById("btn24").disabled = true;

    document.getElementById("btn31").disabled = false;
    document.getElementById("btn32").disabled = false;
    document.getElementById("btn33").disabled = false;
    document.getElementById("btn34").disabled = false;

    score2 = 1
    document.getElementById("point_score2").innerHTML = score2;
}
function false_answer2()
{
    alert("คำตอบผิด");
    document.getElementById("btn21").disabled = true;
    document.getElementById("btn22").disabled = true;
    document.getElementById("btn23").disabled = true;
    document.getElementById("btn24").disabled = true;

    document.getElementById("btn31").disabled = false;
    document.getElementById("btn32").disabled = false;
    document.getElementById("btn33").disabled = false;
    document.getElementById("btn34").disabled = false;

    score2 = 0
    document.getElementById("point_score2").innerHTML = score2;
}

function true_answer3()
{
    alert("คำตอบถูก");
    document.getElementById("btn31").disabled = true;
    document.getElementById("btn32").disabled = true;
    document.getElementById("btn33").disabled = true;
    document.getElementById("btn34").disabled = true;

    document.getElementById("btn41").disabled = false;
    document.getElementById("btn42").disabled = false;
    document.getElementById("btn43").disabled = false;
    document.getElementById("btn44").disabled = false;

    score3 = 1
    document.getElementById("point_score3").innerHTML = score3;
}
function false_answer3()
{
    alert("คำตอบผิด");
    document.getElementById("btn31").disabled = true;
    document.getElementById("btn32").disabled = true;
    document.getElementById("btn33").disabled = true;
    document.getElementById("btn34").disabled = true;

    document.getElementById("btn41").disabled = false;
    document.getElementById("btn42").disabled = false;
    document.getElementById("btn43").disabled = false;
    document.getElementById("btn44").disabled = false;

    score3 = 0
    document.getElementById("point_score3").innerHTML = score3;
}

function true_answer4()
{
    alert("คำตอบถูก");
    document.getElementById("btn41").disabled = true;
    document.getElementById("btn42").disabled = true;
    document.getElementById("btn43").disabled = true;
    document.getElementById("btn44").disabled = true;

    document.getElementById("btn51").disabled = false;
    document.getElementById("btn52").disabled = false;
    document.getElementById("btn53").disabled = false;
    document.getElementById("btn54").disabled = false;

    score4 = 1
    document.getElementById("point_score4").innerHTML = score4;
}
function false_answer4()
{
    alert("คำตอบผิด");
    document.getElementById("btn41").disabled = true;
    document.getElementById("btn42").disabled = true;
    document.getElementById("btn43").disabled = true;
    document.getElementById("btn44").disabled = true;

    document.getElementById("btn51").disabled = false;
    document.getElementById("btn52").disabled = false;
    document.getElementById("btn53").disabled = false;
    document.getElementById("btn54").disabled = false;

    score4 = 0
    document.getElementById("point_score4").innerHTML = score4;
}

function true_answer5()
{
    alert("คำตอบถูก");
    document.getElementById("btn51").disabled = true;
    document.getElementById("btn52").disabled = true;
    document.getElementById("btn53").disabled = true;
    document.getElementById("btn54").disabled = true;

    score5 = 1
    document.getElementById("point_score5").innerHTML = score5;

    document.getElementById("finish_btn").disabled = false;
}
function false_answer5()
{
    alert("คำตอบผิด");
    document.getElementById("btn51").disabled = true;
    document.getElementById("btn52").disabled = true;
    document.getElementById("btn53").disabled = true;
    document.getElementById("btn54").disabled = true;

    score5 = 0
    document.getElementById("point_score5").innerHTML = score5;
    
    document.getElementById("finish_btn").disabled = false;
}

function finish_quiz()
{
    document.getElementById("submit_btn").disabled = false;
    document.getElementById("finish_btn").disabled = true;
}

function submit_score()
{
    score = score1+score2+score3+score4+score5
    document.getElementById("total_score").innerHTML = score
    document.getElementById("analyze_btn").disabled = false;
    document.getElementById("submit_btn").disabled = true;
}

function analyze_score()
{
    score_percent = (score/5)*100
    document.getElementById("percent_score").innerHTML = score_percent
    document.getElementById("grade_btn").disabled = false;
    document.getElementById("analyze_btn").disabled = true;
}

function grade_rating()
{
    if (score_percent>=80){
        document.getElementById("grade").innerHTML = "A"
    } else if (score_percent>=70){
        document.getElementById("grade").innerHTML = "B"
    } else if (score_percent>=60){
        document.getElementById("grade").innerHTML = "C"
    } else if (score_percent>=50){
        document.getElementById("grade").innerHTML = "D"
    } else {
        document.getElementById("grade").innerHTML = "F"
    }
    document.getElementById("grade_btn").disabled = true;
    document.getElementById("reset_btn").disabled = false;
}

function reset_answer()
{
    document.getElementById("reset_btn").disabled = true;
    document.getElementById("start_btn").disabled = false;

    document.getElementById("total_score").innerHTML = "-"
    document.getElementById("percent_score").innerHTML = "-"
    document.getElementById("grade").innerHTML = "-"
    document.getElementById("point_score1").innerHTML = "-";
    document.getElementById("point_score2").innerHTML = "-";
    document.getElementById("point_score3").innerHTML = "-";
    document.getElementById("point_score4").innerHTML = "-";
    document.getElementById("point_score5").innerHTML = "-";

    score = 0
    score_percent = 0
    score1 = null
    score2 = null
    score3 = null
    score4 = null
    score5 = null
}
