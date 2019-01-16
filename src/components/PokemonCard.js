import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

class PokemonCard extends Component {

    render() {
        const { data, classes } = this.props;
        return (
            <Link
                className={classes.link}
                to={{
                    pathname: `/pokemon/${data.name}`,
                    state: {data}
                }}>
                <Card>
                    <CardMedia
                        className={classes.media}
                        image={data.sprites.front_default}
                        title={`View details for ${data.name}`}
                    />
                    <CardContent>
                        <h3 className={classes.pokemonName}>{data.name}</h3>
                    </CardContent>
                </Card>
            </Link>
        )
    }
}

const styles = {
    link: {
        textDecoration: 'none'
    },
    media: {
        height: 150,
        backgroundSize: 'contain'
    },
    pokemonName: {
        textAlign: 'center',
        color: '#485cbd'
    }
};

export default withStyles(styles)(PokemonCard);