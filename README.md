# Workflow ArrayBuffer Error Reproduction

This is a minimal reproduction of the ArrayBuffer error when using `workflow` library with Next.js.

## Setup

1. Install dependencies: `pnpm install` (or `npm install`)
2. Run the dev server: `pnpm dev` (or `npm run dev`)
3. Open http://localhost:3000
4. Click "Test Workflow" button
5. The error should occur: `TypeError: Cannot perform ArrayBuffer.prototype.slice on a detached ArrayBuffer`

## Files

- `app/workflows/test.ts` - Simple workflow with 3 steps
- `app/api/test/route.ts` - API route that starts the workflow
- `app/page.tsx` - Frontend page to test the workflow
- `next.config.ts` - Next.js config with `withWorkflow()` wrapper

## Error

The error occurs when calling `start()` and awaiting `run.returnValue`:

```
TypeError: Cannot perform ArrayBuffer.prototype.slice on a detached ArrayBuffer
```

## Environment

- Next.js: 16.0.3
- workflow: 4.0.1-beta.13
- Node.js: v22.14.0 (or latest LTS)

