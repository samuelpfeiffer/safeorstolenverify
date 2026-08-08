import React from "react";

export type HotGunzStyle = "style1" | "style2" | "style3" | "style4";

interface HotGunzWidgetProps {
  style?: HotGunzStyle;
  height?: number;
  title?: string;
  className?: string;
}

const HotGunzWidget: React.FC<HotGunzWidgetProps> = ({
  style = "style4",
  height = 420,
  title = "Stolen Firearms Check",
  className,
}) => {
  const src = `/embeds/hotgunz-${style}.html`;

  return (
    <iframe
      src={src}
      title={title}
      className={className ? className : "w-full"}
      style={{ height }}
      loading="lazy"
      referrerPolicy="no-referrer"
      sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
    />
  );
};

export default HotGunzWidget;
