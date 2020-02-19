import styled from "styled-components"

export const LayoutWrapper = styled.div`
  margin: 20px 30px;
`
export const HomePageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 60px;
    justify-content: center;
    align-items: center;
    a {
        font-size: 56px;
        text-decoration: none;
        padding: 0 20px;
    }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 15px;
  a {
    svg {
      width: 40px;
    }
  }
  @media screen and (max-width: 420px) {
  top: 8px;
  left: 8px;
    }
`
export const Filter = styled.div`
  font-size: 28px;
  position: absolute;
  top: 20px;
  right: 15px;
  display: flex;
  flex-direction: column;
  .filterItems {
      font-size: 20px;
      display: flex;
      text-align: right;
      flex-direction: column;
      a {
          cursor: pointer;
      }
      @media screen and (max-width: 420px) {
        font-size: 16px;
}
  }
  @media screen and (max-width: 420px) {
  font-size: 20px;
  top: 8px;
  right: 8px;
}
`
export const DreamWrapper = styled.div`
  height: 100%;
  display: flex;
  background: #fafafa;
  .data {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    .quick-data {
      display: flex;
      justify-content: center;
      margin: 60px 40px;
      &--child {
        &:nth-last-child(even) {
            border: 1px solid;
            border-top: 0;
            border-bottom: 0;
            border-image: linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgb(177, 165, 165) 48%,rgba(255,255,255,0) 100%);
            border-image-slice: 1;
        }
        padding: 10px 40px;
        text-align: center;
        .title {
          font-size: 42px;
        }
        .explain {
          font-size: 14px;
        }
        @media screen and (max-width: 420px) {
        padding: 10px;
}
      }
    }
    .chart-data {
        height: 100%;
        width: 100%;
    }
  }
  .name-data {
   margin-top: 20px;
    .title {
      font-size: 42px;
    }
  }
`
