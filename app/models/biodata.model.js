module.exports = (connect, Sequelize) => {
    const Biodata = connect.define('Users', {
        nama: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tempat_lahir: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tanggal_lahir: {
            type: Sequelize.DATEONLY,
        },
        alamat: {
            type: Sequelize.STRING,
            defaultValue: 'Indonesia',
        },
    });

    console.log('>> Successfully create users table');
    return Biodata;
};