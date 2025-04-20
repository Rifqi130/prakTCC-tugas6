import { Sequelize } from "sequelize";

const db = new Sequelize('catatandb', 'root', '', {
    host: '34.72.198.253',
    dialect: 'mysql'
});

export default db;