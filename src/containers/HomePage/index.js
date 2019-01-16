import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

import {
  fetchPokemons
} from '../../redux/actions/pokemonActions'
import PokemonCard from './../../components/PokemonCard';

class HomePage extends Component {

  componentWillMount() {
    if(isEmpty(this.props.pokemonListToShow)) {
      this.props.fetchPokemons();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Grid
          container
          spacing={16}>
            {this.props.pokemonListToShow.map((pokemon) => {
              return (
                <Grid
                  key={pokemon.id}
                  item
                  md={3}
                  sm={4}
                  xs={12}>
                  <PokemonCard data={pokemon} />
                </Grid>
              )
            })}
        </Grid>
      </div>
    )
  }
};

const styles = {
  wrapper: {
    marginLeft: 80,
    marginRight: 80,
  }
}

const mapStateToProps = ({ pokemonsReducer }) => ({
  pokemonList: pokemonsReducer.pokemonList,
  pokemonListToShow: pokemonsReducer.pokemonListToShow,
  isFetching: pokemonsReducer.isFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPokemons }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HomePage))
