var express = require('express');
var router = express.Router();
var qrcode = require("qrcode");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('createqr', {
        title: 'QRCODE IDENT', saisie: true
    });
});
module.exports = router;

router.post("/scan", (req, res, next) => {
    let input_identite = req.body.identite;
    let input_code = req.body.code;
    let contenuQR = input_identite + "\n" + input_code;

    qrcode.toDataURL(contenuQR, (err, src) => {
        if (err) res.send("Un problème est survenu !!!");
        res.render("createqr", {
            title: "Générateur QR Code",
            saisie: false,
            qr_code: src
        });
    });
});
