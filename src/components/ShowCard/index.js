import React from 'react'
import Typography from 'material-ui/Typography';
import {
  PaperStyled,
  ShowName,
  ShowStatus,
  ImageStyled,
  CloseIconStyled
} from './styles';

const ShowCard = ({ name, image, clickAction, status }) => (
  <PaperStyled elevation={4}>
    <Typography type="headline" component="h2">
      <ShowName>{name}</ShowName>
    </Typography>
    <Typography component="p">
      <ShowStatus>Status: {status}</ShowStatus>
    </Typography>
    {
      image &&
      <ImageStyled alt="preview cover" src={image} />
    }
    <CloseIconStyled onClick={clickAction}/>
  </PaperStyled>
);

export default ShowCard;




