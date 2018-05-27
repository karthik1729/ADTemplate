import React, {Component} from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {AppLayout} from "./components/index";
import {ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails} from '@material-ui/core/index';
import Theme from "./theme"


class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={Theme}>
                <AppLayout
                    header={()=>(<div>
                        Header1
                    </div>)}
                    sidebar={()=>(<div>
                        Sider
                    </div>)}
                >
                    <ExpansionPanel>
                        <ExpansionPanelSummary>
                            <Typography>Expansion Panel 2</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </AppLayout>
            </MuiThemeProvider>
        );
    }
}

export default App;
