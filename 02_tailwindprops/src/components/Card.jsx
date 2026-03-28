import React from 'react'

function Card({username="Motu",post="Software Enngineer",url="https://images.pexels.com/photos/701755/pexels-photo-701755.jpeg"}) {
    
    
  return (
    <div className="flex flex-col items-center gap-6 p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src={url} />
  </div>
  <div className="flex items-center">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>{username}</span>
      <span>{post}</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card