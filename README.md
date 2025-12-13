# Niyantran Landing Page

A modern, conversion-optimized landing page for Niyantran - Building Discipline, Focus & Self-Study Habits through the revolutionary 4 AM Club methodology.

## 🎯 Features

- **Navigation Header**: Logo and menu (Home, About Us, Careers, Blogs)
- **Hero Section**: Attention-grabbing headline with split visual design
- **Reality Check**: Addresses parent pain points and frustrations
- **Solution Section**: 4-step process explanation (Observation → Custom Plan → 4 AM Club → Micro-Tracking)
- **Interactive 4 AM Workflow**: Clickable/hoverable timeline with step details
- **Tech Trust**: Showcases the app's features with live mockup
- **Lead Form**: Collects parent information with backend integration
- **Multiple Pages**: About Us, Careers, and Blogs with full layouts
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **SEO Optimized**: Fast loading, semantic HTML, meta tags

## 🎨 Design Theme

- **Primary Colors**: 
  - Deep Blue (#001F54) - Trust & Education
  - Niyantran Blue (#0B3D91) - Professional
  - Orange (#FF6B35) - Energy & Action
  - Gold (#FFB627) - Sunrise & Premium
  - Light Blue (#E8F1F8) - Clean & Calm

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **React Router DOM** - Client-side routing
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **Axios** - API calls

## 📦 Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Create environment file:**
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
```

3. **Run development server:**
```bash
npm run dev
```

The site will open at `http://localhost:5173`

## 🗺️ Routes

The application has the following routes:

- `/` - Landing page (Home)
- `/about` - About Us page
- `/careers` - Careers page with job listings
- `/blogs` - Blog posts listing

All routes include Header (with navigation) and Footer components.

## 🏗️ Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder, ready to deploy.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to deploy

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 🔌 Backend Integration

### API Endpoints Required

#### 1. Lead Submission
**Endpoint:** `POST /api/leads`

**Request Body:**
```json
{
  "parentName": "John Doe",
  "childClass": "8",
  "whatsappNumber": "9876543210",
  "source": "landing_page",
  "timestamp": "2025-12-06T10:30:00Z"
}
```

**Response:**
```json
{
  "success": true,
  "leadId": "LEAD123",
  "message": "Lead saved successfully"
}
```

**Backend Actions:**
1. Save lead to database (Lead table)
2. Trigger WhatsApp message to parent using Twilio/Meta API
3. Send notification to admin dashboard
4. Log event for analytics

**Sample WhatsApp Message:**
```
Hello [Parent Name]! 👋

Welcome to Niyantran - The 4 AM Club! 🌅

Thank you for your interest in transforming your child's learning journey. We have received your inquiry.

Our Head Mentor will call you within 24 hours to discuss:
✅ Free 7-day observation period
✅ Custom study plan for Class [X]
✅ How the 4 AM Club works

Limited slots available!

- Team Niyantran
```

#### 2. Analytics Tracking (Optional)
**Endpoint:** `POST /api/analytics/track`

**Request Body:**
```json
{
  "event": "section_viewed",
  "data": {
    "section": "4am_advantage",
    "duration": 45
  },
  "timestamp": "2025-12-06T10:30:00Z"
}
```

## 📊 Database Schema

### Leads Table
```sql
CREATE TABLE leads (
  id INT PRIMARY KEY AUTO_INCREMENT,
  parent_name VARCHAR(255) NOT NULL,
  child_class VARCHAR(10) NOT NULL,
  whatsapp_number VARCHAR(15) NOT NULL,
  source VARCHAR(50) DEFAULT 'landing_page',
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 🎯 Conversion Optimization

### Current Optimizations:
- Clear value proposition in hero section
- Social proof (ratings, testimonials)
- Trust indicators (free trial, no hidden charges)
- Multiple CTAs throughout the page
- Mobile-first responsive design
- Fast loading times with Vite
- Smooth scroll animations

### Recommended A/B Tests:
1. Hero headline variations
2. CTA button colors (Orange vs Gold)
3. Form placement (top vs bottom)
4. Video explainer vs static images

## 📈 Analytics Integration

To add Google Analytics or other tracking:

1. Add script to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. Track events in components:
```javascript
gtag('event', 'form_submit', {
  'event_category': 'Lead Generation',
  'event_label': 'Landing Page Form'
});
```

## 🔧 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'niyantran-blue': '#YOUR_COLOR',
  'niyantran-orange': '#YOUR_COLOR',
  // ...
}
```

### Add New Section
1. Create component in `src/components/NewSection.jsx`
2. Import in `src/components/LandingPage.jsx`
3. Add between existing sections

### Modify Content
All content is in the component files:
- `Header.jsx` - Navigation and logo
- `HeroSection.jsx` - Hero content
- `RealityCheck.jsx` - Pain points
- `Solution.jsx` - Process explanation
- `InteractiveFourAM.jsx` - Interactive 4 AM workflow
- `TechTrust.jsx` - App features
- `Footer.jsx` - Form and footer
- `About.jsx` - About Us page
- `Careers.jsx` - Careers page
- `Blogs.jsx` - Blog listing page

## 🐛 Troubleshooting

### Issue: Form not submitting
- Check API endpoint in `.env` file
- Verify backend server is running
- Check browser console for errors

### Issue: Styles not loading
- Run `npm install` to ensure all dependencies are installed
- Clear browser cache
- Check Tailwind configuration

### Issue: Icons not showing
- Verify `lucide-react` is installed: `npm install lucide-react`

## 📝 TODO for Backend Developer

- [ ] Create `/api/leads` POST endpoint
- [ ] Set up Lead table in database
- [ ] Integrate Twilio/Meta WhatsApp API
- [ ] Create WhatsApp message template
- [ ] Set up admin notification system
- [ ] Add analytics tracking (optional)
- [ ] Set up CORS for frontend domain
- [ ] Add rate limiting for form submissions
- [ ] Create admin dashboard to view leads

## 📞 Support

For issues or questions:
- Email: support@niyantran.com
- Developer: Rakesh Ranjan

## 📄 License

Copyright © 2025 Niyantran. All rights reserved.

---

**Built with ❤️ for India's Future Leaders**
