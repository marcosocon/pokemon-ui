import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

const PokemonDetail = (props) => {
    const { data } = props.location.state;
    const { classes } = props;

    return (
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
    )
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

export default withStyles(styles)(PokemonDetail);