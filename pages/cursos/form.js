import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }

  return (
    <Pagina titulo="Formulario" >
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register('nome')} placeholder="Digite o nome do curso" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Modalidade: </Form.Label>
          <Form.Control type="text"  {...register('duracao')} placeholder="Digite a modalidade" />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="modalidade">
          <Form.Label>Duração: </Form.Label>
          <Form.Control type="text"  {...register('modalidade')} placeholder="Digite a duração" />
        </Form.Group>


        <Button variant="dark" onClick={handleSubmit(salvar)} type="salvar">
          Salvar
        </Button>
      </Form>
    </Pagina>
  )
}

export default form