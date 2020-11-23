import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeNomeResponsavel = this.onChangeNomeResponsavel.bind(this);
        this.onChangeAltura = this.onChangeAltura.bind(this);
        this.onChangePeso = this.onChangePeso.bind(this);
        this.onChangeDataNascimento = this.onChangeDataNascimento.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nome: "",
            nomeResponsavel: "",
            altura: "",
            peso: "",
            dataDeNascimento: "",
        }
    }

    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }

    onChangeNomeResponsavel(e) {
        this.setState({
            nomeResponsavel: e.target.value
        });
    }

    onChangeAltura(e) {
        this.setState({
            altura: e.target.value
        });
    }

    onChangePeso(e) {
        this.setState({
            peso: e.target.value
        });
    }

    onChangeDataNascimento(e) {
        this.setState({
            dataDeNascimento: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            nome: this.state.nome,
            nomeResponsavel: this.state.nomeResponsavel,
            altura: this.state.altura,
            peso: this.state.peso,
            dataDeNascimento: this.state.dataDeNascimento,
        };
        axios.post('http://3.238.134.235:8082/paciente', obj)
            .then(res => console.log(res.data));

        this.setState({
            nome: "",
            nomeResponsavel: "",
            altura: "",
            peso: "",
            dataDeNascimento: "",
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Cadastro paciente</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.nome}
                            onChange={this.onChangeNome}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nome responsável: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.nomeResponsavel}
                               onChange={this.onChangeNomeResponsavel}
                        />
                    </div>
                    <div className="form-group">
                        <label>Altura: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.altura}
                               onChange={this.onChangeAltura}
                        />
                    </div>
                    <div className="form-group">
                        <label>Peso: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.peso}
                               onChange={this.onChangePeso}
                        />
                    </div>
                    <div className="form-group">
                        <label>Data de nascimento: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.dataDeNascimento}
                               onChange={this.onChangeDataNascimento}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit"
                               value="Registro paciente"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}