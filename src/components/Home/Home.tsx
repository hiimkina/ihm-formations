import React, { Component } from 'react';
import '../../scss/Home.scss';
import { Card, Row } from 'antd';

export default class Home extends Component<any, any> {
    render = (): React.ReactNode => (
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
            <Row className={'recent-tracks'}>
                <h2 className={'home-title'}>Recent tracks</h2>
                <div className={'cards'}>
                    <Card>
                        <div className={'track-album'} />
                        <h3>Track 1</h3>
                        <h5>Artist 1</h5>
                    </Card>
                    <Card>
                        <div className={'track-album'} />
                        <h3>Track 3</h3>
                        <h5>Artist 16</h5>
                    </Card>
                    <Card>
                        <div className={'track-album'} />
                        <h3>Track 7</h3>
                        <h5>Artist 2</h5>
                    </Card>
                    <Card>
                        <div className={'track-album'} />
                        <h3>Track 10</h3>
                        <h5>Artist 15</h5>
                    </Card>
                </div>
            </Row>
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
    )
}
