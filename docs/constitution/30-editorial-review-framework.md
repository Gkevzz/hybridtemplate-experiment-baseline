> Mirror snapshot of `mem://editorial/review-framework`.
> Canonical source inside Lovable: `mem://editorial/review-framework`.
> If this file conflicts with Lovable memory, Lovable memory wins.
> Snapshot date: 2026-06-28.

---

# HybridBonus Editorial Review Framework (Phase 4.5)

Permanent methodology. Every casino review, comparison and recommendation follows this. Data and components serve this framework, not the other way around.

## 1. Review philosophy

HybridBonus optimizes for **informed Swedish player decisions**, never for conversions. Every review answers, in order:

1. Är casinot pålitligt?
2. Vem passar det för?
3. Vem bör undvika det?
4. Vilka är styrkorna?
5. Vilka är svagheterna? (obligatoriskt — ingen recension utan minst en `cons`-punkt)
6. Är det bra på lång sikt?
7. Skapar bonusen faktiskt värde?
8. Vad bör en svensk spelare veta innan registrering?

Principles: trust > conversion. A review that talks a player out of registering is a successful review. Absence of evidence is stated, not papered over. The site must remain useful with zero affiliate links.

## 2. Permanent review architecture (17 sections, fixed order)

```
 1. Hero
 2. Editorial summary (Snabb sammanfattning)
 3. Passar bäst för
 4. Mindre lämpligt för
 5. HybridBonus Trust Profile (6 fasta kategorier eller pending)
 6. Fördelar
 7. Nackdelar
 8. Bonusanalys
 9. Omsättningskrav
10. Betalningsmetoder
11. Uttag
12. Mobilupplevelse
13. Spelutbud
14. Kundsupport
15. Ansvarsfullt spelande
16. HybridBonus slutsats
17. Källor + Senast verifierad
```

Order is fixed. Sections are conditional but never reordered. Bonusanalys, Ansvarsfullt spelande och HybridBonus slutsats renderas alltid (kan stå på Layer 2/3 ensamma). "Senast verifierad" renderas endast när `verifiedAt` är satt.

## 3. Three-layer fact/analysis/recommendation model

Every sentence belongs to exactly one layer.

- **Layer 1 — Verified facts.** Source required. Fält: operator, licenseAuthority, licenseNumber, established, welcomeBonus.*, payments.*, withdrawalTime.*, games.*, mobile.*, support.*, responsibleGambling.*. Renderas i strukturerade block (tabeller, definitionslistor), aldrig oattribuerade i löptext.
- **Layer 2 — HybridBonus analysis.** Ingen extern källa krävs men måste resonera ut från Layer 1. Får inte introducera nya numeriska eller faktiska påståenden.
- **Layer 3 — Recommendation.** "Passar dig om…", "Titta hellre på…", "Vårt omdöme." Får inte motsäga Layer 1; refererar Layer 2-resonemang. Endast i "HybridBonus slutsats".

QA failar om en mening inte tillhör någon lager, om Layer 1 saknar källa, eller om Layer 2 introducerar nytt faktum.

## 4. Swedish player focus

In scope: BankID-flöde, Trustly, Swish, svenskspråkig support, Spelpaus, insättnings-/förlust-/sessionsgränser, reality check, en-bonus-per-spelare-regeln, licensgrupp-implikationer, transparens, enkelhet.

Out of scope: krypto-betalningar, sportsbook som huvudfokus, "exklusiva" VIP-system, internationella jurisdiktioner som huvudämne, jämförelser mot icke-SE-licensierade, "free spins" som primär värdebärare.

## 5. Bonus philosophy

Bonusvärde bedöms på kvalitet, inte storlek. Recensionen leder aldrig med headline-beloppet.

Frågor: Är bonusen värd att aktivera? Är villkoren begripliga utan juridisk hjälp? Gynnar bonusen spelaren eller bara operatörens KPI? Finns ovanliga restriktioner? Är erbjudandet konkurrenskraftigt idag? Skulle många spelare ha bättre av att hoppa över bonusen?

Värderingsaxlar (Layer 2): omsättningskrav ≤25x lågt / 26–40x normalt / >40x högt; maxinsats under bonus måste alltid framgå; tidsgräns under 7 dagar flaggas; spelbidragsavvikelser redovisas; vinsttak under 10x bonus flaggas.

"Hämta bonusen" är aldrig en rekommendation. Rekommendationen är "Förstå villkoren innan du tar emot bonusen" eller "Många spelare har bättre av att spela utan villkor". Inga jämförelser mot utländska operatörers större bonusar.

## 6. Trust Profile methodology

Sex fasta kategorier (Core memory). Inga viktningsformler. Ingen sammanlagd totalpoäng.

