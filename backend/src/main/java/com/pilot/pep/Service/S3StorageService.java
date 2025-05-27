package com.pilot.pep.Service;

import io.awspring.cloud.s3.S3Template;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
public class S3StorageService {

    @Autowired
    private S3Template s3Template;

    @Value("${pilot.bucket.name}")
    String bucketName;

    @Value("${pilot.courses.video-life-time}")
    String videoLifeTime;

    public String generateVideoUrl(String fileName) {
        return s3Template.createSignedGetURL(bucketName, fileName, Duration.ofDays(Integer.parseInt(videoLifeTime))).toString();
    }

}
