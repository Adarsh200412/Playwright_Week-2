import { test, expect } from "@playwright/test";

test("task2", async ({ page }) => {
  await page.goto("https://vinothqaacademy.com/demo-site/");

  await page.locator('//input[@id="vfb-5"]').fill("Adarsh");
  await expect(page.locator('//input[@id="vfb-5"]')).toHaveValue("Adarsh");

  await page.locator('//input[@id="vfb-7"]').fill("Tiwari");
  await expect(page.locator('//input[@id="vfb-7"]')).toHaveValue("Tiwari");

  await page.locator('//label[@for="vfb-31-1"]').click();
  await expect(page.locator('//input[@id="vfb-31-1"]')).toBeChecked();

  await page.locator('//label[text()="Java"]').click();
  await page.locator('//label[text()="Functional Testing"]').click();

  await page
    .locator('//input[@id="vfb-13-address"]')
    .fill("Chandigarh University");

  await page.locator('//input[@id="vfb-13-address-2"]').fill("Gharuan");

  await page.locator('//input[@id="vfb-13-city"]').fill("Mohali");

  await page.locator('//input[@id="vfb-13-state"]').fill("Punjab");

  await page.locator('//input[@id="vfb-13-zip"]').fill("140413");
  await expect(page.locator('//input[@id="vfb-13-zip"]')).toHaveValue("140413");

  await expect(page.locator('//input[@id="vfb-13-zip"]')).toBeEditable();

  await page.locator('(//b[@role="presentation"])[1]').click();
  await page.locator('//input[@type="search"]').fill("India");
  await page.keyboard.press("Enter");

  await page.locator('//input[@id="vfb-14"]').fill("adarsh12@gmail.com");
  await expect(page.locator('//input[@id="vfb-14"]')).toHaveValue(
    "adarsh12@gmail.com",
  );

  await page.locator('//input[@id="vfb-18"]').fill("19/04/2026");
  await page.keyboard.press("Enter");

  await page.locator('(//b[@role="presentation"])[2]').click();
  await page.locator('//input[@class="select2-search__field"]').fill("11");
  await page.keyboard.press("Enter");

  await page.locator('(//b[@role="presentation"])[3]').click();
  await page.locator('//input[@class="select2-search__field"]').fill("30");
  await page.keyboard.press("Enter");

  await page.locator('//input[@id="vfb-19"]').fill("9455196789");

  await page.locator('//textarea[@id="vfb-23"]').fill("Topbrains Assessment");
  await expect(page.locator('//textarea[@id="vfb-23"]')).toHaveValue(
    "Topbrains Assessment",
  );
  await page.keyboard.press("Enter");

  await page.locator('//input[@id="vfb-3"]').fill("33");


  await expect(page.locator('//input[@id="vfb-4"]')).toBeEnabled();
  await expect(page.locator('//input[@id="vfb-4"]')).toHaveAttribute('type', 'submit');

  await page.locator('//input[@id="vfb-4"]').click();


  await page.waitForTimeout(3000);
  await page.screenshot({ path: "screenshots/vtech.png" });
});