const db = require('../models');
const Biodata = db.biodata;
const Op = db.Sequelize.Op;

exports.findAll = async (req, res) => {
    try {
        const getAllBiodata = await Biodata.findAll();

        console.log('>> Successfully select all biodata');
        res.send(getAllBiodata);
    } catch (err) {
        console.log('>> Error: ' + err);
    }
};

exports.create = async (req, res) => {
    if (!req.body.nama) {
        res.status(400).send({
            message: 'Nama belum di isi',
        })
        return;
    }
    if (!req.body.tempat_lahir) {
        res.status(400).send({
            message: 'Tempat lahir belum di isi',
        })
        return;
    }
    if (!req.body.tanggal_lahir) {
        res.status(400).send({
            message: 'Tanggal lahir belum di isi',
        })
        return;
    }
    if (!req.body.alamat) {
        res.status(400).send({
            message: 'Alamat belum di isi',
        })
        return;
    }

    const inputBiodata = {
        nama: req.body.nama,
        tempat_lahir: req.body.tempat_lahir,
        tanggal_lahir: req.body.tanggal_lahir,
        alamat: req.body.alamat,
    };

    try {
        const insertBiodata = await Biodata.create(inputBiodata);

        console.log('>> Successfully add new Biodata');
        res.send(insertBiodata);
    } catch (err) {
        console.log('>> Error: ' + err);
    }
};

exports.update = async (req, res) => {
    if (!req.body.nama) {
        res.status(400).send({
            message: 'Nama belum di isi',
        })
        return;
    }
    if (!req.body.tempat_lahir) {
        res.status(400).send({
            message: 'Tempat lahir belum di isi',
        })
        return;
    }
    if (!req.body.tanggal_lahir) {
        res.status(400).send({
            message: 'Tanggal lahir belum di isi',
        })
        return;
    }
    if (!req.body.alamat) {
        res.status(400).send({
            message: 'Alamat belum di isi',
        })
        return;
    }

    try {
        const getBiodata = await Biodata.findOne({
            where: {
                id: req.params.id,
            }
        });

        getBiodata.nama = req.body.nama;
        getBiodata.tempat_lahir = req.body.tempat_lahir;
        getBiodata.tanggal_lahir = req.body.tanggal_lahir;
        getBiodata.alamat = req.body.alamat;
        getBiodata.save();

        console.log('>> Successfully update Biodata with id: ' + req.params.id);
        res.send({
            message: 'Successfully update Biodata with id: ' + req.params.id,
        });
    } catch (err) {
        console.log('>> Error: ' + err);
    }
};

exports.patch = async (req, res) => {
    try {
        const getBiodata = await Biodata.findOne({
            where: {
                id: req.params.id,
            }
        });

        if (req.body.nama) {
            getBiodata.nama = req.body.nama;
        }
        if (req.body.tempat_lahir) {
            getBiodata.tempat_lahir = req.body.tempat_lahir;
        }
        if (req.body.tanggal_lahir) {
            getBiodata.tanggal_lahir = req.body.tanggal_lahir;
        }
        if (req.body.alamat) {
            getBiodata.alamat = req.body.alamat;
        }

        getBiodata.save();
        console.log('>> Successfully updated Biodata with patch methods');
        res.send({
            message: 'Successfully updated Biodata with patch methods',
        });
    } catch (err) {
        console.log('>> Error: ' + err);
    }
};

exports.findOne = async (req, res) => {
    try {
        const getBiodata = await Biodata.findOne({
            where: {
                id: req.params.id
            }
        });

        console.log('>> Successfully found Biodata with id = ' + req.params.id);
        res.send(getBiodata);
    } catch (err) {
        console.log('>> Error: ' + err);
    }
};

exports.delete = async (req, res) => {
    try {
        await Biodata.destroy({
            where: {
                id: req.params.id,
            }
        });

        res.send({
            message: 'Sucessfully deleted Biodata with id = ' + req.params.id,
        });
    } catch (err) {
        console.log('>> Error: ' + err);
    }
};
