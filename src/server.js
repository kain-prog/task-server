const { app } = require('./app');
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 8080;


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    app.use(cors());
    next();
});

app.use('/', require('./routes/apiRoute'));


app.listen(PORT, () => {
    console.log(`Servidor rodando...`)
});