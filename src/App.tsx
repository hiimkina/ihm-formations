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
    currentlyPlaying: {
        name: string,
        artists: string,
        albumId: number
    };
    isPlaying: boolean
}

export default class App extends Component<any, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedMenu: 'home',
            currentlyPlaying: {
                name: '',
                artists: '',
                albumId: 0,
            },
            isPlaying: false,
        };
    }

    updateCurrentlyPlaying = (name: string, artists: string, albumId: number) => {
        this.setState({ currentlyPlaying: { name, artists, albumId } });
    }

    updateIsPlaying = (isPlaying: boolean) => {
        this.setState({ isPlaying });
    }

    updateMenuSelection = (selectedMenu: string) => {
        this.setState({ selectedMenu });
    }

    renderContent = (): React.ReactNode => {
        const { currentlyPlaying, selectedMenu } = this.state;
        switch (selectedMenu) {
            case 'home':
                return <Home currentlyPlaying={currentlyPlaying} updateCurrentlyPlaying={this.updateCurrentlyPlaying} />;
            case 'search':
                return <p>Search</p>;
            case 'library':
                return <p>Your library</p>;
            default:
                return <Home currentlyPlaying={currentlyPlaying} updateCurrentlyPlaying={this.updateCurrentlyPlaying} />;
        }
    }

    render(): React.ReactNode {
        const { currentlyPlaying, isPlaying } = this.state;
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
                    <Playbar isPlaying={isPlaying} currentlyPlaying={currentlyPlaying} updateIsPlaying={this.updateIsPlaying} />
                </Footer>
            </Layout>
        );
    }
}
