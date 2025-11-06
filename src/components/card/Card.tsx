import React from 'react';
import CardContainer from './CardContainer';
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription';
import CardActions from './CardActions';
import { PrimaryButton, OutlineButton } from '../Button';

export interface CardProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description: string;
  primaryText?: string;
  secondaryText?: string;
}

export const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  primaryText = 'See more',
  secondaryText = 'Save',
}) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={imageAlt} />

      <CardTitle>{title}</CardTitle>

      <CardDescription>{description}</CardDescription>

      <CardActions>
        <PrimaryButton type="button">{primaryText}</PrimaryButton>
        <OutlineButton type="button">{secondaryText}</OutlineButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;


