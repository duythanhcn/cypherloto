import io from "socket.io-client";

class Socket {
    SOCKET = null;
    constructor() {
        this.SOCKET = io("http://95.216.25.89:3001");
    }

    emitLogin(account) {
        return this.SOCKET.emit('login', { account });
    }

    onPoolprize(callBack) {
        this.SOCKET.on("get-poolprize", msg => {
            const { balance } = JSON.parse(msg);
            callBack(balance);
        });
    }

    offPoolprize() {
        this.SOCKET.off("get-poolprize");
    }

    onBalance(callBack) {
        return this.SOCKET.on("get-balance", msg => {
            const { balance } = JSON.parse(msg);
            callBack(balance);
        });
    }

    offBalance() {
        this.SOCKET.on("get-balance");
    }
}

export default new Socket()