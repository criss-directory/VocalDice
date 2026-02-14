# Cloudflare 403 Blocker Fix - Configure for Search Engine Crawlers

**Issue:** Site is blocking Google, Bing, and other search engine crawlers
**Root Cause:** Cloudflare security settings (Bot Management, WAF, Browser Integrity Check)
**Date:** February 15, 2026

---

## IMMEDIATE FIX - Cloudflare Configuration

### Step 1: Allow Search Engine Crawlers (5 minutes)

1. **Login to Cloudflare Dashboard → Your Domain → Security → Bots**
   - Set "Bot Management" to **"Allow verified bots"** or disable if not on Enterprise
   - This ensures Google, Bing, Yandex crawlers are whitelisted

2. **Go to Security → WAF (Web Application Firewall)**
   - **Disable or configure** any custom rate limiting rules that might block crawlers
   - Check "Managed Rules" - ensure Google/Bing IPs aren't blocked
   - Look for rules containing: "bot", "crawler", "spider" with high sensitivity

3. **Settings → Browser Integrity Check**
   - **DISABLE** "Browser Integrity Check" - this blocks headless crawlers
   - Alternative: Create exception for search engine bots in WAF

### Step 2: Whitelist Search Engine IP Ranges

Go to **Firewall → IP Access Rules** → Add these as Allow:
```
Google:
- 66.249.64.0/19
- 66.249.96.0/19
- 196.126.0.0/15
- 198.41.0.0/15

Bing:
- 207.46.0.0/16
- 204.79.0.0/15
- 65.52.0.0/14

Yandex:
- 5.255.195.0/24
- 37.140.128.0/21
```

**Or simpler:** Just allow these User Agents in Firewall Rules:
```
Allow if User-Agent contains: "Googlebot"
Allow if User-Agent contains: "Bingbot"
Allow if User-Agent contains: "YandexBot" 
Allow if User-Agent contains: "DuckDuckBot"
Allow if User-Agent contains: "Slurp"
```

### Step 3: Disable Unnecessary Security Features (if blocking crawlers)

❌ **DISABLE IF CAUSING 403:**
- Challenge (Captcha) Page mode in Security Level
- Super Bot Fight Mode (if stricter than needed)
- Rate Limiting (unless you need it)

✅ **SAFE TO KEEP ENABLED:**
- DDoS Protection (Cloudflare's standard)
- SSL/TLS Encryption
- Basic security rules

### Step 4: Configure Firewall Rules (Most Important)

Go to **Security → WAF → Firewall Rules** and add this rule:

```
(cf.bot_management.score < 30) 
OR 
(cf.verified_bot_category in {"Search Engine Crawler"})
```

**Action:** Allow

This whitelists verified crawlers.

### Step 5: Check Rate Limiting

Go to **Rate Limiting → Rules**
- Make sure no rule blocks `/sitemap.xml`, `/robots.txt`, or your main pages
- Set reasonable limits (e.g., 50 requests/10 seconds) instead of strict limits

---

## Testing Your Fix

### Test 1: Check if Cloudflare is serving HTML
```bash
curl -I https://vocaldice.com
```
Expected: **200 OK** (not 403)

### Test 2: Check with Google Bot User Agent
```bash
curl -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" https://vocaldice.com
```
Expected: **200 OK**

### Test 3: Use Google's Mobile-Friendly Test
- Go to: https://search.google.com/test/mobile-friendly
- Enter: https://vocaldice.com
- If it shows "Fetch successful", your Cloudflare fix worked! 

### Test 4: Check Search Console Crawlability
- Google Search Console → Core Web Vitals or Coverage
- Manually request Google to crawl your site
- Wait 5 minutes, refresh to see if crawl succeeds

---

## Common Cloudflare Issues Causing 403

| Issue | Solution |
|-------|----------|
| **Browser Integrity Check ON** | Disable it (step 3) |
| **Bot Management too strict** | Set to "Allow verified bots" |
| **Challenge Page enabled** | Disable in Security Level |
| **Rate limiting too tight** | Increase limits or whitelist crawlers |
| **WAF rules blocking crawlers** | Review and disable block rules for bots |
| **Firewall rule blocking crawlers** | Add exception for search engines |
| **IP/Country blocking enabled** | Whitelist Google/Bing IP ranges |

---

## Alternative: Disable All Security Temporarily (Testing Only)

**⚠️ DO NOT LEAVE THIS ENABLED IN PRODUCTION**

1. Go to **Security Level → Off (Essentially Off)**
2. Go to **Bot Management → Off** (if available)
3. Go to **WAF → Rules → Disable All** (temporarily)
4. Test if site loads
5. If it works, re-enable features one-by-one to find the culprit
6. Once found, configure that feature to allow crawlers

---

## robots.txt in Cloudflare

Also verify your `robots.txt` is being served correctly:

```bash
curl -I https://vocaldice.com/robots.txt
```

Should return **200 OK**

Not 403 or 404.

---

## Permanent Cloudflare Configuration for SEO

Once you've fixed the 403, configure Cloudflare for optimal crawling:

**Recommended Settings:**
- 🟢 Security Level: **High** (not Essentially Off)
- 🟢 Browser Integrity Check: **OFF** (for crawler access)
- 🟢 Bot Management: **Allow verified bots** or OFF
- 🟢 Firewall Rules: Whitelist search engines
- 🟢 Rate Limiting: 100+ requests per minute
- 🟢 WAF: Managed Rules enabled but not too strict
- 🟢 Challenge Page: OFF
- 🟢 Cache Level: **Cache Everything** (for static assets)
- 🟢 Caching TTL: 1 hour

---

## After Fixing the 403

1. **Submit updated sitemap to Google Search Console**
   - Go to Sitemaps section
   - Resubmit: https://vocaldice.com/sitemap.xml
   - Wait for Google to re-crawl

2. **Check Coverage Report**
   - Any errors should now show as crawlable
   - URLs should index properly

3. **Monitor for 2 weeks**
   - Check GSC → Performance for impressions/clicks
   - Watch Core Web Vitals for performance
   - Verify in Search Console → Coverage → Indexed

---

## Quick Cloudflare Checklist

- [ ] Browser Integrity Check: **OFF**
- [ ] Bot Management: **Allow verified bots** (or OFF)
- [ ] Security Level: **High** (not Essentially Off)
- [ ] No WAF rules blocking bots
- [ ] Rate Limiting: Reasonable limits (50+ req/min)
- [ ] Firewall Rules: Allow search engine User Agents
- [ ] robots.txt serving with 200 OK
- [ ] sitemap.xml serving with 200 OK
- [ ] Tested with Google Bot User Agent
- [ ] Passed Google Mobile-Friendly Test

---

## Need More Help?

1. Check Cloudflare Status → https://www.cloudflarestatus.com
2. Review Cloudflare Logs for blocked requests:
   - **Analytics → Security → Firewall Events**
   - Look for "Googlebot" entries
   - See what rule blocked them
3. Contact Cloudflare Support (if Enterprise plan)
4. Ask in Cloudflare Community Forums

---

**Expected Results After Fix:**
- ✅ Google crawlers can access site (200 OK)
- ✅ Sitemap.xml is indexable  
- ✅ robots.txt returns 200 OK
- ✅ Pages appear in Google Search Console
- ✅ Organic traffic begins flowing within 2-4 weeks
