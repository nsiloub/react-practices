export default function createConnection()  {
    // A real example would actually connect to a server
    return {
        connect() {
            console.log("✅ connecting...")
        },
        disconnect() {
            console.log("❌ Disconnected.")
        }
    }
}