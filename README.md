#  Vazifa — Landing Page (HTML + CSS)

Bu loyiha oddiy **Landing Page** (bir sahifali sayt) bo‘lib, foydalanuvchiga xizmat yoki mahsulot haqida ma’lumot berish uchun yaratilgan.  
Loyiha HTML va CSS yordamida tuzilgan, dizayn esa `img/` papkasidagi tayyor grafik elementlar bilan boyitilgan.

---

##  Loyihaning tuzilmasi

```

vazifa/
├── index.html          # Asosiy HTML fayl
├── stayle.css          # Sahifa dizayni uchun CSS
├── img/                # Rasmlar, logolar va ikonalar
│   ├── logo.svg
│   ├── hero_img.png
│   ├── service_img1.svg
│   ├── service_img2.svg
│   ├── check1.png
│   └── ...
└── .git/               # Git versiya nazorati fayllari

````

---

##  Loyiha maqsadi

Ushbu loyiha veb-dizayn asoslarini o‘rganish, HTML strukturasi va CSS uslublarini birgalikda qo‘llashni mashq qilish uchun ishlab chiqilgan.  
Bunda sahifa:
- Hero (asosiy banner) bo‘limi,
- Xizmatlar (services) bo‘limi,
- Afzalliklar (advantages) qismi,
- Footer (pastki qism) dan tashkil topgan.

---

## HTML tuzilmasi

`index.html` fayli sahifaning tuzilmasini belgilaydi. Quyidagi asosiy bloklardan iborat:

```html
<header>
  <nav>
    <img src="img/logo.svg" alt="Logo" />
    <ul>
      <li><a href="#services">Xizmatlar</a></li>
      <li><a href="#about">Biz haqimizda</a></li>
      <li><a href="#contact">Aloqa</a></li>
    </ul>
  </nav>
</header>

<section class="hero">
  <h1>Sifatli xizmatlar bilan tanishing</h1>
  <p>Bizning jamoamiz siz uchun eng yaxshi yechimlarni taqdim etadi.</p>
  <button>Batafsil</button>
</section>

<section class="services">
  <div class="service-card">
    <img src="img/service_img1.svg" alt="Xizmat 1" />
    <h3>Professional yondashuv</h3>
  </div>
  ...
</section>

<footer>
  <p>© 2025 Vazifa. Barcha huquqlar himoyalangan.</p>
</footer>
````

---

##  CSS tavsifi

`stayle.css` faylida sahifaning tashqi ko‘rinishi belgilangan.
Asosiy xususiyatlar:

* **Reset** (`margin`, `padding`, `box-sizing`)
* **Flexbox** yordamida markazlash
* **Font-family:** `Segoe UI`, `Tahoma`, `Verdana`
* **Rang o‘tishlari** (`linear-gradient`) orqali fon
* **Responsiv dizayn** — sahifa turli ekranlarda to‘g‘ri ko‘rinadi

Misol:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

---

##  Rasmlar

`img/` papkasida ishlatiladigan barcha grafik elementlar mavjud:

| Fayl nomi                  | Tavsif                                |
| -------------------------- | ------------------------------------- |
| `logo.svg`                 | Sayt logotipi                         |
| `hero_img.png`             | Bosh sahifada joylashgan banner rasmi |
| `service_img1.svg`         | Xizmatlar uchun ikonalar              |
| `check1.png`, `check2.png` | Belgilar (check iconlar)              |
| `leading-img.png`          | Asosiy tasvir                         |

---

##  Ishga tushirish

1. Loyihani klon qiling:

   ```bash
   git clone https://github.com/<username>/vazifa.git
   ```
2. Papkaga o‘ting:

   ```bash
   cd vazifa
   ```
3. `index.html` faylni brauzerda oching:

   * Faylni brauzer oynasiga sudrab tashlang yoki
   * `Ctrl + O` → faylni tanlang.

---

## ⚙️ Foydalanilgan texnologiyalar

* **HTML5** — tuzilma
* **CSS3** — dizayn
* **Flexbox va Grid** — layout joylashuvi
* **SVG va PNG** — grafik elementlar
* **Responsive dizayn** — mobil qurilmalar uchun moslashuv

---

