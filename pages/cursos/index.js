import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { AiOutlinePlus } from "react-icons/ai";
import { HiBackspace } from 'react-icons/hi'
import { BiBrush} from 'react-icons/bi'

const index = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        setCursos(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('cursos')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('cursos', JSON.stringify(itens))
            setCursos(itens)
        }
    }

    return (
        <Pagina titulo="Cursos">
            <Container>
                <Link href="/cursos/form" className='mb-2 btn btn-warning'>
                    <AiOutlinePlus />
                    Novo
                </Link>
                <Table class="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Modalidade</th>
                            <th>Duração</th>
                        </tr>

                    </thead>
                    <tbody>
                        {cursos.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/cursos/' +i}>
                                    <BiBrush title="alterar" className='texte warning'></BiBrush>
                                    </Link>
                                    {''}
                                    <HiBackspace onClick={() => excluir(i)} className='text-danger ' />
                                </td>

                                <td>{item.nome}</td>
                                <td>{item.duracao}</td>
                                <td>{item.modalidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </Pagina>
    )
}

export default index