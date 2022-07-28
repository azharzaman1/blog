import * as HeadlessTooltip from "@radix-ui/react-tooltip";

const Tooltip = ({ children, content }) => {
  return (
    <HeadlessTooltip.Root>
      <HeadlessTooltip.Trigger>{children}</HeadlessTooltip.Trigger>
      <HeadlessTooltip.Portal>
        <HeadlessTooltip.Content className="bg-white border shadow px-4 py-1">
          {content}
          <HeadlessTooltip.Arrow className="fill-gray-400" />
        </HeadlessTooltip.Content>
      </HeadlessTooltip.Portal>
    </HeadlessTooltip.Root>
  );
};

export default Tooltip;
