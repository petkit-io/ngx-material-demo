import { MatDemoModule } from './mat-demo.module';

describe('MatDemoModule', () => {
  let matDemoModule: MatDemoModule;

  beforeEach(() => {
    matDemoModule = new MatDemoModule();
  });

  it('should create an instance', () => {
    expect(matDemoModule).toBeTruthy();
  });
});
