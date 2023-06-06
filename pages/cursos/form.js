import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import cursoValidator from '@/validators/cursoValidator'



const form = () => {

  const {push} = useRouter()
  const { register, handleSubmit, formState: {errors} } = useForm()

  function salvar(dados) { 
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || [] 
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    
  }

  const validacaoNome = {
    required: 'Campo obrigatório!',
    minLength: {
      value: 3,
      message: 'O minimo de caracteres é 3'
    },
    maxLength:{
      value: 10,
      message: 'O máximo caracteres é 10'
    },
  }
  

  return (
    <Pagina titulo="Formulario" >
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} placeholder="Digite o nome do curso" />
          {
            errors.nome &&
            <small className='mt-1 text-warning'>{errors.nome.message}</small>
          }
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="duracao">
          <Form.Label>Modalidade: </Form.Label>
          <Form.Control isInvalid={errors.duracao} type="text"  {...register('duracao', cursoValidator.duracao)} placeholder="Digite a modalidade" />
          {
            errors.duracao &&
            <small className='mt-1 text-warning'>{errors.nome.message}</small>
          }
        </Form.Group>

        <Form.Group className="mb-3 " controlId="modalidade">
          <Form.Label>Duração: </Form.Label>
          <Form.Control isInvalid={errors.modalidade} type="text"  {...register('modalidade', cursoValidator.modalidade)} placeholder="Digite a duração" />
          {
            errors.modalidade &&
            <small className='mt-1 text-warning'>{errors.nome.message}</small>
          }
        </Form.Group>
    <div className='text-center'>

        <Button variant="dark" onClick={handleSubmit(salvar)}>
          <BsFillBookmarkCheckFill className="me-2"/>
          Salvar
        </Button>

        <Link className='ms-2 btn btn-warning' href="/cursos">
          <BiArrowBack className='me-2'/>
          Voltar
        </Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default form