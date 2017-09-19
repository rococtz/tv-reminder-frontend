import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import SearchResultCard from '../../components/SearchResultCard';
import { 
  getIsFavorite,
  onInputChange,
  toggleAction
} from './utils';
import {
  InputStyled,
  SearchBarContainer,
  SearchBarOuterContainer,
  ResultsContainer
} from './styles';

const SearchView = ({ getSearchResults, addShowToFavorites, removeShowFromFavorites, results, favoriteShows }) => {
  return (
    <div>
      <SearchBarOuterContainer>
        <SearchBarContainer>
          <InputStyled
            onChange={onInputChange(getSearchResults)}
            placeholder="Search for your favorite shows"
            autoFocus={true}
            fullWidth={true}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </SearchBarContainer>
      </SearchBarOuterContainer>
      <ResultsContainer>
        {
          results.map((result, index) => {
            const isFavorite = getIsFavorite(favoriteShows, result.show.id);
            return (
              <SearchResultCard
                key={index}
                name={result.show.name}
                favorite={isFavorite}
                image={ R.path(['show','image','medium'], result)}
                clickAction={
                  toggleAction(
                    removeShowFromFavorites,
                    addShowToFavorites,
                    isFavorite,
                    result.show
                  )
                }
              />
            )
          })
        }
      </ResultsContainer>
    </div>
  )
}

SearchView.propTypes = {
  getSearchResults: PropTypes.func.isRequired,
  addShowToFavorites: PropTypes.func.isRequired,
  results: PropTypes.array
};

export default SearchView;
