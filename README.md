# Сайт салона красоты «Эстетика», Крымск

Статический сайт без сборки на стороне хостинга: достаточно выложить содержимое папки как есть
(GitHub Pages в подпапке `/Estetica_page/` или корень отдельного домена). Все пути относительные.

```
index.html            главная страница
privacy.html          политика обработки персональных данных
favicon.svg           иконка сайта
assets/
  css/styles.css      стили (Tailwind CSS, собран заранее) + подключение шрифтов
  js/main.js          прайс, галерея, фильтры, анимации
  js/vendor/          GSAP 3.12.5 и ScrollTrigger (локальные копии)
  fonts/              Manrope, Cormorant Garamond, Playfair Display Italic, Marck Script — кириллица + латиница, WOFF
  img/                фотографии в WebP, по 2–3 размера для srcset
  icons/              favicon 32×32 и apple-touch-icon 180×180
  og-image.jpg        превью для мессенджеров и соцсетей, 1200×630
```

Сайт не обращается к сторонним CDN, Google Fonts и сервисам аналитики и не ставит cookie.
Внешние переходы — только по нажатию: WhatsApp (wa.me/79002332865), звонок, Яндекс Карты.

После выбора домена замените адрес в `og:url` и `og:image` в `index.html`
(сейчас там текущий адрес публикации https://croooud.github.io/Estetica_page/) и пункт о хостинге в `privacy.html`.
