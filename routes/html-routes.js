var express = require("express");

var app = express();

// Import the model (burger.js) to use its database functions.
var db = require("../models");
 
console.log("req");

module.exports = function(app){
var path = require("path");
var currentUser;

// Create all our routes and set up logic within those routes where required.
app.get("/users/:id", function(req, res) {
  db.User.findOne({
    where:{
      id:req.params.id
    }
  }).then(function(loggedInUser){
    currentUser = loggedInUser;
    console.log("\n\n\n\n"+currentUser.displayName);
    res.render("home", {user: currentUser});
  }).catch(function(error){
    console.log(error);
  });
  
  
});

app.get("/lessons", function(req, res){
  db.Lesson.findAll({order:[["subject", "ASC"],["topic", "ASC"]]}).then(function(lessons){
    res.render("lessons", {lessons: lessons})
  }).catch(function(error){
    console.log(error);
  });
});

app.get("/lessons/:id", function(req, res){
  db.Lesson.findOne({where:{id:req.params.id}}).then(function(lesson){
    db.Quiz.findAll({where:{
      LessonId: req.params.id},
      order:[["subject", "ASC"],["topic", "ASC"]]
    
    }).then(function(quizzes){
        res.render("lesson", {lesson: lesson, quizzes: quizzes})

    }).catch(function(error){console.log(error);});

  }).catch(function(error){
    console.log(error);
  });
});


app.get("/quizzes", function(req, res){
  db.Quiz.findAll({
    order:[["subject", "ASC"],["topic", "ASC"]]
  }).then(function(quizzes){
    res.render("quizzes", {quizzes: quizzes})
  }).catch(function(error){
    console.log(error);
  });
});

app.get("/quizzes/:id", function(req, res){

  db.Problem.findAll({
    where : {
      QuizId: req.params.id
    },
    order: [["id", "ASC"]]
  }).then(function(problems){

  db.Quiz.findOne({where:{id:req.params.id}}).then(function(quiz){
    res.render("quiz", {quiz: quiz, problems: problems})
  }).catch(function(error){
    console.log(error);
  });



  }).catch(function(error){
    console.log(error);
  });



  
});


app.get("/home", function(req, res){
  console.log("asdf"+currentUser);
    res.render("home", {user: currentUser});
});
///submitting a Quiz!!!!!

  //create a user quiz

      //inisde the promise,







}
// Export routes for server.js to use.
// module.exports = router;
