import React, { Component } from 'react';
import {
    Layout,
} from 'antd';
import './scss/App.scss';
import MusicMenu from './components/MusicMenu';
import Playbar from './components/Playbar';
import Home from './components/Home/Home';

const { Content, Footer } = Layout;

interface AppState {
    selectedMenu: string;
}

export default class App extends Component<any, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedMenu: 'home',
        };
    }

    updateMenuSelection = (selectedMenu: string) => {
        this.setState({ selectedMenu });
    }

    renderContent = (): React.ReactNode => {
        const { selectedMenu } = this.state;
        switch (selectedMenu) {
            case 'home':
                return <Home />;
            case 'search':
                return <p>Search</p>;
            case 'library':
                return <p>Your library</p>;
            default:
                return <Home />;
        }
    }

    render(): React.ReactNode {
        return (
            <Layout className={'music-main-layout'}>
                <Content className={'music-main-content'}>
                    <div className={'music-content-layout'}>
                        <MusicMenu updateMenuSelection={this.updateMenuSelection} />
                        <div className={'content-container'}>
                            {this.renderContent()}
                        </div>
                    </div>
                </Content>
                <Footer className={'music-main-playbar'}>
                    <Playbar />
                </Footer>
            </Layout>
        );
    }
}
