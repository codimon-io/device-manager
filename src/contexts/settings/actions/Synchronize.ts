import debug from 'debug';
import Action from '../../shared/domain/Action';
import ISettingsRepository from '../domain/ISettingsRepository';
import ISynchronizeService from '../domain/ISynchronizeService';

const logger = debug('device:contexts:settings:actions:Synchronize');

class Synchronize extends Action {
  private synchronizeService: ISynchronizeService;

  private settingsRepository: ISettingsRepository;

  constructor(synchronizeService: ISynchronizeService, settingsRepository: ISettingsRepository) {
    super();

    this.synchronizeService = synchronizeService;

    this.settingsRepository = settingsRepository;
  }

  async execute(): Promise<void> {
    const settings = await this.settingsRepository.get();

    const newSettings = await this.synchronizeService.sync(settings);

    await this.settingsRepository.save(newSettings);

    logger('New settings', newSettings.toJSON());
  }
}

export default Synchronize;
