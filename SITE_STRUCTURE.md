# Niyantran Website - Site Structure

## 🗺️ Navigation Flow

```
┌─────────────────────────────────────────────────────────┐
│                    HEADER (All Pages)                    │
│  ┌────────┐  ┌──────┐  ┌────────┐  ┌──────┐  ┌──────┐ │
│  │  Logo  │  │ Home │  │ About  │  │Career│  │ Blogs│ │
│  └────────┘  └──────┘  └────────┘  └──────┘  └──────┘ │
└─────────────────────────────────────────────────────────┘
                            │
                            │
        ┌───────────────────┼────────────────────┐
        │                   │                    │
        ▼                   ▼                    ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   HOME (/)   │    │/about        │    │   /careers   │
├──────────────┤    ├──────────────┤    ├──────────────┤
│ Hero Section │    │ Mission      │    │ Open Roles   │
│ Reality Check│    │ Team Info    │    │ Application  │
│ Solution     │    │ 4AM Benefits │    │ Contact Info │
│ Interactive  │    │ Full Layout  │    │ Full Layout  │
│   4AM ⭐     │    └──────────────┘    └──────────────┘
│ Tech Trust   │            │
│ Lead Form    │            ▼
└──────────────┘    ┌──────────────┐
                     │   /blogs     │
                     ├──────────────┤
                     │ Post Cards   │
                     │ Excerpts     │
                     │ Read More    │
                     │ Full Layout  │
                     └──────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   FOOTER (All Pages)                     │
│  ┌────────┐  Lead Form  │  Trust Badges  │  Copyright  │
│  │  Logo  │  Newsletter │  Social Links  │  © 2025     │
│  └────────┘             └────────────────┴──────────────┘
└─────────────────────────────────────────────────────────┘
```

## 📱 Component Hierarchy

```
App.jsx (Router)
│
├─ / (Home Route)
│  └─ LandingPage
│     ├─ Header ⭐
│     ├─ HeroSection
│     ├─ RealityCheck
│     ├─ Solution
│     ├─ InteractiveFourAM ⭐ (NEW - replaces static)
│     ├─ TechTrust
│     └─ Footer
│
├─ /about
│  └─ About ⭐
│     ├─ Header
│     ├─ Content
│     └─ Footer
│
├─ /careers
│  └─ Careers ⭐
│     ├─ Header
│     ├─ Job Listings
│     └─ Footer
│
└─ /blogs
   └─ Blogs ⭐
      ├─ Header
      ├─ Blog Cards
      └─ Footer
```

⭐ = New or Modified Component

## 🎨 Interactive 4 AM Workflow

```
┌─────────────────────────────────────────────┐
│        The 4 AM Advantage Section           │
├─────────────────────────────────────────────┤
│                                             │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐│
│   │ 4:00 AM  │  │ 4:05 AM  │  │ 4:10 AM  ││
│   │ 🔔       │  │ 📸       │  │ ✍️       ││
│   │ Wake-Up  │  │ Verify   │  │ Study    ││
│   │ Alert    │  │ Photo    │  │ Session  ││
│   └──────────┘  └──────────┘  └──────────┘│
│        │              │              │      │
│        └──────────────┼──────────────┘      │
│                       ▼                     │
│   ┌─────────────────────────────────────┐  │
│   │  CLICK/HOVER TO SEE FULL DETAILS    │  │
│   │  "Mentor sends wake-up via WhatsApp"│  │
│   └─────────────────────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

## 🔄 User Journey Examples

### Journey 1: Parent Learning About Program
```
Home → About Us → Blogs → Lead Form (Footer)
```

### Journey 2: Potential Team Member
```
Home → Careers → Apply Now
```

### Journey 3: Quick Inquiry
```
Home → Interactive 4AM Section → Lead Form
```

## 📂 File Organization

```
src/
├── assets/
│   └── logo.svg ⭐ NEW
│
├── components/
│   ├── Header.jsx ⭐ NEW
│   ├── InteractiveFourAM.jsx ⭐ NEW
│   ├── LandingPage.jsx (modified)
│   ├── Footer.jsx (modified)
│   ├── HeroSection.jsx
│   ├── RealityCheck.jsx
│   ├── Solution.jsx
│   └── TechTrust.jsx
│
├── pages/ ⭐ NEW
│   ├── About.jsx
│   ├── Careers.jsx
│   └── Blogs.jsx
│
├── services/
│   └── api.js
│
├── App.jsx (modified - routing)
├── main.jsx
└── index.css
```

## 🎯 Key Features by Page

### Home (/)
- ✅ Hero with pain point headline
- ✅ Reality check bullets
- ✅ 4-step solution process
- ✅ Interactive 4 AM timeline ⭐
- ✅ Tech features showcase
- ✅ Lead capture form

### About Us (/about)
- ✅ Mission statement
- ✅ 4 AM Club explanation
- ✅ Company values
- ✅ Scientific backing

### Careers (/careers)
- ✅ Open positions
- ✅ Job descriptions
- ✅ Application process
- ✅ Company culture

### Blogs (/blogs)
- ✅ Educational content
- ✅ Parent guides
- ✅ Study tips
- ✅ Success stories

## 🚀 Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Performance Notes

- **Routing**: Client-side (SPA) - no page reloads
- **Logo**: Inline SVG - no extra HTTP request
- **Interactive Section**: CSS-only animations - smooth performance
- **Code Splitting**: Possible with React.lazy() if needed

## 🎨 Design System

### Colors
- Deep Blue: `#001F54` (Trust)
- Orange: `#FF6B35` (Energy)
- Gold: `#FFB627` (Premium)
- Light Blue: `#E8F1F8` (Clean)

### Typography
- Headings: Bold, Large
- Body: Regular, Readable
- CTAs: Bold, Contrasting

### Spacing
- Sections: 80px padding (py-20)
- Cards: 24px padding (p-6)
- Grid gaps: 32px (gap-8)

---

**Navigation is now seamless. Logo is prominent. Interactive elements engage users. Ready to convert visitors into leads! 🎯**
