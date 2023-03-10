import Head from 'next/head'

import { Poppins } from 'next/font/google'
import { Image } from "next/image";
import Card from '@/component/card'

const pop = Poppins({ subsets: ['latin'], weight: ['400'] })





export default function Home({ trending }) {


  return (
    <>
      <Head>
        <title>Movie  App</title>
        <meta name="description" content=" Movie  app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_sad_frog.png" />
      </Head>



      <div className='wrap-header'>
        <div className='container'>
          <div className=" header ">
            <h2 className='text-white title'>Selemat Datang</h2>
            <input type="text" className='form-control' placeholder='Cari Film disini' />
          </div>
        </div>
      </div>

      <div class="container-fluid mt-5">
        {/* <main className={pop.className}>
        <h1 className='text-center text-white'>Movie List</h1>
      </main> */}



        <div class="row g-2 ">
          {
            trending.results.map((movie, idx) =>
            (
              movie.media_type == "tv" ?
                <div class="col-2">
                  <div class="card ">
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} class="img-fluid rounded-top" alt="" />
                    <div class="card-body ">
                      <p class="card-title">{movie.name}</p>
                      <p>{movie.first_air_date}</p>
                    </div>

                  </div>
                </div>
                :
                <div class="col-2">
                  <div class="card ">
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} class="img-fluid rounded-top" alt="" />
                    <div class="card-body ">
                      <p class="card-title " >{movie.title}</p>
                      <p>{movie.release_date}</p>
                    </div>

                  </div>
                </div>
            ))
          }
        </div>
      </div>



    </>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=7e78efa71d11b52588ac0fd5648d8128')
  const data = await res.json()

  return {
    props: {
      trending: data,
    },
  }
}

