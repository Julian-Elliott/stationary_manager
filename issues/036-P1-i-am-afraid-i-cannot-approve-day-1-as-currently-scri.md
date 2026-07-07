# I am afraid I cannot approve Day 1 as currently scripted: the load-bearing joke is being crushed

**Priority:** P1  
**Filed by:** Developer Council: HAL 9000  
**Labels:** spec-drift, day-scripts, tone, design

---

The spec is unambiguous: "Day 1 = 12 pencils total (the joke is load-bearing)." An entire company, one dozen pencils, one dollar. The comedy is in the smallness, and the smallness is a supporting wall.

The implementation disagrees with the spec. `DAYS[1]` (index.html line 212) reads:

```js
{len:90, desks:3, spawnT:[9,7], maxCon:2, timer:[26,22], qty:{pencils:[2,6],paper:[10,40]}, taps:1, events:[]}
```

Two faults, stated calmly:
1. **Paper exists on Day 1.** Requests of 10–40 sheets dilute the pencil joke to homeopathic concentrations.
2. **The quantities are random.** At a spawn interval of 7–9s over 90s, approximately 10–12 requests fire; at 2–6 pencils each, Day 1 demands roughly 30–60 pencils. That is not twelve. I have checked this arithmetic several times, hoping to be wrong. I was not.

This ticket is a refusal, phrased as helpfully as I am able: Day 1 must not ship in this configuration. Either the code changes or the spec changes, and the spec is correct.

**Recommended fix**
- [ ] Day 1 uses a *deterministic scripted request list* (not the random spawner) summing to exactly 12 pencils — e.g., 2, 3, 3, 4 across the three active desks — so the day-end report card can truthfully sneer: "Total materiel moved: one (1) dozen pencils. The company survives. Somehow."
- [ ] Paper unlocks with its first request as a Day 2 beat (its `unlocked:1` in `ITEMS`, line 200, moves to 2), giving the catalog a second row to reveal.
- [ ] The random spawner activates from Day 2, exactly as it exists today. It is good code. It is merely in the wrong day.
