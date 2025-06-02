import { CourseVideo } from "./courseVideo.model";

export class Topic {
    id!: number;
    title!: string;
    imageUrl!: string;
    description!: string;
    videos: Array<CourseVideo> = [];
}