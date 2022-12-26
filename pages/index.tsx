import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header, Banner, Row } from '@/components/index';
import requests from 'utils/requests';
import { Movie } from 'types';
import { SETTINGS_FOR_LIST_MOVIES } from '@/utils/slick-settings';

interface HomeProps {
  actionMovies: Movie[];
  comedyMovies: Movie[];
  docMovies: Movie[];
  horrorMovies: Movie[];
  netflixOriginals: Movie[];
  romanMovies: Movie[];
  topRatedMovies: Movie[];
  trendingMovies: Movie[];
}

const Home = ({
  actionMovies,
  comedyMovies,
  docMovies,
  horrorMovies,
  netflixOriginals,
  romanMovies,
  topRatedMovies,
  trendingMovies,
}: HomeProps) => {
  return (
    <div className="relative h-screen bg-gradient-to-tr from-black/100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ------------------- HEADER START ----------------------------------- */}
      <Header />
      {/* ------------------- HEADER END ----------------------------------- */}

      {/* ------------------- MAIN START ----------------------------------- */}
      <main>
        <Banner netflixOriginals={netflixOriginals} />
        <section>
          <Row slick_settings={SETTINGS_FOR_LIST_MOVIES} title="Trending Now" movies={trendingMovies} />
          <Row slick_settings={SETTINGS_FOR_LIST_MOVIES} title="Top Rated" movies={topRatedMovies} />
          <Row slick_settings={SETTINGS_FOR_LIST_MOVIES} title="Action Thrillers" movies={actionMovies} />
          <Row slick_settings={SETTINGS_FOR_LIST_MOVIES} title="Comedies" movies={comedyMovies} />
          <Row slick_settings={SETTINGS_FOR_LIST_MOVIES} title="Scary Movies" movies={horrorMovies} />
          <Row slick_settings={SETTINGS_FOR_LIST_MOVIES} title="Romance Movies" movies={romanMovies} />
          <Row slick_settings={SETTINGS_FOR_LIST_MOVIES} title="Documentaries" movies={docMovies} />
        </section>
      </main>
      {/* ------------------- MAIN END ----------------------------------- */}

      {/* ------------------- FOOTER START ----------------------------------- */}
      <footer>{/* <h2>FOOTER</h2> */}</footer>
      {/* ------------------- MAIN END ----------------------------------- */}
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const data = await Promise.all([
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
  ]);
  return {
    props: {
      actionMovies: data[0].results,
      comedyMovies: data[1].results,
      docMovies: data[2].results,
      horrorMovies: data[3].results,
      netflixOriginals: data[4].results,
      romanMovies: data[5].results,
      topRatedMovies: data[6].results,
      trendingMovies: data[7].results,
    },
  };
}
