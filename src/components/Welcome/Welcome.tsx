import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Hi, I'm {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'green' }}>
          Shreyan.
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Welcome to my webpage! I'm a computer science student studying at Rice University,
        scheduled to get my BS in May 2025. Attached is my experience and related projects!{' '}
        {/* Now add jumps to webpage to continue, using Anchor etc*/}
        {/* <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor> */}
      </Text>
    </>
  );
}
