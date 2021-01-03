const inputs = document.querySelectorAll('input');
const slovo = document.querySelectorAll('.slova');

console.log(inputs);

inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate);
});

function handleUpdate(e) {
  console.log('------------');

  console.log(e.target);
  console.log(e.target.value);
  console.log(e.target.name);
  const suffix = e.target.dataset.jedinica || '';
  console.log(suffix);
  console.log(document.documentElement);
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value + suffix
  );

  document.documentElement.style.setProperty('--pokusno', '1111px');
  // if (suffix == 'boja') {
  //   slovo.style.color = `${e.target.value}`;
  // }
}
