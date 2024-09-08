import { useState } from 'react';
import { Container, Group } from '@mantine/core';
// Aimport { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const links = [
  { link: '/about', label: 'Experience' },
  { link: '/pricing', label: 'Projects' },
  { link: '/learn', label: 'Tech' },
  { link: '/community', label: 'About' },
];

export function HeaderSimple() {
  // Aconst [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} justify="center">
          {items}
        </Group>

        <ColorSchemeToggle />
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
      </Container>
    </header>
  );
}