const { capture, scrollToBottom } = require('../../screenshot.js');

(async () => {
  await capture('concepts', 'distributions', async (page) => {
    await page.getByRole('link', { name: 'colorscheme' }).click();
    await page.getByRole('link', { name: 'Rules' }).click();
    await scrollToBottom(page);
  });
})();
