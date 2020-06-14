import Popover from "@material-ui/core/Popover";
import Link from "next/link";
import React from "react";
import { StyledMenuItem } from "./styles";

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
          <StyledMenuItem key={l.href}>
            <Link href={l.href} passHref>
              {l.label}
            </Link>
          </StyledMenuItem>
        );
      })}
    </Popover>
  );
}
export default LinkMenu;
