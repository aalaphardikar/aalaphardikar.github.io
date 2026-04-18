const filterBtns = document.querySelectorAll('.filter-btn');
const listItems = document.querySelectorAll('.list-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    listItems.forEach(item => {
      if (filter === 'all' || item.dataset.cat === filter) {
        item.style.display = 'flex';
        item.style.animation = 'fadeUp 0.3s ease both';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `fadeUp 0.5s ${i * 0.08}s ease both`;
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.post-card, .list-item, .article-body p, .about-right p')
  .forEach(el => observer.observe(el));
