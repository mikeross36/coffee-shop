"use strict"

class Specialities {
    getGroups = async () => {
        try {
            const response = await fetch("/data/speciality-data/speciality.json")
            const groups = await response.json()
            return groups;
        }
        catch (error) {
            console.error(error)
        }
    }

    displaySpecialities = groups => {
        const category = document.querySelector(".speciality__category")
        groups.forEach(group => {
            if (category) {
                category.insertAdjacentHTML("beforeend", `
                    <div class="speciality__group speciality__line">
                        <img src="${group.image}" alt="" class="speciality__img" width="20px" height="20px">
                        <h3 class="speciality__title">${group.title}</h3>
                        <p class="speciality__description">${group.description}</p>
                    </div>
                `)
            }
        })
    }
};

(async () => {
    const specialities = new Specialities()
    const groups = await specialities.getGroups()
    specialities.displaySpecialities(groups)
})();