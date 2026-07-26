# Deployment Guide

This guide explains how to deploy Northbridge to production.

---

# Before You Deploy

Complete the following checklist:

* Update branding
* Replace placeholder content
* Configure metadata
* Verify contact information
* Optimize images
* Run a production build

---

# Build the Project

Install dependencies:

```bash
npm install
```

Create a production build:

```bash
npm run build
```

If the build completes successfully, the project is ready for deployment.

---

# Run the Production Build

```bash
npm run start
```

Test the production version locally before deploying.

---

# Deploying to Vercel

1. Import the project into Vercel.
2. Configure any required environment variables.
3. Deploy.
4. Verify the production URL.
5. Test all pages and interactive components.

---

# Deploying to Other Platforms

Northbridge can also be deployed to:

* Netlify
* Railway
* Render
* VPS or dedicated Node.js servers

Follow your hosting provider's Next.js deployment documentation.

---

# Post-Deployment Checklist

* Verify navigation
* Test forms
* Check responsiveness
* Validate metadata
* Confirm images load correctly
* Test performance

Congratulations! Your Northbridge website is now live.
