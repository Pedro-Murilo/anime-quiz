import React from 'react';
import styled from 'styled-components';

import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widgets/Widget';
import Footer from '../src/components/Footer/Footer';
import GitHubCorner from '../src/components/GithubCorner/GithubCorner';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Supernatural Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz ai seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h2>Put your quiz here</h2>
            <p>Lorem ipsum dolor sit</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Pedro-Murilo" />
    </QuizBackground>
  );
}
