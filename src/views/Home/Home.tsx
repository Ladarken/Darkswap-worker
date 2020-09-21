import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/White.svg'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={0} />}
        title="DARKSWAP"
        subtitle=""
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
        <b>Hidden Tip</b>: DARK-ETH/RI/yUSD UNI-V2 pools yields 10 times more
        rewards per block.
      </StyledInfo>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="Liquidity List" to="/farms" variant="secondary" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
