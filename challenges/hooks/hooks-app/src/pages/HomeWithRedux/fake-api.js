const data = [
  {
    id: 1,
    title: 'This is my first item WITH REDUX',
    description: 'First item description',
  },
  {
    id: 2,
    title: 'This is my second item WITH REDUX',
    description: 'Second item description',
  },
];

export function getData() {
  return Promise.resolve(data);
}
