import React, {Component} from 'react';
import axios from 'axios';

export default class DecisionTree extends Component {
    constructor(props) {
        super(props);
        this.onChangeTreeName = this.onChangeTreeName.bind(this);
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
        this.onChangeAnswer = this.onChangeAnswer.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            treeName: "miocardite-escolar",
            questionId: "q0",
            answers: [""],
            nextNode: []
        }
    }

    componentDidMount() {
        const obj = {
            treeName: "miocardite-escolar",
            questionId: "q0",
            answers: [""]
        };
        axios.post('http://localhost:8083/node', obj).then(response => {
            this.setState({nextNode: response.data});
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTreeName(e) {
        this.setState({
            treeName: e.target.value
        });
    }

    onChangeQuestion(e) {
        this.setState({
            question: e.target.value
        });
    }

    onChangeAnswer(e) {
        this.setState({
            answers: [e.target.value]
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            treeName : this.state.treeName,
            questionId: this.state.nextNode.id,
            answers: this.state.answers
        };

        axios.post('http://localhost:8083/node', obj).then(response => {
            this.setState({nextNode: response.data});
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">adicionar paciente</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Questao: {this.state.nextNode.id}</label>
                    </div>
                    <div className="form-group">
                        <label>Pergunta: {this.state.nextNode.text}</label>
                    </div>
                    <div className="form-group">
                        <label>Answer: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.answers}
                               onChange={this.onChangeAnswer}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Resposta arvore"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}