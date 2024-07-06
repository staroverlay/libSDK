export type FileType = 'image' | 'audio' | 'video';

export interface Media {
  _id: string;
  name: string;
  size: number;
  type: FileType;
  uploadId?: string;
  thumbnailUploadId?: string;
  userId: string;
}
