let resume = [{
    "id" : "navin", 
    "msg"   : "Goood morning!!",
    "task" : "zen portal task",
    "mail": "navinchandruv@gmail.com"
},
{
    "id" : "chandru", 
    "msg"   : "Good Evening!",
    "task" : "zen portal task",
    "mail": "navinchandruv@gmail.com"
}];


//for loop

for (let key in resume) {
  if (resume.hasOwnProperty(key)) {
    console.log(resume[key].id);   
  }
}

console.log("For loop results");

//for Each
 resume.forEach(function(obj) { 
    console.log(obj.msg); 
}
);

console.log("For Each results");

//for In
 for (let key in resume) {
  if (resume.hasOwnProperty(key)) {
   console.log(resume[key[0]].id);
   console.log(resume[key[0]].msg); 
 }
 }

 console.log("For In results");

// for Of
  let text = "";
   for (let x of resume[0].id) {
   text += x; 
}
  console.log(text);

console.log("For Of results");




