import { OrderTacosPage } from './app.po';

describe('order-tacos App', function() {
  let page: OrderTacosPage;

  beforeEach(() => {
    page = new OrderTacosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
