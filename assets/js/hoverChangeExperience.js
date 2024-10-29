export function hoverChangeExperience(
  nameCard,
  changeDescription,
  titleExperience,
  companyExperience,
  dateExperience
) {
  const varChangeDescription = document.querySelector(".changeExperience");
  const varTitleExperience = document.querySelector(".titleExperience");
  const varCompanyExperience = document.querySelector(".companyExperience");
  const varDateExperience = document.querySelector(".dateExperience");

  document.querySelector(nameCard).addEventListener("click", () => {
    varChangeDescription.innerHTML = changeDescription;
    varCompanyExperience.innerHTML = companyExperience;
    varTitleExperience.innerHTML = titleExperience;
    varDateExperience.innerHTML = dateExperience;
  });
}

const header = document.getElementById("experience-company");
const btns = header.getElementsByClassName("company");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("activeExperience");
    current[0].className = current[0].className.replace(
      " activeExperience",
      ""
    );
    this.className += " activeExperience";
  });
}


function smoothScroll(targetId, offset) {
  const targetElement = document.querySelector(targetId);
  const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}


function getOffset(section) {
  if (window.innerWidth < 768) {

    return section === 'quem-sou' ? 150 : 100;
  }

  return section === 'quem-sou' ? 110 : 20;
}

document.querySelector('.menu a[href="#quem-sou"]').addEventListener('click', function (e) {
  e.preventDefault();
  const offset = getOffset('quem-sou');
  smoothScroll('#quem-sou', offset);
});

document.querySelector('.menu a[href="#projetos"]').addEventListener('click', function (e) {
  e.preventDefault();
  const offset = getOffset('projetos');
  smoothScroll('#projetos', offset);
});


function isMobileScreen() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function smoothScrollTo(element) {
  const offset = 105;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

document.querySelectorAll('.company').forEach(company => {
  company.addEventListener('click', function () {

    if (isMobileScreen()) {
      const descriptionSection = document.querySelector('#experience-description');
      smoothScrollTo(descriptionSection);
    }

  });
});

