import React, { Component } from 'react';
import { get } from 'lodash';

import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
                    <div className={classes.statList}>
                        <List>
                            {data.stats.map(item => {
                                return (
                                    <ListItem>
                                        <ListItemText className={classes.statItem} primary={item.stat.name} secondary={item.base_stat} />
                                    </ListItem>);
                            })}
                        </List>
                    </div>
                </Grid>
                <Grid xs={6} className={classes.pane}>
                    <h3 className={classes.pokemonName}>Abilities</h3>
                    {data.abilities.map(item => {
                        return <Chip label={item.ability.name} className={classes.chip} />
                    })}
                </Grid>
                <Grid xs={6} className={classes.pane}>
                    <h3 className={classes.pokemonName}>Moves</h3>
                    {data.moves.map(item => {
                        return <Chip label={item.move.name} className={classes.chip} />
                    })}
                </Grid>
            </Grid>
        ) : null
    }
}

const styles = {
    pokemonName: {
        color: '#3f51b5',
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
    chip: {
        margin: 5
    },
    pane: {
        padding: 50
    },
    statList: {
        width: 200,
        margin: 'auto'
    },
    statItem: {
        textAlign: 'center'
    }
}

const mapStateToProps = ({ pokemonsReducer }) => ({
    pokemonSelectedData: pokemonsReducer.pokemonSelectedData,
  });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPokemon }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PokemonDetail));
