"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseSingleton_1 = require("./DatabaseSingleton");
let db;
db = DatabaseSingleton_1.DatabaseSingleton.getInstance(); // aqui seria o lugar do famoso "NEW"
db.executarQuery("SELECT * FROM tblCliente");
let db2;
db2 = DatabaseSingleton_1.DatabaseSingleton.getInstance();
db.executarQuery("SELECT * FROM tblProduto");
