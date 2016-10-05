import { EthnicfoodsPage } from './app.po';

describe('ethnicfoods App', function() {
  let page: EthnicfoodsPage;

  beforeEach(() => {
    page = new EthnicfoodsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
