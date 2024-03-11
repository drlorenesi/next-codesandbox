import { ActionIcon, AppShell, NavLink, ScrollArea } from "@mantine/core";
import { IconGraph, IconForms, IconTable } from "@tabler/icons-react";

import classes from "./NavbarLinksGroup.module.css";

export default function NavBarLinksGroup() {
  return (
    <AppShell.Navbar p="md">
      <AppShell.Section grow component={ScrollArea}>
        {/* Reports */}
        {/* ------- */}
        <NavLink
          href="#required-for-focus"
          label="Reports"
          leftSection={
            <ActionIcon variant="filled" color="cyan" size="sm">
              <IconGraph style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          }
        >
          <NavLink
            className={classes.navLink}
            label="First child link"
            href="#required-for-focus"
          />
          <NavLink
            className={classes.navLink}
            label="Second child link"
            href="#required-for-focus"
          />
          <NavLink
            className={classes.navLink}
            label="Third child link"
            href="#required-for-focus"
          />
        </NavLink>
        {/* Forms */}
        {/* ----- */}
        <NavLink
          href="#required-for-focus"
          label="Forms"
          leftSection={
            <ActionIcon variant="filled" color="grape" size="sm">
              <IconForms style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          }
        >
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
        {/* Tables */}
        {/* ------ */}
        <NavLink
          href="#required-for-focus"
          label="Third parent link"
          leftSection={
            <ActionIcon variant="filled" color="indigo" size="sm">
              <IconTable style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
          }
        >
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
