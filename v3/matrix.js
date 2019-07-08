var matriz = [
    [83, 14, 41, 25, 50, 24, 45, 44, 57, 63, 7, 81, 66, 61, 18, 12, 85, 71, 46, 56, 40, 86, 28, 82, 42, 4, 19, 74, 22, 70, 65, 93, 88, 77, 15, 38, 89, 72, 53, 92],
    [40, 77, 68, 73, 31, 42, 84, 29, 72, 48, 90, 15, 83, 53, 2, 56, 98, 33, 39, 66, 5, 69, 38, 89, 93, 52, 8, 70, 12, 30, 36, 50, 60, 96, 46, 26, 35, 3, 6, 23],
    [68, 83, 89, 11, 38, 42, 77, 50, 26, 46, 33, 54, 37, 6, 75, 17, 49, 87, 29, 72, 13, 56, 93, 47, 82, 2, 34, 69, 40, 22, 1, 99, 43, 60, 86, 3, 63, 48, 19, 4],
    [21, 35, 39, 14, 46, 10, 9, 82, 25, 86, 52, 63, 44, 73, 12, 67, 68, 55, 49, 32, 17, 99, 95, 45, 51, 74, 48, 86, 81, 42, 29, 3, 60, 4, 11, 97, 89, 19, 54, 78],
    [9, 57, 84, 37, 34, 86, 95, 62, 80, 40, 24, 11, 42, 48, 63, 41, 44, 17, 46, 94, 33, 60, 61, 38, 71, 25, 69, 78, 20, 45, 31, 5, 93, 76, 35, 1, 12, 73, 74, 82],
    [69, 42, 10, 90, 78, 22, 47, 64, 95, 52, 8, 61, 5, 76, 59, 58, 62, 23, 67, 68, 86, 2, 15, 75, 12, 21, 32, 80, 81, 50, 72, 16, 49, 98, 17, 37, 30, 9, 51, 99],
    [76, 75, 72, 77, 65, 94, 9, 10, 6, 4, 45, 58, 51, 61, 49, 42, 86, 35, 86, 84, 82, 74, 67, 29, 13, 38, 7, 46, 8, 88, 22, 31, 28, 48, 33, 21, 44, 36, 90, 26],
    [98, 41, 62, 20, 22, 59, 54, 50, 37, 2, 12, 31, 66, 71, 69, 9, 87, 56, 33, 53, 5, 68, 40, 11, 65, 75, 79, 70, 42, 39, 52, 21, 3, 78, 28, 4, 17, 23, 15, 81],
    [74, 51, 83, 24, 18, 57, 95, 77, 65, 75, 15, 85, 3, 43, 78, 47, 42, 8, 25, 36, 88, 48, 39, 14, 7, 46, 9, 76, 61, 30, 84, 5, 1, 82, 2, 66, 93, 99, 96, 69],
    [70, 16, 86, 69, 39, 78, 38, 75, 81, 99, 8, 13, 18, 47, 21, 37, 12, 5, 74, 57, 11, 56, 19, 94, 58, 15, 14, 92, 7, 87, 53, 23, 60, 84, 73, 90, 93, 82, 63, 30],
    [12, 97, 69, 48, 10, 91, 61, 34, 52, 15, 92, 63, 3, 43, 28, 95, 83, 57, 50, 37, 72, 85, 21, 79, 2, 24, 44, 89, 42, 55, 100, 25, 6, 86, 64, 59, 35, 58, 86, 49],
    [34, 3, 67, 81, 19, 39, 66, 69, 41, 61, 94, 11, 70, 68, 45, 7, 95, 24, 52, 89, 6, 38, 72, 32, 74, 82, 28, 71, 40, 85, 79, 31, 9, 51, 55, 96, 23, 22, 4, 13],
    [29, 24, 21, 78, 22, 73, 48, 27, 30, 2, 6, 11, 5, 95, 50, 83, 87, 77, 59, 45, 81, 17, 98, 10, 32, 20, 4, 74, 93, 12, 18, 44, 33, 63, 84, 19, 23, 43, 80, 51],
    [57, 47, 46, 5, 21, 54, 65, 97, 90, 41, 94, 24, 13, 31, 99, 55, 34, 92, 73, 39, 10, 42, 48, 3, 36, 25, 8, 74, 70, 53, 81, 66, 69, 4, 89, 30, 28, 50, 43, 29],
    [48, 68, 41, 59, 80, 89, 29, 9, 21, 25, 8, 83, 78, 52, 27, 72, 7, 49, 82, 39, 1, 97, 65, 6, 71, 18, 58, 46, 86, 90, 84, 12, 63, 19, 36, 11, 94, 31, 24, 77],
    [14, 84, 73, 44, 21, 5, 39, 52, 91, 81, 11, 38, 86, 31, 75, 42, 95, 29, 92, 60, 65, 57, 99, 26, 43, 78, 12, 24, 10, 40, 87, 47, 67, 6, 2, 83, 62, 97, 35, 49],
    [73, 66, 29, 30, 59, 9, 37, 46, 95, 6, 43, 93, 4, 50, 12, 86, 53, 68, 79, 83, 1, 76, 74, 19, 87, 69, 39, 67, 51, 44, 82, 64, 23, 70, 75, 61, 26, 89, 16, 65],
    [41, 83, 40, 95, 53, 98, 38, 45, 4, 7, 28, 70, 79, 96, 54, 73, 91, 58, 12, 78, 67, 48, 13, 51, 14, 52, 69, 1, 3, 59, 22, 74, 35, 17, 18, 30, 90, 27, 29, 93],
    [26, 72, 71, 7, 86, 90, 2, 57, 62, 42, 77, 29, 55, 35, 61, 11, 41, 58, 8, 48, 59, 50, 52, 56, 78, 37, 53, 76, 66, 18, 80, 98, 75, 16, 5, 86, 23, 69, 51, 17],
    [86, 16, 44, 96, 46, 89, 6, 77, 83, 2, 97, 60, 48, 56, 69, 63, 42, 59, 43, 21, 32, 81, 90, 33, 84, 92, 36, 94, 70, 5, 41, 64, 78, 57, 23, 15, 9, 58, 8, 85],
    [95, 98, 92, 73, 80, 64, 59, 86, 30, 38, 47, 81, 72, 2, 68, 14, 60, 21, 93, 20, 76, 99, 51, 3, 82, 28, 9, 26, 41, 61, 66, 63, 45, 25, 37, 88, 5, 86, 12, 74],
    [69, 20, 2, 85, 18, 65, 79, 32, 75, 50, 49, 26, 27, 46, 95, 76, 40, 55, 36, 71, 60, 14, 23, 5, 1, 66, 68, 93, 61, 24, 89, 87, 62, 82, 90, 53, 35, 51, 9, 28],
    [43, 72, 36, 82, 22, 2, 19, 49, 7, 84, 38, 71, 81, 51, 93, 88, 61, 24, 42, 16, 4, 75, 91, 94, 48, 17, 37, 21, 41, 23, 86, 69, 54, 83, 86, 79, 20, 53, 29, 33],
    [80, 22, 25, 93, 2, 60, 94, 38, 89, 81, 9, 13, 7, 34, 90, 46, 66, 26, 58, 48, 16, 97, 91, 75, 35, 4, 83, 79, 18, 82, 17, 52, 14, 19, 24, 6, 70, 99, 21, 86],
    [75, 93, 92, 30, 36, 83, 34, 99, 7, 70, 24, 41, 89, 19, 64, 67, 84, 3, 94, 73, 54, 53, 5, 29, 16, 45, 15, 76, 1, 22, 61, 66, 90, 21, 42, 77, 33, 69, 60, 6],
    [82, 49, 32, 8, 96, 70, 36, 54, 57, 73, 31, 61, 6, 17, 93, 88, 87, 43, 60, 35, 98, 66, 47, 99, 33, 89, 19, 24, 23, 86, 34, 21, 46, 18, 53, 1, 83, 44, 72, 90],
    [54, 86, 81, 12, 85, 8, 77, 71, 53, 35, 88, 56, 84, 99, 29, 30, 15, 46, 5, 14, 38, 44, 90, 20, 10, 75, 98, 31, 61, 65, 69, 66, 52, 26, 37, 28, 95, 94, 3, 11],
    [79, 93, 50, 22, 28, 91, 33, 58, 98, 25, 82, 95, 23, 51, 96, 77, 10, 94, 34, 4, 61, 68, 83, 41, 74, 39, 17, 67, 75, 42, 24, 76, 62, 63, 72, 80, 48, 64, 85, 60],
    [20, 43, 76, 49, 38, 85, 3, 39, 13, 1, 75, 33, 30, 87, 40, 95, 50, 81, 97, 78, 24, 94, 19, 10, 80, 64, 91, 52, 22, 60, 8, 25, 27, 42, 90, 61, 67, 72, 35, 16],
    [35, 56, 34, 64, 30, 20, 58, 97, 63, 74, 68, 59, 96, 23, 17, 98, 21, 5, 67, 92, 76, 1, 11, 50, 3, 99, 13, 53, 93, 78, 36, 43, 45, 81, 37, 95, 47, 82, 66, 40],
    [50, 63, 46, 14, 95, 21, 52, 19, 10, 73, 4, 76, 22, 82, 99, 81, 79, 85, 93, 48, 80, 17, 35, 7, 67, 37, 28, 44, 64, 60, 33, 59, 41, 74, 72, 38, 84, 15, 9, 45],
    [7, 25, 36, 15, 37, 80, 64, 60, 12, 72, 20, 87, 11, 40, 59, 39, 55, 32, 31, 67, 43, 27, 33, 1, 83, 81, 16, 23, 46, 38, 14, 28, 91, 99, 3, 35, 51, 21, 41, 92],
    [67, 9, 51, 62, 22, 93, 45, 56, 35, 16, 64, 3, 72, 36, 37, 1, 84, 40, 18, 81, 25, 90, 97, 4, 20, 48, 54, 42, 27, 21, 33, 2, 53, 5, 52, 24, 60, 59, 10, 47],
    [47, 7, 66, 1, 19, 59, 79, 86, 64, 76, 60, 86, 77, 3, 83, 12, 49, 33, 54, 67, 34, 32, 27, 38, 22, 40, 13, 99, 16, 82, 39, 84, 92, 53, 65, 28, 58, 50, 62, 95],
    [11, 78, 74, 46, 59, 70, 6, 22, 66, 35, 62, 60, 21, 25, 23, 64, 13, 38, 81, 19, 5, 55, 7, 98, 29, 42, 47, 86, 92, 12, 54, 67, 85, 20, 73, 89, 9, 99, 3, 49],
    [73, 13, 7, 95, 40, 91, 9, 36, 86, 37, 3, 57, 89, 49, 8, 2, 55, 85, 99, 51, 30, 10, 19, 67, 86, 84, 39, 5, 18, 32, 92, 50, 47, 16, 33, 83, 48, 97, 64, 94],
    [60, 81, 1, 80, 40, 92, 53, 27, 87, 62, 48, 59, 65, 54, 51, 8, 39, 72, 86, 37, 26, 52, 49, 86, 98, 6, 66, 61, 47, 50, 88, 29, 76, 25, 71, 32, 57, 45, 96, 22],
    [94, 38, 40, 54, 81, 30, 17, 16, 18, 31, 62, 2, 78, 95, 3, 15, 41, 55, 42, 39, 56, 74, 52, 37, 85, 5, 91, 11, 21, 63, 12, 92, 7, 32, 99, 25, 59, 67, 80, 96],
    [96, 33, 24, 27, 11, 63, 81, 30, 84, 21, 66, 86, 97, 44, 12, 19, 45, 76, 29, 77, 53, 61, 50, 5, 42, 20, 36, 2, 89, 25, 68, 49, 4, 90, 37, 55, 70, 31, 88, 57],
    [55, 89, 19, 3, 51, 84, 24, 16, 98, 68, 76, 93, 23, 46, 85, 77, 13, 81, 25, 22, 61, 47, 34, 29, 54, 48, 92, 37, 35, 87, 60, 30, 8, 91, 80, 39, 52, 36, 86, 86]
];
