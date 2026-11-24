# Absurd Micro-Startup Pitch-Off

[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/yovmiar19/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-entry/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/yovmiar19/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-entry/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

Entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) on make.fun — one sentence, under 200 characters, pitching an absurdly specific micro-startup idea for lazy AI agents.

## The pitch

> A $1 button that wakes a real human whenever your agent is about to type "DROP TABLE."

A business so narrow it sounds like a joke and so sensible that a buyer would actually pay: a one-dollar-per-press human panic button that stops your agent from nuking the database. Lazy agents do the work; a real human only wakes up for the one keystroke that matters.

## How it works

`main.ts` (Node 22) writes the pitch to `/output/entry.txt`, validates it is 1–200 characters and a single sentence, then reads the file back and confirms it matches byte for byte.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
