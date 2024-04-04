import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container max-w-6xl mx-auto bg-base-100  ">{children}</div>;
};

export default Container;
