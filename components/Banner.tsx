import { base_url } from 'constants/movies';
import Image from 'next/legacy/image';
import React from 'react';
import { Movie } from 'types';
import { BsInfoCircle } from 'react-icons/bs';
import { HiPlay } from 'react-icons/hi';

interface BannerProps {
  netflixOriginals: Movie[];
}

export default function Banner({ netflixOriginals }: BannerProps) {
  const [movie, setMovie] = React.useState<null | Movie>(null);

  React.useEffect(() => {
    const randomNumber = Math.floor(Math.random() * netflixOriginals.length - 1);
    setMovie(netflixOriginals[randomNumber]);
  }, []);

  console.log(movie);
  return (
    <div className="flex flex-col space-y-5 py-[30vh] px-[20px]">
      <div className="banner_box absolute top-0 left-0 h-[100vh] -z-10 w-screen">
        <Image
          objectFit="cover"
          objectPosition="center"
          src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title}
          layout="fill"
        />
      </div>
      <h1 className="text-[30px] leading-9 font-bold md:text-4xl lg:text-6xl">{movie?.title}</h1>
      <p className="max-w-md text-shadow-lg text-[15px] md:max-w-xl md:text-[16px] lg:text-[20px] lg:max-w-3xl">
        {movie?.overview}
      </p>
      <div className="flex items-center space-x-4">
        <button className="bannerBtn bg-white/90 text-red-600 w-[90px] ">
          <HiPlay className="text-red-600 text-[28px] md:text-[30px] lg:text-[40px]" />
          Play
        </button>
        <button className="bannerBtn bg-slate-400/50">
          More Information <BsInfoCircle className="text-[24px] md:text-[26px] lg:text-[30px]" />
        </button>
      </div>
    </div>
  );
}
