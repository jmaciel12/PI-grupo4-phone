module.exports = function (sequelize, dataTypes) { //un modelo es una funcion
    let alias = "Comentario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        producto_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        texto: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        },
    };

    let config = {
        tableName: "comentarios",
        timestamps: true,
        paranoid: true
    };

    let Comentario = sequelize.define(alias, cols, config); //Sequelize me presta un método llamado define para crear un modelo

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "producto_id"
        });

        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        });
    };

    return Comentario;
};