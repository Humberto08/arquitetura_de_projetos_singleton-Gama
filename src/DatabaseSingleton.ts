export class  DatabaseSingleton {

    private static instance: DatabaseSingleton;
    // métodos  para controlar a instâcia do singleton (que indepedem de ter ou não o objeto  instanciado)

    // o construtor precisa estar indisponível
    private constructor() {
        // por enquanto ele não faz nada.
        console.log("CONSTRUCTOR - aqui eu crio a conexao com o banco...")
    }

    public static getInstance(): DatabaseSingleton {
        if (!DatabaseSingleton.instance) { //ele tá como underfined? se sim 
            DatabaseSingleton.instance = new DatabaseSingleton();
            
        }
        return DatabaseSingleton.instance;
    }

    // métodos de negócio? Aquilo que o meu database pode fazer

    public executarQuery(query: string): void {
        console.log("DB>"+query);
    }
}