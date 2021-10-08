import React, { Component } from 'react';
import '../scss/Playbar.scss';
import { Button, Slider } from 'antd';
import {
    CaretRightFilled,
    StepBackwardFilled,
    SoundFilled,
    StepForwardFilled,
} from '@ant-design/icons/lib';

export default class Playbar extends Component<any, any> {
    render = (): React.ReactNode => (
        <div className={'playbar-container'}>
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
                    <Button className={'play-row-play-pause'} shape={'circle'} icon={<CaretRightFilled />} />
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
