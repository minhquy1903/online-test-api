CREATE TABLE "user" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "email" varchar,
  "phone_number" varchar,
  "name" varchar,
  "password" varchar,
  "dob" varchar,
  "type" varchar,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "test" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "user_id" uuid,
  "name" varchar,
  "subject_id" integer,
  "type" integer,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "question" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "user_id" uuid,
  "content" varchar,
  "images" varchar,
  "type" integer,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "answer" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "question_id" uuid,
  "text" varchar,
  "image" varchar,
  "is_correct_answer" boolean,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "subject" ("id" integer PRIMARY KEY, "name" varchar);

CREATE TABLE "class" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "class_user" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "user_id" uuid,
  "class_id" uuid
);

CREATE TABLE "user_test" (
  "id" uuid DEFAULT gen_random_uuid(),
  "user_id" uuid,
  "test_id" uuid,
  "start" timestamptz,
  "end" timestamptz,
  "assign_time" timestamptz,
  "deadline" timestamptz,
  "status" integer,
  "created_at" timestamptz DEFAULT (now()),
  PRIMARY KEY ("user_id", "test_id", "id")
);

CREATE TABLE "user_answer" (
  "user_test_id" uuid,
  "question_id" uuid,
  "answer_id" uuid,
  PRIMARY KEY ("user_test_id", "question_id")
);