export const getViewport = () => {
  const width = window.innerWidth;

  switch (true) {
    case width < 640:
      return "sm";
    case width < 1024:
      return "md";
    case width < 1280:
      return "lg";
    case width > 1536:
      return "xl";
    case width >= 1920:
      return "2xl";
    default:
      return "lg";
  }
};

export const colNumber = {
  sm: 1,
  md: 2,
  lg: 2,
  xl: 3,
  "2xl": 3,
};

export const getColNumber = (
  viewport: "sm" | "md" | "lg" | "xl" | "2xl" | undefined
) => {
  if (viewport === undefined) viewport = getViewport();
  return colNumber[viewport];
};
