CREATE DATABASE career_carve_scheduler;

USE career_carve_scheduler;

CREATE TABLE mentors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  availability JSON NOT NULL,
  expertise JSON NOT NULL,
  rating FLOAT DEFAULT 0
);

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  selected_mentor INT,
  selected_area_of_interest VARCHAR(255),
  selected_duration INT,
  FOREIGN KEY (selected_mentor) REFERENCES mentors(id)
);
CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    studentName VARCHAR(255) NOT NULL,
    mentorName VARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE schedules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mentor_id INT,
  student_id INT,
  scheduled_time DATETIME NOT NULL,
  duration INT NOT NULL,
  FOREIGN KEY (mentor_id) REFERENCES mentors(id),
  FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT,
  amount FLOAT NOT NULL,
  status VARCHAR(255) DEFAULT 'Pending',
  FOREIGN KEY (student_id) REFERENCES students(id)
);
