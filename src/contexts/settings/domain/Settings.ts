import AggregateRoot from '../../shared/domain/entities/AggregateRoot';
import DeviceId from './DeviceId';
import DeviceName from './DeviceName';

interface ISettingsJSON {
  id: string;
  name: string;
}

class Settings extends AggregateRoot {
  private id: DeviceId;

  private name: DeviceName;

  constructor(id: DeviceId, name: DeviceName) {
    super();

    this.id = id;

    this.name = name;
  }

  public static create(id: DeviceId, name: DeviceName) {
    const settings = new Settings(id, name);

    return settings;
  }

  toJSON(): ISettingsJSON {
    return {
      id: this.id.value,
      name: this.name.value,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  static fromJSON(data: ISettingsJSON): Settings {
    return new Settings(new DeviceId(data.id), new DeviceName(data.name));
  }
}

export default Settings;
