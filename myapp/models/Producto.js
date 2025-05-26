module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        imagen: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        descripcion: {
            type: dataTypes.TEXT,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
        deleted_at: {
            type: dataTypes.DATE,
        },
    };

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true,
        paranoid: true
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        });

        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "producto_id"
        });
    };

    return Producto;
};