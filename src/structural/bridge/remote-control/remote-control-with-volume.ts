// import { DeviceImplementation } from '../device/device-implementation';
import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  // constructor(protected device: DeviceImplementation) {
  //   super(device);
  // }

  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume + 10);
    console.log(
      `${this.device.getName()}, tinha ${oldVolume} e agora tem ${this.device.getVolume()}`,
    );
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume - 10);
    console.log(
      `${this.device.getName()}, tinha ${oldVolume} e agora tem ${this.device.getVolume()}`,
    );
  }
}
