Bu frontend asoslarini (HTML, SCSS, CSS) amaliy o‘rganish uchun mo‘ljallangan oddiy, ammo toza tuzilgan loyiha.  
Loyiha foydalanuvchiga statik web sahifa tuzilmasi va SCSS orqali dizaynni boshqarish mexanizmini tushunishga yordam beradi.

---

## 📂 Project Structure

```

homework/
│
├── index.html             # Main HTML file (entry point)
├── style.scss             # SCSS source file (custom styles)
├── css/
│   ├── style.css          # Compiled CSS file
│   └── style.css.map      # Source map for debugging
└── .git/                  # Git configuration and metadata

````

---

## ⚙️ Core Functionality

### 1. `index.html`
- Web sahifaning markaziy tuzilmasini tashkil etadi.
- HTML5 semantik teglardan foydalangan (`<header>`, `<section>`, `<footer>` va boshqalar).
- CSS fayliga quyidagicha ulanadi:
  ```html
  <link rel="stylesheet" href="css/style.css">
````

### 2. `style.scss`

* Asosiy uslublar SCSS sintaksisida yozilgan.
* SCSS — bu CSS’ning qulayroq varianti bo‘lib, quyidagi imkoniyatlarni beradi:

  * **Variables** (`$primary-color`, `$font-size`)
  * **Nested selectors** (`.card { .title { ... } }`)
  * **Mixins & Functions**
  * **Partial imports** (loyihani modullarga bo‘lish)
* Kompilyatsiya qilish uchun terminalda:

  ```bash
  sass style.scss css/style.css
  ```

### 3. `css/style.css`

* Brauzer o‘qiydigan yakuniy CSS fayl.
* SCSS fayldan avtomatik hosil bo‘ladi.
* Ushbu faylda barcha dizayn qoidalari (ranglar, layout, margin, padding va boshqalar) mavjud.

### 4. `css/style.css.map`

* Brauzer devtools orqali SCSS kodini original holatda ko‘rsatish uchun mo‘ljallangan.
* Debug paytida CSS qayerdan kelganini aniqlash imkonini beradi.

### 5. `.git/`

* Git versiya nazorati tizimi uchun xizmat qiladi.
* Loyiha tarixi, commitlar va branchlar haqida ma’lumot saqlanadi.

---

## 🚀 Getting Started

### 1️⃣ Clone or Download

```bash
git clone https://github.com/USERNAME/homework.git
cd homework
```

### 2️⃣ Open the Project

`index.html` faylni brauzerda oching.

### 3️⃣ Modify and Compile

Agar SCSS faylni o‘zgartirsangiz:

```bash
sass style.scss css/style.css
```

### 4️⃣ (Optional) Auto Compile

Agar har safar SCSS tahrirlanganda avtomatik CSS hosil bo‘lishini xohlasangiz:

```bash
sass --watch style.scss css/style.css
```

---

## 🧱 Technologies Used

| Texnologiya     | Tavsif                               |
| --------------- | ------------------------------------ |
| **HTML5**       | Sahifa tuzilmasi                     |
| **SCSS (Sass)** | Stil yozishning zamonaviy sintaksisi |
| **CSS3**        | Dizayn va bezaklar                   |
| **Git**         | Versiya nazorati tizimi              |

---

## 🧩 Code Principles

* **Clean Structure** — Har bir fayl aniq vazifani bajaradi.
* **Scalability** — SCSS oson kengaytiriladi.
* **Maintainability** — Katta loyihalarga mos tarzda tuzilgan.
* **Readability** — Kod soddaligi va izchilligi saqlangan.

---

## 🎨 SCSS Architecture (Recommended)

Agar loyiha kengaysa, SCSS fayllarni quyidagicha tashkil etish tavsiya etiladi:

```
styles/
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _variables.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   └── _navbar.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   └── _grid.scss
└── style.scss
```

Bu tizim orqali:

* Kodni modullarga bo‘lish mumkin;
* Katta loyihalarda tartib saqlanadi;
* Har bir qism mustaqil o‘zgartiriladi.

---

## 🧠 Developer Notes

* Kodni test qilish uchun **Live Server** (VSCode extension) dan foydalanish tavsiya etiladi.
* Brauzer caching’ini oldini olish uchun `Ctrl + Shift + R` orqali to‘liq reload qiling.
* SCSS faylda ishlatilgan barcha o‘zgaruvchilarni `variables` qismiga joylash kerak.

---

## 🌐 Deployment (GitHub Pages)

Saytni GitHub’da joylashtirish uchun:

1. `index.html` va `css` papkasi mavjud ekanligiga ishonch hosil qiling.
2. GitHub’da `homework` nomli repository oching.
3. Kodni push qiling:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
4. `Settings → Pages` bo‘limida “Deploy from main branch” tanlang.

Sayt manzili:

```
https://USERNAME.github.io/homework/
```

---

## ⚡ Future Improvements

* JavaScript bilan interaktiv elementlar qo‘shish.
* SCSS’ni modul tizimiga to‘liq ajratish.
* Responsive dizayn (mobil va planshet mosligi).
* Dark/Light mode tizimini joriy etish.

---

## 👨‍💻 Author

**Og‘abek Boymirzayev**
Frontend Developer | Passionate Learner
📧 Email: [[your-email@example.com](mailto:boymirzayev523@@example.com)]
🌐 GitHub: [https://github.com/USERNAME](https://github.com/ogabekuz)

---

## 🪪 License

Bu loyiha **MIT License** asosida tarqatiladi.
Siz kodni o‘zgartirish, qayta ishlatish yoki o‘qitish maqsadida erkin foydalanishingiz mumkin.

---

