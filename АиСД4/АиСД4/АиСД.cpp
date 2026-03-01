#include <iostream>
#include <Windows.h>
#include <climits>
using namespace std;

void Floud();
void ShowTables();
void ShowPath(int from, int to);

int D[6][6] = {
    //   1   2   3   4   5   6
    {0, 28, 21, 59, 12, 27},
    {7, 0, 24, INT_MAX, 21, 9},
    {9, 32, 0, 13, 11, INT_MAX},
    {8, INT_MAX, 5, 0, 16, INT_MAX},
    {14, 13, 15, 10, 0, 22},
    {15, 18, INT_MAX, INT_MAX, 6, 0}
};

int S[6][6] = {
    //   1  2  3  4  5  6
    {0, 2, 3, 4, 5, 6},
    {1, 0, 3, 4, 5, 6},
    {1, 2, 0, 4, 5, 6},
    {1, 2, 3, 0, 5, 6},
    {1, 2, 3, 4, 0, 6},
    {1, 2, 3, 4, 5, 0}
};

int main()
{
    SetConsoleCP(1251);
    SetConsoleOutputCP(1251);

    cout << "Исходная матрица расстояний:\n";
    ShowTables();

    Floud();

    cout << "\n\nМатрицы после выполнения алгоритма Флойда-Уоршелла:\n";
    ShowTables();

    cout << "\n\nПримеры кратчайших путей:\n";
    ShowPath(1, 4);  
    ShowPath(3, 6);  
    ShowPath(6, 2); 

    return 0;
}

void Floud()
{
    for (int m = 0; m < 6; m++)
    {
        for (int i = 0; i < 6; i++)
        {
            if (D[i][m] == INT_MAX) continue;

            for (int j = 0; j < 6; j++)
            {
                if (D[m][j] == INT_MAX) continue;

                if (D[i][m] > INT_MAX - D[m][j]) continue;

                if (D[i][j] > D[i][m] + D[m][j])
                {
                    D[i][j] = D[i][m] + D[m][j];
                    S[i][j] = S[i][m];
                }
            }
        }
    }
}

void ShowTables()
{
    cout << "Матрица длин кратчайших путей:\n";
    cout << "\t1\t2\t3\t4\t5\t6\n";
    cout << "----------------------------------------------------------\n";
    for (int i = 0; i < 6; i++)
    {
        cout << i + 1 << "|\t";
        for (int j = 0; j < 6; j++)
        {
            if (D[i][j] == INT_MAX)
                cout << "∞\t";
            else
                cout << D[i][j] << "\t";
        }
        cout << "\n";
    }

    cout << "\n\nМатрица последовательности вершин (S):\n";
    cout << "\t1\t2\t3\t4\t5\t6\n";
    cout << "----------------------------------------------------------\n";
    for (int i = 0; i < 6; i++)
    {
        cout << i + 1 << "|\t";
        for (int j = 0; j < 6; j++)
        {
            cout << S[i][j] << "\t";
        }
        cout << "\n";
    }
}

void ShowPath(int from, int to)
{
    int i = from - 1;
    int j = to - 1;

    cout << "Кратчайший путь из " << from << " в " << to << ": ";

    if (D[i][j] == INT_MAX)
    {
        cout << "пути не существует\n";
        return;
    }

    cout << from;
    int current = i;
    while (current != j)
    {
        current = S[current][j] - 1; 
        cout << " -> " << current + 1;
    }

    cout << " (длина = " << D[i][j] << ")\n";
}