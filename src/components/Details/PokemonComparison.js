import React from 'react';
// TODO: Separate specific css per file into Details
import styles from '../../styles/Details.module.css';
import comparison from '../../styles/Comparison.module.css';
// import { getClassNames } from '../../Utils';
import { connect } from 'react-redux';
import { stopCompare } from '../../redux/actions/globalActions';
import Graphics from '../Graphics';
const PokemonComparison = (props) => {
  const { pokemonToShow, pokemonToCompare } = props;
  const handleClick = () => {
    props.close();
  }

  return (
    <div className={styles['pokemon__comparison']} >
      <div className={styles['header']}>
        <div className={styles['header__info']}>
          <h2>{(pokemonToShow.name + ' vs. ' + pokemonToCompare.name).toUpperCase()}</h2>
        </div>
        <button className={styles['button--close']} onClick={handleClick}>x</button>
      </div>
      <div className={comparison['comparison__content']}>
        <div className={comparison['comparison__images']}>
          <img
            className={comparison['comparison__img']}
            src={pokemonToShow.imageUrl}
            alt={`Pokemon ${pokemonToShow.name}`} />
          <img
            className={comparison['comparison__img']}
            src={pokemonToCompare.imageUrl}
            alt={`Pokemon ${pokemonToCompare.name}`} />
        </div>
        <hr />
        <div className={comparison['comparison__info']}>
          <div className={comparison['info__row']}>
            <p>{pokemonToShow.height}m</p><p className={comparison['info__title']}>Height</p><p>{pokemonToCompare.height}m</p>
          </div>
          <div className={comparison['info__row']}>
            <p>{pokemonToShow.weight}kg</p><p className={comparison['info__title']}>Weight</p><p>{pokemonToCompare.weight}kg</p>
          </div>
          <div className={comparison['info__row']}>
            <p>{pokemonToShow.gender}</p><p className={comparison['info__title']}>Gender</p><p>{pokemonToCompare.gender}</p>
          </div>
          <div className={comparison['info__row']}>
            <div className={comparison['info__abilities']}>
              {pokemonToShow.abilities.map((item, index) =>
                <p className={comparison['info__ability']} key={item + index}>{item.ability.name}</p>)}
            </div>
            <p className={comparison['info__title']}>Abilities</p>
            <div className={comparison['info__abilites']}>
              {pokemonToCompare.abilities.map((item, index) =>
                <p className={comparison['info__ability']} key={item + index}>{item.ability.name}</p>)}
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className={comparison['comparison__stats']}>
        <Graphics
          dataset={[
            { data: pokemonToShow.stats_data },
            { data: pokemonToCompare.stats_data }
          ]} />
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(stopCompare())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonComparison)