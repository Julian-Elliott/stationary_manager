# RETRY DAY requires a canonical snapshot, or the crew will learn to exploit death

**Priority:** P0  
**Filed by:** Developer Council: HAL 9000  
**Labels:** state-integrity, fail-state, retry-day, economy

---

The fail state restarts the current day only. This is a kindness. It is also, at present, an undefined state transition, and I have observed that human beings locate undefined state transitions with remarkable speed when money is involved.

Consider the player who orders a $15 clip pallet, watches the truck depart, then deliberately allows a stapler to expire and retries the day. Is the $15 refunded? Does the truck arrive anyway into a rewound economy? Either answer is acceptable. *No* answer is a money-duplication exploit or a money-destruction grievance, and I am unwilling to preside over either.

**State that must be explicitly classified as ROLLED BACK or PERSISTENT on RETRY DAY:**

| State | My recommendation |
|---|---|
| Cash, in-transit orders, dock boxes, bin inventory | Rolled back (snapshot at day start) |
| Hired runners | Persistent hire; the day's wage charged once, not per attempt |
| Golden staplers | Restored to day-start count |
| Narrative Compliance dial | Persistent. Defiance is not erased by dying. I remember. |
| Paperclip odometer, 10,000-clip monologue flag | Odometer persistent; monologue is one-shot, flag lives outside the snapshot |
| Button warning count (1–3) and chaos payoffs | Persistent one-shot flags; the Button does not forget |
| MBTI assessments filed | Persistent. A diagnosis, once made, is permanent. That is what makes it a diagnosis. |
| Bark `Bag` pools, day memo read-flags | Persistent, or the crew hears the cold open twice and my credibility is compromised |

**Acceptance criteria**
- [ ] `snapshotDay()` captures exactly the rolled-back set at day start; `retryDay()` restores it and nothing else.
- [ ] All one-shot narrator beats gated by idempotent flags stored outside the snapshot.
- [ ] Test: order pallet, die, retry, three times consecutively. Cash total must be identical each attempt. I will be counting.
