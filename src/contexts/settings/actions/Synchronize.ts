import Action from '../../shared/domain/Action';
import ISettingsRepository from '../domain/ISettingsRepository';
import ISynchronizeService from '../domain/ISynchronizeService';

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

    this.settingsRepository.save(newSettings);
  }
}

export default Synchronize;
