
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries'

const countriesPromise=fetch("https://restcountries.com/v3.1/all?fields=name,flags")
.then(res => {
  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }
  return res.json();
});

function App() {


  return (
    <>
     
      <Suspense fallback={<h3>Nadir on the go...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
     
    </>
  )
}

export default App
