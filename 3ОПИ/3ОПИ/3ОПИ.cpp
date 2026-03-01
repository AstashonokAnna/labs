#include <iostream>
//AstashonokAnna2006
//41 73 74 61 73 68 6f 6e 6f 6b 41 6e 6e 61 32 30 30 36
//41 73 74 61 73 68 6f 6e 6f 6b 41 6e 6e 61 32 30 30 36
//0041 0073 0074 0061 0073 0068 006f 006e 006f 006b 0041 006e 006e 0061 0032 0030 0036 

//јсташонокјннаѕетровна2006
//c0 f1 f2 e0 f8 ee ed ee ea c0 ed ed e0 cf e5 f2 f0 ee e2 ed e0 32 30 30 36 
//d090 d181 d182 d0b0 d188 d0be d0bd d0be d0ba d090 d0bd d0bd d0b0 d09f d0b5 d182 d180 d0be d0b2 d0bd d0b0 32 30 30 36
//1004 4104 4204 3004 4804 3e04 3d04 3e04 3a04 1004 3d04 3d04 3004 1f04 3504 4204 4004 3e04 3204 3d04 3004 3200 3000 3000 3600 0000

//јсташонок2006Anna
//c0 f1 f2 e0 f8 ee ed ee ea 32 30 30 36 41 6e 6e 61 
//d090 d181 d182 d0b0 d188 d0be d0bd d0be d0ba 32 30 30 36 41 6e 6e 61
//1004 4104 4204 3004 4804 3e04 3d04 3e04 3a04 3200 3000 3000 3600 4100 6e00 6e00 6100 0000

int main()
{
	int number = 0x12345678;
	char hello[] = "Hello";
	char lfie[] = "AstashonokAnna2006";
	char rfie[] = "јсташонокјннаѕетровна2006";
	char lr[] = "јсташонок2006Anna";

	wchar_t Lfie[] = L"AstashonokAnna2006";
	wchar_t Rfil[] = L"јсташонокјннаѕетровна2006";
	wchar_t LR[] = L"јсташонок2006Anna";

	std::cout << hello << lfie << std::endl;

	return 0;
}