## 🧾 **Loyiha nomi:** Login sahifasi (HTML + CSS)

---

### 🔹 **Fayllar tuzilmasi:**

```
/login-page
 ├── index.html
 └── style.css
```

---

## 🧱 **1. index.html fayli — asosiy tuzilma**

Bu fayl foydalanuvchiga ko‘rinadigan **login sahifasining strukturasi**ni yaratadi.

### 📘 HTML kod izohi:

#### `<head>` bo‘limi:

```html
<meta charset="UTF-8">
```

– Sahifada o‘zbekcha yoki boshqa tillardagi belgilar to‘g‘ri chiqishi uchun.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

– Sahifa barcha qurilmalarda (telefon, planshet, kompyuter) mos ravishda ko‘rinishi uchun.

```html
<link rel="stylesheet" href="style.css">
```

– Sahifaga tashqi **CSS fayl** ulanadi (dizayn shu yerda yozilgan).

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/...font-awesome.css">
```

– **Font Awesome** ikonalar kutubxonasini ulaydi (masalan, ❌ belgisi).

---

#### `<body>` bo‘limi:

```html
<div class="container">...</div>
```

– Barcha elementlar joylashgan asosiy quti. Unda login formasi mavjud.

---

#### Ichki qismlar:

1. **Icon (chiqish belgisi):**

```html
<div class="icon">
  <i class="fa-sharp fa-solid fa-x"></i>
</div>
```

– Font Awesome ikonasi yordamida yuqoriga joylashtirilgan ❌ belgisi.

2. **Email yoki telefon maydoni:**

```html
<div class="input-group">
  <label for="email">Email or phone</label>
  <input type="email" id="email" placeholder="email or phone">
</div>
```

– `label` foydalanuvchiga maydon nomini ko‘rsatadi.
– `input` esa kiritish maydoni.

3. **Parol maydoni:**

```html
<div class="Password">
  <label for="password">Password</label>
  <input type="text" id="password" placeholder="enter your password">
</div>
```

– Parol kiritish uchun maydon.

4. **Login tugmasi:**

```html
<button class="button">LOGIN</button>
```

– Kirish tugmasi. Bosilganda tizimga kirish amalga oshiriladi (hozircha faqat dizayn).

5. **Ro‘yxatdan o‘tish havolasi:**

```html
<a href="#">Not a member? Sign up now.</a>
```

– Agar foydalanuvchi a’zo bo‘lmasa, ro‘yxatdan o‘tish sahifasiga yo‘naltiradi.

---

## 🎨 **2. style.css fayli — dizayn qismi**

Bu fayl **sahifaning tashqi ko‘rinishini** boshqaradi.

---

### 🔹 Umumiy sozlamalar:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

– Barcha elementlarning **chekka (margin)** va **ichki (padding)** oraliqlarini nolga tushiradi.
– `box-sizing: border-box` element o‘lchamlarini aniq hisoblaydi.

---

### 🔹 Asosiy fon (body):

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

* **Shrift:** zamonaviy sans-serif turi.
* **Fon:** ko‘k va binafsha rangli gradient.
* **Joylashuv:** sahifadagi hamma narsa markazda turadi (vertical va horizontal).

---

### 🔹 `.container`

```css
.container {
  background: white;
  border-radius: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 50px 40px;
  width: 100%;
  max-width: 400px;
}
```

* Oq fonli quti.
* **Radius** — burchaklari yumaloqlangan.
* **Soyasi** — pastdan 3D effekt beradi.
* **Kattaligi** — maksimal kenglik 400px.

---

### 🔹 `.icon`

```css
.icon {
  display: inline;
  position: relative;
  bottom: 40px;
  left: 330px;
}
```

* Ikona konteynerning yuqori o‘ng qismiga joylashtirilgan.
* **position: relative** yordamida joyi o‘zgartirilgan.

---

### 🔹 Input maydonlari:

```css
input[type="email"],
input[type="text"] {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
}
```

– Kiritish maydonlari yumaloq burchakli, silliq animatsiyali.
– Foydalanuvchi bosganda (`:focus`) chegarasi rangli bo‘ladi.

---

### 🔹 Tugma (button):

```css
.button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 20px;
}
```

– Tugma **gradient** rangda, bosganda biroz yuqoriga ko‘tariladi.
– Hover holatda 3D effekt beradi.

---

### 🔹 Havola (link):

```css
a {
  display: block;
  text-align: center;
  color: #667eea;
  text-decoration: none;
  font-size: 14px;
}
a:hover {
  color: #764ba2;
  text-decoration: underline;
}
```

– Ro‘yxatdan o‘tish uchun yozuv markazda joylashgan.
– Ustiga bosilganda rangi o‘zgaradi va pastiga chiziq chiqadi.

---

## ✅ **Umumiy natija:**

