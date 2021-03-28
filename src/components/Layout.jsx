import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center!important;
  font-family: Lato,Helvetica,Arial,sans-serif!important;
  line-height: 1.5;
  color: #333;
`;

const Content = styled.div`
  background: #f3f7f9;
  min-height: calc(100vh - 130px);
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 70px;
`;

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const ContentContainer = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
`;

const Layout = (props) => {
  const {
    rounded, elevated, children, style, className, ...restProps
  } = props;
  return (
    <>
      <Content>
        <Container>
          <Wrapper {...restProps}>
            <ContentContainer>
              {children}
            </ContentContainer>
          </Wrapper>
        </Container>
      </Content>
    </>
  );
};

export default Layout;
