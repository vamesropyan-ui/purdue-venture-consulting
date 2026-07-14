# GitHub Pages Custom Domain Setup

## Quick Setup Steps

1. **Purchase your domain** from any registrar (GoDaddy, Namecheap, etc.)

2. **Configure GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Enter your custom domain (e.g., `yourdomain.com`)
   - Enable "Enforce HTTPS"

3. **Add DNS Records** at your domain registrar:
   
   **For Root Domain (@):**
   ```
   Type: A
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
   
   **For WWW:**
   ```
   Type: CNAME
   Name: www  
   Value: [your-username].github.io
   ```

4. **Wait for DNS propagation** (15 minutes to 24 hours)

5. **Verify setup** at [dnschecker.org](https://dnschecker.org)

## Important Notes

- Use `/` as base path for custom domains (already configured)
- GitHub automatically handles SSL certificates
- DNS changes can take up to 24 hours to propagate
- Your site will be accessible at both `yourdomain.com` and `www.yourdomain.com`

## Troubleshooting

- If SSL doesn't work immediately, wait 24 hours for certificate provisioning
- Check DNS settings with online tools if the domain doesn't resolve
- Ensure no conflicting DNS records exist from previous hosting