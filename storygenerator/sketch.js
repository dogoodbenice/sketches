var linepos;
//Title - story, tale
var title = ["tale","story","account","anecdote"];
//charecters
var charecters1 = ["knight",'businessman','policeman','actress','nurse','waiter','donkey','painter'];
var charecters2 = ["clown",'samurai','fireman','chef','actor','doctor','soldier','king','monkey','bard'];
//On their way to get an Object
var object = ['enchanted crown','sacred ham','flying sword','magic table','talking painting','talking puppy','magic diamond','magic tuxedo'];
//Quest provider
var quest = ['their Queen','the wise wizard','the princess'];
//daytype
var daytype = ['hot','sunny','slow','rainy','foggy','stormy','cold','wet'];
//path through the
var path = ['dark forest','spooky graveyard','smelly sewer','abandoned factory','snowy fields','spiky grass'];
//suddenly met a thing
var creature = ['panther','crab','yeti','wolf','tiger','bandit','komodo dragon'];
//the thing did
var action = ['screeching','roaring','bellowing','barking','trumpeting'];
//our charecters did
var caction = ['frozen','stunned','petrified','shocked','aghast'];
//charecter action
var haction = ['jumped', 'sprang','zipped','shook','tumbled','flipped','ran','backflipped'];
//contact
var body =['mouth','eye','stomach','ear','nostril'];
//cry
var cry =['whimper','shrink','shriek','shout','flail'];
// Outcome direction
var outcome = ['ran','darted','sprinted','bolted','scampered'];


//setup the canvas and text
function setup() {
  createCanvas(1000,450);
  textSize(20);
}

//draw niceness everywhere
function draw() {
    linepos = 35;
    background(0);
    fill(255);
    var questcall;
    var objectcall;
    var creaturecall;
    var herocall1;
    var herocall2;
    questcall = quest[int(random(0,quest.length))];
    objectcall = object[int(random(0, object.length))];
    creaturecall = creature[int(random(0, creature.length))];
    herocall1 = charecters1[int(random(0,charecters1.length))];
    herocall2 = charecters2[int(random(0,charecters2.length))];
    text('This is a short ' + title[int(random(0, title.length))]+' of a '+herocall1+' and a '+herocall2+'.',20,linepos);
    text('Our heroes were on a quest to find a '+ objectcall +' for '+questcall+'.',20,linepos*2);
    text('It had been a '+ daytype[int(random(0,daytype.length))] + ' day '+ 'and to complete their quest they decided to go through the '+ path[int(random(0, path.length))]+'.',20,linepos*3);
    text('Suddenly, out of no where a '+ creaturecall + ' appeared ' + action[int(random(0,action.length))] +' at them!',20,linepos*4);
    text('The heroes were ' + caction[int(random(0,caction.length))] + ' but saw the ' + objectcall + ' they were searching for behind the ' + creaturecall +'.' ,20,linepos*5);
    text('The '+ herocall1 +' '+ haction[int(random(0,haction.length))] +' into action and threw a rock at the '+creaturecall+'!',20,linepos*6);
    text("The rock flew straight into it's " + body[int(random(0,body.length))] + ' causing the ' +creaturecall+ ' '  + cry[int(random(0,cry.length))] +' in pain.',20,linepos*7);
    text('The '+ herocall2 +' then '+ haction[int(random(0,haction.length))] +' towards the '+creaturecall+' '+action[int(random(0,action.length))]+' out.',20,linepos*8);
    text('The '+creaturecall+' had enough, it turned and '+ outcome[int(random(0,outcome.length))]+' away.',20,linepos*9);
    text('The pair collected the ' + objectcall +' and returned triumphantly to ' + questcall+'.',20,linepos*10);
    text('The end.',20,linepos*11);
    noLoop();
}

function mousePressed(){
  redraw();
}
