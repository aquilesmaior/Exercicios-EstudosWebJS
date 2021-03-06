const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// definindo os middleware
app.use(express.static('.'))
// app.use('/teste'.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer') // tratar o upload do formulário

const storage = multer.diskStorage({
    destination: function (req, file, callback) { //destino
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // Outras formas        |           app.get          |      url no browser ficaria assim                  
    // req.params           |  ('/parOuImpar/:numero')   |    www.../parOuImpar/65413   
    // req.query            |  ('/parOuImpar/:numero')   |    www.../parOuImpar?numero=21545
    // req.body             |  ('/parOuImpar')           |      www.../parOuImpar
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})
//app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando....'))
