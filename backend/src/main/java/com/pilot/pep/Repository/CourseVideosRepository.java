package com.pilot.pep.Repository;

import com.pilot.pep.Domain.CourseVideos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseVideosRepository extends JpaRepository<CourseVideos, Long> {
}
