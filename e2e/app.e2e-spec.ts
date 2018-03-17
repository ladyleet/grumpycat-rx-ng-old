import { GrumpyCatPage } from './app.po';

describe('grumpy-cat App', () => {
  let page: GrumpyCatPage;

  beforeEach(() => {
    page = new GrumpyCatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
