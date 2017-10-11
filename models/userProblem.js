module.exports = function(sequelize, DataTypes){
	var UserProblem = sequelize.define("UserProblem", {
		// subject: DataTypes.STRING,
		// topic: DataTypes.STRING,
		// lesson: DataTypes.INTEGER//,
		correct: DataTypes.BOOLEAN
	});

	UserProblem.associate = function(models){

		UserProblem.belongsTo(models.UserQuiz, {
			foreignKey:{
				allowNull:false
			}
		});
		
	};
	return UserProblem;
}