import {genres} from '../assets/constants'
import { SongCard, Error, Loader } from '../components';
import { useDispatch, useSelector } from 'react-redux';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
    const {data, isFetching, error} = useGetTopChartsQuery();
    const genreTitle = 'Top';
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    
    if(isFetching) return <Loader />;
    if(error) return <Error/>;

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-3xl'>Discover</h2>
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn m-1">
            Select Genre
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52"
          >
            {
                genres.map((item) => (
                    <li>
                        <a>
                            {item.title}
                        </a>
                    </li>
                ))
            }
          </ul>
        </div>
      </div>
      <div className='grid gap-4 lg:grid-cols-5 sm:grid-cols-3  mt-6'>
        {
            data?.map((song, i) => (
                <SongCard 
                key = {song.key}
                song={song}
                isPlaying = {isPlaying}
                activeSong={activeSong}
                data={data}
                i= {i}
                />
            ))
        }
      </div>
    </div>
  );
};

export default Discover;
