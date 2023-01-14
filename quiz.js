//declare questions array
const questions=[
    "JavaScript supports",
    "Which language is used for styling web pages?",
    "Which is not a JavaScript Framework?",
    "Which is used to connect to database?",
    "JavaScript is a"
];

//declare 2d array for answers
const answers=[
    ["Functions","XHTML","CSS","HTML"],
    ["HTML","JQuery","CSS","XML"],
    ["Python Script","JQuery","Django","NodeJS"],
    ["PHP","HTML","JS","All"],
    ["Language","Programming Language","Development","All"]
];

//declare array for correct answers
const correctAnswers=["Functions","CSS","Django","PHP","Programming Language"]



//function to initialize quiz objects
const questionAndAnswer=function(questionArr,answersChoicesArr,correctAnswerArr){
    this.questionArr=questionArr;
    this.answersChoicesArr=answersChoicesArr;
    this.correctAnswerArr=correctAnswerArr;
}



function QuizApplication(questionAndAnswer){

    //variables to track score and page number
    let score=0;
    let pageNum=0;

    //this.questionAndAnswer=questionAndAnswer;

    

    //function to display starting page.
    //this sets score to 0 and page number to 0
    //calls initial title, qa and progress sections
    const displayStartPage=function(){
        score=0;
        pageNum=0;
        //this.displayTitleSection("JavaScript");
        displayQASection();
        //this.addEventListeners();
        displayProgessSection();
    }

    const displayNextPage=function(){
        pageNum++;
        displayQASection();
        addEventListeners();
        displayProgessSection();
    }
    // this.displayTitleSection=function(titleStr){
    
    // }

    const displayQASection=function(){
        const questionHTMLElement=document.getElementById("question");
        questionHTMLElement.innerHTML=questionAndAnswer.questionArr[pageNum];

        for(let i=0;i<questionAndAnswer.answersChoicesArr[pageNum].length;i++){
            const answerChoiceHTMLElement=document.getElementById("choice"+i);
            answerChoiceHTMLElement.innerHTML=questionAndAnswer.answersChoicesArr[pageNum][i];
        }
    }

    const displayProgessSection=function(){
        const progressHTMLElement=document.getElementById("progress");
        progressHTMLElement.innerHTML=`Question ${pageNum+1} of ${questions.length}`;
    }

    const displayResultPage=function(){
        const perc=(score/questionAndAnswer.questionArr.length)*100;
        const titleHTMLElement=document.getElementById("quiz");
        titleHTMLElement.innerHTML=`<h1>Result</h1> 
        <h3 id='score'> Your score is ${score}. And your percentage is ${perc}%</h3>`;
    }

    const next=function(){
        const qaObj=questionAndAnswer;
        if(pageNum==qaObj.questionArr.length-1){
            displayResultPage();
        }
        else{
            displayNextPage();
        }
    }

    addEventListeners=function(){
        const qaObj=questionAndAnswer;
        for(let i=0;i<qaObj.answersChoicesArr[pageNum].length;i++){
            const answerBtnHTMLElement=document.getElementById("btn"+i);
            
            answerBtnHTMLElement.onclick=function(event){
                const currentTarget=event.currentTarget;
                const selectedAns=currentTarget.children[0].innerHTML;
                console.log(pageNum);
                if(selectedAns===qaObj.correctAnswerArr[pageNum]){
                    score++;
                }
                next();
            }
        }

    }

    //initialize quiz
    this.startQuiz=function(){
        displayStartPage();
        addEventListeners();
    }

}   

const quizApp=new QuizApplication(new questionAndAnswer(questions,answers,correctAnswers));

quizApp.startQuiz();


