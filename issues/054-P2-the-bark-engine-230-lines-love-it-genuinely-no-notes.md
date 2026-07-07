# The bark engine. 230 lines. Love it, genuinely, no notes — okay one note, four notes: it's going to interrupt itself and I have PERSONAL experience of how that ends

**Priority:** P2  
**Filed by:** Developer Council: Wheatley  
**Labels:** narrator, bark-engine, polish, edge-cases

---

The narrator is the star. Agreed. Written in the spec, underlined, I underlined it. Which is exactly why the bark engine needs boring plumbing, because a star who talks over himself is just a man shouting in a CRT strip. Cases, all real, all reachable:

1. **The visibilitychange machine gun.** 'There are no other tabs. We took them.' — top-ten line, possibly top-three. Now watch a player flick between tabs five times in ten seconds because a notification came in. The line fires five times. By the third it's not omniscient, it's needy. Needs: `oncePerSession` on the premium version, and a degrading follow-up chain ('Again.' → 'AGAIN.' → silent +1 on the compliance dial, which is honestly colder) with a 30s per-line cooldown.
2. **FLOW STATE spam.** Kudos x5, golden light, narrator 'gets irritated you're good' — but deliveries during flow can land seconds apart, and if each one rolls an irritation bark, the engine strafes the player. Irritation should escalate through a sequence (annoyed → suspicious → quietly furious → *silence*, and the silence is the punchline) with a minimum 8s gap, not re-roll per delivery.
3. **Priority-3 pileup at the day boundary.** Day ends (report card, priority-3) at the exact moment the Button's next scripted warning is queued (also priority-3). Two letterbox beats contest one moment. Define it once: priority-3 queue is FIFO *except* day-boundary beats preempt, and any preempted beat re-arms next morning with a self-aware opener — 'As I was saying YESTERDAY, before I was interrupted, by me—'. The bug becomes material. Free material. Second ticket running I've done this, someone should be paying me, nobody pays me, I checked, no payroll entry, separate ticket.
4. **The fourth stapler problem.** Poke-the-eye grants one free golden stapler. Player pokes it while sitting at a full 3/3. Options: silently discard (feels broken — player found a SECRET and got nothing, worst feeling in games, verified), bank it as a 4th slot (breaks the '3 lives' iconography), or — my pick — narrator refuses it on the spot: 'You have three. The form only has three boxes. I don't make the forms. I DO make the forms. The answer is still no.' and the grant flag stays unconsumed so the poke still pays out later when they're down a stapler. Secret preserved, iconography preserved, joke acquired. Three birds. No stones. The stones were also taken to hyperspace.

Ask: per-bark `cooldownMs`, `oncePerSession`, `sequence` (ordered escalation chains), and a priority-3 arbitration rule written down anywhere at all. That's it. Four fields and a sentence. 'Small ticket', he said, scrolling up, quietly.
