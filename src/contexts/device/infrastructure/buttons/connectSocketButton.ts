import Button from '../../../shared/infrastructure/onoff/Button';
import config from '../../../../infrastructure/config';
import Led from '../../../shared/infrastructure/onoff/Led';
import ConnectSocket from '../../actions/ConnectSocket';
import { socketClient } from '../../../../infrastructure/socketClient/SocketClient';

const led = new Led(config.socket.led);

const connectSocket = new ConnectSocket(led, socketClient);

const connectSocketButton = new Button(config.socket.button);

connectSocketButton.onPress(connectSocket);

export default connectSocketButton;
