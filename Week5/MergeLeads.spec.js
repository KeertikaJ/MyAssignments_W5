"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("Merge Leads - LeafTaps Application", async ({ page, context }) => {
    //Login to LeafTaps application 
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.waitForLoadState("domcontentloaded");
    await (0, test_1.expect)(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    //Verify Home Page
    await page.waitForSelector("div>h2", { state: 'visible' });
    await test_1.expect.soft(page.locator("div>h2")).toHaveText(/Welcome/);
    //Verify Home Page and Click on Leads-> Merge Lead
    await page.locator("img[src*='crm']").click();
    await test_1.expect.soft(page.locator("#sectionHeaderTitle_myHome")).toHaveText(/My Home/);
    await page.locator("a[href*='leadsMain']").click();
    await page.waitForSelector(".shortcuts>li>a[href*='merge']", { state: 'visible' });
    await page.locator(".shortcuts>li>a[href*='merge']").click();
    await (0, test_1.expect)(page).toHaveTitle("Merge Leads | opentaps CRM");
    //Click on `From Lead` Lookup
    const fromFindLeadsRef = context.waitForEvent("page");
    await page.getByAltText("Lookup").first().click();
    const fromFindLeads = await fromFindLeadsRef;
    await fromFindLeads.waitForSelector(".subSectionTitle", { state: "visible" });
    await fromFindLeads.locator("(//tbody/tr/td[1]//a[1])[1]").click();
    await (0, test_1.expect)(page.locator("#ComboBox_partyIdFrom")).not.toBeEmpty();
    //Click on `To Lead` Lookup
    const toFindLeadsRef = context.waitForEvent("page");
    await page.getByAltText("Lookup").last().click();
    const toFindLeads = await toFindLeadsRef;
    await toFindLeads.waitForSelector(".subSectionTitle", { state: "visible" });
    await toFindLeads.locator("(//tbody/tr/td[1]//a[1])[2]").click();
    await (0, test_1.expect)(page.locator("#ComboBox_partyIdTo")).not.toBeEmpty();
    //Handling Alert
    page.on("dialog", async (alert) => {
        console.log(`Alert Message: ${alert.message()}`);
        console.log(`Alert Type: ${alert.type()}`);
        alert.accept();
    });
    //Click on Merge and assert title
    await page.getByText("Merge", { exact: true }).click();
    await (0, test_1.expect)(page).toHaveTitle("View Lead | opentaps CRM");
    await page.waitForLoadState("domcontentloaded");
});
//# sourceMappingURL=MergeLeads.spec.js.map