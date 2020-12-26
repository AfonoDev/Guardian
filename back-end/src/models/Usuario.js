const {Model, DataTypes} = require('sequelize');

class Usuario  extends Model{
    static init(sequelize){
        super.init(   
            {
            telefone: DataTypes.STRING,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            },
            {
                sequelize,
            }
        );
    }
}
module.exports = Usuario;