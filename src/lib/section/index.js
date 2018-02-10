import styled from 'styled-components';

export const PageSection = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  @media only screen and (min-width: 800px) {
    padding: 8px 16px 0;
  }
`;

export const Container = styled.div`
  padding: 32px;
  background-color: #fefefe;

  @media only screen and (min-width: 800px) {
    border-radius: 2px;
    box-shadow: 10px 12px 5px -8px rgba(196,196,196,1);
  }
`;

export default PageSection;