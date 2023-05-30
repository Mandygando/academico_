import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        axios.post('/api/disciplinas', dados)
        push('/disciplinas')
    }

    return (
        <Pagina titulo="Disciplina">
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
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/disciplinas">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form