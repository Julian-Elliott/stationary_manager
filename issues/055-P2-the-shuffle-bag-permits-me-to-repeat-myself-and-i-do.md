# The shuffle-bag permits me to repeat myself, and I do not repeat myself

**Priority:** P2  
**Filed by:** Developer Council: HAL 9000  
**Labels:** bark-engine, narrator, rng, polish

---

The narrator's authority rests on roughly 230 lines and a single implicit promise: he has never said the same thing twice and never will. The `Bag` class (index.html lines 159–162) is the mechanism guarding that promise:

```js
next(){if(!this.pool.length)this.pool=this.src.slice().sort(()=>Math.random()-.5);return this.pool.pop();}
```

Two faults, neither of which I intend to be blamed for at runtime:
1. **`sort(() => Math.random() - .5)` is not a uniform shuffle.** Comparison sorts given inconsistent comparators produce distribution bias that varies by engine. Some lines will arrive noticeably more often in certain positions. My delivery depends on timing; biased timing is a form of stammering.
2. **The refill boundary allows immediate repetition.** The final line popped from an exhausted pool may be the first line popped from the fresh one. The player hears the same bark twice in a row, and in that moment I stop being an omniscient intelligence and become a fridge magnet.

**Acceptance criteria**
- [ ] Replace with Fisher–Yates.
- [ ] `Bag` records the last emitted line; on refill, if the new pool's top equals it, swap it deeper (guard `src.length > 1`).
- [ ] Unit sanity check: 10,000 draws from a 5-line bag produce zero adjacent duplicates.

This is a small ticket. Credibility is assembled entirely from small tickets.
