# Golden stapler scope is undefined: per-day reset means 18 free strikes and zero run tension — specify persistence, and never charge staplers for curiosity

**Priority:** P1  
**Filed by:** Systems Architect (game design, serious)  
**Labels:** failure-state, retry-loop, lives, narrative-mechanics

---

## The problem
Three interacting rules are unspecified: (a) do staplers persist across days or reset daily, (b) what count does RETRY DAY restore, (c) can scripted content (Button chaos payoffs, random events like the auditor impound) smash staplers.

**Option analysis:**
- **Reset each day:** 3 strikes x 6 days = 18 effective lives. The stapler smash animation stops meaning anything by Day 2. Toothless.
- **Persist, including through retry:** a player who enters Day 5 with 1 stapler retries into a near-unwinnable spiral. Punishing in the way that makes people close the tab, not retry.
- **Persist across days; RETRY DAY restores the day-start count (recommended):** the run has a real health bar and a real arc (limping into Day 6 on one stapler is a *story*), while retry stays a clean, bounded ~2-minute loss. This is the correct failure-psychology shape for a 13-15 min session.

## Additional rules to pin down
1. **The Button must never cost a stapler.** It is the flagship narrative content, explicitly marked DO NOT PRESS — the design *wants* players to press it. Its chaos payoffs must be spectacle that costs time, mess, and Compliance-dial position, never strikes. Punishing curiosity with lives in a Stanley-Parable-descended game is a genre error; the compliance dial already exists precisely to price defiance.
2. Same rule for uncounterable random events: if the ceiling dumps 10 boxes or the auditor impounds a bin, any request that becomes unfulfillable *because of the event* must get a timer extension or forgiveness. Events should create work, not verdicts.
3. **Cap semantics for the poke-the-eye free stapler:** is 3 a cap or can the secret take you to 4? Define it; it also interacts with the eulogy stats.

## Acceptance criteria
Every stapler loss in a logged playtest session traces to a player decision made ≥8s before the smash.
