import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import React, { useState } from "react";
import { menus } from "../data/data";
import LinkMenu from "./LinkMenu";
import { LinkButton } from "./styles";

function Navbar() {
  const [dropdownTarget, setDropdownTarget] = useState(null);
  const [dropdownList, setDropdownList] = useState([]);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link href="/">
          <img
            src="/logo-only.png"
            height="60px"
            style={{ cursor: "pointer" }}
          ></img>
        </Link>

        <div style={{ flex: 1 }} />
        {menus.map((m) => {
          if (m.href)
            return (
              <LinkButton key={m.label}>
                <Link href={m.href}>{m.label}</Link>
              </LinkButton>
            );
          return (
            <LinkButton
              key={m.label}
              onClick={(e) => {
                setDropdownTarget(e.currentTarget);
                setDropdownList(m.children);
              }}
            >
              {m.label}
            </LinkButton>
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
