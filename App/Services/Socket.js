import io from "socket.io-client";

class Socket {
    SOCKET = null;
    constructor() {
        this.SOCKET = io("http://95.216.25.89:3001");
    }

    emitLogin(account) {
        return this.SOCKET.emit('login', { account });
    }

    onPoolprize() {
        this.SOCKET.on("get-poolprize", msg => {
            const { balance } = msg;
            return balance;
        });
    }

    offPoolprize() {
        this.SOCKET.off("get-poolprize");
    }

    onBalance() {
        this.SOCKET.on("get-balance", msg => {
            const { balance } = msg;
            return balance;
        });
    }

    offBalance() {
        this.SOCKET.on("get-balance");
    }
}

export default new Socket()