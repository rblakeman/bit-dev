import React from 'react';
import { ComponentCard } from '@teambit/explorer.ui.gallery.component-card';
import AboutGreetingsComponent from './about-greetings-component.mdx';
import styles from './styles.module.scss';

function greetings(timeZone = 'America/New_York') {
  const currentHour = parseInt(
    new Date()
      .toLocaleTimeString(undefined, {
        timeZone,
        hour12: false,
      })
      .substring(0, 2),
    10
  );
  if (currentHour > 16) return 'Good evening!';
  if (currentHour > 11) return 'Good afternoon!';
  return 'Good morning!';
}

const GreetingsPreview = () => (
  <div className={styles.greetingsPreview}>
    <code>{greetings()}</code>
  </div>
);

const GreetingsCard = () => {
  return (
    <ComponentCard
      envIcon="https://static.bit.dev/extensions-icons/node.svg"
      // eslint-disable-next-line no-script-url
      href="#component-files"
      id="apps/greetings"
      preview={<GreetingsPreview />}
      description="A component that greets according to the time of day"
      className={styles.todoCard}
    />
  );
};

export const GreetingsCardAndAbout = () => {
  return (
    <div className={styles.todoCardAndAbout}>
      <GreetingsCard />
      <div className={styles.aboutTodo}>
        <AboutGreetingsComponent />
      </div>
    </div>
  );
};
