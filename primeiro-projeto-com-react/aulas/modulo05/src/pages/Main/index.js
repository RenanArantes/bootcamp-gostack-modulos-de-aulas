import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    finded: null,
  }

  // Carregar os dados do LocalStorage()
  componentDidMount() {
      const repositories = localStorage.getItem('repositories');

      if(repositories) {
          this.setState({ repositories: JSON.parse(repositories) });
      }
  }

  // Salvar os dados do LocalStorage()
  componentDidUpdate(_, prevState) {
      const { repositories } = this.state;

      if(prevState.repositories !== repositories) {
          localStorage.setItem('repositories', JSON.stringify(repositories));
      }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, finded: false });

    try {
        const { newRepo, repositories} = this.state;

        if (newRepo === '') throw 'Voce precisa digitar um repositorio.';

        const hasRepo = repositories.find(r => r.name === newRepo);

        if (hasRepo) throw 'Repositorio ja existe.';

        const response = await api.get(`/repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        }

        this.setState({
          repositories: [...repositories, data],
          newRepo: '',
        });
    } catch (error) {
        this.setState({ finded: true});
    } finally {
        this.setState({ loading: false })
    }


  }

  render() {
    const { newRepo, repositories, loading, finded } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit} finded={finded}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            { loading ?
                <FaSpinner color="#FFF" size={14}/> :
                <FaPlus color="#FFF" size={14} />}
          </SubmitButton>
        </Form>

        <List >
            {repositories.map( repo => (
                <li key={repo.name}>
                    <span>{repo.name}</span>
                    <Link to={`/repository/${encodeURIComponent(repo.name)}`}>Detalhes</Link>
                </li>
            ))}
        </List>
      </Container>
    )
  }

}
