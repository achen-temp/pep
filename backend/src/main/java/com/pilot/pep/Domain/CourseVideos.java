package com.pilot.pep.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "CourseVideos")
public class CourseVideos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String thumbnail;
    private String videoName;
    @Column(insertable = false, updatable = false)
    private Long topicId;

    @ManyToOne
    @JoinColumn(name = "topicId")
    @JsonIgnore
    private Topic topic;

}
