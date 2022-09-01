"use strict";

class Products {
    displayProducts = async () => {
        const urls = [
            "/data/products-data/amped.json",
            "/data/products-data/mochas.json",
            "/data/products-data/lattes.json"
        ];
    
        const promises = urls.map(async url => {
            const response = await fetch(url);
            return await response.json();
        })
    
        const data = await Promise.all(promises)
    
        let amped, mochas, lattes;
        amped = data[0];
        mochas = data[1];
        lattes = data[2];
    
        this.ampedController(amped);

        this.mochaController(mochas);

        this.latteController(lattes);

        this.productTabsController()
    }

    latteController(lattes) {
        const latteWrapper = document.querySelector("#lattes .products__wrapper");
        lattes.forEach(latte => {
            if (latteWrapper) {
                latteWrapper.insertAdjacentHTML("beforeend", `
                    <article class="products__card">
                        <div class="products__shape">
                            <img src="${latte.image}" alt="cake product" class="products__img">
                        </div>
                        <div class="products__data">
                            <span class="products__price">${latte.price}</span>
                            <span class="products__name">${latte.name}</span>
                            <button class="button products__button">
                                <img src="${latte.cartIcon}" alt="shopping cart" width="30px" height="30px">
                            </button>
                        </div>
                    </article>
                `);
            }
        });
    }

    mochaController(mochas) {
        const mochaWrapper = document.querySelector("#mochas .products__wrapper");
        mochas.forEach(mocha => {
            if (mochaWrapper) {
                mochaWrapper.insertAdjacentHTML("beforeend", `
                    <article class="products__card">
                        <div class="products__shape">
                            <img src="${mocha.image}" alt="cake product" class="products__img">
                        </div>
                        <div class="products__data">
                            <span class="products__price">${mocha.price}</span>
                            <span class="products__name">${mocha.name}</span>
                            <button class="button products__button">
                                <img src="${mocha.cartIcon}" alt="shopping cart" width="30px" height="30px">
                            </button>
                        </div>
                    </article>
                `);
            }
        });
    }

    ampedController(amped) {
        const ampedWrapper = document.querySelector("#amped .products__wrapper");
        amped.forEach(item => {
            if (ampedWrapper) {
                ampedWrapper.insertAdjacentHTML("beforeend", `
                    <article class="products__card">
                        <div class="products__shape">
                            <img src="${item.image}" alt="cake product" class="products__img">
                        </div>
                        <div class="products__data">
                            <span class="products__price">${item.price}</span>
                            <span class="products__name">${item.name}</span>
                            <button class="button products__button">
                                <img src="${item.cartIcon}" alt="shopping cart" width="30px" height="30px">
                            </button>
                        </div>
                    </article>
                `);
            }
        });
    }

    productTabsController = () => {
        const productsLinks = document.querySelectorAll(".products__item")
    
        function changeProducts(e) {
            const linkTarget = e.currentTarget;
            const product = linkTarget.dataset.product;
            const productsContents = document.querySelectorAll(".products__content")
    
            productsContents.forEach(content => {
                content.classList.remove("active-content")
            })
            productsLinks.forEach(link => {
                link.classList.remove("active-link")
            })
    
            document.querySelector(`#${product}`).classList.add("active-content")
            linkTarget.classList.add("active-link")
        }
    
        productsLinks.forEach(link => {
            link.addEventListener("click", changeProducts)
        });
    }
};

(async () => {
    const products = new Products()
    products.displayProducts()
})();