// @ts-check
import { test, expect } from '@playwright/test';

const URL_PROJECT = "http://localhost:5173/"
const API_URL_PREFIX = "https://cataas.com"

test('The app shows a random fact and an image about cats', async ({ page }) => {
  await page.goto(URL_PROJECT);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  await expect(textContent).not.toBeNull()
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(API_URL_PREFIX)).toBeTruthy()
});
