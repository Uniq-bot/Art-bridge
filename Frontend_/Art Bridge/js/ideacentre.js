const artPrograms = [
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/304148f36c0eba2f229f5e10f0477c8061987a1f-923x687.png?auto=format&w=640&q=75",
      title: "AMSTeens Art Council",
      heading: "Community Building, Interdisciplinary, Youth and Family, Learning, Perception, Depth, Students",
      info: "Art Museum of South Texas (AMST) convened their Teen Advisory Council to create and participate in artmaking, financial, and business workshops centered on themes from..."
    },
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/0846a36063fd4fc85bf4fc4fd6255cd54c31bd17-382x253.png?auto=format&w=640&q=75", 
      title: "Fresh Film Series- Frame to Frame: Where Film Meets Art",
      heading: "Interdisciplinary, Artist Collaborations, Breadth",
      info: "The 'Fresh Film Series,' which activated a Partner Loan Network of 15 Art Bridges artworks, featured curated film screenings by writer and critic Carlos Valladares that..."
    },
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/b5ed55b0e9fc8714921ca2e050a29ca6804a5f84-1080x1080.jpg?auto=format&w=640&q=75",
      title: "Art & Tech Fusion Family Day and Virtual Reality Nights at the Canton Museum of Art", 
      heading: "Innovative, Interdisciplinary, In Gallery, Youth and Family, Breadth",
      info: "The Canton Museum of Art activated the 'Ginny Ruffner: Reforestation of the Imagination' exhibition with augmented reality and virtual reality programming for audiences of all..."
    },
  
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/ed0c8ccc3c0187878c2007a22fbb3e92a844f4c8-4032x3024.jpg?auto=format&w=640&q=75",
      title: "Chill Nights at the Richard M. Ross Art Museum",
      heading: "Community Building, Innovative, Interdisciplinary, Wellness, Students, Perception, Reach, Diversity, Breadth",
      info: "The Richard M. Ross Art Museum hosted a series of student-planned 'Chill Nights,' featuring crafts, screenings, and food to engage historically underserved Ohio Wesleyan University..."
    },
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/7fc9e4e31147bd237a0352a614c7d9af6b62ddb5-1430x953.jpg?auto=format&w=640&q=75",
      title: "Amazing Grace: Celebrating African American Courage, Strength, and Resilience", 
      heading: "Community Building, Interdisciplinary, Wellness, Perception, Reach, Diversity, Breadth, Artist Collaborations, Tours and Talks",
      info: "The Mint Museum's two-day 'Amazing Grace' community celebration featured art, music, and dialogue inspired by Eldzier Cortor's 'Southern Souvenir No. II,' using gallery..."
    },
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/e74552349b1e86414bf6eee2577d1b041a16396e-1320x880.jpg?auto=format&w=640&q=75",
      title: "Power Figures Workshop at the El Paso Museum of Art",
      heading: "Community Building, Artist Collaborations, Diversity, Breadth", 
      info: "Led by artist vanessa german, this hands-on workshop at the El Paso Museum of Art invited participants to create tactile assemblages and mixed-media sculptures inspired by her...",
      access:false
    },
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/58eecd4762a98c4d625c494190a77e4dcb643540-3024x4032.jpg?auto=format&w=640&q=75",
      title: "Portraits of Remembrance",
      heading: "Community Building, Interdisciplinary, Wellness, Students, Perception, Reach, Diversity, Artist Collaborations, Breadth",
      info: "California State University Northridge (CSUN) Art Galleries hosted five printmaking workshops led by Kalli Arte Collective, which invited participants to create remembran...",
      access:true
    },
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/504dc419b082251a2176e8cbbbac842b275e2dd0-383x563.png?auto=format&w=640&q=75", 
      title: "Interdisciplinary Programming for Middle and High School Students at Grand Rapids Art Museum",
      heading: "Interdisciplinary, Students, Depth",
      info: "The Grand Rapids Art Museum partnered with artist Mandy Cano Villalobos and Deos Ballet to create an interdisciplinary, interactive program where middle and high school student...",
      access:true
    },
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/e59f4b943358614edb2f810c21ba19ff7a908055-923x1223.png?auto=format&w=640&q=75",
      title: "Facial Cast Making at Birmingham Museum of Art",
      heading: "Students, Artist Collaborations, Reach, Depth",
      info: "In this six-week program, the Birmingham Museum of Art partnered with local schools to engage students with John Rhoden's sculpture, 'Head' using it as inspiration to create...",
      access:true
    },
  
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/e7e5c5600818ffd710fd659eb8e1e0fc05184949-3914x2936.jpg?auto=format&w=640&q=75",
      title: "Multidisciplinary Art Program for Older Adults (55+) at the Utah Museum of Fine Arts",
      heading: "Community Building, Diversity, Interdisciplinary, Depth",
      info: "In this multi-session art workshop, the Utah Museum of Fine Arts (UMFA) provided interdisciplinary outdoor courses for adults aged 55+ that combined environmental concepts wit...",
      access:true
    },
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/366a1c312b8a0c8b80a67459f3cdf32fc8f4695b-2268x4032.jpg?auto=format&w=640&q=75",
      title: "Supercoolwicked: Negro, Spiritual", 
      heading: "Reach, Interdisciplinary, Students, Breadth",
      info: "The University of Michigan Museum of Art (UMMA) collaborated with local interdisciplinary performance artist Supercoolwicked to provide a free interpretative...",
      access:true
    },
    {
      imageLink: "https://cdn.sanity.io/images/x76dkvvf/prod/74f44c14a8c9e9cc08dae35daa90671e5a6c6a59-1365x1365.jpg?auto=format&w=640&q=75",
      title: "Jazz Concert with Duke Ellington Orchestra at Syracuse University",
      heading: "Community Building, Interdisciplinary, Reach, Breadth", 
      info: "The Syracuse University Art Museum engaged audiences with the works of Gordon Parks and explored his connection to jazz music with a concert by the Duke Ellington Orchestra.",
      access:false
    }
  ];const projectContainer = document.querySelector('.projects-grid');
  let visibleCount = 0; // how many cards to show at once
  
  // Render helper
  function renderProjects(programs) {
    projectContainer.innerHTML = ''; // clear before rendering
    programs.slice(visibleCount, visibleCount+4).forEach(item => {
      projectContainer.innerHTML += `
        <div class="project-card">
          <div class="project-image" 
               style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${item.imageLink}')"></div>
          <div class="project-content">
            <div class="project-tags">${item.heading}</div>
            <h3 class="project-title">${item.title}</h3>
            <p class="project-description">${item.info}</p>
          </div>
        </div>`;
    });
  }
  
  // Initial render
  renderProjects(artPrograms);
  
  // Filter buttons
  document.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.filter-item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
  
      const filterTerm = this.textContent.toLowerCase() || artPrograms.filter(p => p.access===true);
      if (filterTerm === 'all') {
        renderProjects(artPrograms);
    
      } else {
        const filtered = artPrograms.filter(p => p.heading.toLowerCase().includes(filterTerm) || p.access===true);
        renderProjects(filtered);
        
      }
    });
  });
  // Search functionality
  document.querySelector('.search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = artPrograms.filter(item =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.heading.toLowerCase().includes(searchTerm)
    );
    renderProjects(filtered);
  });
  
  const one = document.getElementById("1"); // Prev
  const two = document.getElementById("2"); // Next
  
  one.addEventListener("click", function() {
    if (visibleCount > 0) {
      visibleCount -= 4;
      renderProjects(artPrograms);
    }
  });
  
  two.addEventListener("click", function() {
    if (visibleCount < artPrograms.length - 4) {
      visibleCount += 4;
      renderProjects(artPrograms);
    }
  });
  