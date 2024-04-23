import { NoWhiteSpacesPipe } from './no-white-spaces.pipe';

describe('NoWhiteSpacesPipe', () => {
  it('create an instance', () => {
    const pipe = new NoWhiteSpacesPipe();
    expect(pipe).toBeTruthy();
  });
});
