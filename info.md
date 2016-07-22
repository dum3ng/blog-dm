#This is not a SPA.
version 0.1


##views
 - index.jade   /
    - Show the blog list.  (Pagination not supported.)
    - Read more
    - Show caterogy
    - goto post view

 - post.jade
    - show a single post

 - category.jade


 - edit.jade   /edit    /eidt?new
    - Edit an old post
    - create a new post

 - about.jade   /about
    - show some extra infomation on the site.








                        ________________________
                        |                       |
                        |                       |    
                        |                       |   
                        |                       |   
                        |                       |       
                        |                       |   
                        |                       |           
                        -------------------------               

                                    





##models
Currently no user control and authentication.
Anyone can access all the pages.

- Post
    - title: String
    - category: String
    - createdDate: Number
    - editDate: Number
    - content: String
    - author: String
    - comments: [Comment ]

 - Comment
    - date: Number
    - author:id
    - content:String


 - Category
    - name:String
    - 




##









