import React from 'react';

import { Container, Body, Title, Text, Image, Button } from '../styles/CardStyle';

export function Card({  children, ...restProps }) {
  return (
    <Container  {...restProps}>
      {children}
    </Container>
  );
}


Card.Body =function CardBody({  children, ...restProps }){
  return (
    <Body {...restProps}>
      {children}
    </Body>
  )
}

Card.Title=function CardTitle({  children, ...restProps }){
  return  (
    <Title  {...restProps}>
      {children}
    </Title>
  )
}
Card.Text=function CardText({  children, ...restProps }){
  return  (
    <Text  {...restProps}>
      {children}
    </Text>
  )
}

Card.Btn=function CardBtn({  children, ...restProps }){
  return  (
    <Button   {...restProps}>
      {children}
    </Button>
  )
}

Card.Img=function CardImg({  alt,src, ...restProps }){
  return  (
     <Image
       src={src}
       alt={alt}
    
       {...restProps}
     
     />
  )}