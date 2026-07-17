*{

margin:0;

padding:0;

box-sizing:border-box;

font-family:Arial;

}

header{

display:flex;

justify-content:space-between;

padding:20px;

background:#8B0000;

color:white;

}

nav a{

color:white;

text-decoration:none;

margin:15px;

}
.logo{
    display:flex;
    align-items:center;
    gap:12px;
}

.logo img{
    width:60px;
    height:60px;
    border-radius:50%;
    object-fit:cover;
}

.logo h2{
    color:#fff;
    font-size:28px;
    font-weight:700;
}

#home{

height:90vh;

background:url(images/bride1.jpg);

background-size:cover;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

color:white;

text-align:center;

}

.btn{

padding:15px 30px;

background:gold;

color:black;

text-decoration:none;

margin-top:20px;

border-radius:5px;

}

section{

padding:60px;

}

.gallery{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

gap:20px;

}

.gallery img{

width:100%;

height:300px;

object-fit:cover;

border-radius:10px;

}

.card{

background:#f8f8f8;

padding:20px;

margin:20px;

border-radius:10px;

box-shadow:0 5px 15px gray;

}

footer{

background:#222;

color:white;

text-align:center;

padding:20px;

}
