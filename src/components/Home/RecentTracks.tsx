import React, { Component } from 'react';
import { Card, Row } from 'antd';
import TrackService from '../../services/TrackService';
import { Track } from '../../model/Track';
import { Artist } from '../../model/Artist';

interface RecentTracksProps {
    updateCurrentlyPlaying: any
}

interface RecentTracksState {
    tracksCode: Array<React.ReactNode>
}

export default class RecentTracks extends Component<RecentTracksProps, RecentTracksState> {
    trackService: TrackService;

    constructor(props: any) {
        super(props);
        this.trackService = new TrackService();
        this.state = {
            tracksCode: [],
        };
    }

    componentDidMount(): void {
        this.getRecentTracks();
    }

    getRecentTracks = () => {
        const { updateCurrentlyPlaying } = this.props;
        this.trackService.getRecent().then((response: any) => {
            const trackList = response.data as Array<Track>;
            this.setState({
                tracksCode: trackList.map((track: Track) => {
                    return (
                        <Card key={track.name} onClick={() => { updateCurrentlyPlaying(track.name, track.artists.map((artist: Artist) => artist.name), track.album.id); }}>
                            <div className={'track-album'} />
                            <h3>{track.name.length > 13 ? `${track.name.substring(0, 13)}...` : track.name}</h3>
                            <h5>{track.artists.map((artist: Artist) => artist.name)}</h5>
                        </Card>
                    );
                }),
            });
        });
    }

    render = ():React.ReactNode => {
        const { tracksCode } = this.state;
        return (
            <Row className={'recent-tracks'}>
                <h2 className={'home-title'}>Recent tracks</h2>
                <div className={'cards'}>
                    { tracksCode }
                </div>
            </Row>
        );
    }
}
