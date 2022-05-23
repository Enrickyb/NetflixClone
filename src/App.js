import { useEffect, useState } from 'react';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import MovieRow from './components/MovieRow/MovieRow';
import tmdb from './Tmdb'

function App() {

  const [movieList, setMovieList]= useState([])
  const [featuredData, setFeaturedData]= useState(null)
  useEffect(()=>{
    const loadAll = async () =>{
     
      //pegando a lista total
      let list = await tmdb.getHomeList()
      setMovieList(list)

      //pegando featured
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      console.log(chosen)
    }

    loadAll()
  },[])


  return (
    <div className='page'>
      {
      featuredData && <FeaturedMovie item={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((item, key)=>(
              <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
              ))}
      </section>
      
    </div>
  );
}

export default App;