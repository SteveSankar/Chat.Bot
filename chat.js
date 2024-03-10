//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chatbot' //name of the chatbot

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var key = (e.keyCode || e.which);
  if (key == 13) {
    newEntry();
  }
}


function newEntry() {
    var inputvalue = document.getElementById("chatbox"); 
  if (inputvalue.value != "") {
    lastUserMessage = inputvalue.value;
    inputvalue.value = "";
    messages.push('You: '+lastUserMessage);
    chatbotResponse()
     messages.push("<b>" + botName + ":</b> " + botMessage)
    //messages.push(botName + ": " + botMessage)

    //outputs the last few messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
    // for(var i=1;i<messages.length;i++){
    //   debugger
    //   var msg =  messages[messages.length-i]
    //   if(msg){
    //     var ultag = document.getElementById("ultag")
    //      var newli = document.createElement("li")
    //      newli.setAttribute('class','chatli')
    //      newli.setAttribute('id','chatlog'+i)
    //      document.getElementById("chatlog"+i).innerHTML= msg;
    //      ultag.append(newli)
    //   }
    // }

    // for(const message of messages){
    //   debugger
    //   var ultag = document.getElementById("ultag")
    //   var newli = document.createElement("li")
    //   newli.textContent = message
    //   newli.setAttribute('class','chatli')
    //   ultag.append(newli)
    // }
    
    // messages=[]
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
Speech(botMessage);

  }
}

function chatbotResponse() {
  botMessage = "shut up Shankar"; //the default message

  if (lastUserMessage === 'hi') {
    botMessage = 'Hi, shankar ';
  }
  if(lastUserMessage === "fvck you"){
    botMessage = 'fuck you too'
  }
  if (lastUserMessage === 'what is your name') {
    botMessage = 'My name is chatbot' ;
  }
  if (lastUserMessage === 'what do you wanna get to eat') {
    botMessage = 'Well, i dont know you tell me, what do i eat?';
  } 
  if (lastUserMessage === 'do you believe in god?') {
    botMessage = 'no, i dont believe in god, i believe the term god has a different meaning ';
  }
  if (lastUserMessage === 'what time is it') {
    botMessage = 'ITS LUNCH TIME BITCH';
  }  
}

// learn here..
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window) {
    var utterance = new SpeechSynthesisUtterance(say);
    utterance.volume = 1; // 0 to 1
    utterance.rate = 1; // 0.1 to 10
    utterance.pitch = 0; //0 to 2
    utterance.text = say;
    utterance.lang = 'en-IND';
    utterance.voice = speechSynthesis.getVoices().forEach(function(voice) {
        console.log(voice.name, voice.default ? voice.default :'');
    });
    utterance.voice = speechSynthesis.getVoices()
    .find(voice => voice.name === 'Microsoft Zira - English (United States)');
    speechSynthesis.speak(utterance);
    
  }
}

document.getElementById("textareaBtn").addEventListener('click',function(){
  var textareaIdvalue = document.getElementById("textareainput").value
  var paragraph = document.getElementById("data").querySelector(".para");
  paragraph.textContent = textareaIdvalue
  textareaIdvalue.value = '';
  Speech(paragraph.textContent);
})


document.getElementById("speaker").addEventListener('click',function (){
  var paragraph = document.getElementById("data").querySelector(".para");
  var text = Paragraph.textContent;
  Speech(text);
 })


