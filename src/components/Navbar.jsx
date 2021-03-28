/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { jsx } from '@emotion/react';

const WrapperItem = styled.div`
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
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
