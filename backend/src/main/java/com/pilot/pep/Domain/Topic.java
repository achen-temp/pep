package com.pilot.pep.Domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    private Long id;
    private String title;
    private String imageUrl;
    private String description;

    @OneToMany(mappedBy = "topicId")
    private List<CourseVideos> videos;

    public Topic(String title, String imageUrl, String description, List<CourseVideos> videos) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.videos = videos;
    }
}
