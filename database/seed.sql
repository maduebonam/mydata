INSERT INTO Students (student_id, first_name, last_name, email, phone_number) VALUES
(1, 'John', 'Doe', 'johndoe@example.com', '123-456-7890'),
(2, 'Jane', 'Smith', 'janesmith@example.com', '234-567-8901'),
(3, 'Alice', 'Johnson', 'alicej@example.com', '345-678-9012');


INSERT INTO Courses (course_id, course_name, course_description) VALUES
(101, 'Mathematics', 'An introductory course on Mathematics'),
(102, 'Physics', 'An introductory course on Physics'),
(103, 'Chemistry', 'An introductory course on Chemistry');

INSERT INTO Registrations (registration_id, student_id, course_id, registration_date) VALUES
(1001, 1, 101, '2024-11-01'),
(1002, 2, 102, '2024-11-02'),
(1003, 3, 103, '2024-11-03');

INSERT INTO Instructors (instructor_id, first_name, last_name, email) VALUES
(201, 'Dr. Emily', 'Brown', 'emilybrown@example.com'),
(202, 'Dr. Michael', 'Clark', 'michaelclark@example.com'),
(203, 'Dr. Sarah', 'Wilson', 'sarahwilson@example.com');

INSERT INTO Assignments (assignment_id, course_id, title, description, due_date) VALUES
(301, 101, 'Algebra Homework', 'Complete the algebra problems in Chapter 2', '2024-11-15'),
(302, 102, 'Physics Lab Report', 'Write a lab report on Newton’s Laws', '2024-11-20'),
(303, 103, 'Chemistry Project', 'Prepare a presentation on chemical bonds', '2024-11-25');
