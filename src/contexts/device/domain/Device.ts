import AggregateRoot from '../../shared/domain/entities/AggregateRoot';
import DeviceId from './DeviceId';
import DeviceName from './DeviceName';

interface IDeviceJSON {
  id: string;
  name: string;
}

class Device extends AggregateRoot {
  private id: DeviceId;

  private name: DeviceName;

  constructor(id: DeviceId, name: DeviceName) {
    super();

    this.id = id;

    this.name = name;
  }

  public static create(id: DeviceId, name: DeviceName) {
    const device = new Device(id, name);

    return device;
  }

  public getId(): DeviceId {
    return this.id;
  }

  public getName(): DeviceName {
    return this.name;
  }

  public setName(name: DeviceName): void {
    this.name = name;
  }

  public toJSON(): IDeviceJSON {
    return {
      id: this.id.value,
      name: this.name.value,
    };
  }

  public static fromJSON(data: IDeviceJSON): Device {
    return new Device(new DeviceId(data.id), new DeviceName(data.name));
  }
}

export default Device;
