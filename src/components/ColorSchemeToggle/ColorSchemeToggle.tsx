import { Button, Menu, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }} shadow='md' trigger='click-hover' openDelay={100} closeDelay={400}>
      <Menu.Target>
        <Button variant ="light" size='compact-sm'>Choose Theme</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => setColorScheme('light')}>Light</Menu.Item>
        <Menu.Item onClick={() => setColorScheme('dark')}>Dark</Menu.Item>
        <Menu.Item onClick={() => setColorScheme('auto')}>Auto</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
