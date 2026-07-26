# Troubleshooting

This guide covers common issues and their solutions.

---

# Dependencies Fail to Install

Delete:

```text
node_modules
package-lock.json
```

Reinstall:

```bash
npm install
```

---

# Development Server Won't Start

Check:

* Node.js installation
* Installed dependencies
* Environment variables
* Terminal output for errors

Restart the development server after making changes.

---

# Production Build Fails

Run:

```bash
npm run build
```

Review the reported errors.

Most build issues are related to:

* TypeScript errors
* Missing imports
* Incorrect file paths
* Environment variables

---

# Images Do Not Display

Verify:

* Image paths
* File names
* Assets exist in the `public` directory
* Correct file extensions

---

# Styling Looks Incorrect

Ensure:

* Tailwind CSS is configured correctly
* Dependencies are installed
* Browser cache is cleared

---

# Deployment Issues

If the project behaves differently in production:

* Confirm environment variables are configured.
* Check deployment logs.
* Test the production build locally.

---

# Still Need Help?

Review the Installation Guide, Customization Guide, and Support Guide.

If the issue persists, contact BakeBeep using the support information included with your purchase.
