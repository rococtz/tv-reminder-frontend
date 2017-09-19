import React from 'react';
import {
  PaperStyled,
  HeaderContainer,
  HeaderTitle,
  HeaderText,
  ImageStyled,
  NoImagePlaceholder,
  IconFavoriteStyled,
  IconFavoriteBorderStyled
} from './styles';

const SearchResultCard = ({ name, favorite, clickAction, image }) => (
  <PaperStyled elevation={4}>
    <HeaderContainer>
      <HeaderTitle type="headline" component="h2">
        <HeaderText>{name}</HeaderText>
      </HeaderTitle>
    </HeaderContainer>
    {
      image ? (<ImageStyled src={image} alt={''} />) : (<NoImagePlaceholder />)
    }
    {
      favorite ? (
        <IconFavoriteStyled onClick={clickAction}/>
      ) : (
        <IconFavoriteBorderStyled onClick={clickAction}/>
      )
    }
  </PaperStyled>
);

export default SearchResultCard;