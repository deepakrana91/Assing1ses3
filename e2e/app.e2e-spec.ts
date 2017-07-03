import { Assing1ses3Page } from './app.po';

describe('assing1ses3 App', () => {
  let page: Assing1ses3Page;

  beforeEach(() => {
    page = new Assing1ses3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
