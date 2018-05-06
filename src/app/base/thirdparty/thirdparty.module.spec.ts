import { ThirdpartyModule } from './thirdparty.module';

describe('ThirdpartyModule', () => {
  let thirdpartyModule: ThirdpartyModule;

  beforeEach(() => {
    thirdpartyModule = new ThirdpartyModule();
  });

  it('should create an instance', () => {
    expect(thirdpartyModule).toBeTruthy();
  });
});
