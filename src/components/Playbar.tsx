import React, { Component } from 'react';
import '../scss/Playbar.scss';
import { Button, Slider } from 'antd';
import {
    CaretRightFilled,
    PauseOutlined,
    StepBackwardFilled,
    SoundFilled,
    StepForwardFilled,
} from '@ant-design/icons/lib';
import ReactAudioPlayer from 'react-audio-player';

const CONFIG = require('../config/config.json');

interface PlaybarProps {
    currentlyPlaying: {
        name: string,
        artists: string,
        albumId: number
    };
    isPlaying: boolean;
    updateIsPlaying: any;
}

export default class Playbar extends Component<PlaybarProps> {
    music: ReactAudioPlayer|null;

    constructor(props: any) {
        super(props);
        this.music = null;
    }

    componentDidUpdate(prevProps: Readonly<PlaybarProps>): void {
        const { currentlyPlaying, updateIsPlaying } = this.props;
        if (prevProps.currentlyPlaying !== currentlyPlaying) {
            updateIsPlaying(true);
            this.render();
            this.play();
        }
    }

    getSongUrl = ():string => {
        const { currentlyPlaying } = this.props;
        return `${CONFIG.apiUrl}track?name=${currentlyPlaying.name}&albumId=${currentlyPlaying.albumId}`;
    }

    pause = () => {
        const { updateIsPlaying } = this.props;
        this.music?.audioEl.current?.pause();
        updateIsPlaying(false);
    }

    play = () => {
        const { updateIsPlaying } = this.props;
        this.music?.audioEl.current?.play();
        updateIsPlaying(true);
    }

    renderCentralButton = ():React.ReactNode => {
        const { isPlaying } = this.props;
        return isPlaying ? <PauseOutlined /> : <CaretRightFilled />;
    }

    render = (): React.ReactNode => {
        const { isPlaying } = this.props;
        const { currentlyPlaying } = this.props;
        return (
            <div className={'playbar-container'}>
                <ReactAudioPlayer src={this.getSongUrl()} ref={(element) => { this.music = element; }} />
                <div className={'currently-playing'}>
                    <div className={'current-album-cover'} />
                    <div className={'current-metadata'}>
                        <h3 className={'track-title'}>{ currentlyPlaying.name }</h3>
                        <h5 className={'track-artist'}>{ currentlyPlaying.artists }</h5>
                    </div>
                </div>
                <div className={'track-controls'}>
                    <div className={'play-row'}>
                        <img className={'play-row-secondary-image margin-right'} src={'shuffle-disabled.png'} alt={'shuffle'} />
                        <StepBackwardFilled className={'play-row-secondary'} />
                        <Button
                            className={'play-row-play-pause'}
                            shape={'circle'}
                            icon={this.renderCentralButton()}
                            onClick={() => {
                                if (isPlaying) {
                                    this.pause();
                                } else {
                                    this.play();
                                }
                            }}
                        />
                        <StepForwardFilled className={'play-row-secondary'} />
                        <img className={'play-row-secondary-image'} src={'shuffle-disabled.png'} alt={'shuffle'} />
                    </div>
                    <div className={'progress-row'}>
                        <p>0:25</p>
                        <Slider className={'music-progress-bar'} value={20} />
                        <p>3:48</p>
                    </div>
                </div>
                <div className={'volume-controls'}>
                    <SoundFilled className={'volume-icon'} />
                    <Slider className={'volume-slider'} value={80} />
                </div>
            </div>
        );
    }
}
