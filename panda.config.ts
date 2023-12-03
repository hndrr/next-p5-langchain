import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Presets to use
  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: "amber",
      grayColor: "sand",
      borderRadius: "xl",
    }),
  ],

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          fg: {
            disabled: { value: "{colors.gray.6}" },
          },
          bg: {
            disabled: {
              value: { base: "{colors.gray.4}", _dark: "{colors.gray.5}" },
            },
          },
        },
      },
      recipes: {
        button: {
          base: {
            textTransform: "uppercase",
          },
          variants: {
            visual: {
              funky: { bg: "blue", color: "white" },
              edgy: { border: "1px solid {colors.blue.500}" },
            },
            size: {
              sm: { padding: "4", fontSize: "12px" },
              lg: { padding: "8", fontSize: "40px" },
            },
            shape: {
              square: { borderRadius: "0" },
              circle: { borderRadius: "full" },
            },
            primary: {
              base: {
                color: "{colors.black}",
                backgroundColor: "{colors.primary.5}",
              },
              hover: {
                backgroundColor: "{colors.primary.6}",
              },
              focus: {
                boxShadow: "{shadows.focus}",
              },
            },
            secondary: {
              base: {
                color: "{colors.black}",
                backgroundColor: "{colors.secondary.5}",
              },
              hover: {
                backgroundColor: "{colors.secondary.6}",
              },
              focus: {
                boxShadow: "{shadows.focus}",
              },
            },
            danger: {
              base: {
                color: "{colors.black}",
                backgroundColor: "{colors.danger.5}",
              },
              hover: {
                backgroundColor: "{colors.danger.6}",
              },
              focus: {
                boxShadow: "{shadows.focus}",
              },
            },
          },
          // defaultVariants: {
          //   visual: "funky",
          //   size: "sm",
          //   shape: "square",
          // },
        },
      },
    },
  },

  // The framework you are using
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
