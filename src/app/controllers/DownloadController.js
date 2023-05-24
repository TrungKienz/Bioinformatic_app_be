const path = require('path');
const dataDirectory = path.join(__dirname, '../../../data/');

class downloadController {
    //GET
    download(req, res) {
        const filePath = path.join(
            dataDirectory,
            'IonXpress_084_rawlib.basecaller.gz',
        );
        res.download(filePath, (err) => {
            if (err) {
                console.error('Lỗi khi tải file:', err);
                res.status(500).send('Lỗi khi tải file.');
            }
        });
    }
}

module.exports = new downloadController();
