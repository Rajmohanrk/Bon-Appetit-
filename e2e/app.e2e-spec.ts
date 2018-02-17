import { MyRecipePage } from './app.po';

describe('my-recipe App', () => {
  let page: MyRecipePage;

  beforeEach(() => {
    page = new MyRecipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
