# ekremusta
Website 3.0: instax / photo-dump theme. Plain HTML + CSS + JS, served by GitHub Pages at ekremusta.me.

- `index.html`: page structure (Turkish text lives here)
- `style.css`: all styling (colors at the top under `:root`)
- `app.js`: photo list (`PHOTOS`), blog notes (`POSTS`), English text (`EN`), and the lanyard swing

**Add a photo:** put a JPG in `assets/photos/` (about 1400px on the long side) and add a line to `PHOTOS` in `app.js`
with its file name, `mini` (portrait) or `wide` (landscape), and a Turkish + English caption.

**After changing `style.css` or `app.js`:** update the `?v=` value after it in `index.html` (any new value works).
Browsers cache these files, and a new value makes every visitor fetch the fresh copy.
