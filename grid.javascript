<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./index.css" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>
    
    <h4><i class="fa-brands fa-github"></i>GITHUB</h4>
    <div class="container">
         <div class="box0"> </div>
        <input type="search" id="search" placeholder="Search">
         <div class="box2"></div>
         <div class="box3"></div>
         <div class="box4"></div>
         <div class="box5"></div>
      <i></i>
    </div>
</body>
</html>
body{
    margin: 2em;
    
}
h4{
    margin: 10px;
    letter-spacing: 3px;
    font-weight: 400;
    color: white;
    border: 4px solid  #2f3d46;
    background: #2f3d46;
    padding: 20px;
    padding-left: 50%;
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    
    display: flex;
}
.container{
     
    background: #CAD2C5;
    border-radius: 0px 0px 10px 10px;
    border:1px solid black;
    height:83vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr  1fr 1fr;
}
.container div{
    border: 1px solid;
    border-radius: 10px;
    background: #353535;
    margin: 30px;
}
.box0{
    grid-row-start: 1;
    grid-row-end: 4;
    height: 70vh;
    width: 20vw;
    margin-top: 4em;
}
.search{
    grid-column-start: 2;
    grid-column-end: 5;
    height: 6vh;
    font-size: 1em;
    padding:  30px 0px 10px 9px;
    margin-left: 40px;
    color: white;
    letter-spacing: 5px;
    grid-column-start: 2.5;
    grid-column-end: 2.5;
}
.box5{
    grid-column-start: 2;
    grid-column-end: 5;
    height: 15vh;
    font-size: 2em;
    padding: 20px 0px 0px 20px;
    margin-left: 40px;
}
 input{
    background: #353535;
    grid-column-start: 2;
    grid-column-end: 5;
    margin:5em 10em 5em;
    border-radius: 10px;
 } 
 i{
    font-size: 2em;
   position: absolute;
    left: 50px;
    top: 50px;
     

 }::placeholder{
    color: white;
    letter-spacing: 8px;
    padding-left: 10px;
 }
 

 
 
