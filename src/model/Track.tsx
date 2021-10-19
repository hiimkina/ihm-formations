import { Album } from './Album';
import { Artist } from './Artist';

export interface Track {
    id: number,
    name: string,
    album: Album,
    duration: string,
    artists: Array<Artist>
}
