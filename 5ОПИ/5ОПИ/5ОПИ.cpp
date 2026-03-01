#include <iostream>
using namespace std;
int main()
{
    setlocale(LC_CTYPE, "Russian");
    int x;
    char y;

    do {
        cout << "Выберите вариант использования:" << endl;
        cout << "1 - Разница кодов в ASCII" << endl;
        cout << "2 - Разница кодов в Windows-1251" << endl;
        cout << "3 - Код символа" << endl;
        cout << "4 - Выход" << endl;
        cin >> x;

        switch (x)
        {
        case 1:
            cout << "Введите латинскую букву: ";
            cin >> y;
            if (y)
            {
                cout << "Символ: " << y << endl;
                cout << "Код в ASCII (верхний регистр): " << (int)toupper(y) << endl;
                cout << "Код в ASCII (нижний регистр): " << (int)tolower(y) << endl;
                cout << "Разница: " << (int)toupper(y) - (int)tolower(y) << endl;
            }
            else
            {
                cout << "Ошибка: Введенный символ не является латинской буквой!" << endl;
            }
            break;
        case 2:
            cout << "Введите русскую букву: ";
            cin >> y;
            if (y)
            {
                cout << "Символ: " << y << endl;
                cout << "Код в Windows-1251 (верхний регистр): " << (int)towupper(y) << endl;
                cout << "Код в Windows-1251 (нижний регистр): " << (int)towlower(y) << endl;
                cout << "Разница: " << (int)towupper(y) - (int)towlower(y) << endl;
            }
            else {
                cout << "Ошибка: Введенный символ не является русской буквой!" << endl;
            }
            break;
        case 3:
            cout << "Введите цифру: ";
            cin >> y;
            if (y)
            {
                cout << "Символ: " << y << endl;
                cout << "Код в Windows-1251: " << (int)y << endl;
            }
            else
            {
                cout << "Ошибка: Введенный символ не является цифрой!" << endl;
            }
            break;
        case 4:
            cout << "Выход из программы." << endl;
            break;
        default:
            cout << "Ошибка: Неверный выбор варианта использования!" << endl;
        }
    } while (x != 4);

    return 0;
}
