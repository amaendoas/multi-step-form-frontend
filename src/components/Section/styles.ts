import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 2rem;

  span>a {
    display: flex;
    font-weight: 700;
    gap: 8px;
    align-items: center;
    color: ${({theme}) => theme.COLORS.PRIMARY};
  }
`
export const Page = styled.div`
  width: 70rem;
  height: 55rem;

`
export const Title = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    line-height: 46px;
    color: ${({theme}) => theme.COLORS.DARK_900};
    margin-bottom: 12px;
  }

  p {
    line-height: 30px;
    color: ${({theme}) => theme.COLORS.DARK_600};
    padding: 0 5rem;
  }
`
export const Step = styled.div`
  padding: 4rem 7rem;
  border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
  border-radius: 34px;
  height: 90%;
  width: 100%;
`

export const Content = styled.div`
  animation: load 500ms backwards;
  @keyframes load {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

`