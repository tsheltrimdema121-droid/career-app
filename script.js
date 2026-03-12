let questionIndex = 0

let scores = {
tech:0,
creative:0,
people:0,
business:0
}

const questions = [

{
question:"What activity do you enjoy most?",
choices:[
{text:"Coding or building apps", type:"tech"},
{text:"Designing graphics", type:"creative"},
{text:"Helping people", type:"people"},
{text:"Starting a business", type:"business"}
]
},

{
question:"Which project sounds exciting?",
choices:[
{text:"Build a website", type:"tech"},
{text:"Create digital art", type:"creative"},
{text:"Lead a community project", type:"people"},
{text:"Launch a startup", type:"business"}
]
}

]

function showQuestion(){

let q = questions[questionIndex]

document.getElementById("question").innerText = q.question

let choicesDiv = document.getElementById("choices")
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

let career="Software Developer"

document.body.innerHTML=

`
<h1>Your Career Result</h1>

<h2>${career}</h2>

<p>Your Strengths</p>

<ul>
<li>Technology: ${techP}%</li>
<li>Creativity: ${creativeP}%</li>
<li>People Skills: ${peopleP}%</li>
<li>Business: ${businessP}%</li>
</ul>

<h3>Suggested Skills</h3>

<p>Problem Solving • Communication • Teamwork</p>

<h2>Thank you for taking the test!</h2>

<a href="index.html">Return Home</a>
`

}

showQuestion()