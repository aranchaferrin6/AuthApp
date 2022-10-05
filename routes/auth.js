const {Router} = require('express');

const router = Router();

//Registrar un nuevo usuario en el sistema
router.post('/register', (req,res) => {
    return res.json({
        ok: true,
        msg: 'Registrar un nuevo usuario'
    });
});

//LOGIN 
router.post('/', (req,res) => {
    return res.json({
        ok: true,
        msg: 'Inicio de sesión en el sistema'
    });
});

//Validación
router.get('/validation', (req,res) => {
    return res.json({
        ok: true,
        msg: 'Validación'
    });
});

module.exports = router;