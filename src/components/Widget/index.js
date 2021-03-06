import styled from 'styled-components';// blocos do quiz

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary}; // cor da borda
  background-color: ${({ theme }) => theme.colors.secondary}; //cor do fundo do painel 
  border-radius: 10px;
  border: 2px solid transparent;
  overflow: hidden;
  h1, h2 {
    font-size: 25px;
    font-weight: 700;
    font-family: 'Crimson Text', serif;
    line-height: 1;
    margin-bottom: 0;
    color: #f0f3f4;
    text-align:center;
    width: 100%;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    font-family: 'Crimson Text', serif;
    line-height: 1;
    color:#9D353D;
    text-align: center;
  }
`;

Widget.BemVindo = styled.h3`
    margin-top: 95px;
    margin-bottom: 10px;
    border: 1px solid;
    border-radius: 10px;
    border: 2px solid transparent;
    overflow: hidden;
    text-align: center;
    font-family: 'Crimson Text',serif;
    font-size: 75px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: #000000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

Widget.QuizAssassinos = styled.h4`
    margin-top: -40px;
    margin-bottom: 24px;
    border: 1px solid;
    border-radius: 10px;
    border: 2px solid transparent;
    overflow: hidden;
    text-align: center;
    font-family: 'Crimson Text',serif;
    font-size: 45px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: #84171A;
    width: 100%;
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  font-family: 'Crimson Text', serif;
  text-align:center;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    margin-top: 20px;
    border-radius: 25px;
    border : 1px solid transparent;
    box-shadow: 1px 1px 8px 0px black; 
    padding: 10px 15px;
    text-align: center;
    :hover {
      background-color: #A3161D;
      color: #ffffff;
      cursor: pointer;
      text-decoration:none;
    }
    :disabled {
      background-color: ${({ theme }) => theme.colors.secondary};
      :hover {
        cursor: not-allowed;
      }
    }
  }
  a{
    text-shadow: black 0.1em 0.1em 0.2em;
    text-decoration: none;
    color: #282526;
  }
`;

Widget.Brother = styled.div`
  padding: 24px 32px 32px 32px;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  p{
    width:100%;
    text-align:center;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    background-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    margin-top: 20px;
    border-radius: 25px;
    border : 1px solid transparent;
    box-shadow: 1px 1px 8px 0px black; 
    padding: 10px 15px;
    text-align: center;
    :hover {
      background-color: #A3161D;
      color: #ffffff;
      cursor: pointer;
      text-decoration:none;
    }
    :disabled {
      background-color: ${({ theme }) => theme.colors.secondary};
      :hover {
        cursor: not-allowed;
      }
    }
  }
  a{
    text-shadow: black 0.1em 0.1em 0.2em;
    text-decoration: none;
    color: #282526;
  }
`;

Widget.QuizBrothers = styled.a`
  width:49%;
  outline: 0;
  text-decoration: none;
  margin:5px 0px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  font-family: 'Crimson Text', serif;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
