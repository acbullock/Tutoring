var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var session = require('express-session');

var db = require("./models");

var PORT = process.env.PORT || 3000;
var app = express();

var sess = {
  secret: 'math',
  cookie: {}
}
 
if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
 
app.use(session(sess));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override various requests..
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

require("./routes/api-routes.js")(app);
// // var x = require("./routes/api-routes.js");
// // console.log(x);
require("./routes/html-routes.js")(app);


db.sequelize.sync({force:true}).then(function(){

	db.User.create({
		email:"user1@email.com",
		password:"password123",
		displayName:"John Smith 1"
	}).then().catch();
	db.User.create({
		email:"user2@email.com",
		password:"password123",
		displayName:"John Smith 2"
	}).then().catch();
	db.User.create({
		email:"user3@email.com",
		password:"password123",
		displayName:"John Smith 3"
	}).then().catch();
	db.Lesson.create({
			subject:"Calculus",
			topic:"Integrals",
			content:"blahblahblah"
		}
		).then(function(l){
			db.Quiz.create(
				{
					subject: "Calculus",
					topic:"Integrals Quiz 1",
					LessonId: l.id
					// lessons:[l]
				},
				{
					include: [db.Lesson]
				}
			).then(function(q){
				db.Problem.create({
					question:"/assets/img/exponent1.png",
					choices:"A. 625\nB. 125\nC. 20\nD.25",
					correctAnswer:"A",
					QuizId: q.id
				},{include: [db.Quiz]});
				db.Problem.create({
					question:"/assets/img/exponent2.png",
					choices:"A. 9\nB. 27\nC. 6\nD.18",
					correctAnswer:"B",
					QuizId: q.id
				},{include: [db.Quiz]});
			}).catch();
			db.Quiz.create(
				{
					subject: "Calculus",
					topic:"Integrals Quiz 2",
					LessonId: l.id
					// lessons:[l]
				},
				{
					include: [db.Lesson]
				}
			).then(function(q){

				db.Problem.create({
					question:"1. Calculus Integrals",
					choices:"A. blah\nB. blah\nC. blah\nD.blah",
					correctAnswer:"B",
					QuizId: q.id
				},{include: [db.Quiz]});

				db.Problem.create({
					question:"2. Calculus Integrals",
					choices:"A. blah\nB. blah\nC. blah\nD.blah",
					correctAnswer:"C",
					QuizId: q.id
				},{include: [db.Quiz]});
				db.Problem.create({
					question:"3. Calculus Integrals",
					choices:"A. blah\nB. blah\nC. blah\nD.blah",
					correctAnswer:"B",
					QuizId: q.id
				},{include: [db.Quiz]});

				db.Problem.create({
					question:"4. Calculus Integrals",
					choices:"A. blah\nB. blah\nC. blah\nD.blah",
					correctAnswer:"C",
					QuizId: q.id
				},{include: [db.Quiz]});
				db.Problem.create({
					question:"5. Calculus Integrals",
					choices:"A. blah\nB. blah\nC. blah\nD.blah",
					correctAnswer:"B",
					QuizId: q.id
				},{include: [db.Quiz]});

				db.Problem.create({
					question:"6. Calculus Integrals",
					choices:"A. blah\nB. blah\nC. blah\nD.blah",
					correctAnswer:"C",
					QuizId: q.id
				},{include: [db.Quiz]});
				db.Problem.create({
					question:"7. Calculus Integrals",
					choices:"A. blah\nB. blah\nC. blah\nD.blah",
					correctAnswer:"B",
					QuizId: q.id
				},{include: [db.Quiz]});

				db.Problem.create({
					question:"8. Calculus Integrals",
					choices:"A. blah\nB. blah\nC. blah\nD.blah",
					correctAnswer:"C",
					QuizId: q.id
				},{include: [db.Quiz]});
				db.Problem.create({
					question:"9. Calculus Integrals",
					choices:"A. blah\nB. blah\nC. blah\nD.blah",
					correctAnswer:"B",
					QuizId: q.id
				},{include: [db.Quiz]});

				db.Problem.create({
					question:"10. Calculus Integrals",
					choices:"A. blah\nB. blah\nC. blah\nD.blah",
					correctAnswer:"C",
					QuizId: q.id
				},{include: [db.Quiz]});
			});

			
			

			


			
	});
	db.Lesson.create({
			subject:"Algebra 1",
			topic:"Parabolas",
			content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		}
		).then(function(l){
			db.Quiz.create(
				{
					subject: "Algebra 1 - Parabolas",
					topic:"Parabolas Quiz 1",
					LessonId: l.id
					// lessons:[l]
				},
				{
					include: [db.Lesson]
				}
			);
			db.Quiz.create(
				{
					subject: "Algebra 1 - Parabolas",
					topic:"Parabolas Quiz 2",
					LessonId: l.id
					// lessons:[l]
				},
				{
					include: [db.Lesson]
				}
			);


			
	});


	

	// Do your seeding here.....
	
	// db.Quiz.create({
	// 	subject:"Calculus",
	// 	topic:"Integrals",
	// 	content:"blahblahblah",
	// 	QuizId: [{}]
	// });

	app.listen(PORT, function(){
		console.log("Listening on port %s", PORT);
	});
});