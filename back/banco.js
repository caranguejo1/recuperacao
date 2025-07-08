import { Sequelize } from "sequelize";

//configuração da conexão com o banco de dados
const sequelize = new Sequelize('recuperacao', 'postgres', '123', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

export default sequelize;