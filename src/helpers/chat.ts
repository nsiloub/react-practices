export type RoomId =  "general" | "travel" | "music";

export function createConnection(serverUrl: string, roomId: RoomId) {
    // A real world implementation would actually connect to a server;
    
    (() => serverUrl+roomId)() // just to make typeScript happy

    let connectedCallBack: (() => void) | null;
    let timeoutId: number;

    return {
        connect() {
           timeoutId = setTimeout(() => {
            if(connectedCallBack) {
                connectedCallBack()
            }
           }, 100);
        },
        on(event: "connected" | null, callback: () => void) {
            if(connectedCallBack) {
                throw Error('Cannot add the handler twice.');
            }
            if(event !== "connected") {
                throw Error('Only "connected" event is supported.');
            }
            connectedCallBack = callback
        },
        disconnect() {
            clearTimeout(timeoutId);
        }
    }
}