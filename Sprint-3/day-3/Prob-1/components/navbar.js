function navbar(){

    return ` <div class="navcon">
    <div class="left nav1">
        <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png"/>
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMRT2kTrTHmt4U5ETZn813vAVwbP2eMAtQQm3O9F6X6pP_0QE5" alt="">

    </div>
    <div class="nav2">
    <a href="dayrecipy.html" id="day">Racipy of The Day</a>
    <a href="#" id="ran">Random Racipy</a>
    </div>
    <div class="midle">
           <div class="mid1">
            <input type="text" id="search" placeholder="Search">
            <button class="btn" onclick="searchVideos()"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLKAYgquq7OZi51PIQC6RBi5LmaxNDJmodtYBqIgdG6GL-bpG" alt=""></button>
           </div>
            <div class="mid2">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUvtmfqvxMKyEpuv0kmW1b1SAQrzQnRaGafF7sySESVGrtCsHa" alt="" id="mid">
            </div>
           
    </div>
    <div class="right nav">
           <a href="login.html" id="log">Login</a>
           <a href="signup.html" id="sign">SignUp </a>
       <img src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bell_icon_128467.png" alt="">

        
    </div>
</div>`
}

export default navbar;