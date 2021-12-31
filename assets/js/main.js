
$(document).ready(function() {
    general_utils();
    blog_posts();
})

const nav = document.querySelector('.head-menu-wrap a:hover');
let navTop = nav.offsetDown;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');    
  }
}

window.addEventListener('scroll', fixedNav);

function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://medium.com/@alvaro.cerezo.carrizo/from-covid-to-community-4cb95bdc6793',
            title: 'From COvid to COmmunity',
        },
        {
            url: 'https://medium.com/@alvaro.cerezo.carrizo/how-will-the-new-old-look-like-b6f9c779e9d7',
            title: 'How will the New Old look like?',
        },
        {
            url: 'https://medium.com/@alvaro.cerezo.carrizo/high-tech-vs-high-touch-sensors-e4cb3120a60e',
            title: 'High tech VS High touch sensors',
        },
        {
            url: 'https://issuu.com/acerezoc/docs/bcn_energy_booklet',
            title: 'Towards Energy Exchange',
        },
        {
            url: 'https://urbannext.net/energy-as-a-right/',
            title: 'Rethinking Barcelona Energy system',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://medium.com/@alvaro.cerezo.carrizo')" target="_blank";>

        <div class="blog-link">

            <h3><a href="https://medium.com/@alvaro.cerezo.carrizo" target="_blank">Visit the blog for more posts</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}