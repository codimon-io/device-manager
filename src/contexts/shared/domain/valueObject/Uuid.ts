import InvalidArgumentError from './InvalidArgumentError';
import { v4 } from 'uuid';
import validate from 'uuid-validate';

class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  static create(value: string): Uuid {
    // eslint-disable-next-line no-underscore-dangle
    this._validate(value);

    return new Uuid(value);
  }

  static generate(): Uuid {
    return new Uuid(v4());
  }

  // eslint-disable-next-line no-underscore-dangle
  private static _validate(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }

  toString(): string {
    return this.value;
  }
}

export default Uuid;
