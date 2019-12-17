import * as React from "react";

interface IAppProps {
  title: string;
}

const App: React.FunctionComponent<IAppProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default App;
