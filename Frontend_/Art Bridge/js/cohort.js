// Cohort Program Phase Data
const cohortPhases = [
    {
      id: "introduction",
      title: "Introduction",
      active: true,
      content: {
        image: "https://cdn.sanity.io/images/x76dkvvf/prod/c1dc926abec9fa6fffeb32c9bc4073c38b03cad8-585x386.png?auto=format&w=750&q=75",
        caption: "Installation view of Many Wests: Artists Shape an American Idea at the Whatcom Museum as part of the SAAM Cohort, March 19 2022 - August 21 - 2022",
        description: "Each cohort, comprised of a lead museum and cohort members, works together for 4-6 years to share their collections, making art lending, borrowing, and display more efficient and environmentally sustainable."
      }
    },
    {
      id: "phase1",
      title: "Phase 1 - Research and Development (6 months)",
      active: false,
      content: {
        image: "https://cdn.sanity.io/images/x76dkvvf/prod/4ad6c1b4b450b715cf8bd78c71c7c242ef42fdeb-4032x3024.jpg?auto=format&w=750&q=75",
        caption: "Representatives from nine Pennsylvania museums came together for the Philadelphia Museum of Art Cohort's final convening at the new Palmer Museum of Art.",
        description: "A lead museum identifies potential cohort members in consultation with Art Bridges. The cohort then applies for \"Phase 1 – Research & Development\" funding, during which time they learn about each other's collections, facilities, and the Cohort Program in depth. The lead museum selects 3-5 members after an in-person convening hosted by Art Bridges."
      }
    },
    {
      id: "phase2", 
      title: "Phase 2 - Small Art Share (20 months)",
      active: false,
      content: {
        image: "https://cdn.sanity.io/images/x76dkvvf/prod/919a0eb97c511e483b5bfb39e5e8f46fac689490-600x770.jpg?auto=format&w=750&q=75",
        caption: "Gallery view of Before You Now: Capturing the Self in Portraiture at Millard Sheets Art Center at the LA County Fair as part of Local Access, a series of American art exhibitions created through a multiyear, multi-institutional partnership formed by LACMA as part of the Art Bridges Cohort Program.",
        description: "The cohort may apply for \"Phase 2 – Small Art Share\" funding to participate in the Ki Futures Accessible Loans Program and begin its respective small art shares (3-5 works per partner). To assist the cohort members, the lead museum will hire 2 term positions—a Project Manager and a Collections Care Apprentice—termed to the length of the cohort project. The Apprentice will complete an 8-week, in-person training on conservation and collections care provided by Ki Futures before their time at the lead museum begins."
      }
    },
    {
      id: "phase3",
      title: "Phase 3 - Large Art Share (45 months)", 
      active: false,
      content: {
        image: "https://cdn.sanity.io/images/x76dkvvf/prod/b03d7a9f5e9f9ed1a18f43b50281a3e7b8b49a85-1170x894.jpg?auto=format&w=750&q=75",
        caption: "Gallery view of Many Wests: Artists Shape an American Idea at the Smithsonian American Art Museum, July 2023- January 2024.",
        description: "Lastly, the cohort may apply for \"Phase 3 – Large Art Share\" funding to complete a large art share (30 objects per partner) or build a traveling exhibition (40-70 works total)."
      }
    }
  ];
  
  // Partner Stories Data for the Stories We Love section
  const partnerStories = [
    {
      title: "Detroit Institute of Arts' Cohort",
      category: "Partner Story",
      description: "As part of the Art Pool Cohort Program, Detroit Institute of Arts assembled a traveling exhibition, \"Rethinking Monuments.\" The exhibition also",
      image: "https://cdn.sanity.io/images/x76dkvvf/prod/c1dc926abec9fa6fffeb32c9bc4073c38b03cad8-585x386.png?auto=format&w=750&q=75"
    },
    {
      title: "California State University, Northridge Art Galleries",
      category: "Partner Story", 
      description: "Harnessing the transformative power of the visual arts to encourage midterm election participation",
      image: "https://cdn.sanity.io/images/x76dkvvf/prod/709845074e51767977431c585fec00671403ee0b-526x393.jpg?auto=format&w=750&q=75"
    },
    {
      title: "Boise Art Museum",
      category: "Partner Story",
      description: "Using inclusive design for their presentation of Many Wests: Artists Shape an American Idea, the Boise Art Museum reduced barriers to",
      image: "https://cdn.sanity.io/images/x76dkvvf/prod/9dde021d933f34e09767f8960cbfc68bc91327a7-618x266.jpg?auto=format&w=750&q=75"
    }
  ];
  
  // DOM Elements
  let phaseTabsContainer;
  let phaseContentContainer;
  let partnerStoriesContainer;
  let currentActivePhase = 0;
  
  // Initialize the interactive cohort program
  function initCohortProgram() {
    createPhaseNavigation();
    createPhaseContent();
    updatePartnerStories();
    attachEventListeners();
  }
  
  // Create the phase navigation tabs
  function createPhaseNavigation() {
    const thirdSection = document.querySelector('.third-section');
    if (!thirdSection) return;
  
    // Update the existing steps section
    const stepsSection = thirdSection.querySelector('.steps ul');
    if (stepsSection) {
      stepsSection.className = 'phase-tabs';
      stepsSection.innerHTML = '';
      
      cohortPhases.forEach((phase, index) => {
        const tab = document.createElement('li');
        tab.className = `phase-tab ${index === 0 ? 'active' : ''}`;
        tab.setAttribute('data-phase', index);
        tab.innerHTML = `
          <span class="phase-indicator">${index === 0 ? '' : index}</span>
          <span class="phase-title">${phase.title}</span>
        `;
        stepsSection.appendChild(tab);
      });
      
      phaseTabsContainer = stepsSection;
    }
  }
  
  // Create the phase content display area
  function createPhaseContent() {
    const thirdSection = document.querySelector('.third-section');
    if (!thirdSection) return;
  
    // Create content container after the steps
    phaseContentContainer = document.createElement('div');
    phaseContentContainer.className = 'phase-content-container';
    thirdSection.appendChild(phaseContentContainer);
    
    // Display initial phase
    displayPhaseContent(0);
  }
  
  // Display content for a specific phase
  function displayPhaseContent(phaseIndex) {
    const phase = cohortPhases[phaseIndex];
    if (!phase || !phaseContentContainer) return;
  
    phaseContentContainer.innerHTML = `
      <div class="phase-content ${phase.id}">
        <div class="phase-image">
          <img src="${phase.content.image}" alt="${phase.title}" loading="lazy">
          <p class="image-caption">${phase.content.caption}</p>
        </div>
        <div class="phase-description">
          <p>${phase.content.description}</p>
        </div>
      </div>
    `;
  }
  
  // Update the partner stories section with dynamic content
  function updatePartnerStories() {
    const storiesGrid = document.querySelector('.pic-grid');
    if (!storiesGrid) return;
  
    storiesGrid.innerHTML = '';
    
    partnerStories.forEach(story => {
      const storyCard = document.createElement('div');
      storyCard.className = 'grid1';
      storyCard.innerHTML = `
        <div class="image">
          <img src="${story.image}" alt="${story.title}" loading="lazy">
        </div>
        <div class="text">
          <h4>${story.category}</h4>
          <h3>${story.title}</h3>
          <p>${story.description}</p>
        </div>
      `;
      storiesGrid.appendChild(storyCard);
    });
    
    partnerStoriesContainer = storiesGrid;
  }
  
  // Attach event listeners
  function attachEventListeners() {
    if (!phaseTabsContainer) return;
  
    // Add click event listeners to phase tabs
    phaseTabsContainer.addEventListener('click', (e) => {
      const tab = e.target.closest('.phase-tab');
      if (!tab) return;
  
      const phaseIndex = parseInt(tab.getAttribute('data-phase'));
      switchToPhase(phaseIndex);
    });
  
    // Add keyboard navigation
    phaseTabsContainer.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        const direction = e.key === 'ArrowRight' ? 1 : -1;
        const newIndex = Math.max(0, Math.min(cohortPhases.length - 1, currentActivePhase + direction));
        switchToPhase(newIndex);
      }
    });
  }
  
  // Switch to a specific phase
  function switchToPhase(phaseIndex) {
    if (phaseIndex === currentActivePhase) return;
  
    // Update tab states
    const tabs = phaseTabsContainer.querySelectorAll('.phase-tab');
    tabs.forEach((tab, index) => {
      tab.classList.toggle('active', index === phaseIndex);
    });
  
    // Update content with animation
    phaseContentContainer.style.opacity = '0';
    
    setTimeout(() => {
      displayPhaseContent(phaseIndex);
      phaseContentContainer.style.opacity = '1';
    }, 150);
  
    currentActivePhase = phaseIndex;
  
    // Update URL hash for bookmarking
    const phaseId = cohortPhases[phaseIndex].id;
    history.replaceState(null, null, `#${phaseId}`);
  }
  
  // Check for hash on page load
  function checkInitialHash() {
    const hash = window.location.hash.slice(1);
    const phaseIndex = cohortPhases.findIndex(phase => phase.id === hash);
    if (phaseIndex !== -1) {
      switchToPhase(phaseIndex);
    }
  }
  
  // Initialize on DOM content loaded
  document.addEventListener('DOMContentLoaded', () => {
    initCohortProgram();
    checkInitialHash();
  });
  
  // Handle browser back/forward navigation
  window.addEventListener('hashchange', checkInitialHash);