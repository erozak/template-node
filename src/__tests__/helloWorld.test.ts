import { helloWorld } from '../helloWorld';

describe('helloWorld', () => {
  it('should execute the script withoud an error', () => {
    expect(helloWorld).not.toThrowError();
  });
});
