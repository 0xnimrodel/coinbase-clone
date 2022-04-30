import { useState } from 'react';
import styled from 'styled-components';

import React from 'react';
import CoinItem from './CoinItem';

const CoinSelecter = ({
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdWebTokens,
  walletAddress,
}) => {

  const [sender] = useState(walletAddress)

  return (
    <Wrapper>
      <Title>Select Asset</Title>
      <CoinList>
        {sanityTokens.map((token, index) => (
          <CoinItem
            key={index}
            token={token}
            sender={sender}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            setAction={setAction}
          />
        ))}
      </CoinList>
    </Wrapper>
  );
};

export default CoinSelecter;

const Wrapper = styled.div``;
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`;
