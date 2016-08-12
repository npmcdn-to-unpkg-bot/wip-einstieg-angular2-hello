import { LernmomentHelloPage } from './app.po';

describe('lernmoment-hello App', function() {
  let page: LernmomentHelloPage;

  beforeEach(() => {
    page = new LernmomentHelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
