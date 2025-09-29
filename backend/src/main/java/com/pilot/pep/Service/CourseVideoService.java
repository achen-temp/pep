package com.pilot.pep.Service;

import com.pilot.pep.Domain.CourseVideo;
import com.pilot.pep.Repository.CourseVideoRepository;
import com.pilot.pep.Repository.TopicRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Slf4j
public class CourseVideoService {
    @Autowired
    CourseVideoRepository courseVideoRepository;
    @Autowired
    TopicRepository topicRepository;

    public void saveVideo(Integer topicId, String title, String thumbnailName, String VideoName) {
        //Check if the topic exists
        topicRepository.findById(topicId).orElseThrow(() -> new RuntimeException("Topic doesn't exist"));

        CourseVideo video = new CourseVideo();
        video.setTitle(title);
        video.setThumbnail(thumbnailName);
        video.setVideoName(VideoName);
        courseVideoRepository.save(video);
    }

}
