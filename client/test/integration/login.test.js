const loginAsAdmin = async (page) => {
  await page.goto('http://localhost:3000');
  await page.screenshot({path: 'screenshot_login.jpg'});
  await page.type('input[name="username"]', 'admin');
  await page.type('input[name="password"]', 'changeme');
  await page.click('#loginButton');
}

describe('logging in', () => {
  it('works with admin credentials', async () => {
    await loginAsAdmin(page);

    await page.goto('http://localhost:3000/');

    const bodyHandle = page.$('body');
    await page.screenshot({path: 'screenshot.jpg'});
    //const helloText = await page.evaluate(body => body.innerHTML, bodyHandle);
    const helloText = await page.evaluate(() => document.body.textContent);

    expect(helloText).toContain('Hello!');

    await browser.close();
  });
});

