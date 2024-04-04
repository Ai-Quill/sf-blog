import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mt-16 mb-6 text-center md:text-left">
      {children}
    </h1>
  );
}
