# Image brief — 32 slots, all wired and waiting

Every slot below is already live in the code. Drop a file in with the **exact
path and filename** and it appears on the next refresh — no code changes.

Nothing is broken while files are missing:
- **Card thumbnails** show an Optimum-blue gradient until you add the image.
- **Section backgrounds** fall back to the plain section colour.
- **Hero background** falls back to a blue gradient.

Folders are already created: `public/images/`, `public/images/cards/`,
`public/images/backgrounds/`.

---

## Rules that apply to EVERY image

Not style notes — these keep the site inside Google Ads and trademark policy:

- **No Optimum logos, wordmarks, branded vans or branded uniforms.** Branded
  trucks or uniformed staff imply we *are* Optimum or employ its technicians.
  Both are banned (§5.1, §7.1).
- **No storefront or retail-counter imagery** — this is a phone-order operation;
  storefront imagery is a prohibited local-presence claim.
- **No text, prices, logos or UI baked into the image.** Pricing must stay live
  HTML so it stays correctable.
- **No competitor branding** (Xfinity, Spectrum, Verizon…).
- People read as **customers at home**, never as staff or installers.

Paste this negative onto the end of every prompt:

> no logos, no brand names, no text, no watermarks, no uniformed workers, no
> service vans, no storefront, no on-screen UI, no price tags

---

# 1. Hero background — 1 image

**File:** `public/images/hero-bg.jpg` · **1920 × 1080**

The headline and price sit over the **left ~55%** under a white scrim. Keep the
left side quiet or the type loses contrast.

> A bright airy modern living room in soft natural morning light, low wide angle.
> The left third of the frame is clean, softly out-of-focus pale wall and daylight
> with almost no detail. The right side shows a tasteful contemporary interior —
> light oak console, a plant, the corner of a sofa — receding into gentle bokeh.
> Subtle cool blue cast in the highlights. Airy, premium, optimistic, generous
> negative space. Editorial architectural photography, 35mm, shallow depth of
> field. No people.

**Abstract alternative** (safest for text contrast):

> An abstract field of soft flowing light streaks in deep cobalt blue and white
> suggesting fibre-optic data in motion, fading to near-white on the left of the
> frame. Smooth gradients, no hard edges, generous empty space, calm and premium.

---

# 2. Section banners — 9 images

Wide cards inside each section. **Generate 1920 × 1080, keep the subject
centred** — the container crops to a 21:9 band.

These 9 files already exist with older stock art. Overwrite them to replace.

| File — `public/images/` | Section | Prompt |
|---|---|---|
| `hero-fiber.jpeg` | Fiber | Macro photograph of fibre-optic strands glowing cool blue against a dark neutral background, fine filaments carrying points of light, shallow depth of field, premium, centred. |
| `wifi-house.jpeg` | Cable Internet | A warm modern two-storey suburban home at dusk seen from the street, windows glowing softly, calm blue evening sky, tidy garden, no vehicles, centred, editorial real-estate photography. |
| `lifestyle-rooftop.jpeg` | Bundles | Three friends relaxing on a city rooftop terrace at golden hour, laughing, one holding a phone, string lights overhead, candid lifestyle photography, centred, shallow depth of field. |
| `tv-room.jpeg` | TV | A cosy modern living room at night arranged for television, warm lamp light, a large blank dark screen reflecting the room, comfortable sofa, centred. Nothing visible on the screen. |
| `mobile-phone.jpeg` | Mobile | Hands holding a modern smartphone with a plain blank screen, walking a sunlit city street, background softly out of focus, natural daylight, centred. No apps or interface visible. |
| `family-sofa.jpeg` | Home Phone | A multi-generational family together on a sofa in a bright living room, an older parent talking warmly on a cordless home phone, natural window light, candid, centred. |
| `wifi-extender.jpeg` | Add-ons | A small unbranded white mesh wifi device on a light oak shelf beside a plant and books, minimal Scandinavian interior, soft daylight, shallow depth of field, centred. |
| `wave-panel.jpeg` | Why order through us | An abstract smooth wave of deep cobalt blue and white gradients, calm flowing ribbons of light, minimal and premium, generous negative space, centred. |
| `internet-swoosh.jpeg` | How it works | An abstract long-exposure light trail sweeping through dark space in cobalt blue and white, smooth motion blur, suggesting speed and connection, minimal, centred. |

---

# 3. Section backgrounds — 7 images

**Folder:** `public/images/backgrounds/` · **1920 × 1200**

⚠️ These sit behind a **93% opacity scrim** — they read as faint texture, not
as pictures. Generate **abstract, low-contrast, low-detail** artwork. A busy
photograph here just turns to grey mush.

Skip any you don't want — that section keeps its plain colour. Tell me if you'd
like the scrim lightened so these show more, it's one number in
`components/ui/SectionBackground.tsx`.

