import React from 'react';
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {
  PaperStyled,
  CardStyled,
  TextStyled,
  CardMediaStyled
} from './styles';

const EpisodeCard = ({ name, showName, airStamp, image, season, number }) => (
  <PaperStyled elevation={4}>
    <CardStyled style={{
      backgroundColor: 'rgba(0,0,0,0)'
    }}>
      <CardContent>
        <Typography type="headline" component="h2">
          <TextStyled>{showName}</TextStyled>
        </Typography>
        {
          name &&
          <Typography component="p">
            <TextStyled>{name} </TextStyled>
          </Typography>
        }
        <Typography component="p">
          <TextStyled>Season: {season}, Episode: {number} </TextStyled>
        </Typography>
        <Typography component="p">
          <TextStyled>{airStamp}</TextStyled>
        </Typography>
      </CardContent>
      {
        image &&
        <CardMediaStyled
          image={image}
        />
      }
    </CardStyled>
  </PaperStyled>
);

export default EpisodeCard;