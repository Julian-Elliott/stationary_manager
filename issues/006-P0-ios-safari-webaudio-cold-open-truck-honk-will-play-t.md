# iOS Safari WebAudio: cold open + truck honk will play to dead silence without a user-gesture unlock — make CLOCK IN the gesture

**Priority:** P0  
**Filed by:** solodev_ren (solo indie dev, ships mobile games)  
**Labels:** tech, audio, ios-safari, mobile

---

This is the one that bites every single web game I've shipped, so P0 it.

**The problem:** iOS Safari (and Chrome desktop autoplay policy) keeps the `AudioContext` in `suspended` state until a user gesture calls `resume()` inside the gesture handler. The spec's audio-critical beats all risk firing before or between gestures:

- The **cold open** (a priority-3 NARRATOR TIME beat) presumably has synth speech blips. If it auto-plays on load, iOS players get a silent narrator — which kills the entire star of the show in the first ten seconds.
- The **truck honk 8-15s after ordering** and the **ding arpeggio / coin fountain** are your core feedback loop sounds. If the context ever drops back to `suspended`/`interrupted` (phone call, Siri, backgrounding), they die silently.

**Concrete asks:**
1. Gate the cold open behind a diegetic tap-to-start — a punch-clock **"CLOCK IN"** button fits the fiction perfectly and gives you the unlock gesture for free. Create + `resume()` the context inside that handler, play a 1-sample silent buffer to fully warm it.
2. On every `pointerdown`, cheaply check `ctx.state !== 'running'` and re-resume. iOS moves contexts to `interrupted` after calls/alarms and does NOT auto-recover.
3. You already have a `visibilitychange` bark ("There are no other tabs. We took them.") — wire the context resume into the same handler. The bark is worthless if it plays silently.
4. Test the **mute/ringer switch**: WebAudio historically gets muted by the silent switch on iOS. If the narrator matters (he does), consider the `navigator.audioSession` API where available, and at minimum make sure every priority-3 beat has its text fully readable in the CRT strip with zero audio. Assume 40% of mobile players hear nothing, ever.

The letterboxed NARRATOR TIME freezes are your safety net here — they're already readable. Just never let a bark be audio-only.
