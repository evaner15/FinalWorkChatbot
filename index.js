//links
//Source: https://codepen.io/anon/pen/OrGbJP
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions



var messages = [], //array that holds the record of each string in chat
    lastUserMessage = "", //keeps track of the most recent user input string
    botMessage = "", //var keeps track of what the chatbot is going to say
    botName = 'Chattelli', //name of the chatbot
    talking = true, //when false the speach function doesn't work
    ownerName = 'Ellen en Evelyn', //name of the owners

    date = new Date(); //date function, gives var date

var image = document.createElement("IMG");

//****************************************************************


//In this function you descide what the bot will reply

function chatbotResponse() {
    talking = true;

    //***** Basic:
    const defmes = ['Wat zeg je?', 'Wat bedoel je?', 'Sorry, ik was even naar de wc', 'Hoezo?', 'What ya saying?', "Thank you, come again!", "Dag en bedankt he!", "Komt ewa meer en ewa langer!"];
    botMessage = defmes[Math.floor(Math.random() * (defmes.length))]; //the default message

    if (lastUserMessage === 'hi' || lastUserMessage == 'hello') {
        const hi = ['hi', 'hellowkes', 'hello', 'Goeiendag!']
        botMessage = hi[Math.floor(Math.random() * (hi.length))];;
    }

    if (lastUserMessage === 'naam') {
        image.setAttribute("src", "./img/PlanningD1.png");
        document.getElementById("chatborder").appendChild(image);
        botMessage = 'Mijn naam is ' + botName;
    }

    if (lastUserMessage === 'wie heeft jou gemaakt?') {
        botMessage = 'Mijn makers zijn ' + ownerName;
    }
    if (lastUserMessage === 'datum') {
        botMessage = 'Het is nu ' + date;
    }
    if (lastUserMessage === 'Whos the best?') {
        botMessage = 'E & E, Natuurlijk! ';
    }

    //***** Presentatie: 
    //** Probleem stelling
    if (lastUserMessage === 'Wat is onze probleemstelling?') {
        botMessage = 'Veel mensen weten niet wat AI is terwijl we er steeds meer mee in contact komen';
    }
    //** Onderzoeksvraag
    if (lastUserMessage === 'Wat is onze onderzoeksvraag?') {
        botMessage = 'Hoe kunnen we de mensen informeren over hun toekomst met AI?';
    }
    //** Planning
    if (lastUserMessage === 'Hoe ziet onze planning er uit?') {
        botMessage = 'We stelden deze op met behulp van Tania Ezzeddine, onze mentor. We deelden ons project in, in 4 work packages.';
    }
    
     if (lastUserMessage === 'wp1') {
         botMessage = 'Work package 1';
        image.setAttribute("src", "./img/PlanningD1.png");
        image.setAttribute("width", "475");
        document.getElementById("chatborder").appendChild(image);
    }
      if (lastUserMessage === 'wp2') {
          botMessage = 'Work package 2';
        image.setAttribute("src", "./img/PlanningD2.png");
        image.setAttribute("width", "475");
        document.getElementById("chatborder").appendChild(image);
    }
      if (lastUserMessage === 'wp3') {
          botMessage = 'Work package 3';
        image.setAttribute("src", "./img/PlanningD3.png");
        image.setAttribute("width", "475");
        document.getElementById("chatborder").appendChild(image);
    }
      if (lastUserMessage === 'wp4') {
          botMessage = 'En tot slot Work package 4';
        image.setAttribute("src", "./img/PlanningD4.png");
        image.setAttribute("width", "475");
        document.getElementById("chatborder").appendChild(image);
    }
    
    //** Schema
    if (lastUserMessage === 'Zitten we op schema?') {
        botMessage = 'Ja hoor! Goed nieuws zelfs meisjes, jullie zitten voor op schema!';        
    }
    //** Link Theorie praktijk
    if (lastUserMessage === 'Wat is onze link tussen de paper en de praktijk?') {
        botMessage = 'Daar maak ik als chatbot deel van uit! De' + botName + '2.0 zal mensen kunnen helpen met het beter begrijpen van al die moeilijke termen in het o zo grote begrip dat artificiele intelligentie is, maar daar stopt het niet, of wel meisjes?';
    }
    //** Tweede semester
    if (lastUserMessage === 'Wat gaan we doen tijdens het tweede semester?') {
        botMessage = 'Het werkregime zal veranderen en Ellen zal 5uur per week werken in plaats van 20. Evelyn behoud de 10uur. Jullie zullen meer inzetten op het prototype en dit volledig uitwerken. Wat zijn jullie nog van plan?';
    }
    //** Aflsuiter
    if (lastUserMessage === 'Heb jij nog iets te zeggen?') {
        botMessage = 'Ik ben uit gebot voor nu. Maar als u nog vragen heeft mag u ze gerust stellen!';
    }

}

//****************************************************************

//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
    //if the message from the user isn't empty then run 
    if (document.getElementById("chatbox").value != "") {
        //pulls the value from the chatbox ands sets it to lastUserMessage
        lastUserMessage = document.getElementById("chatbox").value;
        //sets the chat box to be clear
        document.getElementById("chatbox").value = "";
        //adds the value of the chatbox to the array messages
        messages.push(lastUserMessage);
        //Speech(lastUserMessage);  //says what the user typed outloud
        //sets the variable botMessage in response to lastUserMessage
        chatbotResponse();
        //add the chatbot's name and message to the array messages
        messages.push("<b>" + botName + ":</b> " + botMessage);
        // says the message using the text to speech function written below
        Speech(botMessage);
        //outputs the last few array elements of messages to html
        for (var i = 1; i < 8; i++) {
            if (messages[messages.length - i])
                document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
        }
    }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
    if ('speechSynthesis' in window && talking) {
        var utterance = new SpeechSynthesisUtterance(say);
        var voices = window.speechSynthesis.getVoices();
        utterance.voice = voices[1]; // Note: some don't support altering
        utterance.lang = 'nl-NL';
        speechSynthesis.speak(utterance);
    }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
    var x = e || window.event;
    var key = (x.keyCode || x.which);
    if (key == 13 || key == 3) {
        //runs this function when enter is pressed
        newEntry();
    }
    if (key == 38) {
        console.log('hi')
            //document.getElementById("chatbox").value = lastUserMessage;
    }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
    document.getElementById("chatbox").placeholder = "";
}