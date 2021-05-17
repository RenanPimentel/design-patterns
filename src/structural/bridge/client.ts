import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower(); // true

  // Type guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 20
  abstraction.volumeDown(); // 10
  abstraction.volumeDown(); // 0
  abstraction.volumeDown(); // 0
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
const tvRemoteControl = new RemoteControlWithVolume(tv);

clientCode(radioRemoteControl);
clientCode(tvRemoteControl);
