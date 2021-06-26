import Button from '../../../shared/infrastructure/johnnyFive/Button';
import config from '../../../../infrastructure/config';
import DeviceRepository from '../DeviceRepository/DeviceRepository';
import Synchronize from '../../actions/Synchronize';
import SynchronizeService from '../SynchronizeService/SynchronizeService';

const deviceRepository = new DeviceRepository();

const synchronizeService = new SynchronizeService();

const synchronize = new Synchronize(synchronizeService, deviceRepository);

const synchronizeJohnnyFiveButton = new Button(config.button.synchronize);

synchronizeJohnnyFiveButton.onPress(synchronize);

export default synchronizeJohnnyFiveButton;
