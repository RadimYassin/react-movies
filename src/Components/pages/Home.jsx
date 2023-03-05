import React from 'react'
import { Container } from '../../GloblesStyles'
import Form from '../Form/Form'
import { MainHome ,SeachHome } from '../styles/homeStyle'

export default function Home() {
  return (
    <Container bg mt="50px">
          <MainHome>
                <SeachHome>
                      <Form>
                        <Form.Input  type="text" placeholder="serch a movie"  />
                      </Form>
                      <h1>trend</h1>
                </SeachHome>
               
          </MainHome>

    </Container>
  )
}
