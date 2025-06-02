package com.pilot.pep.Service;

import com.pilot.pep.Domain.CourseVideos;
import com.pilot.pep.Repository.CourseVideosRepository;
import com.pilot.pep.Repository.TopicRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Slf4j
public class CourseVideosService {
    @Autowired
    CourseVideosRepository courseVideosRepository;
    @Autowired
    TopicRepository topicRepository;

    public void saveVideo(Long topicId, String title, String thumbnailName, String VideoName) {
        //Check if the topic exists
        topicRepository.findById(topicId).orElseThrow(() -> new RuntimeException("Topic doesn't exist"));

        CourseVideos video = new CourseVideos();
        video.setTitle(title);
        video.setThumbnail(thumbnailName);
        video.setVideoName(VideoName);
        courseVideosRepository.save(video);
    }

}
