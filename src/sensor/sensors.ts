const Gyronorm: any = require('gyronorm');
import Orientation from '@/sensor/orientation';
import Motion from '@/sensor/motion';

export default class Sensors {
  private gn: any;
  private isSetupVar: boolean = false;
  private hasErrorVar: boolean = false;
  private callbackFunc: (orientation: Orientation, motion: Motion) => void;

  constructor() {
    this.gn = new Gyronorm.GyroNorm();
    this.callbackFunc = (o: any, m: any) => { return; };
  }

  public init(): void {
    const args = {};
    this.gn.init(args).then(
      () => {
        this.isSetupVar = true;
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

  get isSetup(): boolean {
    return this.isSetupVar;
  }

  get hasError(): boolean {
    return this.hasErrorVar;
  }

  set callback(cb: (orientation: Orientation, motion: Motion) => void) {
    this.callbackFunc = cb;
  }
}
