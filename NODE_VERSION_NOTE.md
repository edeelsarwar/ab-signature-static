# Node.js Version Note

## ⚠️ Important: Node.js Version Requirement

This project requires **Node.js version 18 or higher** to build and run properly.

### Current System
- Detected Node version: v16.17.0
- Required Node version: v18.0.0 or higher

### Why This Matters

Vite 5.x requires Node.js 18+ for:
- Modern JavaScript features
- Improved performance
- Security updates
- Better dependency support

### Options

#### Option 1: Upgrade Node.js (Recommended)

**Using nvm (Node Version Manager):**
```bash
# Install nvm if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js 18 or higher
nvm install 18
nvm use 18

# Verify version
node --version  # Should show v18.x.x or higher

# Reinstall dependencies
cd "AB Signature -static"
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Using Official Installer:**
- Download from: https://nodejs.org/
- Install LTS version (v20 recommended)
- Restart terminal
- Reinstall project dependencies

#### Option 2: Use Compatible Vite Version (Temporary Fix)

If you cannot upgrade Node.js immediately, you can downgrade Vite:

```bash
cd "AB Signature -static"

# Edit package.json and change vite version to:
# "vite": "^4.5.0"

# Then reinstall:
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Note:** This is not recommended as Vite 4.x is older and you'll miss out on performance improvements.

### Quick Check

To verify your Node.js version:
```bash
node --version
```

Expected output: `v18.x.x` or higher (v20.x.x recommended)

### Development Server Status

**Good News:** The development server (`npm run dev`) might work even with Node v16, though you may see warnings.

**Build Issues:** Production builds (`npm run build`) require Node 18+ due to Vite's internal dependencies.

### Testing Without Upgrade

If you want to test the application without upgrading:

```bash
# This should work (with warnings)
npm run dev

# Access at: http://localhost:3000
```

The warnings won't affect functionality in development mode, but building for production will fail.

### Recommended Action

**For Development & Production:**
1. Upgrade to Node.js 18 or 20 (LTS)
2. Reinstall dependencies
3. Run `npm run dev` or `npm run build`

### Support

If you need help upgrading Node.js:
- nvm documentation: https://github.com/nvm-sh/nvm
- Node.js download: https://nodejs.org/
- Check system requirements: README.md

---

**TL;DR:** Upgrade Node.js to v18+ for the best experience and to enable production builds.



