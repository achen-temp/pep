package com.pilot.pep.Domain;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Topic")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String imageUrl;
    private String description;

    @OneToMany(mappedBy = "topicId")
    private List<CourseVideo> videos;

    public Topic(String title, String imageUrl, String description, List<CourseVideo> videos) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.videos = videos;
    }
}
