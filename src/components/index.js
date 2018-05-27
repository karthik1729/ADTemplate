import React, {Component} from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import {Drawer, Toolbar, AppBar} from '@material-ui/core/index';



class AppHeader extends Component{
    render(){
        return this.props.children;
    }
}

class AppSidebar extends Component{
    render(){
        return this.props.children;
    }
}

class AppFooter extends Component{
    render(){
        return this.props.children;
    }
}

class _AppLayout extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper:classes.sidebar
                    }}
                >
                    {this.props.sidebar && this.props.sidebar()}
                </Drawer>
                <div className={classes.body}>
                    <AppBar className={classes.header} position={"static"} elevation={0}>
                        <Toolbar>
                            {this.props.header && this.props.header()}
                        </Toolbar>
                    </AppBar>
                    <div className={classes.content}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

const sidebarWidth = 260;

const AppLayout = withStyles({
    sidebar:{
        width:sidebarWidth
    },
    body:{
        position:"relative",
        marginLeft:sidebarWidth,
        display:"flex",
        flexDirection:"column"
    },
    header:{

    },
    content:{
        flex:1
    }
})(_AppLayout);

export {
    AppLayout,
    AppHeader,
    AppSidebar,
    AppFooter
}