import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'



function App() {
  const [progress, setProgress] = useState(15)
  const apikey = import.meta.env.VITE_REACT_APP_API_KEY;
  // console.log(import.meta.env.VITE_REACT_APP_API_KEY);
  
  return (
    <> 
      <LoadingBar
        color='#f11946'
        shadow = {true}
        height={3}
        progress={progress}
      />
    <Navbar/>
    <Routes>
      <Route exact path='/general' element={<News apikey={apikey}  setProgress={setProgress} key="general" category={"general"} pageSize={10}/>}/>
      <Route exact path='/business' element={<News apikey={apikey}  setProgress={setProgress} key="business" category={"business"} pageSize={10}/>}/>
      <Route exact path='/entertainment' element={<News apikey={apikey}  setProgress={setProgress} key="entertainment" category={"entertainment"} pageSize={10}/>}/>
      <Route exact path='/general' element={<News apikey={apikey}  setProgress={setProgress} key="general" category={"general"} pageSize={10}/>}/>
      <Route exact path='/health' element={<News apikey={apikey}  setProgress={setProgress} key="health" category={"health"} pageSize={10}/>}/>
      <Route exact path='/science' element={<News apikey={apikey}  setProgress={setProgress} key="science" category={"science"} pageSize={10}/>}/>
      <Route exact path='/sports' element={<News apikey={apikey}  setProgress={setProgress} key="sports" category={"sports"} pageSize={10}/>}/>
      <Route exact path='/technology' element={<News apikey={apikey}  setProgress={setProgress} key="technology" category={"technology"} pageSize={10}/>}/>
      <Route exact path='/*' element={<News apikey={apikey}  setProgress={setProgress} key="general" category={"general"} pageSize={10}/>}/>
    </Routes>
  
 
    
    </>
  )
}

export default App
