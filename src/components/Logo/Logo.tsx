import React, { HTMLAttributes } from "react";
import { LogoSizeType } from "./models";
import { LogoSizeMap } from "./utils";

type LogoProps = HTMLAttributes<HTMLImageElement> & { size: LogoSizeType };

export function Logo(props: LogoProps) {
  return <img src={LogoSizeMap[props.size]} alt="logo" {...props} />;
}
