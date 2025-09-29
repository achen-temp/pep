package com.pilot.pep.Repository;

import com.pilot.pep.Domain.CourseVideo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseVideoRepository extends JpaRepository<CourseVideo, Integer> {
}
