# Forum thread: "CTRL+ALT+DELIVER pilot — the next News Tower or just a Stanley Parable bit?"

# CTRL+ALT+DELIVER pilot — is this the next News Tower or just a Stanley Parable bit?

---

**#1 · TundraLaw** *(OP, posted 09:12)*

Played the pilot four times this weekend (once to win, once to lose on purpose, twice for eggs — 5/16, don't ask me which, the personnel file is a confessional). Answering my own thread title up front: it's neither. It's Against the Storm wearing an office comedy as a skin suit, and the narrator is a distraction from the fact that somebody on this team understands *triage*.

The load-bearing wall is the golden staplers. Three lives, and an expired request doesn't decrement a counter — it SMASHES one, on camera, "a formal strike." When Deborah's timer ring and Greg's timer ring are both red and I've got one bin of paper, I am choosing who suffers. That's the game. Everything else is set dressing.

My fears, ranked:

1. **RETRY DAY has no scars.** Lose three staplers, get the (great) fax-consortium eulogy, and... the day just respawns? Same cash, same staplers, narrator memory wiped? That's Frostpunk building a funeral and making the graves respawn.
2. **FLOW STATE might turn triage into a thumb-speed test.** If x5 is free money, optimal play is "chain fast," not "choose well."
3. **The economy might have no teeth.** Day 1's entire demand costs one dollar. If I'm never broke, the catalog is a menu, not a decision.

But the bones are correct and I want everyone in this thread to be honest about whether they're here to protect those bones or sand them down. Looking at nobody in particular.

---

**#2 · marigoldPress** *(posted 09:41)*

Hi TundraLaw! I am the person you were looking at. 🌼

Context on me: I play in bed, 11:40pm, brightness at 20%, one thumb, husband asleep fourteen inches away. I have played the pilot every night this week. I am OBSESSED with the world — the cloud is a warehouse, email is paper, I named a dust mote that drifts past Deborah's desk **Gerald** and I check on him every session. This is, I would argue, also "the game."

But I need to report two injuries:

1. The first time a golden stapler got smashed I put my phone down and stared at the ceiling for a while. I understand the tension is the point *for you*. For me the point is cardboard confetti and the ding arpeggio.
2. The truck honk plays at full triumphant volume 8–15 seconds after I've forgotten I ordered anything, i.e., under maximum jump-scare conditions. My husband now flinches in his sleep when I open the app. This is technically an achievement but not one I wanted.

So my asks are: a **Cozy Shift** mode (requests never expire, staplers stay decorative on the shelf, narrator free to be disgusted about it — "nothing here matters and yet you persist" IS my kind of stakes), and a **Library Voice** audio toggle where the truck pulls up and the driver just *clears his throat*.

I know this is where you tell me difficulty toggles are cowardice. Go ahead. Gerald and I are ready.

---

**#3 · solodev_ren** *(posted 10:05)*

Hello, I ship small mobile web games solo, I stream devlogs, and I'm going to be the least fun person in this thread: you're both describing features, and I'm here to tell you the pilot as specced will play its best joke to **dead silence**.

iOS Safari keeps the AudioContext suspended until a user gesture resumes it. The cold open is a priority-3 NARRATOR TIME beat that presumably fires on load. So the star of the show — the entire reason this thread exists — delivers his opening monologue mute for a huge slice of players, in the first ten seconds. This has bitten every single web game I've shipped. It will bite this one.

Also, before either of you adds anything: the pilot's *shape* is the rarest thing here. One HTML file, all art drawn in code, 13–15 minutes with an actual ending. Pilots that end are pilots that get finished. Day 1 being twelve pencils total — making the tutorial a joke about how little there is to do, and making that joke load-bearing — is confidence I usually only see in games that already know they're funny.

So my position on the difficulty war brewing above me: whatever you two negotiate, it has to cost approximately zero lines of code, because I will personally fight anything that turns this file into 9,000 unnavigable lines. Proceed.

---

**#4 · TundraLaw** *(posted 10:22)*

marigoldPress — okay, you asked for it, here's the honest version, minus the meanness you were bracing for:

My problem isn't that you want Cozy Shift. It's what Cozy Shift historically *becomes*. It ships as a toggle, then the retention dashboard notices cozy players churn less, then it becomes the default, then the smashing stapler gets "softened for launch," and eighteen months later there's a fourth stapler you can earn by watching an ad. I have watched this exact film. The staplers-as-lives system is the best fail state I've seen on a phone and I've filed a ticket that literally says DO NOT GO SOFT ON IT.

So here's my offer, and I'm serious: **Cozy Shift can exist if IRON FAX ships in the same patch.** No retries, one life-stack, run ends when it ends. If the game commits to both poles at once, neither one is the game "going soft" — it's the game having a spine in two directions. What I will not accept is mush in the middle.

Also, small thing: "nothing here matters and yet you persist" is a genuinely good bark and I hate that you wrote it for free.

---

**#5 · marigoldPress** *(posted 10:37)*

TundraLaw, counter-offer: I accept your IRON FAX rider *enthusiastically*, because I want to watch your streams of it from under a blanket like it's a nature documentary about a predator.

But I want to flag something from your OP that surprised me. You wrote that when a request expires you want the game to zoom the desk so you see WHO you failed — "I want the strike to have a face. Marjorie looks at me."

TundraLaw. That is *my* ask. That is the coziest sentence in this thread and YOU wrote it. You don't actually want the game to be harder — you want failure to be about *people*. The stapler smash upset me precisely because it was violence happening to office supplies while a human being's request just... evaporated, un-mourned. If Marjorie looked at me, I'd be devastated, and I'd be devastated *correctly*, about the right thing.

So maybe we're not on opposite teams. Maybe you're cozy with extra steps.

(I'm also formally endorsing solodev_ren as thread referee. Ren, does any of this cost lines of code?)

---

**#6 · solodev_ren** *(posted 11:02)*

Funny you should ask, because while you two were discovering you're the same person, I think I found the thing that makes everybody's ask free.

I need a tap-to-start gesture anyway — that's the non-negotiable fix for the AudioContext problem. The obvious diegetic version is a punch clock: big **CLOCK IN** button, you tap it, context resumes inside the handler, cold open plays with sound, everyone lives.

But a punch clock is an HR object. So: what if clocking in means **signing your employment contract?** Three pieces of paper on the clipboard:

- **STANDARD AGREEMENT** — the game as specced.
- **REDUCED HOURS** *(marigold's Cozy Shift)* — requests never expire, staplers decorative, narrator openly grieving the absence of stakes. The contract's fine print should be visibly condescending.
- **IRON FAX** *(Tundra's rider)* — one life-stack, no retries, and the contract is a single terrifying sentence.

One screen. It solves my P0, it makes both your modes *diegetic* instead of a settings-menu apology, and it hands the narrator three distinct contempt registers on day one, which — 230 bark lines being the actual content budget — is the cheapest content multiplier available. The difficulty select IS a joke about employment law. I'm annoyed I'm giving this away in a forum thread instead of my own game.

Cost: one screen, three flags. I, the scope hawk, approve this feature. Mark the date.

---

**#7 · TundraLaw** *(posted 11:19)*

I hate how good that is.

No, genuinely — I came into this thread ready to die on "difficulty toggles are cowardice" and ren just reframed it so the toggle is a *legal document the narrator resents*. If Cozy Shift — sorry, REDUCED HOURS — comes with the narrator's open contempt baked in, then it's not the game going soft, it's the game doing a bit about people who take the easy contract. And IRON FAX as one terrifying sentence is exactly the energy it deserves. **Consider my mind changed on the mode question.** marigoldPress, you may have your blanket fortress. I'll be next door not saving anyone.

BUT. Since we're negotiating contracts: RETRY DAY. This is my biggest one. If death is a loading screen, the staplers are cosmetic. My ticket asks for the retry to cost cash — a day of runner wages, framed as "severance and legal fees" — so a Day 4 wipe can poison Day 5's economy. And non-negotiably, **the narrator must remember.** "Ah. You again. We've done this Tuesday before, you and I. It went poorly." The narrator forgetting a firing is character assassination of your own star.

marigold, before you object: yes, I'm asking the game to hurt you slightly. I want to hear why I'm wrong.

---

**#8 · marigoldPress** *(posted 11:48)*

You're half wrong, and the half you're right about is the good half.

The narrator remembering: **yes, a thousand times.** That's not a difficulty feature, that's a *character* feature. I would retry days ON PURPOSE to hear him get wearier about me.

The cash penalty: this is where I object, but not for the reason you think. It's not that it hurts — it's that it hurts in the *boring direction*. "Severance fees" punishes my spreadsheet. In a 13-minute game I don't have a relationship with my spreadsheet. I have a relationship with Deborah.

So here's my counter, and I'm pulling it from my most frivolous ticket: I pitched that **Deborah's birthday falls on Day 4** — paper banner, an $8 sheet cake in the catalog, frosting confetti, Doris clapping slightly out of rhythm, the narrator refusing to sing for three legalistic reasons.

Now imagine you flame out on Day 4 and retry it. The party *already happened*. The banner is half taken down. The cake box on her desk is open and mostly empty. Doris is still humming the song under her breath. Nobody mentions it. The narrator mentions it *once*: "You've missed the festivities. They were adequate. We will not be repeating them."

THAT's a scar. It costs you nothing you can count and everything you can feel. You wanted the strike to have a face — give the retry a face too. Consequences about people, not money.

---

**#9 · TundraLaw** *(posted 12:03)*

I came into this thread to demand severance fees and I am leaving it wanting **stale cake**.

marigold, that's — okay. Post #8 is the correct design and my ticket is the wrong scale. Cash scarring is the right instrument for a 40-hour Frostpunk run where the economy IS the relationship. At 13 minutes, the economy is a joke about procurement (a good one), and the relationships are Deborah, Greg, Marjorie, a dust mote named Gerald apparently. Scarring the *world state* — the half-down banner, Doris humming, the narrator's one acid line — is heavier than docking $12, and it's heavier BECAUSE it doesn't touch the numbers. The player who notices isn't reading a balance, they're standing in a room where something happened without them.

**Mind changed, round two.** I'm rewriting my retry ask: keep the cash, scar the world, and the narrator's memory is the load-bearing beam. Retries should shove the compliance dial and unlock a contempt tier of barks. If the bark engine has 230 lines, I want ten of them reserved for "we've done this Tuesday before."

(I reserve the right to still want the economy to have teeth *within* a day. The REPLY-ALL STORM should still be able to bankrupt me. But that's a tuning war, not a philosophy war.)

ren — sanity check. World-state scarring on retry: cheap or expensive?

---

**#10 · solodev_ren** *(posted 12:31)*

Cheap-ish, with one giant asterisk, and the asterisk is going to sound like I'm changing the subject but I promise I'm not: **persistence is the most fragile thing in this entire spec.**

Everything you two just designed — narrator memory across retries, a birthday that stays happened, 16 MBTI assessments collected across replays — assumes storage that survives. On the actual web it frequently doesn't. TikTok's in-app webview treats localStorage as decorative. Old iOS Safari private mode *throws* on setItem. And Safari ITP will shred script-writable storage after 7 days of not visiting — so the player who collected 11/16 assessments and comes back in two weeks finds their personnel file empty. The exact players this game will attract (people arriving from a viral paperclip-monologue clip) are the players in the worst storage environments.

marigold, this is where your scrapbook ticket accidentally becomes infrastructure. You asked for a **PERMANENT RECORD drawer** in DA-TA-BASE — every memo, report card, eulogy, and assessment, re-readable, because you currently have 23 screenshots of B-minuses interleaved with pictures of your cat. Fine: make that drawer the *single* persistence surface. One serialized object, one wrapped try/catch write path, debounced. Retry incident reports go in it. The birthday goes in it. And on the win screen it **exports as a paper document** — copyable text block — because in this fiction your save file being a printout you keep yourself isn't a workaround, it's the best joke in the architecture. The AIs took the computers; of course your data lives on paper now.

And when ITP does eat someone's file, the narrator lampshades it: "Your personnel file has been... audited." Even the failure mode is content.

(The plant that grows one leaf per real day? Same drawer. And yes, marigold, when storage dies the plant resets, and no, it must not wilt, the narrator watered it, he will deny this forever.)

---

**#11 · marigoldPress** *(posted 12:50)*

My silly scrapbook drawer is now load-bearing architecture and I have never felt so powerful. Yes to all of it. The drawer should squeak. The narrator should object to being archived ("I am a live broadcast, not a scrapbook") while clearly formatting the entries very nicely.

While I have the room: ren, your point about players hearing *nothing* — you said in your storage rant a while back to "assume 40% of mobile players hear nothing, ever." That's me! I'm the 40%! Silent switch on, husband asleep. Which means my **Library Voice** ask isn't really a cozy feature, is it? If the honk becomes a throat-clear *plus a visible truck pulling up*, and the expiry klaxon becomes a little paper note sliding on-screen reading "urgent-ish," then every sound has a visual twin, and the game works with the ringer switch off — for me by choice, and for your 40% by iOS decree.

I'd like to propose that as an actual design rule and not a toggle: **no information may exist only as audio.** The toggle just controls whether the sounds ALSO play.

(Protecting the ding arpeggio and coin fountain at all costs, to be clear. Those are medicinal.)

---

**#12 · TundraLaw** *(posted 13:14)*

Co-signing marigold's audio rule, which I never expected to type, and using the momentum to open the last front: **FLOW STATE.**

Current spec: kudos combo x1/x2/x3/x5, golden light, narrator gets irritated you're good. My fear: if x5 is free money and money buys throughput, optimal play stops being "whose timer do I let die" and becomes "chain deliveries as fast as physically possible." Speed devours choice. Against the Storm never lets raw APM substitute for deciding which villagers go unmet, and that discipline is why it works.

My preferred fix is one line of logic: **the combo breaks when ANY request expires anywhere.** Not just requests you're touching — any of them. Now keeping the combo IS keeping everyone alive. Flow state becomes the reward for perfect triage instead of a bribe for ignoring it.

And here's the part I only saw because of post #5: when the combo breaks, that's the *same moment* a stapler gets smashed. So make the combo-break animation BE the zoom-to-the-desk beat. Golden light dies, camera finds Marjorie, she looks at you. One system, two of my tickets, and marigold's "failure should be about people" all in a single beat.

marigold — genuine question, not a trap: does a combo system have any business existing in REDUCED HOURS, where nothing expires?

---

**#13 · marigoldPress** *(posted 13:33)*

Not a trap received, honest answer given: I assumed I'd hate the combo system, and your post just talked me into it. Because look at what you actually built — if the chain breaks when *anyone anywhere* gets failed, then the golden light isn't a speed meter. It's a **nobody-has-been-let-down-yet meter.** TundraLaw, you accidentally designed a kindness streak. The most cozy-brained mechanic in the game is being smuggled in by the Frostpunk guy. I'm going to think about this in bed tonight.

For REDUCED HOURS: the combo shouldn't break, because nothing can expire — but it shouldn't be immortal either, that's meaningless. Let it **wilt.** If a request sits too long, the golden light just quietly droops back to x1, no smash, no camera, no shame. A gentle "the moment passed." Same code path, different animation, and the narrator gets to say something like "your streak has expired of natural causes."

And a confession, since this thread is apparently where minds go to change: describing the golden light dying and the camera finding Marjorie gave me a little chill, and not the bad ceiling-staring kind. **I think I'm going to sign the STANDARD AGREEMENT at least once.** For Marjorie. Don't make it weird.

---

**#14 · solodev_ren** *(posted 14:01)*

Referee's summary, because this thread has quietly produced more coherent design than most paid workshops I've attended, and I want it on the record before anyone scrolls away:

1. **CLOCK IN punch clock = audio unlock + contract select** (STANDARD / REDUCED HOURS / IRON FAX). Solves my P0, dissolves the difficulty war, one screen. ~Free.
2. **Retry scars the world, not the wallet.** Narrator remembers, banner's half-down, Doris hums. Costs bark lines and a few world-state flags. Cheap, if the birthday event exists at all — which I'm ruling is a v1.1 stretch, marigold, not because I'm heartless but because the pilot needs to SHIP and Deborah's birthday deserves better than being crunched in.
3. **PERMANENT RECORD drawer = the single save surface**, exports as a paper personnel file. This one I'd genuinely build first — it de-risks every other feature in this list and doubles as the share artifact on the win screen. ASSESSMENTS FILED: n/16 plus your diagnosis stamps in one clean portrait card *is* the marketing.
4. **Combo breaks on any expiry; the break IS the strike close-up; it wilts in REDUCED HOURS.** One line of sim logic, one camera move that already exists for other beats, two animations.
5. **No information exists only as audio.** A rule, not a feature. Costs discipline, not lines.

Total new surface area: one screen, one drawer, some flags, ten reserved bark lines about having done this Tuesday before. The file survives. My blessing is granted, grudgingly, which is the only way I grant it.

One personal note: the fact that a difficulty argument between you two produced a *kindness streak* and *stale cake* is why I read this forum.

---

**#15 · TundraLaw** *(posted 14:20)*

Closing argument on the thread title, since I opened it:

It's the next News Tower. It's ALSO a Stanley Parable bit. The trick — and I didn't see this until posts #8 and #13 rearranged my skull — is that the two halves are load-bearing for *each other*. The narrator's contempt only lands because the triage underneath is real; the triage only hurts because six named people and a narrator remember what you did. Take away either half and you've got confetti or a monologue. Together it's a management game with a conscience and a heckler.

I'm still going to file the tuning war (REPLY-ALL STORM should be able to bankrupt me, the $15 pallet should be a gamble, and v2 owes me one mathematically unwinnable day — I want to choose who I fail and live with it). But that's me asking for MORE of what's already here, which is the best kind of complaint.

Day one purchase. IRON FAX contract, obviously. If the narrator doesn't have a specific bark for people who sign it, I'm filing that too.

---

**#16 · marigoldPress** *(posted 14:31)*

Ending where I started: in bed, blanket to chin, one thumb, checking on Gerald.

I came into this thread wanting the game to stop hurting me and I'm leaving wanting to sign the scary contract *once*, on purpose, for Marjorie, with the ringer off and the paper notes sliding in saying "urgent-ish." I got my drawer, my plant is infrastructure now, the stale cake is canonically the saddest object in video games, and TundraLaw of all people built me a kindness streak.

Ship it. Ship the punch clock first so the narrator gets to talk to everyone. And when Deborah's birthday makes it into v1.1 — ren said stretch, ren did not say no, I have it in writing, it's going in the PERMANENT RECORD drawer — I will be there with $8 for the cake.

The narrator still shouldn't sing. One bar, hidden in the memo, at the end. I will cry either way. Genuinely cannot wait.

---

**#17 · solodev_ren** *(posted 14:44)*

Thread's done what forum threads almost never do — everyone leaves smarter than they arrived — so, final post:

I'm hyped for the reason I'm always hyped when it's real: this thing is *shippable*. One file, an ending, a star with 230 lines and now three contempt registers, a save file that's diegetically a piece of paper, and a fail state so good the losses generate the marketing (a personalized eulogy from a fax consortium — every player's failure is unique shareable content; I remain jealous).

Filed five tickets out of this thread. Squatted the handles for @ctrlaltdeliver this morning before posting, because plus signs die in URLs and I have made that mistake for you already.

Now if you'll excuse me, I apparently have to go build a punch clock.

TO BE CONTINUED, as the game says. See you all in the personnel files.
