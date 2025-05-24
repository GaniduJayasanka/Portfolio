const projects = [
  {
    title: "Smart Car Parking & Visitor Management System",
    category: "web",
    description: "Full-stack ASP.NET system for real-time parking and visitor tracking with billing, SMTP alerts, and role-based logins.",
    tech: "C#, ASP.NET, SQL Server, Bootstrap, JavaScript, SMTP",
    image: "https://via.placeholder.com/600x400?text=Smart+Car+Parking"
  },
  {
    title: "Ticketing System – PIXEL BLOOM",
    category: "web",
    description: "Hardware-integrated ticketing app with fast scanning, cash drawer, and Crystal Reports.",
    tech: "C#, .NET, SQL Server, Crystal Reports",
    image: "https://via.placeholder.com/600x400?text=Ticketing+System"
  },
  {
    title: "Tour Guide Management System",
    category: "web",
    description: "Guide registration, commission tracking, and ticketing integration system.",
    tech: "C#, ASP.NET, SQL Server, Bootstrap, JavaScript",
    image: "https://via.placeholder.com/600x400?text=Tour+Guide+System"
  },
  {
    title: "Asset Inventory System",
    category: "web",
    description: "Centralized asset tracker with barcode and BarTender label generation.",
    tech: "C#, ASP.NET, SQL Server, BarTender",
    image: "https://via.placeholder.com/600x400?text=Asset+Inventory"
  },
  {
    title: "Aurora Skin Care Clinic System",
    category: "ml",
    description: "CLI tool for appointment scheduling and invoice generation using OOP.",
    tech: "Java, OOP, Array List, Date APIs",
    image: "https://via.placeholder.com/600x400?text=Aurora+Clinic"
  },
  {
    title: "Pizza Shop Management System",
    category: "ml",
    description: "CLI-based real-time ordering system using design patterns.",
    tech: "Java, OOP, File I/O, Design Patterns",
    image: "https://via.placeholder.com/600x400?text=Pizza+Shop+System"
  },
  {
    title: "Employee Management Portal",
    category: "web",
    description: "Angular SPA with .NET Web API for CRUD and dashboard management.",
    tech: "Angular, .NET Web API, SQL Server, Bootstrap",
    image: "https://via.placeholder.com/600x400?text=Employee+Portal"
  }
];

function renderProjects(category) {
  const container = document.getElementById('project-container');
  container.innerHTML = '';

  const filtered = category === 'all' ? projects : projects.filter(p => p.category === category);

  if (filtered.length === 0) {
    container.innerHTML = '<p class="text-center text-muted">No projects found.</p>';
    return;
  }

  filtered.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${p.image}" class="card-img-top" alt="${p.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">${p.description}</p>
          <small class="mt-auto text-muted">Tech: ${p.tech}</small>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.getAttribute('data-category'));
  });
});

// Load all on start
renderProjects('all');
