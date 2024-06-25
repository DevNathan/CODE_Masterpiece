const theme = {};

theme.PALLETE = {
  main: {
    light: {
      m1: "#FFFFFF",
      m2: "#E2E2E2",
      m3: "#D9D9D9",
      m4: "#C6C6C6",
      m5: "#AEAEAE",
      m6: "#949494",
    },
    dark: {
      m1: "#363636",
      m2: "#535353",
      m3: "#636363",
      m4: "#737373",
      m5: "#929292",
      m6: "#AEAEAE",
    },
  },
  point: {
    light: {
      p1: "#",
      p2: "#",
      p3: "#",
      p4: "#",
    },
    dark: {
      p1: "#008694",
      p2: "#00A9B4",
      p3: "#00C9DE",
      p4: "#00DDF3",
    },
  },
  text: {
    light: {
      t1: "#",
      t2: "#",
      t3: "#",
      t4: "#",
      t5: "#",
      t6: "#",
    },
    dark: {
      t1: "#FFFFFF",
      t2: "#E4E4E4",
      t3: "#C6C6C6",
      t4: "#A7A7A7",
      t5: "#959595",
      t6: "#888888",
    },
  },
  primary: {
    orange: "#FF752D",
    bluesky: "#00C9DE",
  },
  secondary: {
    orange: "#CA5416",
    bluesky: "#0097A7",
  },
  background: {
    light: "#FFFFFF",
    dark: "#363636",
  },
  textColor: {
    light: "#F1F1F1",
    dark: "#3A3A3A",
  },
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    100: "#848383",
    200: "#666666",
    300: "#4E4E4E",
    400: "#252525",
  },
  success: "#007AFF",
  error: "#FF3434",
};

theme.lightTheme = {
  point: theme.PALLETE.point.light,
  background: theme.PALLETE.main.light,
  text: theme.PALLETE.text.light,
  bgColor: {
    primary: theme.PALLETE.background.light,
    secondary: "#BABABA",
  },
  textColor: theme.PALLETE.textColor.dark,
  specialTextColor: "#c8c8c8",
  contrast: theme.PALLETE.gray["400"],
  categorySection: "rgba(255, 255, 255, 0.7)",
  primary: theme.PALLETE.primary.orange,
  secondary: theme.PALLETE.secondary.orange,
  headerDefault: "rgb(235, 231, 233)",
};

theme.darkTheme = {
  point: theme.PALLETE.point.dark,
  background: theme.PALLETE.main.dark,
  text: theme.PALLETE.text.dark,
  bgColor: {
    primary: theme.PALLETE.background.dark,
    secondary: "#252525",
  },
  textColor: theme.PALLETE.textColor.light,
  specialTextColor: theme.PALLETE.gray["400"],
  contrast: "#f1f1f1",
  categorySection: "rgba(166, 166, 166, 0.3)",
  primary: theme.PALLETE.primary.bluesky,
  secondary: theme.PALLETE.secondary.bluesky,
  headerDefault: "rgb(53, 53, 53)",
};

theme.FONT_SIZE = {
  h1: "50px",
  h2: "45px",
  h3: "40px",
  h4: "35px",
  t1: "25px",
  t2: "20px",
  t3: "18px",
  t4: "16px",
  t5: "14px",
  t6: "12px",
  t7: "10px",
  t8: "8px",
};

theme.FONT_WEIGHT = {
  thin: "100",
  regular: "400",
  bold: "600",
};

theme.FONT_LINE = {
  h1: "75px",
  h2: "55px",
  h3: "41px",
  h4: "29px",
  h5: "25px",
  h6: "22px",
  h7: "17px",
};

export default theme;
