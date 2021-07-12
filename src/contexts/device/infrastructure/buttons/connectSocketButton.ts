import Button from '../../../shared/infrastructure/onoff/Button';
import config from '../../../../infrastructure/config';
import Led from '../../../shared/infrastructure/onoff/Led';
import ConnectSocket from '../../actions/ConnectSocket';
import DisconnectSocket from '../../actions/DisconnectSocket';
import state from '../../state/state';
import { socketClient } from '../../../../infrastructure/SocketClient/SocketClient';

const led = new Led(config.socket.led);

const connectSocket = new ConnectSocket(state, led, socketClient);

const disconnectSocket = new DisconnectSocket(state, led, socketClient);

function dispatch() {
  if (state.isOnline) {
    disconnectSocket.execute();
  } else {
    connectSocket.execute();
  }
}

const connectSocketButton = new Button(config.socket.button);

connectSocketButton.onPress(dispatch);

export default connectSocketButton;
