# Stylin Beauty Salon

> **Note**: This is a high-fidelity **demo project** designed for cold calling outreach and client demonstrations. It is used to showcase modern design layouts, premium aesthetics, and interactive features to prospective salon businesses.

A premium, fully responsive, high-end single-page landing page application mockup for **Stylin Beauty Salon**, built using **React** and **Vite**. 

This project showcases clean frontend architecture, custom styling systems, and interactive UI states tailored for a luxury boutique aesthetic.

---

## 🎨 Design System & Aesthetic

The application is styled with a bespoke **"Sober Cream & Champagne Gold"** palette, drawing inspiration from high-end Shopify luxury storefronts:

*   **Colors**:
    *   **Body & Sections**: Premium Soft Cream (`#FAFAFA`)
    *   **Contrast Blocks (Hero/Footer)**: Deep Luxurious Charcoal (`#111111`)
    *   **Accents**: Polished Champagne Gold (`#D4AF37`)
*   **Typography**:
    *   Headings: Elegant, high-contrast Serif (*Cormorant Garamond*)
    *   Body & Buttons: Clean, modern Sans-Serif (*Montserrat*)
*   **Micro-interactions**: Soft gold borders, smooth interactive hover transitions, sliding portfolio overlays, and elegant state animations.

---

## ✨ Features

1.  **Centered Hero Banner**: 
    *   Darkened background overlay displaying a high-resolution bridal makeover header image.
    *   Perfectly centered layouts for the brand logo, spaced header typography, and a gold border-box book button.
2.  **Asymmetrical Services Section**: 
    *   Recreates a premium editorial layout featuring a large serif title.
    *   A prominent vertical oval portrait container flanked on the lower-left and right corners by offset square portfolio frames.
    *   Minimalistic descriptions and arrow-accented service directories.
3.  **Dynamic Lookbook & Portfolio**: 
    *   Grid showcasing various categories (Bridal, Nikkah Makeovers, Party Styling, Advanced Skin & Hair Care).
    *   Micro-interaction hover card overlays displaying categories and descriptive lookbook titles.
4.  **Controlled Booking System**: 
    *   Fully functional React-controlled form capturing Name, Phone, Email, Services, Date, and Time.
    *   Integrated validation checking that triggers a custom-styled, animated fly-in Toast Notification confirming bookings.
5.  **Adaptive Header & Sticky Nav**: 
    *   Nav bar detects scroll coordinates, dynamically transitioning from transparent to a solid dark header background with soft drop shadows.
    *   Built-in toggling drawer menu optimized for mobile viewports.

---

## 🛠️ Tech Stack

*   **Core**: React 18+
*   **Build Tool**: Vite 6+
*   **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
*   **Icons & Assets**: Inline SVG icons & custom portfolio assets

---

## 📁 File Structure

```text
├── public/
│   ├── stylin-logo-main.png     # Renamed original gold emblem (bypasses browser favicon cache)
│   ├── s*.jpg/jpeg/webp         # High-resolution portfolio asset images
│   └── Animate_this_image.mp4   # Video asset portfolio segment
├── src/
│   ├── assets/                  # Local default build assets
│   ├── App.jsx                  # Main state container & React components
│   ├── index.css                # Global styles, variables, typography, and grids
│   └── main.jsx                 # Vite application entry mount point
├── index.html                   # HTML entry containing metadata, fonts, and favicon
├── package.json                 # Dependency manifests
└── vite.config.js               # Dev server and builder configuration
