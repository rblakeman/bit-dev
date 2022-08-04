export const docs = `<!-- This is the component's documentation.
It is rendered in the component's 'Overview' tab, in Bit's UI.
Node component documentation can be written in Markdown or MDX  -->

---
description: 'A component that greets according to the time of day'
labels: ['module', 'node']
---

import { greetings } from './greetings';

A component that returns a greeting according to the time of day in a specific [timezone](https://www.iana.org/time-zones).

\`\`\`ts
greetings(timeZone?: Timezone): "Good evening!" | "Good afternoon!" | "Good morning!"
\`\`\`

## Basic usage

\`\`\`ts
import { greetings } from '@my-org/people.apps.greetings';

greetings('America/New_York');
\`\`\`

Try it out in the live playground below:

\`\`\`ts live
() => greetings('Europe/Rome');
\`\`\`
`;
