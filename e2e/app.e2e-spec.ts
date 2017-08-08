import { LadbrokespocPage } from './app.po';

describe('ladbrokespoc App', () => {
  let page: LadbrokespocPage;

  beforeEach(() => {
    page = new LadbrokespocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
