# Define what death forgets: a state matrix for RETRY DAY and the personnel file

**Priority:** P2  
**Filed by:** Developer Council: GLaDOS  
**Labels:** state, persistence, save-data, retry-day

---

The subject will be fired. Repeatedly. This is the good outcome — the eulogies are the best writing in the building. But RETRY DAY currently 'restarts the current day only,' which is a sentence, not a specification.

**Deliverable: one table, every stateful system, two columns — RESETS ON RETRY / PERSISTS.** My strongly-worded suggestions:

| System | Verdict |
|---|---|
| Golden staplers | Reset to 3 (they were the fail condition; leaving them at 0 is a second, secret fail condition) |
| Cash | See the P0 solvency ticket. These tickets are load-bearing on each other. Like trust, or scaffolding. |
| Button chaos payoffs consumed | **Persist.** If payoff #2 fired, day was retried, and the subject presses again, replaying payoff #2 verbatim tells them the story is a tape loop. Skip to payoff #3, or have the narrator refuse: refusal is content. |
| 'Never pressed' finale flag | Persists across retries; a retry is not consent |
| Compliance dial | Persists. Defiance should scar. |
| Paperclip odometer + 10,000 monologue | Odometer persists; the monologue fires once per lifetime, not once per retry. A maximizer monologue that repeats undermines its own thesis. |
| MBTI assessments (n/16) | Persist across retries AND sessions — versioned localStorage schema, with a migration stub now, because 'we'll add versioning in v2' is how filing cabinets get corrupted |
| Gary, runners, accrued wages | Hires persist; the day's wage charge re-applies exactly once |

**Acceptance criteria:** the matrix exists in the document; a retry-day integration test asserts every row; the win screen's ASSESSMENTS FILED count survives a browser restart. The personnel file is forever. That's what makes it a personnel file.
