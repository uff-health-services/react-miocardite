import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('http://localhost:8082/paciente/' + this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.nome}
                </td>
                <td>
                    {this.props.obj.nomeResponsavel}
                </td>
                <td>
                    {this.props.obj.altura}
                </td>
                <td>
                    {this.props.obj.peso}
                </td>
                <td>
                    {this.props.obj.dataDeNascimento}
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;