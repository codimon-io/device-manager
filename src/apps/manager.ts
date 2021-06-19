/* eslint-disable sort-imports */
import Onoff from '../infrastructure/onoff/Onoff';
import Button from '../contexts/shared/infrastructure/onoff/Button';

const inputs: Button[] = [];

const onoff = new Onoff(inputs);

onoff.listen();
