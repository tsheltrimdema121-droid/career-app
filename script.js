let questionIndex = 0

let scores = {
tech:0,
creative:0,
people:0,
business:0
}

const questions=[

{
question:"What would you enjoy doing on a free weekend?",
choices:[
{text:"Building a small app or fixing a device",type:"tech"},
{text:"Drawing, painting, or photography",type:"creative"},
{text:"Helping organize a community event",type:"people"},
{text:"Planning a way to earn money",type:"business"}
]
},

{
question:"Which activity sounds most exciting?",
choices:[
{text:"Learning how websites work",type:"tech"},
{text:"Creating posters or designs",type:"creative"},
{text:"Teaching someone a new skill",type:"people"},
{text:"Selling products online",type:"business"}
]
},

{
question:"What type of videos do you watch the most?",
choices:[
{text:"Technology or coding tutorials",type:"tech"},
{text:"Art or design tutorials",type:"creative"},
{text:"Motivational or educational talks",type:"people"},
{text:"Business success stories",type:"business"}
]
},

{
question:"In a group project you usually...",
choices:[
{text:"Solve technical problems",type:"tech"},
{text:"Design slides and visuals",type:"creative"},
{text:"Encourage and guide teammates",type:"people"},
{text:"Plan and manage the project",type:"business"}
]
},

{
question:"Which skill do you want to improve?",
choices:[
{text:"Programming",type:"tech"},
{text:"Graphic design",type:"creative"},
{text:"Communication",type:"people"},
{text:"Leadership",type:"business"}
]
},

{
question:"What type of challenge excites you?",
choices:[
{text:"Fixing technical issues",type:"tech"},
{text:"Creating something unique",type:"creative"},
{text:"Helping people solve problems",type:"people"},
{text:"Making a business idea work",type:"business"}
]
},

{
question:"Which environment sounds interesting?",
choices:[
{text:"Working with computers",type:"tech"},
{text:"Working in a design studio",type:"creative"},
{text:"Working with communities",type:"people"},
{text:"Running a company",type:"business"}
]
},

{
question:"Which subject would you explore more?",
choices:[
{text:"Computer Science",type:"tech"},
{text:"Art and Media",type:"creative"},
{text:"Psychology or Education",type:"people"},
{text:"Economics or Business",type:"business"}
]
},

{
question:"What motivates you the most?",
choices:[
{text:"Creating useful technology",type:"tech"},
{text:"Expressing creativity",type:"creative"},
{text:"Helping others succeed",type:"people"},
{text:"Achieving financial success",type:"business"}
]
},

{
question:"What would you love to create?",
choices:[
{text:"A mobile app",type:"tech"},
{text:"A digital artwork",type:"creative"},
{text:"A community program",type:"people"},
{text:"A startup company",type:"business"}
]
}

]

function showQuestion(){

let q=questions[questionIndex]

document.getElementById("question").innerText=q.question

let choicesDiv=document.getElementById("choices")
choicesDiv.innerHTML=""

q.choices.forEach(choice=>{

let btn=document.createElement("button")

btn.innerText=choice.text

btn.onclick=function(){

scores[choice.type]++

questionIndex++

if(questionIndex<questions.length){
showQuestion()
}else{
showResult()
}

}

choicesDiv.appendChild(btn)

})

}

function showResult(){

let total=scores.tech+scores.creative+scores.people+scores.business

let techP=Math.round(scores.tech/total*100)
let creativeP=Math.round(scores.creative/total*100)
let peopleP=Math.round(scores.people/total*100)
let businessP=Math.round(scores.business/total*100)

let career="Technology Explorer"

if(creativeP>techP && creativeP>peopleP && creativeP>businessP)
career="Creative Designer"

if(peopleP>techP && peopleP>creativeP && peopleP>businessP)
career="People Leader"

if(businessP>techP && businessP>creativeP && businessP>peopleP)
career="Business Innovator"

document.body.innerHTML=`

<h1>Your Career Personality</h1>

<h2>${career}</h2>

<p>Your Interest Scores</p>

<ul>
<li>Technology: ${techP}%</li>
<li>Creativity: ${creativeP}%</li>
<li>People Skills: ${peopleP}%</li>
<li>Business: ${businessP}%</li>
</ul>

<h3>Suggested Careers</h3>

<p>
Software Developer • Graphic Designer • Teacher • Entrepreneur
</p>

<h2>Thank you for exploring your future career!</h2>

<a href="index.html">Back to Home</a>

`

}

showQuestion()