| File | Section | Prompt |
|---|---|---|
| `bg-fiber.jpg` | Fiber | Very soft abstract gradient mesh in pale blue and white, faint diagonal light streaks, extremely low contrast, minimal detail, lots of empty space. |
| `bg-internet.jpg` | Cable Internet | Very soft abstract pale grey-blue gradient with a faint suggestion of concentric signal rings, extremely low contrast, minimal, airy. |
| `bg-bundles.jpg` | Bundles | Very soft abstract pale blue gradient with faint overlapping translucent geometric shapes, extremely low contrast, clean and minimal. |
| `bg-tv.jpg` | TV | Very soft abstract dark-to-pale blue gradient with a faint cinematic glow from one corner, extremely low contrast, minimal, no objects. |
| `bg-mobile.jpg` | Mobile | Very soft abstract pale blue gradient with faint vertical light bars suggesting signal strength, extremely low contrast, airy and minimal. |
| `bg-phone.jpg` | Home Phone | Very soft warm-neutral gradient with a faint pale blue wash, extremely low contrast, calm and domestic, no objects. |
| `bg-how-it-works.jpg` | How it works | Very soft abstract pale blue gradient with three faint evenly spaced vertical light bands, extremely low contrast, minimal. |

---

# 4. Card thumbnails — 15 images

**Folder:** `public/images/cards/` · **800 × 450 (16:9)**

Small images at the top of each card. Keep them **simple with one clear
subject** — they render around 300 px wide, so busy scenes turn to noise.

### Bundles (3)

| File | Card | Prompt |
|---|---|---|
| `card-bundle-complete.jpg` | Optimum Complete | A smartphone and a wifi router side by side on a clean light surface, soft daylight, minimal product photography, plenty of white space. |
| `card-bundle-core-tv.jpg` | Internet + Core TV | A wifi router beside a slim TV remote on a clean light surface, soft daylight, minimal product photography. |
| `card-bundle-select-tv.jpg` | Internet + Select TV | A wifi router and a TV remote on a light surface with a softly blurred television glowing in the background, minimal, warm. |

### TV (4)

| File | Card | Prompt |
|---|---|---|
| `card-tv-core.jpg` | Core TV | A cosy sofa corner facing a blank dark television in warm evening lamp light, simple and uncluttered, shallow depth of field. |
| `card-tv-select.jpg` | Select TV | A family living room with a blank television and a football on the rug, warm lamp light, simple composition, shallow depth of field. |
| `card-tv-premier.jpg` | Premier TV | A dim cinematic living room with a blank widescreen television and warm accent lighting, moody premium feel, uncluttered. |
| `card-tv-stream.jpg` | Optimum Stream | A small unbranded black streaming device and a slim voice remote on a light oak surface, minimal product photography, soft daylight. |

### Mobile (4)

| File | Card | Prompt |
|---|---|---|
| `card-mobile-1gb.jpg` | 1 GB By the Gig | A single modern smartphone with a blank screen lying flat on a clean pale blue surface, top-down, minimal, soft even light. |
| `card-mobile-3gb.jpg` | 3 GB By the Gig | Two modern smartphones with blank screens lying flat side by side on a clean pale surface, top-down, minimal. |
| `card-mobile-unlimited.jpg` | Unlimited | A person's hand holding a smartphone with a blank screen against a softly blurred sunny outdoor background, minimal, bright. |
| `card-mobile-unlimited-max.jpg` | Unlimited Max | A smartphone with a blank screen propped on a desk beside a laptop, bright modern workspace, softly blurred background, minimal. |

### Add-ons (4)

| File | Card | Prompt |
|---|---|---|
| `card-gateway.jpg` | Gateway 6E | A sleek unbranded white wifi gateway router standing on a light oak console, soft daylight, minimal product photography, clean background. |
| `card-mesh.jpg` | Whole Home WiFi | A small unbranded white mesh wifi node plugged into a wall socket in a bright hallway, minimal, soft daylight. |
| `card-total-care.jpg` | Total Care | A tidy coil of network cable and a wall data socket on a clean pale wall, soft daylight, minimal, no people or tools in hand. |
| `card-device-protection.jpg` | Device Protection | A smartphone, tablet and laptop arranged neatly on a clean pale surface, top-down, minimal, soft even light. |

---

## After you generate them

1. Save with the **exact filenames** into the folders shown.
2. Hard-refresh (`Ctrl+Shift+R`).
3. Send them to me and I'll wire anything that needs adjusting.

**Total: 32 images** — 1 hero, 9 banners, 7 backgrounds, 15 card thumbnails.
You don't need all of them. Every slot degrades cleanly, so generate in whatever
order you like and add them as you go.
