import { DatabaseSingleton } from "./DatabaseSingleton";

let db: DatabaseSingleton;

db = DatabaseSingleton.getInstance(); // aqui seria o lugar do famoso "NEW"
db.executarQuery("SELECT * FROM tblCliente");


let db2: DatabaseSingleton;

db2 = DatabaseSingleton.getInstance();
db.executarQuery("SELECT * FROM tblProduto");