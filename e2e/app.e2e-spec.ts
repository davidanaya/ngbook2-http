import { Ngbook2HttpPage } from './app.po';

describe('ngbook2-http App', function() {
  let page: Ngbook2HttpPage;

  beforeEach(() => {
    page = new Ngbook2HttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
