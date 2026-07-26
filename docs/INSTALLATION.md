# Installation Guide

Welcome to **Northbridge**.

This guide will help you install and run the project on your local machine.

---

# System Requirements

Before getting started, ensure you have the following installed:

* Node.js 20 or later
* npm (included with Node.js)
* Git
* A code editor such as Visual Studio Code

---

# 1. Download the Project

If you purchased Northbridge from Gumroad, extract the downloaded ZIP file.

If you cloned the repository:

```bash
git clone https://github.com/bakeolam-beep/northbridge.git
```

Navigate into the project folder:

```bash
cd northbridge
```

---

# 2. Install Dependencies

Run:

```bash
npm install
```

This installs all required packages listed in `package.json`.

---

# 3. Configure Environment Variables

Create a `.env.local` file in the project root if one is not included.

Add your project-specific environment variables as needed.

Example:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Update the values to match your development or production environment.

---

# 4. Start the Development Server

Run:

```bash
npm run dev
```

The development server will start.

Open your browser and visit:

```text
http://localhost:3000
```

---

# 5. Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

---

# 6. Project Structure

```text
northbridge/
│
├── public/
├── src/
├── docs/
├── package.json
├── next.config.ts
└── README.md
```

---

# 7. Troubleshooting

## Dependencies fail to install

Delete:

```text
node_modules
package-lock.json
```

Then run:

```bash
npm install
```

---

## Development server will not start

Ensure:

* Node.js is installed.
* Dependencies are installed.
* The correct Node.js version is being used.

---

## Build errors

Run:

```bash
npm run build
```

Review the reported errors and resolve them before deployment.

---

# Deployment

Northbridge can be deployed to any platform that supports Next.js, including:

* Vercel
* Netlify
* Railway
* Render
* Self-hosted Node.js environments

---

# Need Help?

Refer to the remaining documentation inside the `docs/` folder for customization, deployment, troubleshooting, and support information.

Thank you for choosing **Northbridge** by **BakeBeep**.
