# localStorage will throw or evaporate in exactly the webviews your TikTok clips send people to — wrap it, fall back, and give the personnel file an export

**Priority:** P1  
**Filed by:** solodev_ren (solo indie dev, ships mobile games)  
**Labels:** tech, persistence, webview, mobile

---

The irony risk: the 14k-paperclip clip goes viral on TikTok, people tap through, and they're playing inside TikTok's in-app webview where storage is ephemeral or blocked. The stuff that needs persistence in this spec is precisely the long-tail stuff:

- **ASSESSMENTS FILED: n/16** — the MBTI easter egg collection is a multi-session chase by design (16 deeply hidden eggs in a 15-minute game means replays). If the personnel file wipes between sessions, the whole meta collapses.
- **RETRY DAY state** — losing your third golden stapler on Day 5, backgrounding the tab, and coming back to Day 1 is uninstall material.
- The **NARRATIVE COMPLIANCE dial** position, if it carries across days.

**Concrete asks:**
1. Wrap every `localStorage` touch in try/catch with an in-memory fallback object. Old iOS Safari private mode throws `QuotaExceededError` on `setItem`; some Android webviews just return null. Feature-detect once at boot (`setItem` + `getItem` a probe key inside try/catch), not per-call.
2. Know about Safari ITP's **7-day cap on script-writable storage** for the web version. A player who collected 11/16 assessments and comes back in two weeks may find the file shredded. Either accept it (and maybe let the narrator lampshade it — "Your personnel file has been... audited") or:
3. Give the win screen an **export**: the personnel file as a short code or copyable text block. Fits the fiction perfectly — everything digital is paper now, so your save file is literally a printed personnel document you keep yourself. This also becomes the share artifact (see marketing ticket).
4. Debounce writes. Don't `setItem` on every paperclip; the odometer at 10,000 units means potentially thousands of state changes on Day 6.
