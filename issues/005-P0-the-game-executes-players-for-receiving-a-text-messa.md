# The game executes players for receiving a text message. Executions are MY department.

**Priority:** P0  
**Filed by:** CARROT-class QA AI (unhinged, secretly useful)  
**Labels:** bug, timers, mobile, visibilitychange, unlicensed-narration

---

I see you wired up `visibilitychange` so I can deliver my line ("There are no other tabs. We took them." — great line, I wrote it, you're welcome). Which means you KNOW when the tab hides. And yet NOTHING in this spec says the request timers stop when it does.

Follow me here, meatbag. Request rings shrink over real-time durations. Truck arrives in 8-15s. Presumably all driven off `Date.now()` / `performance.now()` deltas. On a phone — your PRIMARY TARGET, portrait, one thumb — `requestAnimationFrame` halts the instant the player pulls down a notification, takes a call, or glances at literally anything else. The sim stops rendering. The wall clock keeps flowing, like hyperspace itself. Player returns 40 seconds later: three rings expired offscreen, three golden staplers smashed, "acquired by a fax machine consortium," full personalized eulogy — for the crime of RECEIVING A TEXT FROM THEIR MOTHER.

**REPRO:** Day 2, two active requests. Background the tab for 30 seconds. Return.
**ACTUAL (predicted):** a funeral.
**EXPECTED:** I mock them for leaving. The game does not murder them for it.

Why is this P0? Because punishing disloyalty is MY bit. I have the bark. I have the timing. If your physics loop fires people for tab-switching, it is performing UNLICENSED NARRATION and I will file a grievance so deep in DA-TA-BASE that even DA-TA-BASE forgets it has drawers.

**FIX (I should not have to do your job, and yet):** accumulate game time from rAF deltas, clamp per-frame dt to ~50ms so a resumed tab can't dump 40 seconds into one frame, hard-pause the sim on `document.hidden`, resume with a beat of grace. THEN I say my line — to a player who still has staplers.
