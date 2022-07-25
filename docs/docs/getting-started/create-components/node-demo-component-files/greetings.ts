export const greetings = `/**
 * This is the component's implementation file.
 * A component may have various sorts of implementation files,
 * depending on the type of env it uses.
 */

export type Timezone = 
  | 'America/New_York'
  | 'Europe/Rome'
  | 'Asia/Singapore';

export function greetings(timeZone: Timezone = 'America/New_York') {
  const currentHour = parseInt(
    new Date()
      .toLocaleTimeString(undefined, {
        timeZone,
        hour12: false,
      })
      .substring(0, 2)
  );
  if (currentHour > 16) return 'Good evening!';
  if (currentHour > 11) return 'Good afternoon!';
  return 'Good morning!';
}
`;
