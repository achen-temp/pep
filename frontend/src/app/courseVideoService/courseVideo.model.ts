export class CourseVideo { 
  
  constructor(
    public title: string,
    public videoName: string,
    public thumbnail: string,
    public url: string,
    public id?: number
  ){}
}
