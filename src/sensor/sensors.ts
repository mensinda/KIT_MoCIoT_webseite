const Gyronorm: any = require('gyronorm');
import Orientation from '@/sensor/orientation';
import Motion from '@/sensor/motion';

export default class Sensors {
  private gn: any;
  private isSetupVar: boolean = false;
  private hasErrorVar: boolean = false;
  private supportedOps: any = null;
  private callbackFunc: (orientation: Orientation, motion: Motion) => void;

  constructor() {
    this.gn = new Gyronorm.GyroNorm();
    this.callbackFunc = (o: any, m: any) => { return; };
  }

  public start(): void {
    if (this.isSetupVar) {
      this.gn.stop();
    }

    const args = {frequency: 2};
    this.gn.init(args).then(
      () => {
        this.isSetupVar = true;
        this.supportedOps = this.gn.isAvailable();
        this.gn.start(
          (data: any) => {
            this.callbackFunc(new Orientation(data.do), new Motion(data.dm));
          },
        );
      },
    ).catch(
      (e: any) => {
        this.hasErrorVar = true;
      },
    );
  }

  public stop(): void {
    if (this.isSetupVar) {
      this.gn.end();
      this.isSetupVar = false;
    }
  }

  get isSetup(): boolean {
    return this.isSetupVar;
  }

  get hasError(): boolean {
    return this.hasErrorVar;
  }

  set callback(cb: (orientation: Orientation, motion: Motion) => void) {
    this.callbackFunc = cb;
  }

  get hasAccel(): boolean {
    return (this.supportedOps != null) && this.supportedOps.accelerationAvailable ? true : false;
  }

  get hasAccelWithGravity(): boolean {
    return (this.supportedOps != null) && this.supportedOps.accelerationIncludingGravityAvailable ? true : false;
  }

  get hasRotationRate(): boolean {
    return (this.supportedOps != null) && this.supportedOps.rotationRateAvailable ? true : false;
  }

  get hasOrientation(): boolean {
    return (this.supportedOps != null) && this.supportedOps.deviceOrientationAvailable ? true : false;
  }
}
