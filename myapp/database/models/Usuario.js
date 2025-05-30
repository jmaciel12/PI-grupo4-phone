module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        email: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        contraseña: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        fecha_nacimiento: {
            type: dataTypes.DATE,
            allowNull: false,
        },
       
        foto_perfil: {
            type: dataTypes.STRING(500),
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
        tableName: "usuarios",
        timestamps: true,
        paranoid: true
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuario_id"
        });

        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuario_id"
        });
    };

    return Usuario;
};