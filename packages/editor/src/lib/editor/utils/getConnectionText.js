import { WebSocketStatus } from '@hocuspocus/provider';
export const getConnectionText = (collabState) => {
    switch (collabState) {
        case WebSocketStatus.Connected:
            return `Connected`;
        case WebSocketStatus.Connecting:
            return `Connecting...`;
        case WebSocketStatus.Disconnected:
            return `Disconnected`;
        default:
            return `Connecting...`;
    }
};
