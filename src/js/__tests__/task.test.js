import ErrorRepository from '../task';

test('Checking the working method "translate"', () => {
  const errors = new ErrorRepository();
  errors.errorsContainer.set(101, 'Ошибка создания базы');
  const received = errors.translate(101);
  const expected = 'Ошибка создания базы';
  expect(received).toBe(expected);
});

test('Checking the working method "translate"', () => {
  const errors = new ErrorRepository();
  errors.errorsContainer.set(102, 'Нет связи с сервером');
  const received = errors.translate(102);
  const expected = 'Нет связи с сервером';
  expect(received).toBe(expected);
});

test('Checking the working method "translate", if code error is not to be in the database"', () => {
  const errors = new ErrorRepository();
  errors.errorsContainer.set(102, 'Нет связи с сервером');
  const received = errors.translate(103);
  const expected = 'Unknown error!';
  expect(received).toBe(expected);
});
