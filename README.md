# AccessGuard Test Site

## Current state: HALF FIX (score testing)

Use this deploy to verify AccessGuard’s updated scoring:
fewer issues should produce a score **above 0**, not stuck at zero.

### Fixed
- `lang="en"`
- Heading text
- Button names (most)
- Some image alts (logo, banner, mug)
- Iframe title

### Still broken
- Form labels
- Low contrast
- Empty / “click here” links
- Some images without alt
- `<span>` used as a button
- No `<main>` landmark

### Test
1. Redeploy to Vercel  
2. Restart AccessGuard backend (scoring fix)  
3. Scan `https://test-access-guard.vercel.app`  
4. Expect score **> 0** (issues still present, but improved vs original 0)
