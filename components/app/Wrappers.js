import { Provider as RadixTooltipProvider } from "@radix-ui/react-tooltip";

const Wrappers = ({ children }) => {
  return <RadixTooltipProvider>{children}</RadixTooltipProvider>;
};

export default Wrappers;
