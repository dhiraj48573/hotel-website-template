# 🏨 Premium Reusable Hotel & Dharamshala Website Template

A modern, high-performance, mobile-first, and bilingual (English + हिन्दी) website template built specifically for **hotels, dharamshalas, guest houses, lodges, bhakt niwas, homestays, ashrams, and resorts** in India.

Built with **React.js, Vite, Tailwind CSS, React Router, and Lucide Icons**.

---

## ⚡ 30-Minute Client Customization Guarantee

This entire website is 100% data-driven. **You never have to rewrite frontend code, markup, or page components to onboard a new client.**

Simply update one central configuration file:
👉 **[`src/config/property.config.js`](file:///f:/LEAD-CWD/Hotel%20Template/src/config/property.config.js)**

### What you update for every client:
1. **Property Name, Tagline & Category** (`Hotel` / `Dharamshala` / `Guest House` / `Bhakt Niwas` / `Resort`)
2. **Accommodation Mode**:
   - `'hotel'` (Luxury amenities, room service, travel desk, premium suites)
   - `'dharamshala'` (Pilgrim stay, per-person rates, Satvik bhojanalaya, temple distances, ID rules)
   - `'hybrid'` (Balanced pilgrim-friendly hotel — like demo property *Ganga Niwas*)
3. **Visual Theme**:
   - `'theme-a'`: Navy + Champagne Gold + Crisp White (Premium Hospitality)
   - `'theme-b'`: Heritage Terracotta + Warm Sand + Ivory (Spiritual / Ashram / Dharamshala)
   - `'theme-c'`: Modern Charcoal + Royal Blue + Ice White (Contemporary Urban Hotel)
4. **Contact Details**: Phone number, WhatsApp number, Email, Physical address & Landmark note
5. **Check-in / Check-out Timings & Policies**: Guest guidelines, ID rules, festival/peak season notice
6. **Room Categories & Tariffs**:
   - Toggle room active/inactive (`active: true/false`)
   - Fixed tariff or Starting price mode (`pricingMode: 'fixed' | 'starting_at' | 'enquire'`)
   - Per-night or Per-person unit (`priceUnit: 'per_night' | 'per_person'` — essential for Dharamshala dorms!)
   - Bed counts, guest capacity, AC/Non-AC, bathroom type, amenities, and photos
7. **Facilities & Amenities**: Highlights with icons
8. **Nearby Landmarks & Verified Distances**: Temples, ghats, railway stations, bus stands, and airports
9. **Photo Gallery**: High-res images categorized by Exterior, Rooms, Bathrooms, Dining, and Nearby
10. **Google Maps Embed Link**: Client's interactive map iframe source

---

## 🌐 5 Complete Pages Included

- **Page 1: Home (`/`)**
  - Navigation bar with property identity, top contact strip, language switcher (EN / हिन्दी) and live theme selector
  - Full-width hero banner with location badge, property tagline, and headline: *"YOUR COMFORTABLE STAY IN [LOCATION]."*
  - Quick date check & availability widget right on hero
  - Property introduction & welcome story
  - Featured room category cards with photos, amenities, prices, and direct WhatsApp CTAs
  - Property facilities and verified amenities
  - Why Choose Us section (Prime location, Satvik atmosphere, Transparent tariffs, Elevator care)
  - Nearby sacred landmarks with verified distances and walking/driving times
  - Authentic guest testimonials with star ratings and verified badges
  - Interactive photo gallery preview with category filters
  - Location & directions section with interactive Google Maps embed
  - WhatsApp booking CTA banner
  - Comprehensive footer with timings, policies, room links, and directions

- **Page 2: About Us (`/about`)**
  - Heritage, history, and background
  - Owner / management introduction and hospitality philosophy (*"Atithi Devo Bhava"*)
  - High-resolution property photography
  - Dedicated pilgrim and family stay information (elderly care, elevator access, Ganga Aarti guidance)
  - Property rules, satvik atmosphere guidelines, and mandatory ID requirements

- **Page 3: Rooms & Pricing (`/rooms`)**
  - Complete list of accommodation options (AC Deluxe, Non-AC, Standard Double, Family 4-Bedded Suite, Triple Sharing, Pilgrim Dormitory)
  - Interactive category filter pills (All, AC Only, Non-AC/Budget, Family, Dormitory)
  - Detailed room specifications: Max guests, bed arrangement, room size, AC/Non-AC, bathroom type, amenities
  - Dual pricing modes: Fixed tariff and "Starts from" tariff
  - Peak-season / festival notice reminder
  - Direct WhatsApp enquiry button with prefilled room name
  - "Check Availability" modal trigger

- **Page 4: Facilities & Gallery (`/facilities`)**
  - Complete verified amenities grid with Lucide icons (Wi-Fi, 24h Hot Water Geyser, Lift, CCTV, Power Backup, RO Water, Front Desk, Wheelchair accessibility)
  - **Shri Ganga Satvik Bhojanalaya** feature deep-dive (timings, thali price, pure veg fasting food)
  - Full filterable photo gallery (Exterior, Rooms, Bathrooms, Dining, Nearby Attractions)
  - Fullscreen lightbox view with image zoom, caption, and next/prev controls

- **Page 5: Contact & Booking (`/contact`)**
  - Direct reception phone and click-to-call links
  - WhatsApp enquiry link and email
  - Full physical address with landmark hint
  - Interactive Google Maps embed with "Get Directions" navigation
  - Check-in / check-out times and ID proof advisory
  - Comprehensive Booking Enquiry Form (Guest name, mobile, check-in, check-out, adults, children, room category, special notes)
  - Client-side date and input validation
  - Generates formatted WhatsApp message and opens WhatsApp instantly
  - Explicit disclaimer: Enquiry system, confirmed upon property verification
  - Frequently Asked Questions (FAQ) accordion for travelers

---

## 📱 WhatsApp Integration & Click-to-Call

- **Floating WhatsApp Button**: Visible on every single page with soft pulse animation. Expands to offer quick options (Check Availability, Room Enquiry, Group/Yatri Sangha Booking, Direct Call).
- **Prefilled WhatsApp Message Structure**:
```
Namaste! I would like to enquire about accommodation at [PROPERTY NAME].

👤 Guest Name: [GUEST NAME]
📅 Check-in Date: [DATE]
📅 Check-out Date: [DATE]
👥 Adults: [NUMBER]
👶 Children: [NUMBER]
🛏️ Room Type: [ROOM TYPE]
📝 Notes/Requirements: [SPECIAL NOTES]

Please share current room availability, total tariff, and booking details. Thank you!
```
- **Click-to-Call**: Every telephone mention is wrapped in `tel:` for immediate 1-tap calling on mobile phones.

---

## 🇮🇳 Bilingual Support (English & हिन्दी)

- Dedicated language toggle in the header navigation bar (`EN` | `हिन्दी`).
- Context-driven switching via `LanguageContext`.
- Changes all navigation labels, button texts, room titles, amenities descriptions, booking form labels, and disclaimers to natural, respectful Hindi (e.g., *"गंगा निवास में आपका स्वागत है"*, *"सात्विक भोजनालय"*, *"कमरे एवं दरें"*).

---

## 🎨 Design Themes

Switch themes either via `propertyConfig.property.theme` in `src/config/property.config.js` or using the live theme previewer pill in the top header:
1. **Theme A (Default)**: Navy (`#0F172A`) + Champagne Gold (`#D97706`) + Pure White
2. **Theme B**: Heritage Terracotta (`#7C2D12`) + Warm Sand (`#D97706`) + Ivory (`#FFFDF7`)
3. **Theme C**: Modern Charcoal (`#111827`) + Royal Blue (`#1D4ED8`) + Ice White (`#F8FAFC`)

---

## 🔍 SEO & Performance Setup

- Dynamic title & meta description injection with `SEOHead.jsx`
- Automatic **Schema.org `LodgingBusiness` JSON-LD** structured data injection
- Pre-configured `public/robots.txt`
- Pre-configured `public/sitemap.xml`
- Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- Native image lazy loading (`loading="lazy"`)
- Google Fonts (`Playfair Display`, `Inter`, `Noto Sans Devanagari`) loaded with `preconnect`

---

## 🚀 Quickstart & Development

### 1. Install dependencies
```bash
pnpm install
# or
npm install
```

### 2. Run local development server
```bash
pnpm run dev
# or
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for production
```bash
pnpm run build
```

---

## ☁️ Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset: **Vite**
5. Build Command: `pnpm run build` or `npm run build`
6. Output Directory: `dist`
7. For single-page app routing on Vercel, ensure `vercel.json` is present:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
8. Click **Deploy**. Your website is live in under 60 seconds with SSL!

### Option 2: Deploy to Netlify
1. Sign in to [Netlify](https://www.netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Select your repository.
4. Build command: `pnpm run build` or `npm run build`
5. Publish directory: `dist`
6. For client-side routing on Netlify, create a file named `public/_redirects`:
```
/*    /index.html   200
```
7. Click **Deploy site**.

---

## 📋 Client Customization Checklist (30–60 Minutes)

| Step | Action | File to Edit |
|---|---|---|
| 1 | Replace Property Name, Category & Tagline | `src/config/property.config.js` (`property` object) |
| 2 | Set Mode (`'hotel'` / `'dharamshala'` / `'hybrid'`) | `src/config/property.config.js` (`property.mode`) |
| 3 | Set Theme (`'theme-a'` / `'theme-b'` / `'theme-c'`) | `src/config/property.config.js` (`property.theme`) |
| 4 | Update Phone, WhatsApp & Address | `src/config/property.config.js` (`contact` object) |
| 5 | Paste Google Maps Embed URL | `src/config/property.config.js` (`contact.googleMapsEmbedUrl`) |
| 6 | Enable/Disable Room Types & Update Prices | `src/config/property.config.js` (`rooms` array) |
| 7 | Update Nearby Landmarks & Verified Distances | `src/config/property.config.js` (`landmarks` array) |
| 8 | Paste Client Photos (Exterior, Rooms, Dining) | `src/config/property.config.js` (`gallery` array) |
| 9 | Update Check-in/out Times & Policies | `src/config/property.config.js` (`policies` object) |
| 10 | Deploy to Vercel / Netlify | Run `pnpm run build` & push to host |

---

## 🛡️ Demo Content Disclaimer
*Ganga Niwas (Haridwar)* is configured as a realistic fictional demonstration property to illustrate all capabilities. All prices, distances, facilities, and contact placeholders must be replaced with verified client information prior to production deployment.
