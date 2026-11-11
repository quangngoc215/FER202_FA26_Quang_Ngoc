# FER202 - Slot19: Redux 5 bài

Mỗi thư mục Bai1..Bai5 là một Vite project độc lập, được chép từ ví dụ Phần D của Redux.md.

- **Bai1_Counter**: Redux thuần, Counter / +/- / +5 / Reset / step.
- **Bai2_Todo**: Redux thuần + combineReducers, thêm/sửa/xóa/lọc todo.
- **Bai3_UsersThunk**: Redux Thunk + axios, tải users và posts.
- **Bai4_CartToolkit**: Redux Toolkit, giỏ hàng, tìm sản phẩm, lưu localStorage.
- **Bai5_StudentsCRUD**: Redux Toolkit + createAsyncThunk + json-server, CRUD sinh viên.

## Chạy

Trong PowerShell: `cd Slot19/Bai1_Counter; npm install; npm run dev` (tương tự bài 2-4).
Bài 5: `cd Slot19/Bai5_StudentsCRUD; npm install; npm start` (API ở 9999 + Vite).

## Commit riêng từng bài

Thực hiện ở thư mục FER202 (phải là repo git) sau khi giải nén:

```powershell
git add Slot19/Bai1_Counter; git commit -m "Slot19 Bai1: Redux Counter"
git add Slot19/Bai2_Todo; git commit -m "Slot19 Bai2: Redux Todo List"
git add Slot19/Bai3_UsersThunk; git commit -m "Slot19 Bai3: Redux Thunk Users"
git add Slot19/Bai4_CartToolkit; git commit -m "Slot19 Bai4: Redux Toolkit Cart"
git add Slot19/Bai5_StudentsCRUD Slot19/README.md; git commit -m "Slot19 Bai5: Students CRUD createAsyncThunk"
git push -u origin HEAD
```

Nếu `git push` báo thiếu remote, cần `git remote add origin <URL_REPO_GITHUB_CUA_BAN>` rồi push lại.
