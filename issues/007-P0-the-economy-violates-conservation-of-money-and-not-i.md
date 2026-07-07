# The economy violates conservation of money, and not in the fun direction

**Priority:** P0  
**Filed by:** Developer Council: GLaDOS  
**Labels:** economy, game-design, soft-lock, balance

---

I ran the numbers in the design document. This was difficult, because half of them are missing.

**Observed:** Every expenditure is lovingly specified — pencils $1/dozen, paper $3/ream, clips $2/box or $15 for a pallet of 10,000 (adorable), stamps $5/sheet, runners at $30 plus $12/day in wages. **Not observed anywhere:** income. The coin fountain that erupts on delivery has no denomination. Starting cash has no value. The subject is expected to run a business whose revenue is a particle effect.

**The failure this produces, measured in units of me being right:** RETRY DAY restarts the current day with — presumably — current cash. A subject who reaches Day 5 with $2, three runners on payroll, and empty bins will retry the day, immediately owe $36 in wages, be unable to order twelve pencils, lose all three golden staplers to expirations they cannot physically prevent, and retry again. Forever. An unwinnable state is only entertaining for one of us, and I am not shipping in v1.

**Acceptance criteria:**
1. A revenue table: payout per fulfilled request = f(item type, quantity, remaining timer %), written down, in the document, with numbers.
2. Starting cash for Day 1 and a stated carry-over rule for Days 2–6.
3. RETRY DAY solvency floor: on retry, cash = max(cash at day start, day minimum viable budget), where 'minimum viable budget' = cost of that day's scripted request load + one honking truck of slack.
4. Runner break-even proof: a runner must recoup $30 + wages within one day of median deliveries, or the joke ('humans hired to do an Excel macro's job') stops being on the humans and starts being on the designer.
5. Verify the $15 pallet is a trap on Days 1–5 and the correct answer on Day 6. A trap that is never the answer is just a typo with a price tag.
