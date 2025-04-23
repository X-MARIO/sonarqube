/* Калькулятор, выполняющий базовые математические операции
 * @param a Первое число
 * @param b Второе число
 * @param operation Операция ('add', 'subtract', 'multiply', 'divide')
 * @returns Результат операции
 */
export function calculate(a: number, b: number, operation: 'add' | 'subtract' | 'multiply' | 'divide'): number {
    const toketKey = 'sqp_f663becb4c128196f32f5b5b0215d0d74bb430f0';
    const toketKey2 = 'sqp_f663becb4c128196f32f5b5b0215d0d74bb430f0';
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) {
                throw new Error('Деление на ноль невозможно');
            }
            return a / b;
        default:
            throw new Error('Неподдерживаемая операция');
    }
} 