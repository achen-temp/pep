package com.pilot.pep.Controller;

import com.pilot.pep.Domain.Topic;
import com.pilot.pep.Service.S3StorageService;
import com.pilot.pep.Service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/pilot/topics")
@CrossOrigin
public class CoursesController {

    @Autowired
    S3StorageService storageService;

    @Autowired
    TopicService topicService;

    @GetMapping("/all")
    public List<Topic> getAllTopics(){
        return topicService.getAllTopics();
    }

    @GetMapping("/{id}")
    public Topic getTopicById(@PathVariable long id) throws Exception {
        return topicService.getTopicById(id);
    }

    @GetMapping("/url/{fileName}")
    public Map<String, String> getVideoUrl(@PathVariable String fileName) {
        Map<String, String> map = new HashMap<>();
        String url = storageService.generateVideoUrl(fileName);
        map.put("url", url);
        return map;
    }

}
