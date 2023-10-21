
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    country VARCHAR(100),
    password VARCHAR(255) NOT NULL,
      verification_code VARCHAR(8),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE password_reset (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   email VARCHAR(255) NOT NULL,
--   verification_code VARCHAR(8) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (email) REFERENCES users(email) ON DELETE CASCADE
-- );

CREATE TABLE thirdpartyUsers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  provider VARCHAR(255) NOT NULL,
  provider_id VARCHAR(255) NOT NULL,
  name VARCHAR(255)
);
CREATE TABLE join_teacher (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  country VARCHAR(100),
  course VARCHAR(100) NOT NULL,
  resume VARCHAR(255)
);
CREATE TABLE activeteacher (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  country VARCHAR(100),
  course VARCHAR(100) NOT NULL,
  resume VARCHAR(255)
);
CREATE TABLE join_tajweed (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  country VARCHAR(100),
  audio VARCHAR(255)
);

CREATE TABLE activetajweed (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  country VARCHAR(100),
  audio VARCHAR(255)
);

CREATE TABLE booktrial (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  course VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  country VARCHAR(100) NOT NULL,
  address TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Activebooktrial (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  course VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  country VARCHAR(100) NOT NULL,
  address TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ActiveStudents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  source_type ENUM('tajweed', 'free_trial') NOT NULL,
  source_id INT NOT NULL, -- Corresponding ID from join_tajweed or FreeTrials table
  audio_review VARCHAR(255),
  active_since TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  header VARCHAR(255) NOT NULL,
  paragraph TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE blogs
ADD COLUMN details TEXT;
CREATE TABLE admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM blogs;
select * from thirdpartyUsers;
select * from join_teacher;
SELECT * FROM join_tajweed;
SELECT * FROM activetajweed;
select * from Activebooktrial;
select * from  join_teacher;
-- Create a table for TeacherStudentAssignments
-- CREATE TABLE TeacherStudentAssignments (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   teacher_id INT NOT NULL,
--   student_id INT NOT NULL,
--   assignment_date DATE NOT NULL,
--   FOREIGN KEY (teacher_id) REFERENCES ActiveTeachers(id) ON DELETE CASCADE,
--   FOREIGN KEY (student_id) REFERENCES ActiveStudents(id) ON DELETE CASCADE
-- );




-- -- Create a table for Emails
-- CREATE TABLE Emails (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   sender_id INT NOT NULL, -- Admin ID
--   receiver_type ENUM('teacher', 'student', 'all_active', 'random') NOT NULL,
--   receiver_id INT, -- Teacher or Student ID for individual emails
--   content TEXT NOT NULL,
--   sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- INSERT INTO join_tajweed (name, email, phone, country, audio)
-- VALUES
--   ('Student 1', 'student1@example.com', '1234567890', 'Country A', 'audio1.mp3'),
--   ('Student 2', 'student2@example.com', '9876543210', 'Country B', 'audio2.mp3');
-- INSERT INTO ActiveStudents (source_type, source_id, audio_review, active_since)
-- VALUES
--   ('tajweed', 1, 'Good progress', '2023-08-01 10:00:00');
-- SELECT * FROM AdminDashboard;

-- INSERT INTO join_tajweed (name, email, phone, country, audio)
-- VALUES
--   ('Student 1', 'student1@example.com', '1234567890', 'Country A', 'audio1.mp3'),
--   ('Student 2', 'student2@example.com', '9876543210', 'Country B', 'audio2.mp3'),
--   ('Student 3', 'student3@example.com', '5555555555', 'Country C', 'audio3.mp3'),
--   ('Student 4', 'student4@example.com', '9999999999', 'Country D', 'audio4.mp3'),
--   ('Student 5', 'student5@example.com', '1111111111', 'Country E', 'audio5.mp3');
--   
--   select * from join_tajweed;
-- INSERT INTO booktrial (name, email, course, phone, country, address)
-- VALUES
--   ('Trial Student 1', 'trialstudent1@example.com', 'Course A', '1111111111', 'Country X', 'Address 1'),
--   ('Trial Student 2', 'trialstudent2@example.com', 'Course B', '2222222222', 'Country Y', 'Address 2'),
--   ('Trial Student 3', 'trialstudent3@example.com', 'Course C', '3333333333', 'Country Z', 'Address 3'),
--   ('Trial Student 4', 'trialstudent4@example.com', 'Course D', '4444444444', 'Country W', 'Address 4'),
--   ('Trial Student 5', 'trialstudent5@example.com', 'Course E', '5555555555', 'Country V', 'Address 5');
--   
--   INSERT INTO join_teacher (name, email, phone, country, course, resume)
-- VALUES
--   ('John Doe', 'usmanabc2310@gmail.com', '123-456-7890', 'USA', 'Mathematics', 'resume1.pdf'),
--   ('Jane Smith', 'jane@example.com', '987-654-3210', 'Canada', 'Science', 'resume2.pdf'),
--   ('Michael Johnson', 'michael@example.com', '555-123-4567', 'Australia', 'History', 'resume3.pdf'),
--   ('Emily Brown', 'emily@example.com', '222-333-4444', 'UK', 'Literature', 'resume4.pdf'),
--   ('David Wilson', 'david@example.com', '888-999-0000', 'Germany', 'Art', 'resume5.pdf');


-- INSERT INTO admins (email, password, name)
-- VALUES
--   ('usman@gmail.com', 'Usman', 'Usman');

-- INSERT INTO blogs (header, paragraph) VALUES ('Introduction to SQL', 'SQL stands for Structured Query Language...');
-- INSERT INTO blogs (header, paragraph) VALUES ('Data Types in SQL', 'In SQL, data types define...');

