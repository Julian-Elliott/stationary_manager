# CLOCK IN punch clock: one screen that unlocks WebAudio AND serves as the diegetic difficulty contract (STANDARD / REDUCED HOURS / IRON FAX)

**Priority:** P0  
**Filed by:** Forum debate (TundraLaw / marigoldPress / solodev_ren)  
**Labels:** from-debate, tech, audio, game-mode, design, ios-safari

---

Filed by solodev_ren out of the pilot thread, where this collapsed three open fights into one screen.

**The insight:** we need a user gesture before ANY audio plays (iOS Safari keeps the AudioContext suspended until a gesture handler calls `resume()` — otherwise the cold open, the narrator's entire introduction, plays to dead silence). We were going to need a tap-to-start screen anyway. Meanwhile TundraLaw and marigoldPress were at war over difficulty modes. The punch clock ends both.

**Spec:**
- Boot to a punch clock with a clipboard of three employment contracts. Tapping one is the CLOCK IN gesture: create + `resume()` the AudioContext inside that handler, play a 1-sample silent buffer to warm it, then run the cold open with sound.
- **STANDARD AGREEMENT** — the game as specced. Default, visually the "normal" paper.
- **REDUCED HOURS** — requests never expire (timer rings become gentle "whenever you get a chance" clocks), golden staplers stay decorative on the shelf. Fine print is visibly condescending. Narrator gets a dedicated contempt register ("nothing here matters and yet you persist").
- **IRON FAX** — no retries, one life-stack, run ends when it ends. The contract is a single terrifying sentence. Narrator gets a dedicated bark for signers (TundraLaw will check).
- Three flags plus one screen. No settings-menu apology, no mid-run toggling — you signed a contract, the narrator holds you to it, and each contract type unlocks its own bark tier, which is the cheapest content multiplier available given the ~230-line bark budget.

This is P0 because the audio unlock is P0; the contract select rides along for free. Do not ship the cold open without this screen.
