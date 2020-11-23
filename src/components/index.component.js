import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {paciente: []};
    }
    componentDidMount(){
      axios.get('http://localhost:8082/paciente')
        .then(response => {
            console.log(response);
          this.setState({ paciente: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
        console.log(this.state.paciente)
    }
    tabRow(){
      return this.state.paciente.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Lista de pacientes</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                  <th>id</th>
                <th>nome</th>
                <th>nomeresponsavel</th>
                <th>altura</th>
                <th>peso</th>
                <th>datanascimento</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }