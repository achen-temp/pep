package com.pilot.pep.Controller;

import com.pilot.pep.Service.S3StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/pilot/courses")
public class CoursesController {

    @Autowired
    S3StorageService storageService;

    @GetMapping("/url/{fileName}")
    public ResponseEntity<String> getVideoUrl(@PathVariable String fileName) {
        String url = storageService.generateVideoUrl(fileName);
        return ResponseEntity.ok(url);
    }

}
