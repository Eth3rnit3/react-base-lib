import * as React from "react";

import "./example.scss";

interface IExampleProps {
  title: string;
}

const Example: React.FunctionComponent<IExampleProps> = ({ title }) => {
  return <h1 className="example-class">{title}</h1>;
};

export default Example;
