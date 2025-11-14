# CodeSandbox Setup Instructions

## Option 1: Import from GitHub

1. Push this folder to a GitHub repository
2. Go to [CodeSandbox](https://codesandbox.io)
3. Click "Import from GitHub"
4. Paste your repository URL
5. CodeSandbox will automatically detect it's a Next.js project

## Option 2: Upload as ZIP

1. Zip the entire `codesandbox-reproduction` folder
2. Go to [CodeSandbox](https://codesandbox.io)
3. Click "Import" → "Upload ZIP"
4. Upload the zip file
5. CodeSandbox will extract and set up the project

## Option 3: Manual Setup in CodeSandbox

1. Go to [CodeSandbox](https://codesandbox.io)
2. Create a new sandbox
3. Select "Next.js" template
4. Copy all files from this folder into the sandbox
5. Install dependencies: `pnpm install` or `npm install`
6. The dev server should start automatically

## Testing

Once the sandbox is running:

1. Wait for the dev server to start
2. Click the "Test Workflow" button on the homepage
3. The ArrayBuffer error should appear in the console and on the page

## Files Structure

```
codesandbox-reproduction/
├── app/
│   ├── api/
│   │   └── test/
│   │       └── route.ts      # API route that triggers the error
│   ├── workflows/
│   │   └── test.ts           # Simple workflow definition
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Frontend test page
├── next.config.ts            # Next.js config with withWorkflow()
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
└── sandbox.config.json       # CodeSandbox config
```

## Expected Error

When clicking "Test Workflow", you should see:

```
TypeError: Cannot perform ArrayBuffer.prototype.slice on a detached ArrayBuffer
```

This error occurs in the API route when calling `start()` and awaiting `run.returnValue`.

