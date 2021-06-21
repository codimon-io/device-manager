import DeviceRepository from './DeviceRepository';

describe('DeviceRepository', () => {
  let deviceRepository: DeviceRepository;

  beforeAll(() => {
    deviceRepository = new DeviceRepository();
  });

  it('should read the device information', async () => {
    const device = await deviceRepository.get();

    expect(device.toJSON()).toMatchObject({
      id: 'daeb2ef9-2cd0-4d7a-9927-4c252bcadb9b',
      name: 'yellow',
    });
  });
});
