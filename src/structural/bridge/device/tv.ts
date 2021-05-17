import { DeviceImplementation } from './device-implementation';

export class Tv implements DeviceImplementation {
  private volume = 10;
  private power = false;
  private name = 'TV';

  getName(): string {
    return this.name;
  }

  getPower(): boolean {
    return this.power;
  }

  getVolume(): number {
    return this.volume;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  setVolume(volume: number): void {
    if (volume > 100 || volume < 0) return;
    this.volume = volume;
  }
}
