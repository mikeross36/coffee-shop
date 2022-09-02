"use strict"

class Blogs {
    getBlogs = async () => {
        try {
            const response = await fetch("/data/blog-data/blogs.json")
            const blogs = await response.json()
            return blogs;
        }
        catch (error) {
            console.error(error)
        }
    }

    displayBlogs = blogs => {
        const blogContent = document.querySelector(".blog__content")
        blogs.forEach(blog => {
            if (blogContent) {
                blogContent.insertAdjacentHTML("beforeend", `
                    <article class="blog__card">
                        <div class="blog__image">
                            <img src="${blog.image}" alt="" class="blog__img">
                            <a href="#" class="blog__button">
                                <img src="${blog.btnIcon}" alt="arrow icon" width="20px" height="20px">
                            </a>
                        </div>
                        <div class="blog__data">
                            <h4 class="blog__title">${blog.title}</h4>
                            <p class="blog__description">${blog.description}</p>
                            <div class="blog__footer">
                                <div class="blog__reaction">
                                    <img src="${blog.commentIcon}" alt="coment icon" width="30px" height="30px">
                                    <span>${blog.commentNum}</span>
                                </div>
                                <div class="blog__reaction">
                                    <img src="${blog.showIcon}" alt="reaction icon" width="30px" height="30px">
                                    <span>${blog.showNum}K</span>
                                </div>
                            </div>
                        </div>
                    </article>
                `)
            }
        })
    }
};

(async () => {
    const blogs = new Blogs()
    const apiBlogs = await blogs.getBlogs()
    blogs.displayBlogs(apiBlogs)
})();