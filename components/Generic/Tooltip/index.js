import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const Tooltip = ({
  content,
  placement = "top",
  children,
  className,
  ...rest
}) => {
  return (
    <TooltipPrimitive.Root delayDuration={750}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        side={placement}
        aria-live="assertive"
        className={`tooltip-content max-w-[90vw] px-3 py-1 text-xs md:text-sm text-secondaryText bg-white rounded-lg border border-dividerColor shadow ${className}`}
        {...rest}
      >
        {content}
        <TooltipPrimitive.Arrow className="fill-gray-400" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
};

export default Tooltip;
