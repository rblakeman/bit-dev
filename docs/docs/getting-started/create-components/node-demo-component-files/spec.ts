export const spec = `/**
* This is the component's test file.
* Test files validate a component and its dependents are
* functioning as expected, before components are versioned.
*/

import { greetings } from './greetings';

it('returns different greetings for opposite timezones', () => {
  expect(greetings('America/New_York')).not.toBe(greetings('Asia/Singapore'));
});`;
