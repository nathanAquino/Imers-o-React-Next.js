/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import GitHuberCorner from '../src/components/GitHuberCorner';

export default function Home() {
  const router = useRouter(); // hooks
  // React.useEffect(() => {
  //   // fetch() ...
  //   setTimeout(() => {
  //     setScreenState(screenStates.QUIZ);
  //   }, 4 * 1000);
  // nasce == didMount
  // }, []);
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      router.push('/bem_vindo');
    }, 0 * 1000);
    // nasce == didMount
  }, []);
  return (
    <QuizBackground backgroundImage={db.bgL}>
      <Head>
        <title>Assasins Creed</title>
        <meta property="og:image" content="https://www.clipartkey.com/mpngs/m/200-2006275_transparent-assassins-creed-symbol-png-assassins-creed-2.png" />
        <meta property="og:title" content="Quiz Assasin's Creed" key="title" />
        <meta property="og:description" content="Que tal testar seus conhecimentos sobre a Triologia Assasin's Creed?" />
      </Head>
      <GitHuberCorner projectUrl="https://github.com/nathanAquino" />
    </QuizBackground>
  );
}
