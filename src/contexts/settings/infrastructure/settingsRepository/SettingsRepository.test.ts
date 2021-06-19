import SettingsRepository from './SettingsRepository';

describe('SettingsRepository', () => {
  let settingsRepository: SettingsRepository;

  beforeAll(() => {
    settingsRepository = new SettingsRepository();
  });

  it('should read the settings', async () => {
    const settings = await settingsRepository.get();

    expect(settings.toJSON()).toMatchObject({
      id: 'daeb2ef9-2cd0-4d7a-9927-4c252bcadb9b',
      name: 'yellow',
    });
  });
});
