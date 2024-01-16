import React from 'react'
import Utils from './components/export_imports/Utils'

function Avatar ({person, size}){
  return(
    <img 
    className='avatar'
    src={Utils(person)}
    alt="person.name"
    width={size}
    height={size} />
  )
}

export default function App(){
  return (
    
    <div>
       <Avatar 
      size={100}
      person={{name: 'Katsuko Saruhashi', 
      imageId: 'YfeOqp2'}}
      />
    
      <Avatar 
      size={80}
      person={{name: 'Aklilu Lemma', 
      imageId: 'OKS67lh'}}
      />

     <Avatar 
      size={50}
      person={{name: 'Lin Lanying', 
      imageId: '1bx5QH6'}}
      />
    </div>
    
  );

}



