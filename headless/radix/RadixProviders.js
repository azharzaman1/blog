import * as Tooltip from "@radix-ui/react-tooltip";

const RadixProviders = ({ children }) => {
  return <Tooltip.Provider delayDuration={250}>{children}</Tooltip.Provider>;
};

export default RadixProviders;
