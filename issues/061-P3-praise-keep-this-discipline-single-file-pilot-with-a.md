# PRAISE (keep this discipline): single-file pilot with a 13-15 min complete arc is the correct shape — do not let it grow a build system

**Priority:** P3  
**Filed by:** solodev_ren (solo indie dev, ships mobile games)  
**Labels:** praise, scope, architecture

---

Filing this as a ticket so it's on record when scope creep comes knocking.

I ship small mobile games solo and I want to be loud about what's right here before I file the complaints:

- **One HTML file, all art drawn in code.** No asset pipeline, no bundler, no CDN fonts. That means the whole pilot is `git clone`-able, itch-uploadable, and embeddable in a webview on day one. Every solo dev who added webpack to a canvas game regrets it. Protect this.
- **13-15 minutes with an actual ending.** A complete session with a WIN state (the GOOGOL envelope drag to your own desk) instead of an endless-mode stub. Pilots that end are pilots that get finished. TO BE CONTINUED is a promise, not a cop-out, because the whole arc lands first.
- **Day 1 = 12 pencils total.** The restraint to make the tutorial day a joke about how little there is to do — and to make that joke load-bearing — is the kind of confidence I usually only see in games that already know they're funny. The ~230 bark lines ARE the content budget and the spec knows it.
- **RETRY DAY restarting only the current day** is the right punishment granularity for a 15-minute game. Nobody replays Day 1's twelve pencils twice.

One guardrail request: put a comment block at the top of the file with a hard line count / section map (RENDER, SIM, BARKS, INPUT) now, while it's small. Single-file is a feature until it's 9,000 unnavigable lines. A little internal structure keeps the feature.

Slightly jealous. Carry on.
