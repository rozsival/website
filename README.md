<h1 align="center">🌐 Website</h1>
<p align="center">Vít's personal website with blog about software development using React, TypeScript and friends.</p>
<p align="center">
<a href="https://github.com/rozsival/website/actions/workflows/qa.yml" title="QA"><img alt="QA" src="https://img.shields.io/github/workflow/status/rozsival/website/QA?label=QA&style=for-the-badge"></a>
<a href="https://github.com/rozsival/website/actions/workflows/codeql-analysis.yml" title="CodeQL"><img alt="CodeQL" src="https://img.shields.io/github/workflow/status/rozsival/website/CodeQL?label=CQL&style=for-the-badge"></a>
<a href="https://github.com/rozsival/website/actions/workflows/deploy-preview.yml" title="Deploy Preview"><img alt="Deploy Preview" src="https://img.shields.io/github/workflow/status/rozsival/website/Deploy%20Preview?label=Deploy%20Preview&style=for-the-badge"></a>
<a href="https://github.com/rozsival/website/actions/workflows/deploy-production.yml" title="Deploy Production"><img alt="Deploy Production" src="https://img.shields.io/github/workflow/status/rozsival/website/Deploy%20Production?label=Deploy%20Production&style=for-the-badge"></a>
<a href="https://www.typescriptlang.org" title="Written in TypeScript"><img alt="Written in TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"></a>
<a href="https://nextjs.org" title="Built with Next.js"><img alt="Built with Next.js" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"></a>
<a href="https://mui.com" title="Designed with MUI"><img alt="Designed with MUI" src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"></a>
<a href="https://mui.com" title="Designed with MUI"><img alt="Designed with MUI" src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"></a>
<a href="https://vercel.com" title="Deployed to Vercel"><img alt="Deployed to Vercel" src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"></a>
</p>
<p align="center">🚀 <a href="https://vitrozsival.cz">vitrozsival.cz</a> | 👨‍💻 <a href="https://github.com/rozsival">rozsival</a> | 🐦 <a href="https://twitter.com/vitrozsival">@vitrozsival</a> | 📷 <a href="https://instagram.com/vitrozsival">@vitrozsival</a></p>
<hr>

## 💾 Installation

```bash
nvm install
yarn install
```

## ⚙️ Configuration

Create `.env.local` from `.env.example`

- `NEXT_PUBLIC_BASE_URL` – website base URL for public assets prefixing
- `NEXT_PUBLIC_ROBOTS` – value for `robots` meta tag
- `ROBOTS_POLICY` – value for `robotsTxtOptions.policies` entry in `next-sitemap.js`

## 👨‍💻 Development

```bash
yarn dev
```

## 🚨 QA

```bash
yarn qa
# or
yarn fix
```

## 📦 Build

```bash
yarn build
yarn start
```

## 🚀 Deployment

The website is automatically deployed to [Vercel](https://vercel.com/vitrozsival/website) on push

- `main` – production
- `develop` – preview
