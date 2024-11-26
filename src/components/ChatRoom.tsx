import { useEffect } from "react"
import { Connection, createConnection, RoomId } from "../helpers/chat"



export type Options = {
    serverUrl: string,
    roomId: RoomId
}
export default function ChatRoom({ options }: { options: Options }) {
    
    const {serverUrl, roomId} = options; // destructure/declare the properites as variables instead of using objects/functions. See README.md for more

    useEffect(() => {
        const connection: Connection = createConnection(serverUrl, roomId);
        connection.connect()

        return () => {
            connection.disconnect();
        }
    }, [roomId, serverUrl]); // variables are better, they don't show as changed if they didn't change their value

    return <h1>Welcome to the {options.roomId} room!</h1>
}