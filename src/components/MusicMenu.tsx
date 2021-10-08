import React, { Component } from 'react';
import { Divider, Menu } from 'antd';
import { HomeOutlined, SearchOutlined, UnorderedListOutlined } from '@ant-design/icons';

interface MusicMenuProps {
    updateMenuSelection: any
}

interface MusicMenuState {
    isMenuCollapsed: boolean
}

export default class MusicMenu extends Component<MusicMenuProps, MusicMenuState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isMenuCollapsed: false,
        };
    }

    render = (): React.ReactNode => {
        const { isMenuCollapsed } = this.state;
        const { updateMenuSelection } = this.props;
        return (
            <Menu
                mode={'inline'}
                theme={'dark'}
                inlineCollapsed={isMenuCollapsed}
                className={'music-menu'}
                onClick={({ key }) => { updateMenuSelection(key); }}
            >
                <Menu.Item key={'home'} icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key={'search'} icon={<SearchOutlined />}>
                    Search
                </Menu.Item>
                <Menu.Item key={'library'} icon={<UnorderedListOutlined />}>
                    Your library
                </Menu.Item>
                <Divider className={'divider'} />
                <Menu.Item key={'playlist-1'}>
                    Playlist 1
                </Menu.Item>
                <Menu.Item key={'playlist-2'}>
                    Playlist 2
                </Menu.Item>
                <Menu.Item key={'playlist-3'}>
                    Playlist 3
                </Menu.Item>
            </Menu>
        );
    }
}
