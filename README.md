# 🎮 Discord Server Multi-Page Website

A beautiful, multi-page interactive website to showcase your Discord community with stunning animations and modern design.

## 📁 File Structure

```
Server/
├── index.html       # Page 1 - Welcome/Introduction
├── about.html       # Page 2 - About Server & Purpose
├── team.html        # Page 3 - Meet the Team
├── connect.html     # Page 4 - Social Media & Feedback
└── README.md        # This file
```

## 🎯 Pages Overview

### **Page 1 - index.html (Welcome)**
- Eye-catching hero section with gradient background
- Welcome message and call-to-action buttons
- "Get Started" button navigates to the next page
- Smooth animations and floating icon effect

**Color Scheme:** Purple & Cyan Gradient

### **Page 2 - about.html (About & Purpose)**
- Detailed information about the Discord server
- What makes the community special
- Why the server was created
- Feature grid with 6 key points per section
- Responsive cards with hover effects

**Color Scheme:** Pink & Red Gradient

### **Page 3 - team.html (Meet the Team)**
- Showcase team members/moderators
- Member avatars with roles
- Individual descriptions and skills
- Professional card layout with smooth animations
- 4 changeable team member templates

**Color Scheme:** Cyan & Teal Gradient

### **Page 4 - connect.html (Social & Feedback)**
- 6 social media link cards (Twitter, Instagram, YouTube, TikTok, Facebook, Twitch)
- Feedback section with Google Form integration
- Toggle-able embedded Google Form
- Modern button design with gradient backgrounds
- Quick access to all social channels

**Color Scheme:** Orange & Yellow Gradient

## ✨ Features

✅ **Multi-Page Navigation** - Navigate forward/backward between pages with buttons or arrow keys
✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
✅ **Smooth Animations** - Slide-in effects, hover animations, and floating elements
✅ **Embedded CSS/JS** - All styling and functionality combined in each HTML file (no external dependencies)
✅ **Page Counter** - Visual indicator showing current page (X / 4)
✅ **Keyboard Navigation** - Use arrow keys (← / →) to navigate
✅ **Modern Gradients** - Eye-catching gradient backgrounds on each page
✅ **Interactive Elements** - Hover effects, buttons, and transitions throughout

## 🚀 Getting Started

1. **Extract all files** to a folder on your computer
2. **Open index.html** in your web browser
3. **Navigate** using the arrow buttons or arrow keys
4. That's it! No server or installation required

## 🎨 Customization Guide

### Change Text Content

#### Page 1 (index.html)
Find the hero-container section and update:
```html
<h1>Welcome to Our Discord Community</h1>
<p>Join a vibrant community where like-minded individuals connect, share, and grow together...</p>
```

#### Page 2 (about.html)
Update the info-section content with your server's actual details:
```html
<h2><span>💬</span> What Is This Discord Server?</h2>
<p>Your custom description here...</p>
```

#### Page 3 (team.html)
Update team member information in the team-card sections:
```html
<h3>Your Name</h3>
<div class="role">Your Role</div>
<p>Your description...</p>
```

#### Page 4 (connect.html)
Update social media links:
```html
<a href="https://twitter.com/yourhandle" target="_blank" class="social-card twitter">
```

**Replace the Google Form URL** with your actual form:
```html
<a href="https://forms.gle/YOUR_FORM_ID" target="_blank" class="feedback-btn">
<iframe src="https://forms.google.com/YOUR_FORM_IFRAME"></iframe>
```

### Change Colors

Edit the `:root` CSS variables in each file's `<style>` section:

```css
:root {
    --primary: #5865F2;        /* Main blue */
    --primary-dark: #4752C4;   /* Dark blue */
    --secondary: #43B581;      /* Green */
    --accent: #FAA61A;         /* Yellow */
    --text-dark: #2c2f33;      /* Dark text */
    --bg-light: #f8f9fa;       /* Light bg */
}
```

### Change Background Gradients

Each page has a unique gradient. Edit the `.page-wrapper` background:

