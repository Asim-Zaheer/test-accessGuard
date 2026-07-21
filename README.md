# AccessGuard Test Site

## Current state: FULL FIX (target 100/100)

All scanner findings remediated:

- `lang`, landmarks (`header` / `nav` / `main` / `footer`), skip link
- Headings + order
- Button / link names
- Image `alt`
- Form labels
- Iframe `title`
- AA contrast + focus styles

## Re-scan

1. Push/redeploy to Vercel  
2. Scan `https://test-access-guard.vercel.app` in AccessGuard  
3. Expect **~100/100** (0 axe violations)
