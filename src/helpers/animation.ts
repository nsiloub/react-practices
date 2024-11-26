export class FadeInAnimation {
  private node: HTMLElement;
  private startTime: number | null = null;
  private frameId: number | null = null;
  private duration: number = 0;

  constructor(node: HTMLElement) {
    this.node = node;
  }

  start(duration: number): void {
    this.duration = duration;
    if (this.duration === 0) {
      // Jump to end immediately
      this.onProgress(1);
    } else {
      this.onProgress(0);
      // Start animating
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  private onFrame(): void {
    const timePassed = performance.now() - (this.startTime as number);
    const progress = Math.min(timePassed / this.duration, 1);
    this.onProgress(progress);
    if (progress < 1) {
      // We still have more frames to paint
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  private onProgress(progress: number): void {
    this.node.style.opacity = progress.toString();
  }

  stop(): void {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
    }
    this.startTime = null;
    this.frameId = null;
    this.duration = 0;
  }
}