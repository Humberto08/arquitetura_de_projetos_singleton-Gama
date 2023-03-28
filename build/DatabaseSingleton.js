"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSingleton = void 0;
class DatabaseSingleton {
    // métodos  para controlar a instâcia do singleton (que indepedem de ter ou não o objeto  instanciado)
    // o construtor precisa estar indisponível
    constructor() {
        // por enquanto ele não faz nada.
        console.log("CONSTRUCTOR - aqui eu crio a conexao com o banco...");
    }
    static getInstance() {
        if (!DatabaseSingleton.instance) { //ele tá como underfined? se sim 
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }
    // métodos de negócio? Aquilo que o meu database pode fazer
    executarQuery(query) {
        console.log("DB>" + query);
    }
}
exports.DatabaseSingleton = DatabaseSingleton;
