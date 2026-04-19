import { test, expect } from "@playwright/test";

test("task1", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");

  await page.locator('//input[@id="firstName"]').fill("Adarsh");
  await page.locator('//input[@id="lastName"]').fill("Tiwari");

  await expect(page.locator('//input[@id="firstName"]')).toHaveValue("Adarsh");

  await page.locator('//input[@placeholder="name@example.com"]').fill("Adarsh12345@gmail.com");

  await page.locator('//label[@for="gender-radio-1"]').click();
  await expect(page.locator('//input[@id="gender-radio-1"]')).toBeChecked();

  await page
    .locator('//input[@placeholder="Mobile Number"]')
    .fill("9561234567");
  await expect(
    page.locator('//input[@placeholder="Mobile Number"]'),
  ).toHaveAttribute("maxlength", "10");

  await page.locator('//input[@class="subjects-auto-complete__input"]').fill("Maths");
  await page.keyboard.press("Enter");


  await page.locator('//label[@for="hobbies-checkbox-2"]').click();
  await expect(page.locator('//input[@id="hobbies-checkbox-2"]')).toBeChecked();

  await page.locator('//textarea[@placeholder="Current Address"]').fill("Chandigarh University, Mohali, Punjab");

  await expect(
    page.locator('//textarea[@placeholder="Current Address"]'),
  ).toBeEditable();

  await page.locator('//div[@class="css-19bb58m"]').click();
  await page.locator('//div[text()="Uttar Pradesh"]').click();
  await expect(page.locator('//div[text()="Uttar Pradesh"]')).toBeVisible();

  await page.locator('//input[@id="react-select-4-input"]').click();
  await page.locator('//div[text()="Lucknow"]').click();
  await expect(page.locator('//div[text()="Lucknow"]')).toBeVisible();

  await expect(page.locator('//button[text()="Submit"]')).toBeEnabled();
  await page.locator('//button[text()="Submit"]').click();

  await expect(
    page.locator('//div[@id="example-modal-sizes-title-lg"]'),
  ).toBeVisible();

  await page.waitForTimeout(3000);
  await page.screenshot({ path: "screenshots/toolsqa.png" });

});

