<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1xAvaXMZQ5mQhzkNMsiejO2N6DbG32-TA

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy on Vercel

1. Push the repository to GitHub (or your preferred Git host).
2. Import the project at https://vercel.com/import and select the repository.
3. Keep the default `npm install`, `npm run build`, and `dist` settings; Vercel detects the Vite config automatically.
4. Add the `GEMINI_API_KEY` environment variable in the Vercel dashboard (Project Settings → Environment Variables).
5. Deploy; all routes resolve via the SPA fallback defined in `vercel.json`.
