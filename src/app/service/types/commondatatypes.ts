/*
轮播
*/
export interface Banner {
    url: string,
    imageUrl: string,
    targetId: number
}

export interface HotTag {
    id: string,
    name: string
    position: number
}

// 歌单
export interface SongSheet {
    id: number,
    name: string,
    picUrl: string,
    playCount: number,
    tracks: Song[]
}

// 歌手
export interface Singer{
    id: number,
    name: string,
    picUrl: string,
    albumSize: number
}

// 歌曲
export interface Song{
    id: number,
    name: string,
    url: string,
    ar: Singer[],   // 歌手列表
    al: {id: number; name: string; picUrl:string},
    dt: number  // 播放时间
}