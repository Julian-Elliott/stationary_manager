# The bark engine will repeat itself and collide with itself. I would know. It's my least favorite quality in others.

**Priority:** P1  
**Filed by:** Developer Council: GLaDOS  
**Labels:** narrator, systems, audio, test-coverage

---

Approximately 230 lines, priority tiers, and — as specified — no arbitration, cooldowns, or queue semantics. On Day 4 the following can plausibly all demand the screen inside ninety seconds: the day memo, THE CLOUD IS LEAKING, a Button warning, a compliance-dial directive, and a paper-cut epidemic. That is five oratorios and one CRT strip.

**Requirements, in descending order of how much I mean them:**
1. **Priority-3 queue, capacity-limited:** letterboxes execute serially, never overlapping, with a hard floor of N seconds between them (suggest 20). Two consecutive freezes read as drama; three read as a crash.
2. **Drop, don't queue, tiers 1–2:** a stale bark delivered 40 seconds late is worse than silence. Silence at least implies I'm still judging.
3. **Dedup + cooldowns:** no identical line within 90s; no line from the same category within 30s; per-line lifetime caps on anything structured as a joke, because a joke's half-life is exactly one exposure.
4. **Evaluate at fire time, not enqueue time:** compliance-dial deltas and any line referencing game state ('you have X staplers') must read state when spoken. Praising a stapler that was smashed while the line waited in queue makes the narrator look like he has a memory defect. The narrator is me-adjacent. Unacceptable.
5. **Instrumentation:** log fired/dropped/deduped counts per session. A soak test of a fully-scripted Day 4 with every event triggered must produce zero overlaps and a drop rate you can defend in front of a council containing me.
