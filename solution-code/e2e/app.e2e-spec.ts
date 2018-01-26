import { SteveRulesPage } from './app.po';

describe('steve-rules App', () => {
  let page: SteveRulesPage;

  beforeEach(() => {
    page = new SteveRulesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
