import { test, expect } from "@playwright/test";
import ExcelJS from "exceljs";

test("Flipkart Assessment", async ({ page, context }) => {

    // Open Flipkart 
    await page.goto("https://www.flipkart.com/", { waitUntil: "domcontentloaded" });

    // Close login popup
    await page.locator('//span[@class="b3wTlE"]').click();

    // Assertion: Home visible
    await expect(page.locator('//div[text()="Home"]')).toBeVisible({ timeout: 10000 });

    await page.locator('//div[text()="Home"]').click();

    // To Select product category 
    await page.locator('(//div[@class="OfydJ4 "]/picture/img)[57]').click();

    // Assertion: Filter visible
    await expect(page.locator('(//div[@class="ybaCDx"])[1]')).toBeVisible({ timeout: 10000 });

    await page.locator('(//div[@class="ybaCDx"])[1]').click();

    // To Sort by price
    await expect(page.locator('//div[text()="Price -- Low to High"]')).toBeVisible({ timeout: 10000 });
    await page.locator('//div[text()="Price -- Low to High"]').click();

    // To Open product in new tab 
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('(//div[@class="lWX0_T"])[5]').click()
    ]);

    await newPage.waitForLoadState('domcontentloaded');

    // To Capture Product Name
    const productNameLocator = newPage.locator('//h1[@class="v1zwn21l v1zwn26 _1psv1zeb9 _1psv1ze0"]');
    await expect(productNameLocator).toBeVisible({ timeout: 10000 });

    let prodName = await productNameLocator.textContent();

    // To Capture Product Price 
    const productPriceLocator = newPage.locator('//div[@class="v1zwn21l v1zwn20 _1psv1zeb9 _1psv1ze0"]');
    await expect(productPriceLocator).toBeVisible({ timeout: 10000 });

    let prodPrice = await productPriceLocator.textContent();

    console.log("Product Name: " + prodName);
    console.log("Product Price: " + prodPrice);

    // To write in a Excel File 
    let workbook = new ExcelJS.Workbook();
    let sheet = workbook.addWorksheet("Flipkart Data");

    sheet.columns = [
        { header: "Product Name", key: "name", width: 50 },
        { header: "Product Price", key: "price", width: 20 }
    ];

    sheet.addRow({
        name: prodName,
        price: prodPrice
    });

    await workbook.xlsx.writeFile("C:/Users/adars/Desktop/Playwright_Assesments/Data/myData.xlsx");

    console.log("Excel file created successfully");

    // Final Button Click - Add to Cart
    await expect(newPage.locator('(//div[@class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a"])[4]')).toBeVisible({ timeout: 10000 });

    await newPage.locator('(//div[@class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a"])[4]').click();

});



