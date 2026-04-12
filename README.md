# L&T Electricals

Marketing site for Liam Crooks and L&T Electricals, built with Next.js, Tailwind CSS, and `shadcn/ui`.

## Run locally

```bash
npm install
npm run dev
```

## Contact form setup

Copy `.env.example` to `.env.local` and add working SMTP details plus the destination inbox for Liam.

The contact form supports image and video attachments and sends them through the server-side route at `src/app/api/contact/route.ts`.
