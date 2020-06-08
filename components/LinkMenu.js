import React from "react";
import Link from "next/link";
import Popover from "@material-ui/core/Popover";
import MenuItem from "@material-ui/core/MenuItem";

function LinkMenu({ list = [], target = null, handleClose = () => {} }) {
  return (
    <Popover
      id="simple-menu"
      anchorEl={target}
      open={Boolean(target)}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      {list.map((l) => {
        return (
          <MenuItem key={l.href}>
            <Link href={l.href} passHref>
              {l.label}
            </Link>
          </MenuItem>
        );
      })}
    </Popover>
  );
}
export default LinkMenu;
