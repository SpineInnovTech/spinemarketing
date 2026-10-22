# Cloudflare DNS, Domain Cutover & SSL/TLS Specification

This document provides the authoritative Cloudflare DNS records, edge routing rules, and SSL/TLS configuration required for the Spine InnovTech corporate marketing site cutover to **`spineinnovtech.com`** and **`www.spineinnovtech.com`**.

---

## 1. Architecture Overview

| Concern | Primary Target | Legacy Redirects |
| :--- | :--- | :--- |
| **Corporate Marketing Apex** | `https://spineinnovtech.com` | `spineinnovlabs.com`, `spineinnovlabs.spineworkspace.com`, `spineinnovtech.spineworkspace.com` |
| **Corporate Marketing WWW** | `https://www.spineinnovtech.com` (301 to apex) | `www.spineinnovlabs.com` |
| **Product Marketing Site** | `https://spineworkspace.com` | — |
| **Authentication Service** | `https://auth.spineworkspace.com` | `/login`, `/signup` on corporate domain 302 redirect here |
| **Live Application Workspace** | `https://app.spineworkspace.com` | `/workspace` on corporate domain 302 redirects here |
| **Worker Service** | `spineinnovlabs-marketing` | Account ID: `3b815e3cd31a7ce892c2c65ea8873387` |

---

## 2. Cloudflare Dashboard DNS Specification

### 2.1 Primary Zone: `spineinnovtech.com`

All DNS records for the primary domain must be set to **Proxied (Orange Cloud)** to ensure Cloudflare Edge Worker execution, SSL termination, and security header enforcement.

| Record Type | Name / Host | Target / Content | Proxy Status | TTL | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CNAME** (or Worker Custom Domain) | `@` (apex) | `spineinnovlabs-marketing.workers.dev` *(or Cloudflare Custom Domain target)* | **Proxied** (Orange Cloud) | Auto | Primary corporate apex via Cloudflare CNAME flattening |
| **CNAME** | `www` | `spineinnovtech.com` | **Proxied** (Orange Cloud) | Auto | Canonical corporate www alias; redirected to apex by Worker |

#### Worker Custom Domain Provisioning (Recommended)
Instead of manual CNAME entry, bind the domains directly in the Cloudflare Dashboard:
1. Navigate to **Workers & Pages** → `spineinnovlabs-marketing` → **Settings** → **Domains & Routes**.
2. Click **Add** → **Custom Domain**.
3. Add `spineinnovtech.com`. Cloudflare will automatically provision the apex DNS record with CNAME flattening and issue Edge TLS certificates.
4. Click **Add** → **Custom Domain** again.
5. Add `www.spineinnovtech.com`.

This directly matches `wrangler.jsonc`:
```jsonc
"routes": [
  { "pattern": "spineinnovtech.com", "custom_domain": true },
  { "pattern": "www.spineinnovtech.com", "custom_domain": true },
  { "pattern": "spineinnovlabs.spineworkspace.com", "custom_domain": true },
  { "pattern": "spineinnovtech.spineworkspace.com", "custom_domain": true }
]
```

---

### 2.2 Legacy Zones & Hostnames (Canonical 301 Consolidation)

To preserve SEO authority, inbound backlinks, and existing bookmarks, legacy hostnames must route through the Cloudflare Worker so `maybeCanonicalRedirect` can issue HTTP 301 redirects to `https://spineinnovtech.com`.

#### Zone: `spineworkspace.com`
| Record Type | Name / Subdomain | Target / Content | Proxy Status | TTL |
| :--- | :--- | :--- | :--- | :--- |
| **CNAME** | `spineinnovtech` | Worker Custom Domain target | **Proxied** (Orange Cloud) | Auto |
| **CNAME** | `spineinnovlabs` | Worker Custom Domain target | **Proxied** (Orange Cloud) | Auto |

#### Zone: `spineinnovlabs.com`
| Record Type | Name / Subdomain | Target / Content | Proxy Status | TTL |
| :--- | :--- | :--- | :--- | :--- |
| **CNAME** | `@` (apex) | Worker Custom Domain target | **Proxied** (Orange Cloud) | Auto |
| **CNAME** | `www` | `spineinnovlabs.com` | **Proxied** (Orange Cloud) | Auto |

---

## 3. SSL/TLS Configuration

Configure the following settings in the Cloudflare Dashboard under **SSL/TLS**:

### 3.1 Encryption Mode
- **Setting**: **Full (Strict)**
- **Rationale**: Ensures complete end-to-end encryption between Cloudflare edge and origin server with cryptographic validation of origin certificates.

### 3.2 Edge Certificates & HTTPS Enforcement
Under **SSL/TLS** → **Edge Certificates**:

1. **Universal SSL**: **Active / Enabled**
   - Automatically issues and renews SAN certificates covering `spineinnovtech.com` and `*.spineinnovtech.com`.
2. **Always Use HTTPS**: **Enabled (ON)**
   - Automatically redirects unencrypted `http://` requests to `https://` with a 301 redirect before reaching the Worker.
