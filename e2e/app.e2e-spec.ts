import { TimegeneratorPage } from './app.po';

describe('timegenerator App', () => {
  let page: TimegeneratorPage;

  beforeEach(() => {
    page = new TimegeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
