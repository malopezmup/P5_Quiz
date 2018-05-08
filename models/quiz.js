/*[{id: 1, question:"Capital de Malasia",
answer:"Kuala Lumpur"
},
{id: 2, question:"Capital de Noruega",answer:"Oslo"
},
{id: 3 question:"Capital de Suecia",answer:"Estocolmo"
}];*/
 
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('quiz',
	{
		question: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "Question must not be empty"}}
		},
		answer: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "Answer must not be empty"}}
		}
	});
};

exports.create = (quiz) =>{};
exports.create = (quiz) =>{};
exports.findAll = () =>quizzes;
exports.findById = (id) =>{};
exports.destroy = (quiz) =>{};