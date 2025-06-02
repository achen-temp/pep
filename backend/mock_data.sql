-- Topics
INSERT INTO topic (id, title, image_url, description) VALUES
(1, 'Angular Basics', 'assets/angular-basics.jpg', 'Learn the fundamentals of Angular framework.'),
(2, 'RxJS Observables', 'assets/rxjs.jpg', 'Understand reactive programming with RxJS.'),
(3, 'Component Communication', 'assets/component-communication.jpg', 'How components talk to each other in Angular.');

-- Course Videos
INSERT INTO course_videos (title, video_name, thumbnail, topic_id) VALUES
('Video 1', 'test.mp4', 'assets/thumb1.jpg', 1),
('Video 2', 'test.mp4', 'assets/thumb2.jpg', 1),
('Video 3', 'test.mp4', 'assets/thumb3.jpg', 1),

('Video 1', 'test.mp4', 'assets/thumb1.jpg', 2),
('Video 2', 'test.mp4', 'assets/thumb2.jpg', 2),
('Video 3', 'test.mp4', 'assets/thumb3.jpg', 2),

('Video 1', 'test.mp4', 'assets/thumb1.jpg', 3),
('Video 2', 'test.mp4', 'assets/thumb2.jpg', 3),
('Video 3', 'test.mp4', 'assets/thumb3.jpg', 3);