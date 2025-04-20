import { Sequelize } from "sequelize";

const db = new Sequelize('catatandb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;