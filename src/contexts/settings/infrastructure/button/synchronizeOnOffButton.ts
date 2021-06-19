import Button from '../../../shared/infrastructure/onoff/Button';
import config from '../../../../infrastructure/config';
import Synchronize from '../../actions/Synchronize';
import SettingsRepository from '../settingsRepository/SettingsRepository';
import SynchronizeService from '../synchronizeService/SynchronizeService';

const settingsRepository = new SettingsRepository();

const synchronizeService = new SynchronizeService();

const synchronize = new Synchronize(synchronizeService, settingsRepository);

const synchronizeOnOffButton = new Button(config.button.synchronize);

synchronizeOnOffButton.onPress(synchronize);

export default synchronizeOnOffButton;
