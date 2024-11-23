export default function createConnection(serverUrl: string, roomId: string) {
  serverUrl; roomId; // nothing
  
  // A real implementation would actually connect to the server
  let connectedCallback: (() => void) | undefined;
  let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
  return {
    connect() {
      timeout = setTimeout(() => {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 100);
    },
    on(event: "connected" | unknown , callback: () => void) {
      if (connectedCallback) {
        throw Error('Cannot add the handler twice.');
      }
      if (event !== 'connected') {
        throw Error('Only "connected" event is supported.');
      }
      connectedCallback = callback;
    },
    disconnect() {
      clearTimeout(timeout);
    }
  };
};