# V2 Pilot Notes — synthesis of the review board

*Reviewed: 61 tickets from 9 personas + the forum debate, the AI developer council's 42 narration pitches, and the smoke-test results of the V1 build. This is the shaping document for the V2 pilot.*

## What V1 already absorbed (fixed during the build)

| Board finding | V1 response |
|---|---|
| P0 economy hard-lock / retry death-loop (architect-systems, GLaDOS, HAL, Wheatley) | Day-start solvency floor ($20, $55 on Day 6) with the narrator's contemptuous petty-cash envelope; RETRY DAY restores a full day-start snapshot **including in-transit orders** (kills a dupe exploit) |
| P0 unpreventable stapler losses from truck RNG (architect-systems) | Timer floor of 30s for unstocked items, +8s first-of-type grace, +4s per extra throw needed, transit narrowed to 6–9s when a live request depends on it |
| Combo rewards hoarding (architect-systems, TundraLaw) | Chain extends only on fresh deliveries (≥35% timer left); stale saves keep but don't grow the chain; x5 pays spectacle + narrator resentment, only +32% cash |
| Reply-all storm = 8 deaths (architect-systems, CARROT-QA) | One delivery answers the whole thread (cluster fulfillment); a storm expiry costs exactly one stapler, the thread dies together |
| Narrator Time vs live thumb (Wheatley, HAL, architect-ux) | Letterbox freezes all timers AND eats any live drag/selection; set pieces queue instead of clobbering each other |
| iOS WebAudio silence (solodev_ren) | CLOCK IN button is the unlock gesture; context resumed on every pointerdown |
| localStorage evaporating in webviews (solodev_ren) | try/catch-wrapped; the game runs fine with zero persistence |
| Council narration | 4 lines promoted into the game (HAL's "human error. Yours, specifically.", GLaDOS's "panic with better posture" + paperclip-sphere, Wheatley's wall-staring) |

## V2 pillars (from the board, in priority order)

1. **The CLOCK IN punch clock as difficulty contract** (from-debate, P0): STANDARD / REDUCED HOURS (marigoldPress's no-fail Cozy Shift — timers wilt instead of strike) / IRON FAX (TundraLaw's permadeath week). One diegetic screen, three audiences, and it doubles as the audio unlock.
2. **RETRY DAY scars the world, not the wallet** (from-debate + TundraLaw + GLaDOS's "define what death forgets"): the narrator *remembers* every firing ("Day 3, take four. I've had a plaque made."); a complaint form stays framed on the wall per retry. Cash untouched — resentment removed, stakes kept.
3. **The GOOGOL job needs a new verb, not bigger numbers** (solodev_ren P2, the most important V2 design ticket): mail *sorting* — routing rivers of envelopes between conveyor desks — prototyped standalone before any planetary art is drawn. Episode 2 is Mini Metro with paper mail and a jealous narrator meeting *Kevin, the Googol narrator, who does voices*.
4. **PERMANENT RECORD drawer** (from-debate): one persistence surface — personnel file, MBTI assessments filed, lifetime odometer, firings — exportable as a printable paper personnel file (Web Share API; the win-screen stats card is the share object).
5. **An IMPOSSIBLE DEMAND day** (TundraLaw): one scripted day that mathematically cannot be fully cleared; grading shifts from completion to *choices* (who did you let fail — the narrator notices if you always sacrifice Greg).
6. **Compliance directives become traps sometimes** (TundraLaw): "Order 4,000 staplers. Trust me." Obeying costs money, defying costs dial — the dial finally buys endings.
7. **Cozy channel** (marigoldPress): nameable runners, thankable Gary, memos re-readable inside DA-TA-BASE, Deborah's birthday on Day 4 (she got exactly one ticket asking for this and she deserves it), quiet-hours audio preset.
8. **Accessibility rule from the debate**: no information exists only as audio; every sound gets a visual twin.

## The "One-Punch-Man of AI meme stories" direction

The pilot already plays the OPM chord: a mundane man who is *inexplicably, upsettingly* excellent at the most boring job in the universe, hyped by a cosmic narrator who resents how good the content is. V2 leans in as a **serialized season structure** — each employer is a "villain arc" (GOOGOL's 4.1 billion letters, AMAZONIA's warehouse-planet, the FED's paper blockchain), each ending with a bigger recruitment letter, while the narrator's shonen-announcer awe grows in direct proportion to his irritation. The meme engine is the escalation gap: the world treats stationery logistics as apocalyptic stakes; the hero just… restocks the bins. Rule for writers: **the manager never speaks and never struggles; only the world escalates.**

## Browser-capability brief (for V1.1/V2 engineering)

*Assembled from model knowledge (Jan 2026); the live-docs verification sweep died on a session rate limit — re-run it before committing to anything Safari-specific.*

- **Worth adopting now:** Vibration API for box-thunks on Android (silently no-ops on iOS Safari — acceptable); Web Share API for the win-card (universal); Wake Lock during play (widely supported; release on visibilitychange); `visualViewport` for keyboard/notch-safe HUD plus `env(safe-area-inset-*)` padding for the CRT strip; OffscreenCanvas if the iso scene ever needs a worker (supported in all evergreens since Safari 17).
- **Worth prototyping for V2:** WebGPU 2D batching only if the GOOGOL mail-river needs thousands of sprites (Canvas 2D is fine below ~2k draws/frame); AudioWorklet for a proper synth voice; View Transitions for memo cards (progressive enhancement).
- **Tempting but no:** SpeechSynthesis for a voiced narrator — voice quality/interrupt behavior is wildly inconsistent across iOS/Android and would flatten the CARROT menace; a human VO recording is the V2 answer. WebCodecs replay export is a rabbit hole; share cards cover the viral loop.
- **Single-file constraints:** everything must stay inline (CSP-restricted hosts block external fetches); `file://` blocks nothing this game uses; keep localStorage wrapped (private-mode Safari throws).

## Easter eggs (spoilers — the full personnel file)

Sixteen hidden assessments, one per MBTI type, never hinted in the UI; the win screen shows only `ASSESSMENTS FILED: n/16`.

| Type | Hidden trigger |
|---|---|
| ISTJ | Tap the four bins in alphabetical order (CLIPS→PAPER→PENCILS→STAMPS) |
| ISFJ | Five consecutive deliveries to the same worker |
| INFJ | Tap all six workers in a single day (checking in, quietly) |
| INTJ | Twice, order the *exact* quantity currently requested of that item |
| ISTP | Worry the locked DA-TA-BASE drawer open with 10 taps (reward: one paperclip) |
| ISFP | Tend the office plant three times (it grows) |
| INFP | After the narrator's long-idle monologue, tap the window (a cloud is named after you) |
| INTP | Keep poking the narrator's eye five more times *after* winning the free stapler |
| ESTP | Three deliveries in one day with under 2 seconds left |
| ESFP | Burst five boxes within three seconds |
| ENFP | Press THE BUTTON within four seconds of it rising, label unread |
| ENTP | Press the spent button five more times, purely to argue with it |
| ESTJ | Obey five narrator directives in a row |
| ESFJ | Supply all six desks in a single day (even Greg) |
| ENFJ | Hire the full crew, then personally check in on each runner |
| ENTJ | Order pallets of three different items (annex the supply chain) |
