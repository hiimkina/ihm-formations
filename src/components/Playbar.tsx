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

interface PlaybarState {
    isPlaying: boolean;
}

export default class Playbar extends Component<any, PlaybarState> {
    music: ReactAudioPlayer|null;

    constructor(props: any) {
        super(props);
        this.music = null;
        this.state = {
            isPlaying: false,
        };
    }

    pause = () => {
        this.music?.audioEl.current?.pause();
        this.setState({ isPlaying: false });
    }

    play = () => {
        this.music?.audioEl.current?.play();
        this.setState({ isPlaying: true });
    }

    render = (): React.ReactNode => {
        const { isPlaying } = this.state;
        console.log(this.music);
        return (
            <div className={'playbar-container'}>
                <ReactAudioPlayer src={'http://localhost:8000/api/v1/track'} ref={(element) => { this.music = element; }} />
                <div className={'currently-playing'}>
                    <div className={'current-album-cover'} />
                    <div className={'current-metadata'}>
                        <h3 className={'track-title'}>Oui le titre</h3>
                        <h5 className={'track-artist'}>Oui artiste</h5>
                    </div>
                </div>
                <div className={'track-controls'}>
                    <div className={'play-row'}>
                        <img className={'play-row-secondary-image margin-right'} src={'shuffle-disabled.png'} alt={'shuffle'} />
                        <StepBackwardFilled className={'play-row-secondary'} />
                        <Button
                            className={'play-row-play-pause'}
                            shape={'circle'}
                            icon={isPlaying ? <PauseOutlined /> : <CaretRightFilled />}
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
