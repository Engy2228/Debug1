let health = prompt('Введите число параметра "здоровье" для персонажа');
// Преобразуем введенное значение в число
health = Number(health);

// Проверяем, правильно ли преобразовано значение
console.log('typeof health', typeof health);

if (health <= 0 || !health)  {
 alert('Параметр "здоровье" должен быть больше нуля!');
} else 
{
  alert(`Параметр "здоровье" равен ${health}`);
}
console.log(typeof health);

