
import movies from "./movies.json";
import {MoviCard} from "./MoviCard";
import styles from "./PeliGrid.module.css";

function PeliGrid() {
    
    return (     
        <ul className={styles.PeliGrid}> 

        {movies.map((movie) =>
 <MoviCard key={movie.id} movie={movie} />
        
        )}
        </ul>     
    
    );
  }
  
  export default PeliGrid;
  
  