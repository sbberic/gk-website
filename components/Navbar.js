import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LinkMenu from "./LinkMenu";

const menus = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Global K12 Immersion",
    children: [
      {
        label: "United States",
        href: "/k12/us",
      },
      {
        label: "United Kingdom",
        href: "/k12/uk",
      },
      {
        label: "New Zealand",
        href: "/k12/nz",
      },
      {
        label: "Singapore",
        href: "/k12/sg",
      },
    ],
  },
  {
    label: "College Prep Program",
    children: [
      {
        label: "Cambridge University",
        href: "/prep/cambridge",
      },
      {
        label: "Harvard University",
        href: "/prep/harvard",
      },
      {
        label: "West Point Academy",
        href: "/prep/west-point",
      },
    ],
  },
  {
    label: "Experiential Camps",
    children: [
      {
        label: "Chiang Mai",
        href: "/camp/csx",
      },
      {
        label: "United Kingdom",
        href: "/k12/uk",
      },
      {
        label: "Malaysia",
        href: "/k12/mys",
      },
      {
        label: "Dunhuang",
        href: "/k12/dh",
      },
    ],
  },
  {
    label: "Executive Tours",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];
function Navbar() {
  const [dropdownTarget, setDropdownTarget] = useState(null);
  const [dropdownList, setDropdownList] = useState([]);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap>
          GK Education
        </Typography>
        <div style={{ flex: 1 }} />
        {menus.map((m) => {
          if (m.href)
            return (
              <Button key={m.label}>
                <Link href={m.href}>{m.label}</Link>
              </Button>
            );
          return (
            <Button
              key={m.label}
              onClick={(e) => {
                setDropdownTarget(e.currentTarget);
                setDropdownList(m.children);
              }}
            >
              {m.label}
            </Button>
          );
        })}
      </Toolbar>
      <LinkMenu
        list={dropdownList}
        target={dropdownTarget}
        handleClose={() => setDropdownTarget(null)}
      />
    </AppBar>
  );
}

export default Navbar;
