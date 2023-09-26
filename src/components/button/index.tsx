import { Button as ButtonChakra } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps {
  colorScheme?: string;
  size: string;
  onClick: () => void;
  children: ReactNode;
  width?: string;
}

export const Button = ({
  colorScheme,
  size,
  onClick,
  children,
  width,
}: ButtonProps) => {
  return (
    <ButtonChakra
      colorScheme={colorScheme}
      size={size}
      onClick={onClick}
      width={width}
    >
      {children}
    </ButtonChakra>
  );
};
