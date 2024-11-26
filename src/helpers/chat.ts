export type RoomId = "general" | "travel" | "music";

export type Connection = {
    connect: () => void,
    disconnect: () => void
}

export function createConnection(serverUrl: string, roomId: RoomId): Connection {
    // A real implementation would actually connect to a server
    
    if(typeof serverUrl !== "string") {
        throw Error(`Expected serverUrl to be a string. Received: ' ${serverUrl}`);
    }

    if(typeof roomId !== "string") {
        throw Error(`Expected roomId to be a string. Received: ' ${roomId}`)
    }

    return {
        connect() {
            console.log(`✅ Connecting to '${roomId}' room at  ${serverUrl} ...`);
        },
        disconnect() {
            console.log(`❌ Disconnected from '${roomId}' room at  ${serverUrl} ...`);
        }
    };
};