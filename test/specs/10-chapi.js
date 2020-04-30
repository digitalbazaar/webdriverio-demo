const chai = require('chai');
const should = chai.should();

describe('CHAPI Wallet/Issuer Demo', () => {
  it('works', async () => {
    await browser.url('https://chapi-demo-wallet.digitalbazaar.com/');
    const walletTitle = await browser.getTitle();
    should.exist(walletTitle);
    walletTitle.should.equal('Minimal Demo Wallet');
    let elem = await $('iframe');

    await elem.waitForExist();
    await browser.switchToFrame(elem);

    const a = await $('button*=Allow');
    await a.click();

    // switch back to main window
    await browser.switchToFrame(null);

    const loginButton = await $('#loginButton');
    await loginButton.waitForExist();
    await loginButton.click();


    await browser.newWindow('https://chapi-demo-issuer.digitalbazaar.com/');
    const issuerTitle = await browser.getTitle();
    should.exist(issuerTitle);
    issuerTitle.should.equal('Minimal Demo Issuer');

    const receiveButton = await $('#receiveButton');
    await receiveButton.waitForClickable();
    await receiveButton.click();

    const chapiFrame = await $('iframe');
    await chapiFrame.waitForExist();
    await browser.switchToFrame(chapiFrame);

    const nextButton = await $('button*=Next');
    await nextButton.waitForClickable();
    await nextButton.click();

    const demoWallet = await $('strong*=Demo Wallet');
    await demoWallet.waitForClickable();
    await demoWallet.click();

    const innerWalletFrame = await $('iframe');
    await innerWalletFrame.waitForExist();
    await browser.switchToFrame(innerWalletFrame);

    let dialogs;
    await browser.waitUntil(async () => {
      dialogs = await $$('dialog');
      return dialogs.length === 2;
    })

    const innerWalletFrame2 = await dialogs[1].$('iframe');
    await innerWalletFrame2.waitForExist();
    await browser.switchToFrame(innerWalletFrame2);

    const confirmButton = await $('#confirmButton');
    await confirmButton.waitForClickable();
    await confirmButton.click();

    const credentialDisplay = await $('li*=UniversityDegreeCredential');
    const credentialVisible = await credentialDisplay.isDisplayed();
    credentialVisible.should.be.true;

    const doneButton = await $('#doneButton');
    await doneButton.waitForClickable();
    await doneButton.click();

    await browser.switchToFrame(null);

    const storeResults = await $('#storeResults');
    const storeResultsVisible = await storeResults.isDisplayed();
    storeResultsVisible.should.be.true;
  });
});
