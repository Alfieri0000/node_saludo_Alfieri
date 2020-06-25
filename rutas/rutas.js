var express = require('express');
const { Router } = require('express');
var router = express.Router();

router.get('/',c_inicio);
router.get('/about',c_about);

function c_inicio(req, res){
    res.render('inicio', {
                titulo: "Pagina de Inicio",
                nombre: "Alfieri",
                apellido: "Podestá"
            }
    );
}

function c_about(req, res){
    res.send('Acerca de  ...... v1.0');
}

module.exports = router;