import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const buttonFn = /* @__PURE__ */ createRecipe('button', {
  "variant": "solid",
  "size": "md"
}, [])

const buttonVariantMap = {
  "variant": [
    "solid",
    "outline",
    "ghost",
    "link"
  ],
  "visual": [
    "funky",
    "edgy"
  ],
  "size": [
    "xs",
    "md",
    "xl",
    "2xl",
    "sm",
    "lg"
  ],
  "shape": [
    "square",
    "circle"
  ],
  "primary": [
    "base",
    "hover",
    "focus"
  ]
}

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(buttonFn, {
  __recipe__: true,
  __name__: 'button',
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
})