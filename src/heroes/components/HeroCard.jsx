import React from 'react'

export const HeroCard = ({hero}) => {

  const heroImageUrl = `/src/assets/heroes/${hero.id}.jpg`  

  return (
    <div className='col'>
        <div className='card'>
            <div className='col-4'>
                <img src={heroImageUrl} alt={hero.superhero} className='card-img' />
            </div>
            <div className='col-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{hero.superhero}</h5>
                    <p className='card-text'>{hero.alter_hero}</p>

                    <p>{hero.characters}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
