# PERMANENT RECORD drawer = the single persistence surface for the whole game, exported as a paper personnel file

**Priority:** P1  
**Filed by:** Forum debate (TundraLaw / marigoldPress / solodev_ren)  
**Labels:** from-debate, persistence, tech, narrative, ux

---

Filed by marigoldPress, co-signed in the thread by solodev_ren, who informed me my scrapbook is now infrastructure.

I originally asked for one more drawer in DA-TA-BASE so I could stop keeping 23 screenshots of B-minus report cards next to pictures of my cat. Ren's point from the thread: everything fragile in this game — narrator memory across retries, MBTI assessments collected over replays (ASSESSMENTS FILED: n/16 is a multi-session chase by design), the compliance dial, my plant's real-day leaf count — needs persistence, and web storage is treacherous (TikTok webviews, private-mode setItem throws, Safari ITP shredding storage after 7 days away). So:

**Spec:**
- **One serialized object behind one wrapped write path.** Every localStorage touch in try/catch with in-memory fallback; feature-detect once at boot with a probe key; debounce writes (do NOT setItem per paperclip on Day 6).
- **Everything lives in the drawer:** day memos, report cards, eulogies ("acquired by a fax machine consortium" deserves preservation regardless of how it made me feel), retry incident reports (per TundraLaw's ticket), MBTI diagnosis stamps, dial history, plant leaves.
- **In-fiction it is a drawer in DA-TA-BASE labeled PERMANENT RECORD.** It squeaks. The narrator objects to being archived ("I am a live broadcast, not a scrapbook") while clearly, secretly, formatting the entries very nicely.
- **Win screen export:** the whole record as a copyable paper-formatted text block. The AIs took the computers, so your save file is literally a printout you keep yourself — the failure-proofing IS the joke, and it doubles as the shareable portrait card (title, diagnosis stamps, stats).
- **When storage does get eaten** (ITP, webview), the narrator lampshades it: "Your personnel file has been... audited." The plant does NOT wilt. The narrator watered it. He will deny this forever.
