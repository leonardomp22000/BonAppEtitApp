import * as React from "react";
import Switch from "@mui/material/Switch";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function SwitchLabel({ label }) {
  const isDesktop = useIsDesktop();
  return (
    <div className="flex items-center">
      <Switch defaultChecked size={isDesktop ? "undefined" : "small"} />
      <span className="font-poppins text-xs font-medium leading-5 tracking-tight text-black md:text-sm lg:text-base">
        {label}
      </span>
    </div>
  );
}
