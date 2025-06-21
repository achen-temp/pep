import { CourseVideo } from "./courseVideo.model";

export class Topic {

    constructor(
        public title: string,
        public imageUrl: string,
        public description: string,
        public videos: Array<CourseVideo> = [],
        public id?: number
    ){ }
}