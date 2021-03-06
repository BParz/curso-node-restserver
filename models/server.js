const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        //Conexión de base de datos
        this.conectarDB();

        //Middlewarres
        this.middlewares();

        //Rutas de la app
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    };

    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y paseo de la información
        this.app.use(express.json());


        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicación corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server;