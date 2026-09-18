# petrecon.me

Personal research and AI engineering portfolio for **Shuijin Lin (林水锦)**, Ph.D. student in Biomedical Engineering at Xi'an Jiaotong University.

## Focus

- Biomedical AI and medical imaging
- PET / MRI and low-dose PET reconstruction
- MRI-to-PET generation and multimodal representation alignment
- AI-assisted research engineering
- Custom agents, skills, and research compute infrastructure

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Cloudflare Workers

The site is fully static. `wrangler.jsonc` deploys the generated `dist/` directory with Workers Static Assets and binds the Worker to `petrecon.me` as a Custom Domain.

```bash
npm install
npm run deploy
```

> If `petrecon.me` already has a conflicting CNAME record, remove or migrate that record before attaching the Worker Custom Domain.

## Privacy / disclosure policy

Public pages intentionally expose architecture, role boundaries, sanitized examples, and mock infrastructure data. Internal hostnames, IP addresses, credentials, unpublished data locations, private prompts, and live cluster information are not published.
