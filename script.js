let questionIndex = 0

let scores = {
tech:0,
creative:0,
people:0,
business:0
}

const questions = [

{
question:"What activity do you enjoy the most?",
choices:[
{text:"Coding or building apps",type:"tech"},
{text:"Designing graphics or art",type:"creative"},
{text:"Helping or teaching people",type:"people"},
{text:"Running a business idea",type:"business"}
]
},

{
question:"Which school project excites you?",
choices:[
{text:"Building a website",type:"tech"},
{text:"Making a poster or design",type:"creative"},
{text:"Organizing a group activity",type:"people"},
{text:"Selling a product",type:"business"}
]
},

{
question:"What skill do you want to learn?",
choices:[
{text:"Programming",type:"tech"},
{text:"Photography or design",type:"creative"},
{text:"Communication",type:"people"},
{text:"Marketing",type:"business"}
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

let career="Software Developer"

document.body.innerHTML=`

<h1>Your Career Result</h1>

<h2>${career}</h2>

<p>Your personality score:</p>

<ul>
<li>Technology: ${techP}%</li>
<li>Creativity: ${creativeP}%</li>
<li>People Skills: ${peopleP}%</li>
<li>Business: ${businessP}%</li>
</ul>

<h3>Suggested Skills</h3>

<p>Problem solving • Communication • Teamwork • Digital skills</p>

<h3>Possible Bhutan Opportunities</h3>

<p>Bhutan Telecom • Druk Holding & Investments • Tashi Group</p>

<h2>Thank you for taking the career test!</h2>

<a href="index.html">Return to Home</a>

`

}

showQuestion()