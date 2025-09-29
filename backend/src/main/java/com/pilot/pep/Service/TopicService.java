package com.pilot.pep.Service;


import com.pilot.pep.Domain.CourseVideo;
import com.pilot.pep.Domain.Topic;
import com.pilot.pep.Repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {

    @Autowired
    TopicRepository topicRepository;

    public List<Topic> getAllTopics(){
        return topicRepository.findAll();
    }

    public Topic getTopicById(Integer ID) throws Exception {
        return topicRepository.findById(ID).orElseThrow(() -> new Exception("Topic not found"));
    }

    public void createATopic(String title, String description, String imageUrl, List<CourseVideo> videos){
        Topic newTopic = new Topic(title, imageUrl, description, videos);
        topicRepository.save(newTopic);
    }


}
