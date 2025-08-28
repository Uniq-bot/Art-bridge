const artPrograms = [
    {
      imageLink: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80",
      title: "Global Youth Art Exchange",
      heading: "Community Building, Intercultural Exchange, Youth Engagement, Cross-Cultural Learning, International Collaboration",
      info: "Connecting young artists from different continents through virtual workshops and collaborative projects that celebrate cultural diversity and shared creativity...",
      access: true
    },
    {
      imageLink: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80", 
      title: "World Music & Visual Arts Fusion",
      heading: "Interdisciplinary, International Artist Collaborations, Cultural Fusion, Live Performance",
      info: "A groundbreaking series that pairs visual artists with musicians from different cultural traditions, creating immersive experiences that blend visual and auditory artistry...",
      access: true
    },
    {
      imageLink: "https://images.unsplash.com/photo-1561484930-974554019ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80",
      title: "Digital Nomad Artist Residency", 
      heading: "Innovative, Remote Collaboration, Cross-Cultural Exchange, Digital Art, Global Community",
      info: "A virtual residency program that connects artists from around the world to collaborate on digital projects while exploring themes of migration, identity, and global citizenship..."
    },
    {
      imageLink: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80",
      title: "Culinary Arts & Cultural Heritage",
      heading: "Community Building, Cultural Preservation, Interdisciplinary, Food as Art, Global Traditions",
      info: "Exploring the intersection of culinary traditions and visual arts through workshops, exhibitions, and interactive dining experiences that celebrate world cultures..."
    },
    {
      imageLink: "https://images.unsplash.com/photo-1529154691717-dc8b9f7a2b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80",
      title: "Indigenous Art & Storytelling", 
      heading: "Cultural Preservation, Intergenerational Learning, Traditional Arts, Global Indigenous Voices",
      info: "A platform for indigenous artists from different continents to share their traditional art forms, stories, and cultural practices with global audiences...",
      access: true
    },
    {
      imageLink: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80",
      title: "Urban Art Across Borders",
      heading: "Street Art, Cultural Exchange, Public Space, Global Urban Culture", 
      info: "Connecting street artists from major cities worldwide to create collaborative murals that reflect on urban life, migration, and cultural identity in the 21st century...",
      access: true
    },
    {
      imageLink: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80",
      title: "Textile Traditions of the World",
      heading: "Traditional Crafts, Cultural Heritage, Sustainable Practices, Global Textile Arts",
      info: "Celebrating the rich diversity of textile arts through exhibitions, workshops, and artist talks featuring master weavers and textile artists from different cultural traditions...",
      access: true
    },
    {
      imageLink: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80", 
      title: "Contemporary Dance & Visual Arts Dialogue",
      heading: "Interdisciplinary, Performance Art, Cross-Cultural Collaboration, Movement & Visual Arts",
      info: "Bringing together choreographers and visual artists from different cultural backgrounds to create immersive performances that explore the intersection of movement and visual expression...",
      access: true
    },
    {
      imageLink: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80",
      title: "Global Printmaking Exchange",
      heading: "Printmaking, Cultural Exchange, Traditional Techniques, International Collaboration",
      info: "A collaborative printmaking project that connects artists from different countries to share traditional and contemporary printmaking techniques while creating a collective portfolio...",
      access: true
    },
    {
      imageLink: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80",
      title: "Ceramic Traditions Across Continents",
      heading: "Ceramic Arts, Cultural Heritage, Traditional Techniques, Global Craft",
      info: "Exploring the rich diversity of ceramic traditions through workshops, demonstrations, and exhibitions featuring master potters from different cultural backgrounds...",
      access: true
    },
    {
      imageLink: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80",
      title: "Photography Without Borders", 
      heading: "Documentary Photography, Cultural Exchange, Global Perspectives, Visual Storytelling",
      info: "A traveling exhibition and workshop series featuring documentary photographers who capture the diversity of human experience across different cultures and communities...",
      access: true
    },
    {
      imageLink: "https://images.unsplash.com/photo-1501611730408-d3c9ff41b6e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=1000&q=80",
      title: "Digital Art & Cultural Heritage",
      heading: "Digital Media, Cultural Preservation, New Media Art, Technology & Tradition", 
      info: "Exploring how digital technologies can be used to preserve and reinterpret traditional cultural expressions through interactive installations and new media artworks...",
      access: true
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
  