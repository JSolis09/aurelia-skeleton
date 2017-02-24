import {App} from '../../src/app/app';

describe('@APP', () => {
  let sut: any;
  
  beforeAll(() => {
    sut = new App();
  });
  
  it('Heading to contain Todo', () => {
    expect(sut).toBeDefined();
  });
  
});
