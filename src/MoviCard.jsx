import Button from '@mui/material/Button';
import styles  from "./MoviCard.module.css";
import { useNavigate } from 'react-router-dom';

export function MoviCard({movie}){
    const navige=useNavigate();
    const imageUrl="https://image.tmdb.org/t/p/w300"+movie.poster_path;

return <li className={styles.MoviCard}>
    <img
    width={230}
    height={345}
    className={styles.MoviImage} src={imageUrl} alt={movie.title} />
     <Button  size="small" onClick={()=>(navige(`Peliculas/${movie.id}/${movie.title}`))}
          >Info</Button>  
   <div> {movie.title}
   </div>
   </li>

}
