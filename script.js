//magic 8 ball

//jquery
$(document).ready(function(){

    var eightBall = {};
        eightBall.listOfAnswers = [
            "Nope.",
            "Yep.",
            "Not a chance.",
            "Absolutely.",
            "Meh. Could go either way.",
            "I'm tired. Ask someone else.",
            "NEVER!",
            "Indubitably"
        ];
    
        $("#answer").hide();
        
    eightBall.askQuestion = function (question){
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
        $("#answer").fadeIn(4000);
        //choose a random number
        var randomNumber = Math.random();
        //expand random number to length of list of answers
        var randomNumberArray = randomNumber * this.listOfAnswers.length;
        //Round random number down
         var randomNumberIndex = Math.floor(randomNumberArray);
        //assign random number to string value from array
        var randomAnswer = this.listOfAnswers[randomNumberIndex];
    
    $("#answer").text(randomAnswer);
        //logs question and answer
        console.log(question);
        console.log(randomAnswer);
    };
        
        var onClick = function() {
         $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
            setTimeout (
                function(){
                    var question = prompt("ASK A YES/NO QUESTION!");
                $("#8ball").effect( "shake" );
                eightBall.askQuestion(question);
                }, 500);
        //$("#answer").fadeIn(4000);	
    };
        
        $("#questionButton").click( onClick );
    //calls the function to display question and random answer
    //eightBall.announceEIGHTBALL(question);
        
    });