import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import {Route} from 'react-router-dom';

// Custom theme
const muiTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    /*palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
    },*/
    overrides: {
        MuiPaper: {
            root: {
                boxShadow: 'none'
            }
        }
    }
});

const styles = theme => ({
    root: {
        padding: 40,
        marginTop: 60
    }
});

class App extends Component {
  render() {
    return (
      <div>
          <h1>Readable</h1>
      </div>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

