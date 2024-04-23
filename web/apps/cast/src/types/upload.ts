import { FILE_TYPE } from "constants/file";

export interface Metadata {
    title: string;
    creationTime: number;
    modificationTime: number;
    latitude: number;
    longitude: number;
    fileType: FILE_TYPE;
    hasStaticThumbnail?: boolean;
    hash?: string;
    imageHash?: string;
    videoHash?: string;
    localID?: number;
    version?: number;
    deviceFolder?: string;
}

export interface FileTypeInfo {
    fileType: FILE_TYPE;
    exactType: string;
    mimeType?: string;
    imageType?: string;
    videoType?: string;
}
