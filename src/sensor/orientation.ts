export default class Orientation {
  public alpha: number;
  public beta: number;
  public gamma: number;
  public absolute: number;

  constructor(devOri?: any) {
    if (devOri == null) {
      this.alpha = this.beta = this.gamma = this.absolute = 0;
      return;
    }

    this.alpha = devOri.alpha;
    this.beta = devOri.beta;
    this.gamma = devOri.gamma;
    this.absolute = devOri.absolute;
  }
}
