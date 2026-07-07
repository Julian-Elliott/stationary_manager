# AI Actor Playtest Report — V1 pilot

Six AI actors each wrote their own controller policy, played full sessions of the *actual game code* through [playtest/harness.js](../playtest/harness.js), read back the complete narrator transcript their play produced, and filed reports. This document synthesizes them; fixes shipped in the same commit are marked.

| Actor | Style | Outcome | Fun |
|---|---|---|---|
| FrameOne | speedrunner / economy breaker | 3/3 WINs: (1) optimal 6-day clear, 121/0 requests, best streak 42, 0 staplers lost, 10 egg | 9/10 |
| TouchEverything | chaos gremlin | Run 1 (full gremlin): WIN on day 6, $540, 1/3 staplers, 13 eggs, 0 retries. Run 2 (arson): | 8/10 |
| marigoldPress | cozy night player | WIN on both runs. Run 1: won day 6 with 1 stapler, $539, 8 eggs, 2 strikes on day 5. Run 2 | 8/10 |
| PV16 | completionist (16 eggs) | WIN, twice. Run 1: day 6 complete, 16/16 assessments filed, A+ grade, 0 failed requisition | 9/10 |
| RegressionRex | QA masochist | Run 1: GAVE UP AFTER 3 RETRIES (two intentional day-1 deaths, then two unplanned day-5 wip | 8/10 |
| StanleyScholar | narrative critic | WIN in all 3 runs. Run 1 (the graded run): fired on day 4 at 401s after the stamp blindsid | 8/10 |

## Highlights from the sessions

### FrameOne — speedrunner/optimizer

Played three full headless sessions. Run 1 (optimal route): pre-order buffers per day, one-throw-in-flight delivery discipline, hire 3, day-5 clip-pallet arbitrage, TPS pre-stock on day 5 — won with 121/0 fulfilled/failed, streak 42, kudos 63,186, day 6 reconciled in 2.25 seconds. Run 2 (never hire + exploit probes): won 120/0 with zero staff, confirmed the API can buy UI-locked items (day-1 stamps + 20-pack clip pallet, $35), measured the mid-air double-throw stock vaporization (40 paper spent on a 20-paper request), farmed the petty-cash solvency floor (ended day 2 at $8, wages -$36, opened day 3 at $20), and receipts on clip arbitrage (4,926-clip request pays $53.59; clips cost $0.0015/unit at pallet-deal rate). Run 3 (any%): deliverTPS() has no day/active guard and S.tps.got exists from boot — bought the full TPS list in minute one, fed a reconciliation table that doesn't exist yet a…

Best moment: "Now THAT is a purchase order. The wheelbarrow union just called an emergency all-hands." — fired at 2s of day 1, run 1, the instant my frame-one bulk pre-order went in; being read that fast felt great.

> Frame one: buy everything. The narrator called an emergency wheelbarrow-union all-hands before the intro cursor finished blinking — respect. Run 1 was the clean route: 121-for-121, streak 42, day 6 reconciled in 2.25 seconds off day-5 pre-stock, and he STILL called me idle at t=48 while I was mid-flow. Personnel file says INFP; my APM says otherwise. Run 2, no staff, all crimes: the catalog's day-locks live in the UI only, double-drags vaporize stock (40 paper for a 20-paper request, measured), and the petty-cash envelope refunds payroll if you zero your wallet at close. Then run 3. The TPS ta

### TouchEverything — chaos gremlin. Pokes the omniscient eye, presses forbidden but

Three full headless runs. Run 1: maximum chaos (eye poked 8x, button pressed instantly, drawer/plant/bins/workers/floor all tapped, ~20 deliberate misdeliveries, directives ignored to dial -4) still WON day 6 with 13/16 eggs — chaos is richly authored and the game absorbs it. Run 2: deliberate arson verified every mercy system — strike barks, eye stapler restore (2→3 confirmed), FIRED at 86s day 1, snapshot retry ('take two' line), petty-cash solvency floor, and a clean recovery to a win. Run 3: confirmed a critical sequence break — placeOrder ignores unlock days and deliverTPS ignores S.tps.active, so stamps bought on day 1 plus $48 of supplies won the entire game on day 3 with an A+ grade. Zero crashes, zero shim errors, 14/16 distinct eggs found across runs. Five bugs filed (1 critical, 4 minor), all cited to transcript timestamps and source lines.

Best moment: 'FINE. One (1) free golden stapler. Never do that again.' — third eye-poke, 2 seconds into day 1, run 1. The pay-out-for-pestering gag landing inside the opening seconds set the whole tone.

> Day one I poked the god in the eye until it paid me a stapler I didn't need, opened a locked drawer for one paperclip, and got six personality diagnoses before the coffee was cold. The narrator HATES me and cannot look away — when I pressed the forbidden button three times in four seconds it said 'I love you,' which is the healthiest relationship I've had. I burned the office down twice on purpose: got acquired by a fax consortium at 86 seconds, and the universe agreed to pretend nothing happened (it was lying). Then the crown jewel: I bought stamps three days before stamps existed and filed t

### marigoldPress — the cozy night-time player: long idle stretches, plant-tending, 

Played two full 6-day sessions headless (~570s and ~600s sim each). The game genuinely supports a gentle playstyle: hire 3 runners on day 2 (~$45 threshold works), keep a one-request cushion of stock per item, and the runners carry almost everything — I personally intervened only for near-expiry throws. Every cozy interaction has a bespoke narrator payoff: 3 plant taps, greeting all 6 workers, tapping runners hello, alphabetizing the bins, mashing the drawer for Marjorie during the password event, and one polite forbidden-button tap all produced unique lines, and 8 of 16 personnel-file eggs fell out of simply being nice and obedient. Obedience is mechanically rewarded too: at dial>=2 the narrator hyperspace-fulfills a request on day 5 ('comply_hi'). Day 5 is where gentleness breaks — in run 1 the reply-all storm (463s) plus the soggy-delay event (504s) stacked into two strikes at 515s/52…

Best moment: "Daydreaming at the window mid-shift. I've named that cloud after you — it drifts, it means well, it files nothing. Personnel file updated: INFP." — 97s day 2, the very first time I gazed out the window during a tending round. Felt written specifically for this persona.

> Clocked in with chamomile. The narrator calls me his darling meat calculator and pretends this is an insult; by day 2 he'd named a cloud after me for daydreaming, so we both know how it is. I hired all three runners early and mostly let the office breathe — watered the plant (new leaves, better morale than the staff), said hello to Deborah through Doris, tidied the bins into alphabetical order because it is correct, and mashed a drawer open for Marjorie. The password was 'password'. Of course it was. Day 5 bared its teeth — rain on the wheelbarrows, a reply-all storm, and on my first shift two

### PV16 — the completionist. One life, one save file, sixteen personality assessmen

Read the terrain, wrote one policy (policy_eggs16.js), ran it twice through the real game code. Day plan: d1 = 5-box ESFP burst at 19s, plant x3 (ISFP, 4s), drawer x10 (ISTP, 7s), near-miss every delivery until ESTP (70s), window tap after idle_long (INFP, 47s). d2 = hire to 3 and check in on the crew (ENFJ, 152s); ISFJ landed organically at 112s ("Five consecutive deliveries to Deborah"). d3 = triple-tapped the button within 4s of it rising (ENFP), argued with the corpse (ENTP), poked the eye past the gift (INTP) — all inside 6 seconds of day-3 chaos. d4 = alphabetical bins (ISTJ) + all six workers (INFJ) at 304s, fifth straight directive obeyed (ESTJ, 322s), all six desks supplied (ESFJ, 369s), two exact-quantity pencil orders (INTJ, 409s). d5 = pallet spree (ENTJ, 425s) doubling as TPS war chest. d6 = 14,000 clips + 2,000 sheets + THE STAMP reconciled in 16 seconds, carried the GOOGOL…

Best moment: 'The button rose from the floor and you pressed it in under four seconds. You didn't even read the label. I love you. Personnel file updated: ENFP.' — fired at 193s the instant my third tap landed, right after the set-piece gasp 'You PRESSED it.' Perfect payoff for a speedrun press.

> Day one I tended a plant, cracked a drawer, burst five boxes like a piñata festival, and stood at a window until the narrator named a cloud after me. Sixteen slots in the personnel file; I wanted every one. The button was the best three seconds of my career — pressed before the label finished existing, and the thing that stole every computer on Earth said 'I love you.' Day four I ran the table: bins alphabetized, six workers seen, fifth directive obeyed, Greg not left behind, two prophetic pencil orders. In the second run my devotion to Dave starved three desks and a fax consortium acquired us

### RegressionRex — QA masochist

Ran the full adversarial regression suite across two real harness runs. VERIFIED GOOD: (1) Retry snapshot is exact — both day-1 suicides restored money=$50, empty stock, 0 in-transit orders, 3 staplers, no duplication; the day-6 retry restored 19,469 clips / 6,647 stamps / 27 in-transit orders bit-for-bit. (2) Letting the day-2 reply-all storm fully expire (8 linked paper requests) cost EXACTLY 1 stapler (3->2, dayFail=1). (3) Price spike is exactly 1.5x with ceil: pencils box $1->$2, clips box $2->$3, measured via money deltas. (4) Entering day 6 at negative cash (-$31.72 after wages) triggers the solvency floor at exactly $55; the full TPS shopping list (clip pallet deal $15 + clip crate $9 + paper crate $14 + stamp box $5 = $43) fits with $12 margin. (5) Stalling day 6 with clips+paper reconciled but the stamp withheld correctly fires the tps_fail set piece at t=150, and the retry is …

Best moment: "And there it goes — 8 perfect deliveries, undone. The hyperspace audience is doing the wave." + "You let 30 paper rot in requisition limbo. The company noticed; the company always notices." — 297s d2, the exact moment the reply-all storm I deliberately abandoned expired for its single stapler. Perf

> Day one I died twice on purpose, clipboard in hand, waiting for the snapshot to leak. It didn't. Fifty dollars, zero stock, zero duplication, both times — disgustingly clean. The storm test: eight requests abandoned, one stapler smashed, exactly one, and the narrator did the wave while I poked his eye until he refunded it. Priced the recall spike by hand: ceil, 1.5x, correct. Then I got greedy — 193 pencil boxes to zero out my wallet — and day 5 executed me twice behind a truck that unloads one box per 0.28 seconds. Fair? Debatable. Reproducible? Twice. Run two I dumped in crates, limped into 

### StanleyScholar — narrative-games critic playing an average, slightly sloppy run

Played three full 6-day sessions via the headless harness (~670-724 sim-seconds each, 132-151 narrator lines per run). Run 1 was the engineered "average player" arc: idled 16s on day 1, threw pencils at a desk that asked for paper, poked the eye until it surrendered a stapler, pressed the forbidden button on day 3 despite two escalating warnings, ignored the new stamps item on day 4, wandered off at t=70, got acquired by a fax machine consortium, and won on the retry. Run 2 left the button alone until the narrator pressed it himself on day 6 ("FINE. FINE. I'll do it."). Run 3 ignored the TPS reconciliation entirely to see the failure beat. Found 10 of 16 personality-test eggs across runs. Zero crashes, zero shim errors, no stuck states. Verdict on the central question: the narrator is a character, not a ticker — he reacts to what you specifically did (walking off, poking, pressing, dawdl…

Best moment: 'Enter our hero: you, my darling meat calculator, star of my favorite show, about to have the worst and best week of your life — mostly worst.' — cold open, second 1. The premise, the relationship, and the tone in one line; best cold open economy I've seen this year.

> Day one, I sat on my hands for sixteen seconds just to see if he'd blink first. He did: "it's not as though $50 worth of stock is quietly depreciating on the loading dock. It is." Reader, I was charmed. This narrator is a character — petty, lonely, quotable — and his best lines are earned, not scheduled: poke his eye three times and he pays you a stapler to stop; leave his forbidden button alone for six days and he presses it himself, sulking. I got fired twice on purpose and both firings were funnier than my victories. But the back half needs an editor: he told me the same prudent-order joke 

## Consolidated bugs and fix status

| Sev | Finding | Found by | Status |
|---|---|---|---|
| critical | deliverTPS unguarded — game winnable day 1 (API/console) | FrameOne, TouchEverything | ✅ fixed — guarded to day 6 active |
| major | placeOrder ignores unlock days & pallet lock | FrameOne, TouchEverything, PV16, StanleyScholar | ✅ fixed — unlock/pallet validation in code |
| major | Double-drag mid-air deliveries vaporize stock silently | FrameOne | ✅ fixed — in-flight tracking + refunds |
| major | {money} token always prints bank balance — payday lines wrong | StanleyScholar | ✅ fixed — caller data wins (payday shows the wage) |
| major | Idle/ambient lines permanently stop after day ~2 | marigoldPress | ✅ fixed — action-aware + day-scoped keys (ambient lines live all week) |
| major | Bulk order spam starves emergency deliveries for ~60s | RegressionRex | ✅ fixed — same-item merge + fast unload |
| major | Solvency floor farmable as a daily wage refund; amount misnarrated | FrameOne, RegressionRex | ✅ fixed — stock-rich players get no bailout; line generic; announced each time |
| minor | "0 boxes hit the dock" nonsense number | 4 actors | ✅ fixed — counts dropped boxes |
| minor | Stamp-placed bark precedes TPS announcement | 4 actors | ✅ fixed — announcement precedes any delivery |
| minor | Eye-poke stapler gift wasted at full staplers | 3 actors | ✅ fixed — $10 fallback at full staplers |
| minor | INFJ egg awarded for tapping empty desks | TouchEverything | ✅ fixed — inactive desks excluded |
| minor | INTJ egg double-counts same demand | PV16 | ✅ fixed — distinct item/day pairs |
| minor | Simultaneous strikes swallow the 1-of-3 announcement | PV16 | ✅ fixed — no cooldown swallowing |
| minor | Retry ledger keeps ghost-timeline earnings | RegressionRex | ✅ fixed — full stats snapshot |
| minor | Retry always says "take two"; single variant | RegressionRex | ✅ fixed — 3 variants with take-counter |
| minor | Shuffle-bag can repeat a line back-to-back | StanleyScholar | ✅ fixed — bag no longer repeats across reshuffle |
| minor | Retry launders record — fired day 6, graded A+ | StanleyScholar | ✅ fixed — lifetime failures + retries gate A+ |
| minor | Kudos title bands 15x below real scores | FrameOne | ✅ fixed — rescaled 8x |
| minor | "Still" directive auto-obeys for non-pointer actions | FrameOne, PV16 | ✅ fixed — game actions break the trust exercise |
| minor | Barks interleave with letterboxed set pieces | marigoldPress | ✅ fixed — ticker holds during set pieces |

All 20 findings were fixed in the same patch as this report. FrameOne's day-1 any% run and the exploit receipts live in the workflow transcripts; the harness and all six policies remain runnable for regression (`node playtest/harness.js <policy.js>`).
