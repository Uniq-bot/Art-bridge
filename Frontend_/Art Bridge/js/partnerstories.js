const artPoolCollection = {
  title: "Explore the Art Pool Collection",
  description: "Discover our curated collection of artworks from around the world, available for loan to partner institutions and organizations.",
  ctaText: "View Collection",
  ctaLink: "Artbridgecollection.html"
};

// Partner stories data
const artPartnerStories = [
// Image 1 - Row 1
{
  title: "Trout Gallery Partner Story",
  category: "Learning & Engagement, Cohort Program",
  description: "Through educational programs and community outreach, The Trout Gallery promotes civic engagement around themes of race, inclusion, and representation.",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/0fd9fc5c5a068eaa448852531efee2b98f63683b-623x464.jpg?auto=format&w=640&q=75"
},
{
  title: "Westmoreland Museum of American Art Partner Story",
  category: "Evaluation",
  description: "Using evaluation to inform exhibition marketing and programming, and measure impact at The Westmoreland Museum of American Art",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/dd8c7ace394c80a4c3202686a3dc5d26a041f749-575x398.jpg?auto=format&w=640&q=75"
},
{
  title: "California State University, Northridge Art Galleries Partner Story",
  category: "Cohort Program",
  description: "Harnessing the transformative power of the visual arts to encourage midterm election participation",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/697f19b5967377d0bb88c3411f3d9b92d07db08d-1156x862.png?auto=format&w=640&q=75"
},

// Image 1 - Row 2
{
  title: "Munson-Williams-Proctor Arts Institute Partner Story",
  category: "Learning & Engagement, Cohort Program",
  description: "Munson-Williams-Proctor Arts Institute strengthens its ties with local communities.",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/4ad6c1b4b450b715cf8bd78c71c7c242ef42fdeb-4032x3024.jpg?auto=format&w=640&q=75"
},
{
  title: "Boise Art Museum Partner Story",
  category: "Traveling Exhibitions, Cohort Program",
  description: "Using inclusive design for their presentation of Many Wests: Artists Shape an American Idea, the Boise Art Museum reduced barriers to participation by expanding accessibility.",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/c1dc926abec9fa6fffeb32c9bc4073c38b03cad8-585x386.png?auto=format&w=640&q=75"
},
{
  title: "Allentown Art Museum Partner Story",
  category: "Cohort Program",
  description: "Embracing the power of storytelling and collaboration, the Allentown Art Museum launched a community quilting project to build connections and celebrate difference.",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/7ac6b59fb51fa531bff4343cf6bc57b08e7fb99a-1430x1073.jpg?auto=format&w=640&q=75"
},

// Image 2 - Row 1
{
  title: "Missoula Art Museum Partner Story",
  category: "Art Bridges Collection, Learning & Engagement",
  description: "Tlingit and UnangaX̂ artist Nicholas Galanin's \"I Think it Goes Like This (Gold)\" inspires the Missoula Art Museum to elevate local Indigenous voices through their inaugural Art Host...",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/919a0eb97c511e483b5bfb39e5e8f46fac689490-600x770.jpg?auto=format&w=640&q=75"
},
{
  title: "San Antonio Museum of Art Partner Story",
  category: "Art Bridges Collection, Learning & Engagement",
  description: "In a careful re-consideration of its city-wide art impact, SAMA increased access to art in Black and Latine communities.",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/b03d7a9f5e9f9ed1a18f43b50281a3e7b8b49a85-1170x894.jpg?auto=format&w=640&q=75"
},
{
  title: "Mattatuck Museum Partner Story",
  category: "Learning & Engagement",
  description: "Inspired by one hundred years of African American and Black art making, the Mattatuck Museum expands art access to Waterbury's African American and Black communities.",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/8f5237f6d90d6cc4fe8741110cda0ffd0d3b8067-898x595.png?auto=format&w=640&q=75"
},

// Image 3 - Row 1
{
  title: "Rochester Institute of Technology City Art Space Partner Story",
  category: "Art Bridges Collection",
  description: "Felix Gonzalez-Torres's \"Untitled\" (LA) inspires the RIT City Art Space to host conversations centering voices from women, queer, and BIPOC communities to challenge...",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/65786fe279fc78bbb7fbb8a67f6e5a6aefc95094-1735x1235.webp?auto=format&w=640&q=75"
},
{
  title: "Kalamazoo Institute of Arts Partner Story",
  category: "Traveling Exhibitions",
  description: "In a bold reimagining of permanent collection galleries, works by Black and African American artists create new opportunities for cross-cultural community dialogue at the...",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/f8975ac2f5f3eec112db1db90f4592f307ad39af-1920x1440.webp?auto=format&w=640&q=75"
},
{
  title: "SUNY Binghamton Partner Story",
  category: "Traveling Exhibitions",
  description: "A university and four lending partners collaborated to create and deeply engage their community in a new exhibition: \"not but nothing other: African-American Portrayals, 1930 to...",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/d6405332de53d508399d8032aa43b05c0b276f32-3000x2000.jpg?auto=format&w=640&q=75"
},

// Image 4 - Row 1
{
  title: "Colorado Springs Fine Arts Center Partner Story",
  category: "Traveling Exhibitions",
  description: "Engaging college audiences and increasing awareness of abstract indigenous artists with the first major traveling exhibition analyzing modern Native American art from the...",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/7fe78841a24bd4df8a11a86cb5fe4e708bc6f283-960x640.jpg?auto=format&w=640&q=75"
},
{
  title: "Jordan Schnitzer Museum of Art Partner Story",
  category: "Art Bridges Collection",
  description: "The Jordan Schnitzer Museum of Art (JSMA) at the University of Oregon created three innovative programs for their Art Bridges-funded project, which focused on two loans from t...",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/b0a22b705b64f6332f1e90b3e1c7c950c27ebe7d-639x804.jpg?auto=format&w=640&q=75"
},
{
  title: "Gadsden Arts Center and Museum Partner Story",
  category: "Learning & Engagement",
  description: "As part of the Art Bridges Learning & Engagement Program, Gadsden Arts Center and Museum established a Teen Art Council comprised of 18 Gadsden and Leon County student...",
  image: "https://cdn.sanity.io/images/x76dkvvf/prod/d679d84ef114494a625f42b5ddce3bf9749f7d74-4032x3024.jpg?auto=format&w=640&q=75"
}
];

