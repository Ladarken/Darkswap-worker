import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
        Liquidity
      </StyledLink>
      <StyledAbsoluteLink
        href="https://dark-stake.netlify.app/"
        target="_blank"
      >
        staking<StyledSpan>↗</StyledSpan>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://medium.com/@darkswap/darkswap-7bf717646aa0"
        target="_blank"
      >
        About<StyledSpan>↗</StyledSpan>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://dark-vault.netlify.app"
        target="_blank"
      >
        Vault<StyledSpan>↗</StyledSpan>
      </StyledAbsoluteLink>
      {/* <StyledAbsoluteLink
        href="https://dark-vision.netlify.app"
        target="_blank"
      >
        Vision<StyledSpan>↗</StyledSpan>
      </StyledAbsoluteLink> */}
      <StyledAbsoluteLink
        href="https://dark-exchange.netlify.app"
        target="_blank"
      >
        Exchange<StyledSpan>↗</StyledSpan>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledSpan = styled.span`
  font-size:11px
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  display:flex;
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
