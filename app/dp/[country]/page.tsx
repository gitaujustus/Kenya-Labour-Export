import React from 'react'
import StateNav from '@/components/states/state-navigation'

function State() {
  return (
    <main className='min-h-screen'>
        <StateNav/>
        <div className='sm:ml-64'>
            This is State dashboard
        </div>
    </main>
  )
}

export default State