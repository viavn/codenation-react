const data = [
  {
    id: 1,
    title: 'This is my first item',
    description: 'First item description',
  },
  {
    id: 2,
    title: 'This is my second item',
    description: 'Second item description',
  },
];

export function getData() {
  return Promise.resolve(data);
}
