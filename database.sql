-- CREATE DATABASE "react-gallery";

-- CREATE TABLE "gallery";
CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(300) NOT NULL,
    "month" VARCHAR(9) NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(300) NOT NULL,
    "location" VARCHAR(50) NOT NULL,
    "likes" INT DEFAULT 0
);

-- INSERT DATA into "gallery";
INSERT INTO "gallery" ("path", "month", "title", "description", "location", "likes")
VALUES ('images/1-Viral.png','January','Going Viral','Going viral amid the social media Bernie phenomenon was the peak of my marketing career.','Burnsville, MN', 124),
('images/2-Peaceful-Desolation.png','February','Peaceful Desolation','Building this igloo may or may not have taken the entire day to build. Totally worth it!','Minocqua, WI',32),
('images/3-Gotcha.png','March','Gotcha Day','My family changed for the better ten years ago when we adopted my sisters from Ethiopia.','Addis Ababa, Ethiopia',48),
('images/4-Weekend-Getaway.png','April','Weekend Getaway','This quick trip was good for the soul.','Red Wing, MN',8),
('images/5-Overtime.png','May','Overtime Grind','Odd jobs and extra hours were a big part of 2021 for me and my wife. This weekend project was a long one.','Rogers, MN',17),
('images/6-Views-on-Views.png','June','Memorable Views','Every once in a while you get a view you have to capture. This one was one of them.','Minneapolis, MN',64),
('images/7-Freedom.png','July','Financial Freedom','My wife and I paid off $25.909.14 of debt in seven months. Many sacrifices were made, but the reward will last forever.','Apple Valley, MN',73),
('images/8-Meal-of-the-Year.png','August','Meal of the Year','Words cannot describe how heavenly this meal tasted. Lemon pepper chicken over rice—thanks Kessa!','Apple Valley, MN',33),
('images/9-Surfs-Up.png','September','Surfs Up','Surfing in September? Absolutely.','Paynesville, MN',42),
('images/10-Courage.png','October','Courage & Fear','I spy someone at the bottom of this eroded rock. This was a moment for me when courage conquered fear.','Badlands, SD',58),
('images/11-First-Year.png','November','First Anniversary','One year of marriage in the books! What better way to spend it than under a shark?','Bloomington, MN',34),
('images/12-The-Beginning.png','December','The Beginning','This web dev project marked the start of a new chapter in my career. Look how far I''ve come!','Apple Valley, MN',124);