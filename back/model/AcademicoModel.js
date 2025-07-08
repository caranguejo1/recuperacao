import { DataTypes } from "sequelize";
import banco from "../banco.js";

//mapeamento da model Academico
export default banco.define(
    'academico',
    {
        // Model attributes are defined here
        idacademico: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nomeacademico: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: '0',
        },
        nota1: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: '0',
        },
        nota2: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: '0',
        },
        nota3: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: '0',
        },
        media : {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: '0',
        },
        situacao: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: '0',
        },
        iddisciplina: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
);