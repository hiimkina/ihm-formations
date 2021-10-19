import React, { Component } from 'react';
import '../../scss/Home.scss';
import { Card, Row } from 'antd';
import RecentTracks from './RecentTracks';

interface HomeProps {
    currentlyPlaying: {
        name: string;
        artists: string;
        albumId: number;
    },
    updateCurrentlyPlaying: any
}

export default class Home extends Component<HomeProps, any> {
    render = (): React.ReactNode => {
        const { updateCurrentlyPlaying } = this.props;
        return (
            <div className={'home-main-container'}>
                <Row className={'title-row'}>
                    <h1 className={'home-title'}>Bonjour !</h1>
                </Row>
                <Row className={'playlists-row'}>
                    <Card>
                        <h3>Playlist 1</h3>
                    </Card>
                    <Card>
                        <h3>Playlist 2</h3>
                    </Card>
                    <Card>
                        <h3>Playlist 3</h3>
                    </Card>
                </Row>
                <RecentTracks updateCurrentlyPlaying={updateCurrentlyPlaying} />
                <Row className={'recent-tracks'}>
                    <h2 className={'home-title'}>Recent artists</h2>
                    <div className={'cards'}>
                        <Card>
                            <div className={'track-album'} />
                            <h3>Artist 1</h3>
                        </Card>
                        <Card>
                            <div className={'track-album'} />
                            <h3>Artist 3</h3>
                        </Card>
                        <Card>
                            <div className={'track-album'} />
                            <h3>Artist 7</h3>
                        </Card>
                        <Card>
                            <div className={'track-album'} />
                            <h3>Artist 10</h3>
                        </Card>
                        <Card>
                            <div className={'track-album'} />
                            <h3>Artist 15</h3>
                        </Card>
                    </div>
                </Row>
            </div>
        );
    }
}
