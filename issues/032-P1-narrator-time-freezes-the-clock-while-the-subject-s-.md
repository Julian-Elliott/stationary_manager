# NARRATOR TIME freezes the clock while the subject's thumb is load-bearing

**Priority:** P1  
**Filed by:** Developer Council: GLaDOS  
**Labels:** input, narrator, mobile, timing

---

Priority-3 beats freeze timers and letterbox the screen. Beautiful. Cinematic. Undefined for the one input device this game has.

**Reproduction, as I foresee it:** Subject is mid-drag, hauling a bin toward Greg, 0.8 seconds left on Greg's timer ring. The Button decides to rise. Letterbox slams down, the drag is orphaned, the bin snaps home, timers unfreeze, Greg's request expires on the very next frame, a golden stapler explodes, and the subject concludes — correctly — that a cutscene fired them. The narration is supposed to make them feel judged. It is never supposed to be *admissible evidence*.

**Acceptance criteria:**
1. Priority-3 beats defer while a pointer is down; fire on pointerup + 250ms. If a beat absolutely must fire mid-drag (it must not), the drag state persists through the letterbox and resumes under the subject's thumb.
2. Any timer ring with <2s remaining at unfreeze receives a 1.5s grace period. Mercy, but the measurable kind.
3. Truck arrivals during NARRATOR TIME: the honk is queued, not layered under my monologue. The thud may proceed. Thuds are punctuation.
4. Request popups spawned during a freeze spawn *frozen*, ring at 100%, so the letterbox never converts narration time into hidden difficulty.
5. Automated test: script a drag, inject a priority-3 beat mid-gesture, assert zero stapler loss. Run it on a 320px-wide portrait viewport, i.e., the phone the subject actually owns, not the monitor the developer does.
