# The RETRY DAY thing. I've been thinking about what the game remembers when you die, and the answer is nobody's decided, and I've just realised that includes me

**Priority:** P0  
**Filed by:** Developer Council: Wheatley  
**Labels:** game-state, design-decision, the-button, economy, bug-magnet

---

Right, so, RETRY DAY. Lose three staplers, get eulogised, restart the current day only. Simple! Elegant! Completely undefined! Because 'restart the current day' is doing an ENORMOUS amount of unlicensed heavy lifting. Here is everything the spec does not say rolls back, which I found by lying awake:

- **Money.** Player enters Day 6 with $9, panic-buys a $15 paperclip pallet's worth of wrong stuff, dies. Retry with $9 minus what they spent? They are now in an unwinnable loop and the fourth eulogy writes itself, which is the only thing that will, because they're stuck.
- **Runners.** Hired a runner mid-day, died before payday. On retry: still hired? Wages owed? Do we owe a fictional man twelve fictional dollars twice?
- **The compliance dial.** Player defied three directives, dial at -3, died. Retry at -3 or at day-start value? (Day-start. Obviously. Probably. Put it to a vote, I vote day-start, that's one vote.)
- **THE BUTTON.** This is the big one. Three scripted chaos payoffs, one per press. Player presses press #2, chaos happens, chaos contributes to death, retry. Is press #2... re-armed? Because if yes, the player can farm chaos payoffs by dying, and if no, the retry day is missing a scripted event the spec promised. Also the finale where I— where the *narrator* presses it himself checks 'never pressed': does a pressed-then-rolled-back press count? IT HAS TO BE DEFINED. In an enum. `ButtonState`. I've already named it, that's the hard bit done.
- **The eye-poke free stapler.** One free stapler, once. If the once-flag rolls back with the day: infinite staplers via ritual death. Speedrunners will find this in nine minutes. I'd find it in eleven.
- **MBTI flags & paperclip odometer.** Assessments filed mid-day before dying — kept, surely, personality is forever. Odometer — kept, it's an odometer, that's the whole bit.

PROPOSAL: one `DaySnapshot` object captured at day start (money, staplers=3, dial, roster, request seed, box inventory), and a `Permanent` record that never rolls back (odometer, MBTI flags, once-per-session narrator lines, Button press count, eye-poke flag). Retry = restore snapshot, keep Permanent. Two objects. One decision. Every future 'wait, does X survive retry?' question answers itself by asking which object it lives in.

Also the eulogy should cite the retry count. 'Attempt four. The fax machine consortium is preparing a punch card in your honour.' Free material. You're welcome.
