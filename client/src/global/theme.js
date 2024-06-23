const theme = {};

theme.PALLETE = {
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
        dark: "#252525",
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
    h1: "55px",
    h2: "40px",
    h3: "30px",
    h4: "21px",
    h5: "18px",
    h6: "16px",
    h7: "12px",
};

theme.FONT_WEIGHT = {
    thin: "100",
    regular: "400",
    bold: "800",
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