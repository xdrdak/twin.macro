/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import tw, { theme, styled, css, GlobalStyles } from './macro'

const twPropertyTest = <div tw="text-purple-500" />

const twFunctionTest = tw.div`text-purple-500`

const cssFunctionTest = (
  <div
    css={css`
      ${tw`text-purple-500`}
      background-color: purple;
    `}
  />
)

const styledFunctionTest = styled.div`
  ${css`
    ${tw`text-purple-500`}
    background-color: purple;
  `}
`

const themeObjectPurple = (
  <input css={css({ color: theme`colors.purple.500` })} />
)

const themeStringFont = (
  <input
    css={css`
      fontfamily: ${theme`fontFamily.sans`.join(', ')};
    `}
  />
)

const colorsRed = Object.values(theme`colors.red`)

const themeFunctionObjectPurple = (
  <input css={css({ color: theme('colors.black') })} />
)

const themeFunctionStringHeight = (
  <input
    css={css`
      height: ${theme('height.24')};
    `}
  />
)

const GlobalStylesTest = () => <GlobalStyles />
