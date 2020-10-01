import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x3108ccfd96816f9e663baa0e8c5951d229e8c6da"
      >
        DarkToken Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0x5cbefe14c66ba706e79ca4237ff10f218461014a"
      >
        Uniswap DARK-ETH
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/GS3c5D8">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/Ladarken/Darkswap">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/DarkBuild1">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
