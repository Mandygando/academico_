import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from "react-icons/ai";

const Cursos = () => {
    return (
        <Pagina titulo="Cursos">
            <Link href="/cursos/form" className='mb-2 btn btn-warning'>
            <AiOutlinePlus/>
                Novo
            </Link>
            <Table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

        </Pagina>
    )
}

export default Cursos