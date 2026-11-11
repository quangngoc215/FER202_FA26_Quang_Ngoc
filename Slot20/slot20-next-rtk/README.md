# Slot20 — Bài 1: Next.js + TypeScript + Tailwind + Redux Toolkit

## Khởi chạy

```powershell
cd D:\FER202\Slot20\slot20-next-rtk
npm install
npm run dev
```

Mở http://localhost:3000/counter .

## Kiểm tra

```powershell
npm run typecheck
npm run build
```

- Store tạo theo factory `makeStore()`, không có singleton cấp module.
- `StoreProvider` là Client Component, sử dụng `useRef` và bọc ứng dụng từ layout.
- Trang `app/counter/page.tsx` là Server Component; `Counter.tsx` là Client Component.
- Counter hỗ trợ tăng, giảm, Reset, các bước 1/5/10 và cộng số tùy chọn.

## Git

Từ D:\FER202:

```powershell
git add -- Slot20/slot20-next-rtk/
git diff --cached --name-only
git commit -m "Slot20 - Bai 1: Next.js Redux Toolkit Counter"
git push origin main
```

Chú ý: đừng stage các Slot khác; chỉ commit Bài 1 lúc này.
