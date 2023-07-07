import { IVideoProvider } from "./video-provider.interface";

class YouTubeApi implements IVideoProvider {
    private playList: any = {
        videos: [
            'https://www.youtube.com/watch?v=DKNVMILZDks',
            'https://www.youtube.com/watch?v=Ph4SLROqSEQ',
            'https://www.youtube.com/watch?v=Tvs3r0TVcRI'
        ]
    };

    async getPlayList(videos: string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = this.playList[videos] || null;
                resolve(result);
            }, 3000);
        });
    }
}

export {
    YouTubeApi
};
