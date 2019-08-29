export interface VideoContext {
  part: string;
  chart: string;
  maxResults: number;
  videoCategoryId: number;
}

export interface ChannelContext {
  id: string;
  part: string;
}

export interface MusicItem {
  videoId: string;
  title: string;
  channelTitle: string;
  coverImage: string;
  duration: string;
  tags: string;
  views: string;
}
