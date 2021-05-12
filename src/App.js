import logo from './logo.svg';
import './App.css';
import {useContext} from 'react'
import GraphProvider from './components/GraphProvider'
import {gql, useQuery} from '@apollo/client'
import QuakeTile from './components/quaketiles'
import Header from './components/header'
import {useState} from 'react'


 const GET_QUAKES = gql`
  query quakeList($after: String){
  quakes(after: $after){
    cursor
    hasMore
  quakes{
    id
    location
  magnitude
    cursor
    when
  }
}
 }
`;


function App(props) {

const {data, loading, error, fetchMore} = useQuery(GET_QUAKES)
const [isLoadingMore, setIsLoadingMore] = useState(false)
if(loading) return <h1>Loading....</h1>
if(error) return <p>Error</p>


  return (
    <div className="App">
      <Header />
      {data.quakes?.quakes && data.quakes.quakes.map(
        quake => {
          return <QuakeTile key={quake.id} {...quake}/>
        }
      )}


        {data.quakes?.hasMore && (isLoadingMore ?
          (<h1>Loading.....</h1>) : (
            <button onClick={
               ()=> {
                
                fetchMore({
                  variables:{
                    after: data.quakes.cursor
                  },
                  // updateQuery: (prev, {fetchMoreResult, ...rest})=>{
                   
                  //   if(!fetchMoreResult) return prev
                  //     return {
                  //       ...fetchMoreResult,
                  //       quakes: {
                  //         ...fetchMoreResult.quakes,
                  //         quakes: [
                  //           ...prev.quakes.quakes,
                  //           ...fetchMoreResult.quakes.quakes
                  //         ]

                  //       }
                  //     }
                  // }
                  updateQuery: (prev, {fetchMoreResult}) =>{
                  
                    fetchMoreResult.quakes.quakes = [
                      ...prev.quakes.quakes,
                      ...fetchMoreResult.quakes.quakes

                    ]
                    return fetchMoreResult
                  }
                })
                
              }
            }>
              Load More
            </button>
          )
          
          )}

    </div>
  );
}

export default App;