```css
.page-wrapper {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Customize Social Media Links

Update social card links in connect.html:
```html
<a href="YOUR_ACTUAL_LINK" target="_blank" class="social-card twitter">
```

### Add More Team Members

Copy and paste a team-card block and modify:
```html
<div class="team-card">
    <div class="team-card-header">
        <div class="avatar">🎯</div>
    </div>
    <div class="team-card-body">
        <h3>Name</h3>
        <div class="role">ROLE</div>
        <p>Description...</p>
        <div class="skills">
            <span class="skill-tag">Skill 1</span>
            <span class="skill-tag">Skill 2</span>
        </div>
    </div>
</div>
```

## 🔗 Google Form Integration

To embed your Google Form feedback:

1. **Create a Google Form** at forms.google.com
2. **Get the form's embed code:**
   - Click "Send" → Select code icon `</>`
   - Copy the iframe `src` attribute URL
3. **Update in connect.html:**
   - Replace the Google Form links (2 places)
   - Line ~415: `<a href="YOUR_FORM_LINK">`
   - Line ~423: `<iframe src="YOUR_FORM_IFRAME_LINK">`

## 📱 Mobile Optimization

All pages include responsive design with breakpoints for:
- **Desktop**: Full width, all features visible
- **Tablet (768px)**: Optimized grid layout
- **Mobile (480px)**: Single column, touch-friendly buttons

## ⌨️ Keyboard Shortcuts

- **Right Arrow (→)** - Go to next page
- **Left Arrow (←)** - Go to previous page

## 🎭 Emoji Suggestions

For customizing emojis in headers:
- 👑 King/Crown - Owner/Leader
- 🛡️ Shield - Moderator/Security
- 🎨 Artist Palette - Creative/Designer
- 💡 Lightbulb - Developer/Tech
- 🌟 Star - VIP/Special Role
- 🎮 Game Controller - Gaming
- 🎵 Music Note - Music/DJ
- 📚 Books - Education/Wiki Master

## 🎨 Color Gradients Used

- **Page 1**: Purple to Magenta (`#667eea` → `#764ba2`)
- **Page 2**: Pink to Red (`#f093fb` → `#f5576c`)
- **Page 3**: Cyan to Teal (`#4facfe` → `#00f2fe`)
- **Page 4**: Pink to Yellow (`#fa709a` → `#fee140`)

## 🐛 Troubleshooting

**Forms not showing?**
- Check that you've added your actual Google Form URL
- Test the link in a new tab to ensure it works

**Navigation buttons disabled?**
- This is intentional - page 1 prev button and page 4 next button are disabled
- Use arrow buttons/keys to verify all pages work

**Styles look different?**
- Ensure you're opening the HTML files directly (file://)
- Some browsers may require local server setup for full functionality

**Mobile layout issues?**
- Clear your browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Check screen size isn't zoomed in

## 💡 Pro Tips

1. **Backup before editing** - Copy files before making changes
2. **Test locally first** - Test all links before sharing
3. **Use consistent branding** - Keep colors and fonts consistent
4. **Keep descriptions brief** - Mobile users appreciate concise text
5. **Update team info regularly** - Keep member info current
6. **Share social links** - Add your actual Discord invite link

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS/Android)

## 🚀 Future Enhancements

Consider adding:
- Real backend server for form submissions
- Email notifications for feedback
- Dark mode toggle
- Translation support for multiple languages
- Admin dashboard to manage team members
- Animated background effects
- Video backgrounds
- Chat widget integration

## 📝 License

Free to use and modify for your Discord server!

## 🎉 Next Steps

1. ✅ Customize the text content for your server
2. ✅ Update social media links
3. ✅ Add your Discord server invite link
4. ✅ Connect your Google Form
5. ✅ Update team member information
6. ✅ Choose custom colors if desired
7. ✅ Share with your Discord community!

---

**Created for Discord Communities** 🎮
Enjoy your beautiful new server website!
