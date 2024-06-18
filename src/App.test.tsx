import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./App";

test("測試 App.tsx 頁面是否正常運作", async () => {
  render(<App />);
  expect(true).toBeTruthy();
});

test("測試 App.tsx 的按鈕文字顯示是否正常", async () => {
  render(<App />);
  const button = await screen.findByRole("button");
  expect(button.innerHTML).toBe("count is 0");
});

test("測試 App.tsx 的按鈕點擊後是否正常運作", async () => {
  render(<App />);
  const button = await screen.findByRole("button");
  user.click(button);
  const count = await screen.findByText("count is 1");
  expect(count).toBeInTheDocument();
});
