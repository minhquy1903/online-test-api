CREATE TABLE "user" (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "gmail" varchar,
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
  "duration" integer,
  "type" integer,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "question" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "ordinal_number" integer,
  "test_id" uuid,
  "content" varchar,
  "images" varchar,
  "type" integer,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "option" (
  "question_id" uuid PRIMARY KEY,
  "text" varchar,
  "image" varchar,
  "is_answer" boolean,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "subject" ("id" integer PRIMARY KEY, "name" varchar);

CREATE TABLE "class" (
  "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "class_user" (
  "id" uuid,
  "user_id" uuid,
  "class_id" uuid
);

CREATE TABLE "user_test" (
  "id" uuid,
  "user_id" uuid,
  "test_id" uuid,
  "start" timestamptz,
  "end" timestamptz,
  "assign_time" timestamptz,
  "deadline" timestamptz,
  "status" integer,
  "created_at" timestamptz DEFAULT (now()),
  PRIMARY KEY ("user_id", "test_id")
);

CREATE TABLE "user_answer" (
  "user_test_id" uuid,
  "question_id" uuid,
  "option_id" uuid,
  PRIMARY KEY ("user_test_id", "question_id")
);

COMMENT ON COLUMN "test"."user_id" IS 'user_id create this test';

ALTER TABLE
  "test"
ADD
  FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE
  "test"
ADD
  FOREIGN KEY ("subject_id") REFERENCES "subject" ("id");

ALTER TABLE
  "question"
ADD
  FOREIGN KEY ("test_id") REFERENCES "test" ("id");

ALTER TABLE
  "option"
ADD
  FOREIGN KEY ("question_id") REFERENCES "question" ("id");

ALTER TABLE
  "user_test"
ADD
  FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE
  "user_test"
ADD
  FOREIGN KEY ("test_id") REFERENCES "test" ("id");

ALTER TABLE
  "user_answer"
ADD
  FOREIGN KEY ("user_test_id") REFERENCES "user_test" ("id");

ALTER TABLE
  "class_user"
ADD
  FOREIGN KEY ("class_id") REFERENCES "class" ("id");

ALTER TABLE
  "class_user"
ADD
  FOREIGN KEY ("user_id") REFERENCES "user" ("id");