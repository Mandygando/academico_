import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";




const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue} = useForm();

  useEffect(() => { 

    if(query.id){
    const id = query.id
    const cursos =  JSON.parse(window.localStorage.getItem('cursos'))
    const curso = cursos[id]
  
    for(let atributo in curso){
      setValue(atributo, curso[atributo])
    }
  }
  }, [query.id])

  console.log(query.id)

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
        <div className='text-center'>

          <Button variant="dark" onClick={handleSubmit(salvar)}>
            <BsFillBookmarkCheckFill className="me-2" />
            Salvar
          </Button>

          <Link className='ms-2 btn btn-warning' href="/cursos">
            <BiArrowBack className='me-2' />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  )
}

export default form