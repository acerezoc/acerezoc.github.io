$(document).ready(() => {
    render_projects('All');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/portfolio/energy_exchange.png',
            link: 'portfolio/project_01/portfolio.html',
            title: 'Flatten the curve',
            demo: false,
            technologies: ['QGIS', 'Rhino', 'Grasshopper', 'SQL'],
            description: "A new energy exchange approach on a district scale",
            categories: ['All', 'Title_01', 'Title_03']
        },
        {
            image: 'assets/images/portfolio/rewilding_luxembourg.png',
            link: 'portfolio/project_02/portfolio.html',
            title: 'Rewilding Luxembourg',
            demo: false,
            technologies: ['QGIS', 'Circuitscape', 'Caesar', 'Photoshop'],
            description: "Strategy Planning to fight wetland fragmentation in Luxembourg",
            categories: ['All', 'Title_01', 'Title_03']
        },
        {
            image: 'assets/images/portfolio/energy_as_a_right.png',
            link: 'portfolio/project_03/portfolio.html',
            title: 'Energy as a right',
            demo: false,
            technologies: ['QGIS', 'Illustrator', 'SQL', 'Python'],
            description: "A vision for a more sustainable, democratic and efficient energy eco-system",
            categories: ['All', 'Title_01', 'Title_03']
        },
        {
            image: 'assets/images/portfolio/educational_hubs.png',
            link: 'portfolio/project_04/portfolio.html',
            title: 'Educational Hubs',
            demo: false,
            technologies: ['QGIS', 'Illustrator', 'Photoshop', 'Autocad'],
            description: "From Social Capital to Spatial Capital in Tallinn",
            categories: ['All', 'Title_03']
        },
        {
            image: 'assets/images/portfolio/court_yazd_city.png',
            link: 'portfolio/project_05/portfolio.html',
            title: 'Court Yazd City',
            demo: false,
            technologies: ['Rhino', 'Grasshopper', 'Python', 'Wallacei'],
            description: "A computational approach to Vernacular Architecture",
            categories: ['All', 'Title_02', 'Title_03']
        },
        {
            image: 'assets/images/portfolio/wetland_rewailding.png',
            link: 'portfolio/project_06/portfolio.html',
            title: 'Wetland Rew[AI]lding',
            demo: false,
            technologies: ['Photoshop', 'Python', 'Paperspace'],
            description: "Machine Learning algorithms to generate a serie of habitat pattern",
            categories: ['All', 'Title_02']
        },
        {
            image: 'assets/images/portfolio/social_interaction_monitoring.png',
            link: 'portfolio/project_07/portfolio.html',
            title: 'Social Interaction Monitoring',
            demo: false,
            technologies: ['Premiere', 'Grasshopper', 'Python'],
            description: "Microgrid energy distribution network on a district scale",
            categories: ['All', 'Title_01', 'Title_02']
        },
        {
            image: 'assets/images/portfolio/sustainable_housing_tool.png',
            link: 'portfolio/project_08/portfolio.html',
            title: 'Sustainable Housing Tool',
            demo: false,
            technologies: ['QGIS', 'Rhino', 'Grasshopper', 'Python'],
            description: "Microgrid energy distribution network on a district scale",
            categories: ['All', 'Title_02', 'Title_03']
        },
        {
            image: 'assets/images/portfolio/22_at_a_time.png',
            link: 'portfolio/project_09/portfolio.html',
            title: '22@ a time',
            demo: false,
            technologies: ['QGIS', 'Illustrator', 'Photoshop', 'Rhino'],
            description: "A Transitional Urban Development",
            categories: ['All', 'Title_03']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}