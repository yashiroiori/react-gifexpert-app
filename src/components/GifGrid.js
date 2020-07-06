import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFecthGifs';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]);
    
    // useEffect(() => {
    //     getGifs(category)
    //         .then(img => setImages(img) );
    // },[category]);
        
    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <div className='fullWidth'>
            <h2 className='animate__animated animate__fadeIn'>{category}</h2>
            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
            {
                images.map(img => (
                    <GifGridItem 
                        key={img.id} 
                        {...img}
                    />
                ))
            }
        </div>
    )
}