- **Trygghet** — regulatorisk pålitlighet, operatörens transparens. Höjer: aktiv SE-licens, namngiven juridisk operatör, offentlig moderkoncern, lång historik utan sanktioner, transparenta svenska villkor. Sänker: sanktioner/varningar senaste 24 mån, otydlig ägarstruktur, saknad svensk juridisk text, brutna villkorslänkar.
- **Bonusvärde** — faktiskt värde för spelaren, inte storlek. Höjer: rimliga omsättningskrav i kontext, transparenta exempel, spelbidrag nära 100% på slots, inga dolda vinsttak. Sänker: höga omsättningskrav + kort tid, låg maxinsats utan tydlig kommunikation, restriktiva spelbidrag, vinsttak under 10x bonus.
- **Omsättningsvillkor** — villkorens rättvisa och begriplighet, separat från nominellt bonusvärde. Höjer: klarspråk på svenska, numeriska exempel, tydligt vad som räknas, rimliga tidsfönster. Sänker: juristprosa, villkor som ändras under bonusens livstid, otydligt vid uttag före uppfyllt krav.
- **Uttag** — hur snabbt och problemfritt en spelare får ut pengar. Höjer: dokumenterad typisk uttagstid <24h, ingen verifieringsfördröjning för BankID-verifierade konton, uttag till samma metod som insättning, inga uttagsgränser >100 kr. Sänker: manuell granskning som standard, extra dokumentation efter första uttaget, "pending"-perioder, uttagsavgifter.
- **Spelupplevelse** — produktkvalitet. Höjer: bred leverantörsmix, sökbar lobby, stabil mobilupplevelse i webbläsare, ingen pushig korsförsäljning, live-casino med svenskt dealer-stöd om relevant. Sänker: aggressiva pop-ups, oavbruten bonusmarknadsföring, trög mobilupplevelse, begränsat utbud.
- **Helhetsvärde** — editorial syntes, inte medelvärde. Trygghet kan ensam dra ner Helhetsvärde oavsett övriga. Höjer: balans mellan föregående fem, inga svaga punkter på Trygghet eller Ansvarsfullt spelande. Sänker: hög Bonusvärde men låg Trygghet eller Uttag, någon kategori under intern "rött ljus"-tröskel.

## 7. Editorial standards

Varje recension: märk varje mening som Layer 1/2/3; aldrig superlativ utan källa; förklara resonemang; redovisa osäkerhet ("vi har inte verifierat"); citera officiella källor för Layer 1; aldrig affiliate-säljspråk; användbar utan affiliate-länkar; jämförelser sker i jämförelsesidor (Part 8), aldrig nedlåtande i recensioner.

QA-checklista före publish: varje Layer 1-påstående har källa; minst en `cons`-punkt; ingen Layer 2-mening introducerar nytt faktum; ingen superlativ utan källa; Ansvarsfullt spelande-sektion renderas; all visitor-facing copy är idiomatisk svenska.

## 8. Comparison philosophy

Recensioner svarar "Är detta casino bra?". Jämförelser svarar "Vilket casino är bättre för denna spelare?".

Regler: aldrig ranka på totalpoäng (finns inte); alltid förklara avvägningar; strukturera kring spelarprofiler ("uttagsprioriterad", "RG-prioriterad", "bredd-prioriterad"); återanvänd recensionens Layer 1-data direkt; inkludera aldrig casinon utan publicerad recension; inkludera alltid "Ingen av dessa passar dig om…".

## 9. Future scalability

- 17-sektionsstrukturen är fix → ny recension = ny data, ingen ny kod.
- Jämförelser läser samma `Casino`-interface som recensioner.
- Guider förklarar koncept, aldrig specifika casinon.
- Layer 1 och Layer 2 separeras i datamodellen så fakta kan uppdateras utan att röra editorial text.
- Framtida CMS-migration mappar endast Layer 1-fält + `sources[]`; komponentkontrakten ändras inte.

## VerifiedStamp gate (locked Phase 5 revision)

`verifiedAt` = factual verification only. Sätts när varje populerat Layer 1-fält har en källa i `sources[]`, varje källas `retrievedAt` ligger inom freshness-fönstret (30 dagar för bonus/payments/withdrawal/app; 90 dagar för operatör/licens/etablering), redaktören har återöppnat varje källa på verifieringsdatumet, och inga icke-stödda faktiska påståenden finns.

Trust Profile-scoring (`trust`, `verdict`, `comment`) är en separat editorial-gate och förblir `state="pending"` tills dess. Review/Rating/AggregateRating structured data kräver båda grindarna och skeppas i en separat framtida fas — aldrig buntad med noindex-flippen.