// DOM Elements
const partnerStoriesContainer = document.querySelector(".projects-grid");
const searchInput = document.querySelector(".search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const prevButton = document.querySelector(".pagination-prev");
const nextButton = document.querySelector(".pagination-next");
const pageInfo = document.querySelector(".pagination-info");

// Pagination variables
let currentPage = 1;
const itemsPerPage = 6;
let filteredStories = [...artPartnerStories];
let activeFilter = 'all';

// Render Art Pool Collection CTA
function renderArtPoolCTA() {
const ctaSection = document.createElement('div');
ctaSection.className = 'art-pool-cta';
ctaSection.innerHTML = `
  <div class="cta-content">
    <h3>${artPoolCollection.title}</h3>
    <p>${artPoolCollection.description}</p>
    <a href="${artPoolCollection.ctaLink}" class="btn btn-primary">${artPoolCollection.ctaText}</a>
  </div>
`;

// Fixed: Use the correct container and reference element
const container = document.querySelector('.container');
const searchFilterContainer = document.querySelector('.search-filter-container');

if (container && searchFilterContainer) {
  container.insertBefore(ctaSection, searchFilterContainer);
} else {
  console.warn('Could not find container or search-filter-container elements');
}
}

// Filter stories by category
function filterStories(category) {
if (category === 'all') {
  filteredStories = [...artPartnerStories];
} else {
  filteredStories = artPartnerStories.filter(story => 
    story.category.toLowerCase().includes(category.toLowerCase())
  );
}
currentPage = 1;
renderFilteredStories();
updatePagination();
}

// Search functionality
function handleSearch() {
const searchTerm = searchInput.value.toLowerCase();

filteredStories = artPartnerStories.filter(story => 
  story.title.toLowerCase().includes(searchTerm) ||
  story.description.toLowerCase().includes(searchTerm) ||
  story.category.toLowerCase().includes(searchTerm)
);

currentPage = 1;
renderFilteredStories();
updatePagination();
}

// Render filtered stories with pagination
function renderFilteredStories() {
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const paginatedStories = filteredStories.slice(startIndex, endIndex);

if (!partnerStoriesContainer) {
  console.warn('Projects grid container not found');
  return;
}

partnerStoriesContainer.innerHTML = '';

if (paginatedStories.length === 0) {
  partnerStoriesContainer.innerHTML = `
    <div class="no-results">
      <p>No stories found matching your criteria. Try adjusting your search or filters.</p>
    </div>
  `;
  return;
}

paginatedStories.forEach(story => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-image">
      <img src="${story.image}" alt="${story.title}" loading="lazy">
    </div>
    <div class="project-content">
      <h3 class="project-title">${story.title}</h3>
      <span class="project-category">${story.category}</span>
      <p class="project-description">${story.description}</p>
    </div>
  `;
  partnerStoriesContainer.appendChild(card);
});
}

// Update pagination controls
function updatePagination() {
if (!pageInfo || !prevButton || !nextButton) {
  console.warn('Pagination elements not found');
  return;
}

const totalPages = Math.ceil(filteredStories.length / itemsPerPage);

pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

prevButton.disabled = currentPage === 1;
nextButton.disabled = currentPage === totalPages || totalPages === 0;
}

// Event Listeners
function initEventListeners() {
if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const filter = e.target.dataset.filter;
      activeFilter = filter;
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      
      filterStories(filter);
    });
  });
}

if (searchInput) {
  searchInput.addEventListener('input', handleSearch);
}

if (prevButton) {
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderFilteredStories();
      updatePagination();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

if (nextButton) {
  nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredStories.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderFilteredStories();
      updatePagination();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}
}

// Initialize
function init() {
renderArtPoolCTA();
renderFilteredStories();
updatePagination();
initEventListeners();
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', init);