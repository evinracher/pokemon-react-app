import React, { useEffect } from 'react';
import Card from './Card';
import styles from '../styles/Pokemons.module.css';
import { connect } from 'react-redux';
import { updatePokemons, load, initList } from '../redux/actions/globalActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SyncLoader } from 'react-spinners';

const Pokemons = (props) => {
  const {
    isInitializing,
    currURL,
    pokemons,
    isSearching,
    isLoading,
    isComparing,
    pokemonToShow,
    pokemonToCompare } = props;
  const { update, load, initList } = props;
  const hasNextPage = props.nextURL !== null ? true : false;

  useEffect(() => {
    if (isLoading) {
      update(currURL);
    }
  }, [currURL])

  useEffect(() => {
    initList();
  }, [])

  function handleLoadMore() {
    if (!isSearching && !isInitializing) {
      load();
    }
  }

  return (
    <div className={styles['pokemons']}>
      <InfiniteScroll
        dataLength={pokemons.length}
        next={handleLoadMore}
        hasMore={hasNextPage}
      >
        <div className={styles['list-container']}>
          {isComparing && pokemonToCompare === null &&
            <div className={styles['comparing']}>
              <p className={styles['comparing__title']}>Comparing pokemon</p>
              <p className={styles['comparing__name']}>{pokemonToShow.name.toUpperCase()}</p>
            </div>
          }

          <div className={styles['list']}>
            {
              pokemons.map((pokemon, index) => {
                return <Card key={pokemon+index} pokemon={pokemon} />
              })
            }
          </div>
        </div>
      </InfiniteScroll>
      {isLoading &&
        <div className={styles['loader']}>
          <SyncLoader />
          <h2 className={styles['loader__text']}>Loading...</h2>
        </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isInitializing: state.global.isInitializing,
    isLoading: state.global.isLoading,
    isSearching: state.global.isSearching,
    nextURL: state.global.nextURL,
    currURL: state.global.currURL,
    isComparing: state.global.isComparing,
    pokemonToShow: state.global.pokemonToShow,
    pokemonToCompare: state.global.pokemonToCompare
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (nextURL) => dispatch(updatePokemons(nextURL)),
    load: () => dispatch(load()),
    initList: () => dispatch(initList())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemons)