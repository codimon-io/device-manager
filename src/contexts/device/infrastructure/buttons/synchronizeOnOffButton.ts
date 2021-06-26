import Button from '../../../shared/infrastructure/onoff/Button';
import config from '../../../../infrastructure/config';
import DeviceRepository from '../DeviceRepository/DeviceRepository';
import Led from '../../../shared/infrastructure/onoff/Led';
import Synchronize from '../../actions/Synchronize';
import SynchronizeService from '../SynchronizeService/SynchronizeService';

const deviceRepository = new DeviceRepository();

const synchronizeService = new SynchronizeService();

const led = new Led(config.synchronize.led);

const synchronize = new Synchronize(synchronizeService, led, deviceRepository);

const synchronizeOnOffButton = new Button(config.synchronize.button);

synchronizeOnOffButton.onPress(synchronize);

export default synchronizeOnOffButton;
