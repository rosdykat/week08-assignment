# Week 8 project - Build a Blog with a comment form

For this project I've created a blog that will work as my Digital Marketing portfolio.

The website has a homepage, about page, and "case studies" page. While all three of these are static routes, the case studies page will link to each of my portfolio examples through a dynamic route.

On the case studies page, you can see the title and "tag" for each case study. The tags work through a one to many relationship so that every case study that shares a tag (for example, "Social Media") they will share a tag_id. This allowed me to filter case studies by tag. If you click on the tag on the case studies page, it will then show all the posts that share this tag.

This will be useful when the webpage is fully populated with data, as I could show people my work based on their tags easily using tags such as Social Media, Influencer marketing ect.

At the moment, all the case studies are filled with dummy data, however all the logic is there and ready for me to populate with my work! 

Additionally, I'm using locally sourced images and connecting them with rows of data from the database using their ID. This way I can include local images in a dynamic route. The other option would be to have a "url" column where i add the url for the image I want to use. But this allows me to use local images!

## What requirements did you achieve? 

🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key ✅
🎯 Create a delete button on posts that allows users to delete the post from the database.
🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key. ✅
🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid). ✅
🎯 Add a redirect when a user creates a post to redirect them to the posts page.
How to Deploy ✅

## Were there any requirements or goals that you were unable to achieve?

🎯 Create a delete button on posts that allows users to delete the post from the database.

🎯 Display all posts on the page, with an option to sort them in ascending or descending order.

## If so, what was it that you found difficult about these tasks?

- I ran out of time to add a delete post function, I have a rough idea on how to do this but I haven't actually done this yet in an assignment, so i'll give this a go when I complete the rest of this for my portfolio

- I know how to add an order to set results in asc of desc order. This may be complete later tonight.

## Reflections

- This was a great task, I really wanted to create an online portfolio for my digital marketing work, and although it's not ready to show in interviews, it's really close and I aim to work on this later.

- I created a database with a one to many relationship in my previous assignment, so this was really handy this week as it saved a lot of time.

- To improve: I really enjoy working on the CSS of a website and making it look nice, however I think i struggle a lot when creating a website that works in both mobile and desktop resolutions. This is typically as when code starts to get longer and longer, i get confused on what to do next.
    - I did find it easier this time around, as although I started to run out of time I'm gettng the hang of adding css relatively quickly and getting something that works
    - I'd love some CSS advice, one thing I didn't like in making this is that I ended up setting the height/width of certain elements in pixels. I don't really like doing this as it's not reactive and feel like it may make things not work in unique resolutions.
    - I know this can be fixed by using % of rem, but some advice would be nice!

## Database and wireframe

![Database Schema](./public/images/Screenshot%202025-06-22%20195655.png)


With the assignments I tend to not do to much work on the wireframe anymore. This is something to improve! However this is mainly because I try to keep my design relatively simple.
For the website, I liked the idea of having all the children routes in the "main" box, whereas the header and footer stay the same, this keeps the website simple and makes it look like it's all just one page.

![Wireframe](./public/images/Screenshot%202025-06-22%20200014.png)




DecodeURI:

https://stackoverflow.com/questions/66270207/next-js-how-can-i-make-dynamic-routes-with-spaces-work

https://stackoverflow.com/questions/69811308/how-to-decode-a-url-in-javascript-or-nextjs


## Resources

TBA