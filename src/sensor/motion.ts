export default class Motion {
  public x: number;
  public y: number;
  public z: number;

  public gx: number;
  public gy: number;
  public gz: number;

  public alpha: number;
  public beta: number;
  public gamma: number;

  constructor(devMotion?: any) {
    if (devMotion == null) {
      this.x = this.gx = 0;
      this.y = this.gy = 0;
      this.z = this.gz = 0;
      this.alpha = this.beta = this.gamma = 0;
      return;
    }

    this.x = devMotion.x;
    this.y = devMotion.y;
    this.z = devMotion.z;

    this.gx = devMotion.gx;
    this.gy = devMotion.gy;
    this.gz = devMotion.gz;

    this.alpha = devMotion.alpha;
    this.beta = devMotion.beta;
    this.gamma = devMotion.gamma;
  }
}
