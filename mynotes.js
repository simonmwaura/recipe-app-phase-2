/*
this is a single ;page application
but we can have different pages
still components

for react router
use w3 school
link=https://www.w3schools.com/react/react_router.asp
there are 2 commands
npm i -D react-router-domn        -)any version
npm i -D react-router-dom@latest   -)latest version
use either i used the 1st

make some folders
1)folder=pages-this will handle the pages
this is for home abt and others
2)folder=components
handle the components found in the pages 

layout file=a file that will hold the common components or the common features of all the pages

open the w3 schools website go to the example and copy the 2nd line
the line= import { BrowserRouter, Routes, Route } from "react-router-dom";
add it to the app.jsx

browserrouter is the parent
the routes is inside
the  route is inside

example below

<BrowserRouter>
      <Routes>
        <Route/>
      </Routes>
    </BrowserRouter>

    you have to pass the path eg
    <Route path="blogs" element={<Blogs />} />
    the path is like /blogs or /simon
    https://www.w3schools.com/react/react_router.asp/blogs

     <Route index element={<Home />} /> represents the home page
     index=home page path
 */