3. **Minimum TLS Version**: **TLS 1.2**
   - Prevents legacy/vulnerable protocol handshakes (TLS 1.0/1.1 disabled).
4. **Opportunistic Encryption**: **Enabled (ON)**
5. **TLS 1.3**: **Enabled (ON)**
6. **Automatic HTTPS Rewrites**: **Enabled (ON)**
7. **HTTP Strict Transport Security (HSTS)**:
   - Status: **Enabled**
   - Max Age: `31536000` (1 year)
   - Include subdomains: **Enabled**
   - Preload: Optional (subject to deployment stability review)

---

## 4. Edge Routing & Redirection Rules

The Cloudflare Worker (`worker/index.ts`) enforces two distinct tiers of redirection:

### 4.1 Canonical 301 Redirects (Domain Consolidation)
All legacy hostnames and `www.spineinnovtech.com` are permanently redirected to the apex canonical site `https://spineinnovtech.com`, retaining the exact `pathname` and `search` query string:

| Inbound Hostname & Request | Status | Destination URL |
| :--- | :--- | :--- |
| `https://www.spineinnovtech.com/solutions/sales?ref=partner` | **301** | `https://spineinnovtech.com/solutions/sales?ref=partner` |
| `https://spineinnovtech.spineworkspace.com/about` | **301** | `https://spineinnovtech.com/about` |
| `https://spineinnovlabs.spineworkspace.com/press` | **301** | `https://spineinnovtech.com/press` |
| `https://spineinnovlabs.com/platform` | **301** | `https://spineinnovtech.com/platform` |
| `https://www.spineinnovlabs.com/?tracking=1` | **301** | `https://spineinnovtech.com/?tracking=1` |

### 4.2 Product Entry 302 Redirects (Cross-Domain Navigation)
Corporate site entry shortcuts are redirected with HTTP 302 to their authoritative product and service origins:

| Inbound Corporate Path | Status | Destination URL | Rationale |
| :--- | :--- | :--- | :--- |
| `/login` | **302** | `https://auth.spineworkspace.com/login` | Centralized identity authentication service |
| `/signup` | **302** | `https://auth.spineworkspace.com/signup` | Centralized onboarding and user registration |
| `/workspace` | **302** | `https://app.spineworkspace.com/` | Authenticated live platform application |
| `/onboarding` | **302** | `https://spineworkspace.com/get-started` | Public product marketing onboarding guide |

*Note: Query strings attached to entry paths (e.g., `/login?next=%2Fworkspace`) are preserved during the 302 redirection.*

---

## 5. Pre-Cutover & Verification Checklist

Execute these verification checks before and immediately after updating DNS records in the Cloudflare dashboard:

### 5.1 DNS Propagation Check
```bash
# Verify apex record resolves to Cloudflare proxy IP range
dig +short spineinnovtech.com

# Verify www record resolves
dig +short www.spineinnovtech.com

# Verify nameservers are delegated to Cloudflare
dig +short NS spineinnovtech.com
```

### 5.2 Edge Redirect Verification
```bash
# 1. Verify HTTP -> HTTPS 301 redirect
curl -sI "http://spineinnovtech.com/" | grep -E "HTTP/|location:"

# 2. Verify www -> apex canonical 301 redirect with preserved query string
curl -sI "https://www.spineinnovtech.com/solutions/sales?ref=123" | grep -E "HTTP/|location:"
# Expected: Location: https://spineinnovtech.com/solutions/sales?ref=123

# 3. Verify legacy hostname canonical 301 redirect
curl -sI "https://spineinnovtech.spineworkspace.com/press" | grep -E "HTTP/|location:"
# Expected: Location: https://spineinnovtech.com/press

# 4. Verify auth entry 302 redirects
curl -sI "https://spineinnovtech.com/login?next=/my-work" | grep -E "HTTP/|location:"
# Expected: Location: https://auth.spineworkspace.com/login?next=/my-work

curl -sI "https://spineinnovtech.com/workspace" | grep -E "HTTP/|location:"
# Expected: Location: https://app.spineworkspace.com/
```

### 5.3 Security Headers Verification
```bash
curl -sI "https://spineinnovtech.com/" | grep -E "(Strict-Transport-Security|X-Content-Type-Options|X-Frame-Options|Referrer-Policy)"
# Expected:
# strict-transport-security: max-age=31536000; includeSubDomains
# x-content-type-options: nosniff
# x-frame-options: DENY
# referrer-policy: strict-origin-when-cross-origin
```

### 5.4 Cloudflare Cache Purging
If stale assets or cached redirects are observed during deployment:
- In Cloudflare Dashboard: **Caching** → **Configuration** → **Purge Everything**.
- Zone ID for `spineworkspace.com`: `e400477f3fc2b13a70dd3d63407ce21b`.
- Zone ID for `spineinnovtech.com`: Available in Zone Overview after domain addition.
