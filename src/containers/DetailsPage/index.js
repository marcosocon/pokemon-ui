import React, { Component } from 'react';
import { get } from 'lodash';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    fetchPokemon
  } from '../../redux/actions/pokemonActions'

class PokemonDetail extends Component {

    componentWillMount() {
        if(!get(this.props, 'location.state')) {
            this.props.fetchPokemon(this.props.match.params.name);
        }
    }

    render() {
        const data = get(this.props, 'location.state.data') || this.props.pokemonSelectedData;
        const { classes } = this.props;

        return data ? (
            <Grid container>
                <Grid xs={12}>
                    <h3 className={classes.pokemonName}>{data.name}</h3>
                </Grid>
                <Grid xs={12}>
                    <div className={classes.pokemonImageWrapper}>
                        <img
                            alt={`${data.name}`}
                            className={classes.pokemonImageWrapper}
                            src={data.sprites.front_default}/>
                    </div>
                </Grid>
                <Grid xs={6}>
                    <h3 className={classes.pokemonName}>{data.name}</h3>
                </Grid>
                <Grid xs={6}>
                    <h3 className={classes.pokemonName}>{data.name}</h3>
                </Grid>
            </Grid>
        ) : null
    }
}

const styles = {
    pokemonName: {
        color: 'red',
        textAlign: 'center',
        width: '100%',
        fontSize: 32,
        textTransform: 'uppercase'
    },
    pokemonImageWrapper: {
        width: 150,
        margin: 'auto'
    },
    pokemonImage: {
        width: '100%',
    },
}

const mapStateToProps = ({ pokemonsReducer }) => ({
    pokemonSelectedData: pokemonsReducer.pokemonSelectedData,
  });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPokemon }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PokemonDetail));
