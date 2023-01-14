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

    this.questionAndAnswer=questionAndAnswer;

    //initialize quiz
    this.startQuiz=function(){
        this.displayStartPage();
    }

    //function to display starting page.
    //this sets score to 0 and page number to 0
    //calls initial title, qa and progress sections
    this.displayStartPage=function(){
        score=0;
        pageNum=0;
        //this.displayTitleSection("JavaScript");
        this.displayQASection();
        this.addEventListeners();
        this.displayProgessSection();
    }

    this.displayNextPage=function(){
        pageNum++;
        this.displayQASection();
        this.addEventListeners();
        this.displayProgessSection();
    }
    // this.displayTitleSection=function(titleStr){
    //     this.titleStr=titleStr;
    //     const titleHTMLElement=document.getElementById("quiz");
    //     titleHTMLElement.innerHTML=`<h1>${this.titleStr}</h1>`;
    // }

    this.displayQASection=function(){
        const questionHTMLElement=document.getElementById("question");
        questionHTMLElement.innerHTML=this.questionAndAnswer.questionArr[pageNum];

        for(let i=0;i<this.questionAndAnswer.answersChoicesArr[pageNum].length;i++){
            const answerChoiceHTMLElement=document.getElementById("choice"+i);
            answerChoiceHTMLElement.innerHTML=this.questionAndAnswer.answersChoicesArr[pageNum][i];
        }
    }

    this.displayProgessSection=function(){
        const progressHTMLElement=document.getElementById("progress");
        progressHTMLElement.innerHTML=`Question ${pageNum+1} of ${questions.length}`;
    }

    this.addEventListeners=function(){
        const qaObj=this.questionAndAnswer;
        for(let i=0;i<qaObj.answersChoicesArr[pageNum].length;i++){
            const answerBtnHTMLElement=document.getElementById("btn"+i);
            answerBtnHTMLElement.onclick=function(event){
                const currentTarget=event.currentTarget;
                const selectedAns=currentTarget.children[0].innerHTML;
                if(selectedAns===qaObj.correctAnswerArr[pageNum]){
                    score++;
                }

                this.displayNextPage();
            }
        }
        
    }

}   

const quizApp=new QuizApplication(new questionAndAnswer(questions,answers,correctAnswers));

quizApp.startQuiz();


