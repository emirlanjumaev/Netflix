import Image from 'next/legacy/image';
import React from 'react';
import { Movie } from '../types';
interface Props {
  movie: Movie;
}
export default function Thumbnails({ movie }: Props) {
  return (
    <div className="px-[6px]">
      <div className="relative h-52 rounded-md overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
