/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { jsx } from '@emotion/react';

const WrapperItem = styled.div`
  display: block;
  font-size: 3rem;
  font-weight: 100;
  font-variant: small-caps;
  text-align: center;
`;

const Navbar = (props) => {
  const { title } = props;
  return (
    <>
      <WrapperItem>
        <Link to="/" css={{ textDecoration: 'none', color: '#000' }}>
          {title}
        </Link>
      </WrapperItem>
    </>
  );
};

export default Navbar;
