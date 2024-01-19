# To reproduce

Run `npm run dev`

1. Visit http://localhost:3000/thisisfine/ -> calls /static2/ under the hood
2. Page loads fine, you can reload, not an issue
3. Visit http://localhost:3000/broken/ -> calls /static/ under the hood

# Implementatin details

`/static/` implements a stripped down version of https://developers.cloudflare.com/r2/examples/demo-worker/ - importantly on line 38 a ReadableStream is returned

`/static2/` is the same code a `static` apart from an ArrayBuffer is awaited and being returned
