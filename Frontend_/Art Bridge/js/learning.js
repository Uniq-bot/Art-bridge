const shiftContent = (contentNumber) => {
    const content = document.querySelector(".image-division");
    const tabs = document.querySelectorAll(".tabs h3");
    
    // Remove active class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to clicked tab
    tabs[contentNumber - 1].classList.add('active');
    
    if(contentNumber === 1){
        content.innerHTML = ` <div class="images">
                    <img src="https://cdn.sanity.io/images/x76dkvvf/prod/8e5b23cda8d9d6d3fe221c0b68cf77c1e2eb5fa6-981x736.jpg?auto=format&w=828&q=75">
                 <p>Guest speakers and attendees at the lecture “For Which It<br>Stands: Brick by Brick: Black Women Breaking New Ground”,<br> hosted at the Avery Research Center at College of Charleston,<br> July 2022. Courtesy of the Gibbes Museum of Art (Charlston,<br> NC). Programming inspired by the exhibition Fights for<br>Freedom: William H. Johnson Picturing Justice. The exhibition<br> is organized by the Smithsonian American Art Museum.</p> 
                </div>
                <div class="para" data-aos="fade-up" data-aos-delay="200">
                    <h2>We start by scheduling two calls—one to walk<br> you through the process and another to have a<br> generative discussion about your ideas.</h2>
               </div> `
    }
    if(contentNumber === 2){
        content.innerHTML=`
        <div class="images">
                    <img src="https://cdn.sanity.io/images/x76dkvvf/prod/709845074e51767977431c585fec00671403ee0b-526x393.jpg?auto=format&w=640&q=75">
                    <p>Students attend a sign making workshop hosted by Artists 4 Democracy, during “What Would You Say” Workshop Week. Programming held by California State University Northridge Art Galleries (Northridge, CA) as part of the Los Angeles County Museum of Art Cohort.</p>
                </div>
                <div class="para" data-aos="fade-up" data-aos-delay="200">
                    <h2>After our conversations, we ask that you submit a draft application and budget.</h2>
               </div> 
        `
    }
    if(contentNumber === 3){
        content.innerHTML=`
        <div class="images">
                    <img src="https://cdn.sanity.io/images/x76dkvvf/prod/d636b4d5f59ebf3eca51d595ca66c7852d03e4b9-770x640.jpg?auto=format&w=640&q=75">
                    <p>Museum visitors viewing State of the Art: Constructs at Sarasota Museum of Art (Sarasota, FL).</p>
                </div>
                <div class="para" data-aos="fade-up" data-aos-delay="200">
                    <h2>We will provide feedback and suggestions to strengthen your application.</h2>
               </div> 
        `
    }
    if(contentNumber === 4){
        content.innerHTML=`
        <div class="images">
                    <img src="https://cdn.sanity.io/images/x76dkvvf/prod/a9500ecd602dde48cdc86d2c63da65fbca3a6c24-756x453.jpg?auto=format&w=640&q=75">
                    <p>A spoken word artist shares a completed Juneteenth-inspired square that was a part of “The Threads We Share Quilting and Story Collection” program. The program was held at Allentown Art Museum (Allentown, PA) as part of the Philadelphia Museum of Art Cohort. Image courtesy of Allentown Art Museum, 2021.</p>
                </div>
                <div class="para" data-aos="fade-up" data-aos-delay="200">
                    <h2>After receiving your final application package, the Art Pool team will prepare your materials for an award review meeting where your project will be evaluated for alignment with Art Pool's mission.</h2>
               </div> 
        `
    }
    if(contentNumber === 5){
        content.innerHTML=`
        <div class="images">
                    <img src="https://cdn.sanity.io/images/x76dkvvf/prod/f1fb3872793863d1ce47ca6ca1aca8a5812dcdb1-981x736.jpg?auto=format&w=640&q=75">
                    <p>Library of political leaflets and booklets at a zine making hosted by Artists 4 Democracy, during “What Would You Say” Workshop Week. Programming held by California State University Northridge Art Galleries (Northridge, CA) as part of the Los Angeles County Museum of Art Cohort.</p>
                </div>
                <div class="para" data-aos="fade-up" data-aos-delay="200">
                    <h2>Once your project is approved, funds are transferred to your museum. Be sure to document your program activities along the way, as a final report is due 45 days after your project concludes.</h2>
               </div> 
        `
    }
}