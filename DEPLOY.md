# GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

## Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Automatic Deployment**:
   - The workflow will automatically trigger on every push to the `main` branch
   - You can also manually trigger deployment from the Actions tab

3. **Access Your Site**:
   - Your site will be available at: `https://[username].github.io/[repository-name]/`
   - The URL will be shown in the Actions deployment logs

## Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Base Path**: Automatically configured for GitHub Pages
- **Asset Optimization**: Enabled with vendor chunking for better caching

## Manual Deployment

If you need to deploy manually:

```bash
npm run build
# Then upload the dist/ folder contents to your hosting service
```

## Troubleshooting

- Ensure your repository is public or you have GitHub Pro for private repo Pages
- Check the Actions tab for deployment logs if issues occur
- Verify all assets are using relative paths (handled automatically by this config)