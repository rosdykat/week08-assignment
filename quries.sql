-- My SQL data:

-- Creating the tables: 

CREATE TABLE IF NOT EXISTS case_study_tag (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    tag VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS case_study (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255),
    post TEXT,
    tag_id INT REFERENCES case_study_tag(id)
);

ALTER TABLE case_study
ADD COLUMN src TEXT;


-- Inserting data

INSERT INTO case_study_tag (tag)
VALUES ('Social Media')
RETURNING id, tag;

INSERT INTO case_study (title, post, tag_id)
VALUES 
('Long case study 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque finibus lacus. Nunc ut lacinia elit, et finibus lectus. Cras consequat metus vel libero ornare faucibus. Sed sit amet semper lorem. Nulla suscipit fermentum leo, a porta nisi blandit id. Curabitur finibus maximus magna nec ullamcorper. Pellentesque id nulla diam. Curabitur interdum elit nec cursus mollis. Mauris at congue nisi, id facilisis erat.

Sed quis tristique sem. Praesent tortor tellus, viverra at tincidunt ac, sollicitudin nec risus. In eleifend commodo neque, id tristique justo pretium eget. Etiam in molestie libero. Ut in risus at nulla volutpat convallis et at eros. Vestibulum condimentum, massa a consequat gravida, eros felis semper ipsum, et interdum massa est a augue. Vestibulum eu ullamcorper arcu. Cras sit amet diam luctus, auctor justo quis, rhoncus velit. Proin vitae ante tellus. Fusce blandit tortor odio. Morbi eget leo vel augue molestie dictum.

Etiam id tortor quis diam pharetra malesuada. Vestibulum malesuada eros non vulputate commodo. Aenean diam augue, ornare ut eleifend a, tristique in risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras ullamcorper ipsum et lectus mollis vestibulum non vehicula mi. Duis velit turpis, consequat et ultricies a, sagittis at mi. Vestibulum metus metus, laoreet eget porttitor vitae, molestie vitae augue. Phasellus vel enim commodo, placerat metus non, dignissim lectus. Phasellus enim diam, bibendum eget mi eget, volutpat consectetur mauris. Morbi laoreet neque in risus convallis, sed hendrerit urna tristique. Sed at consectetur sem. Cras eget nisl id dolor laoreet semper. Quisque eget nibh quis nulla venenatis dictum.', 17);


--  Comment and form table

CREATE TABLE IF NOT EXISTS comment_form (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    comment TEXT,
    location TEXT
);