module.exports = function(sequelize, DataTypes){
	var UserQuiz = sequelize.define("UserQuiz", {
		// subject: DataTypes.STRING,
		// topic: DataTypes.STRING,
		// lesson: DataTypes.INTEGER//,
		//problems?
	});

	UserQuiz.associate = function(models){

		UserQuiz.belongsTo(models.User, {
			foreignKey:{
				allowNull:false
			}
		});
		UserQuiz.belongsTo(models.Quiz, {
			foreignKey:{
				allowNull:false
			}
		});
	};
	return UserQuiz;
}