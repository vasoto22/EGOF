import { IVideoProvider } from "./video-provider.interface";

class VideoProxy implements IVideoProvider {
    private cache: any = {};

    constructor(private readonly provider: IVideoProvider) { }

    async getPlayList(videos: string): Promise<string[]> {
        let result = this.cache[videos];

        if (!result) {
            result = await this.provider.getPlayList(videos);

            // push to cache
            this.cache[videos] = result;
        }

        return result;
    }
}

export {
    VideoProxy
};
