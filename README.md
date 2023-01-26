![wireframe]('/assets/wireframe.png')

# HOME PAGE HTML

-   header with SIGN IN/SIGN OUT and CREATE buttons
-   empty section for created posts

# HOME PAGE EVENTS

-   ON LOAD:

    -   fetch posts
    -   loop through posts
    -   render post element
    -   append element to DOM
    -   display SIGN IN button

-   ON SIGN IN 'click'

    -   redirect to AUTH page
    -   display SIGN OUT button

-   ON SIGN OUT 'click'

    -   logOut() user, refresh HOME PAGE

-   ON CREATE 'click'
    -   redirect to create page

# AUTH PAGE HTML

-   sign in form
-   sign out form

# AUTH PAGE EVENTS

-   ON LOAD:

    -   if logged in redirect to HOME PAGE

-   ON SUBMIT SIGN IN FROM:

    -   use signIn() with email and password
    -   redirect to HOME PAGE

-   ON SIGN UP FORM:
    -   use signUp() with email and password
    -   redirect to HOME PAGE

# CREATE PAGE HTML

-   create post form

# CREATE PAGE EVENTS

-   ON LOAD:

    -   if NOT logged in redirect to HOME PAGE

-   ON SUBMIT CREATE FROM:
    -   create post from data
    -   redirect to HOME PAGE

SLICES:

-   create pages and files
-   build HTML skeleton
-   link supabase
-   fetch, loop, render, append
-   create SIGN IN/SIGN UP functions
-   verify log in
-   create post
