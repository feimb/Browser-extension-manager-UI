import { useState } from 'react'
import Header from './components/Header'
import ExtensionList from './components/ExtensionList'


function App() {

  return (
    <>
      <Header />
      <h1 className='mt-10 text-3xl text-neutral-0 font-bold flex justify-center'>Extension List</h1>
      <ExtensionList />
    </>
  )
}

export default App
