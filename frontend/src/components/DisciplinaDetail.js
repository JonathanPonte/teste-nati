import React from 'react'

import { FaTimesCircle } from 'react-icons/fa'

const DisciplinaDetail = (props) => {
    const user = JSON.parse( localStorage.getItem('user') )
    return (
    <React.Fragment>
        <div className="row disciplinaDetail">
            <div className="col-12 col-md-4">
                <span>{props.disciplina.nome}</span>

            </div>
            <div className="col-6 col-md-4">
                <span>{props.disciplina.credito}</span> créditos
            </div>
            <div className={user.tipo !== "COORDENADOR" ? 'd-none' :"col-6 col-md-2"}>
                <button className="btn btn-link pt-0" onClick={() => props.removeDisciplina(props.semestre_id ,props.disciplina.id)}><FaTimesCircle /></button>
            </div>
            
        </div>
        <hr/>
    </React.Fragment>
    )
}

export default DisciplinaDetail